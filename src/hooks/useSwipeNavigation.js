import { useEffect, useRef, useState, useCallback } from "react";

const SWIPE_THRESHOLD = 60;

/**
 * Swipe-based full-page navigation.
 * - Swipe left  -> next section
 * - Swipe right -> previous section
 * - Arrow keys  -> replicate swipe behavior
 * On change, smooth-scrolls the section into view.
 */
export default function useSwipeNavigation(sections = []) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const lockRef = useRef(false);

  const goTo = useCallback(
    (next) => {
      if (next < 0 || next >= sections.length) return;
      setIndex(next);
      const el = document.getElementById(sections[next]);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [sections]
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    function onTouchStart(e) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    }

    function onTouchEnd(e) {
      if (lockRef.current) return;
      if (touchStartX.current === null || touchStartY.current === null) return;

      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const dy = e.changedTouches[0].clientY - touchStartY.current;

      // Only register near-horizontal swipes (avoid hijacking scroll).
      if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
        lockRef.current = true;
        if (dx < 0) goTo(index + 1);
        else goTo(index - 1);
        setTimeout(() => {
          lockRef.current = false;
        }, 700);
      }

      touchStartX.current = null;
      touchStartY.current = null;
    }

    function onKeyDown(e) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(index - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(index + 1);
      }
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index, goTo]);

  // Keep index in sync if a section is clicked in the navbar.
  useEffect(() => {
    function onScroll() {
      let current = index;
      let minDistance = Infinity;
      sections.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const distance = Math.abs(el.getBoundingClientRect().top);
        if (distance < minDistance) {
          minDistance = distance;
          current = i;
        }
      });
      if (current !== index) setIndex(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [index, sections]);

  return { index, goNext, goPrev };
}