/* ==============================
   MOBILE NAVIGATION & OVERLAY
============================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navOverlay = document.getElementById("navOverlay");

function toggleMenu(open) {
    const isOpen = open !== undefined ? open : navMenu.classList.contains("active");
    const shouldOpen = !isOpen;

    navMenu.classList.toggle("active", shouldOpen);
    menuToggle.classList.toggle("active", shouldOpen);
    if (navOverlay) navOverlay.classList.toggle("active", shouldOpen);
    menuToggle.setAttribute("aria-expanded", shouldOpen);
}

if (menuToggle) {
    menuToggle.addEventListener("click", () => toggleMenu());
}

if (navOverlay) {
    navOverlay.addEventListener("click", () => toggleMenu(false));
}

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        toggleMenu(false);
    });
});

/* ==============================
   NAVBAR SCROLL EFFECT & ACTIVE SECTION
============================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Active menu link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a[href^='#']");

function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

window.addEventListener("scroll", highlightNavOnScroll);

/* ==============================
   COUNTDOWN TIMER
============================== */

const weddingDate = new Date("October 24, 2026 14:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    if (difference <= 0) {
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ==============================
   RSVP FORM VALIDATION & STORAGE
============================== */

const rsvpForm = document.getElementById("rsvpForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const attendanceInput = document.getElementById("attendance");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const attendanceError = document.getElementById("attendanceError");
const successMessage = document.getElementById("successMessage");

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (rsvpForm) {
    rsvpForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let valid = true;

        nameError.textContent = "";
        emailError.textContent = "";
        attendanceError.textContent = "";

        nameInput.classList.remove("input-error");
        emailInput.classList.remove("input-error");
        attendanceInput.classList.remove("input-error");

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Please enter your full name.";
            nameInput.classList.add("input-error");
            valid = false;
        }

        if (emailInput.value.trim() === "" || !validateEmail(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            emailInput.classList.add("input-error");
            valid = false;
        }

        if (attendanceInput.value === "") {
            attendanceError.textContent = "Please select your attendance.";
            attendanceInput.classList.add("input-error");
            valid = false;
        }

        if (!valid) {
            return;
        }

        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            attendance: attendanceInput.value,
            guests: document.getElementById("guests") ? document.getElementById("guests").value : "1",
            dietary: document.getElementById("dietary") ? document.getElementById("dietary").value.trim() : "",
            message: document.getElementById("message") ? document.getElementById("message").value.trim() : "",
            submittedAt: new Date().toISOString()
        };

        const existingRSVPs = JSON.parse(localStorage.getItem("weddingRSVPs")) || [];
        existingRSVPs.push(formData);
        localStorage.setItem("weddingRSVPs", JSON.stringify(existingRSVPs));

        successMessage.classList.add("show");
        rsvpForm.reset();

        setTimeout(() => {
            successMessage.classList.remove("show");
        }, 7000);
    });
}

/* ==============================
   GALLERY LIGHTBOX WITH SLIDER
============================== */

const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let currentGalleryIndex = 0;

function showGalleryImage(index) {
    if (galleryItems.length === 0) return;

    if (index < 0) {
        currentGalleryIndex = galleryItems.length - 1;
    } else if (index >= galleryItems.length) {
        currentGalleryIndex = 0;
    } else {
        currentGalleryIndex = index;
    }

    const currentItem = galleryItems[currentGalleryIndex];
    const imageSrc = currentItem.getAttribute("data-image");
    const captionText = currentItem.getAttribute("data-caption") || "";

    lightboxImage.src = imageSrc;
    if (lightboxCaption) {
        lightboxCaption.textContent = captionText;
    }
}

galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        showGalleryImage(index);
        lightbox.classList.add("show");
        lightbox.setAttribute("aria-hidden", "false");
    });
});

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("show");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    if (lightboxCaption) lightboxCaption.textContent = "";
}

if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener("click", event => {
        event.stopPropagation();
        showGalleryImage(currentGalleryIndex - 1);
    });
}

if (lightboxNext) {
    lightboxNext.addEventListener("click", event => {
        event.stopPropagation();
        showGalleryImage(currentGalleryIndex + 1);
    });
}

if (lightbox) {
    lightbox.addEventListener("click", event => {
        if (event.target === lightbox || event.target.classList.contains("lightbox-content")) {
            closeLightbox();
        }
    });
}

document.addEventListener("keydown", event => {
    if (!lightbox || !lightbox.classList.contains("show")) return;

    if (event.key === "Escape") {
        closeLightbox();
    } else if (event.key === "ArrowLeft") {
        showGalleryImage(currentGalleryIndex - 1);
    } else if (event.key === "ArrowRight") {
        showGalleryImage(currentGalleryIndex + 1);
    }
});
