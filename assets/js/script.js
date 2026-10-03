$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

/* =========================================================
   SMOOTH SCROLL
   FIXED NAVBAR OFFSET
========================================================= */

$('a[href*="#"]:not(.work-thumbnail):not(.video-trigger)').on('click', function (e) {

    const target = $(this).attr('href');

    if (!target || target === '#') {
        return;
    }

    const targetElement = $(target);

    if (!targetElement.length) {
        return;
    }

    e.preventDefault();

    const headerHeight = $('header').outerHeight() || 0;

    // Extra breathing room below the fixed navbar
    const extraSpacing = 20;

    const targetPosition =
        targetElement.offset().top
        - headerHeight
        - extraSpacing;

    $('html, body').animate({
        scrollTop: targetPosition
    }, 500, 'linear');

});

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Yoga Pradika";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });

   /* =========================================================
   SELECTED WORK SLIDER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById("workSlider");
    const prevButton = document.querySelector(".work-arrow-prev");
    const nextButton = document.querySelector(".work-arrow-next");

    if (!slider || !prevButton || !nextButton) {
        return;
    }


    /* -----------------------------------------
       GET ONE CARD SCROLL DISTANCE
    ----------------------------------------- */

    function getScrollAmount() {

        const card = slider.querySelector(".work-card");

        if (!card) {
            return 0;
        }

        const gap =
            parseFloat(window.getComputedStyle(slider).gap) || 0;

        return card.offsetWidth + gap;
    }


    /* -----------------------------------------
       UPDATE ARROW STATE
    ----------------------------------------- */

    function updateArrowState() {

        const maxScroll =
            slider.scrollWidth - slider.clientWidth;

        const currentScroll = slider.scrollLeft;

        // LEFT ARROW
        if (currentScroll <= 5) {

            prevButton.disabled = true;

        } else {

            prevButton.disabled = false;

        }


        // RIGHT ARROW
        if (currentScroll >= maxScroll - 5) {

            nextButton.disabled = true;

        } else {

            nextButton.disabled = false;

        }

    }


    /* -----------------------------------------
       PREVIOUS
    ----------------------------------------- */

    prevButton.addEventListener("click", function () {

        slider.scrollBy({

            left: -getScrollAmount(),

            behavior: "smooth"

        });

    });


    /* -----------------------------------------
       NEXT
    ----------------------------------------- */

    nextButton.addEventListener("click", function () {

        slider.scrollBy({

            left: getScrollAmount(),

            behavior: "smooth"

        });

    });


    /* -----------------------------------------
       UPDATE WHILE SCROLLING
    ----------------------------------------- */

    slider.addEventListener("scroll", function () {

        updateArrowState();

    });


    /* -----------------------------------------
       UPDATE AFTER RESIZE
    ----------------------------------------- */

    window.addEventListener("resize", function () {

        updateArrowState();

    });


    /* -----------------------------------------
       INITIAL STATE
    ----------------------------------------- */

    updateArrowState();

});

/* =========================================================
   TYPED JS — SAFE INITIALIZATION
========================================================= */

const typingTarget = document.querySelector(".typing-text");

if (
    typingTarget &&
    typeof Typed !== "undefined"
) {
    new Typed(typingTarget, {
        strings: [
            "Videography",
            "Video Editing",
            "Filmmaking",
            "Visual Storytelling"
        ],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500
    });
}
// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat


/* =========================================================
   ANIMATION PASS — V1
   Clean, subtle, cinematic
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof ScrollReveal === "undefined") {
        console.warn("ScrollReveal is not loaded.");
        return;
    }

    const reveal = ScrollReveal({
        distance: "32px",
        duration: 750,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        opacity: 0,
        scale: 0.985,
        reset: false,
        mobile: true,
        cleanup: true,
        viewFactor: 0.12
    });


    /* =====================================================
       HOME
    ===================================================== */

    reveal.reveal(".home .eyebrow", {
        origin: "bottom",
        delay: 100
    });

    reveal.reveal(".home .content h2", {
        origin: "bottom",
        delay: 180
    });

    reveal.reveal(".home .content h3", {
        origin: "bottom",
        delay: 260
    });

    reveal.reveal(".home .content .intro", {
        origin: "bottom",
        delay: 330
    });

    reveal.reveal(".home .hero-buttons", {
        origin: "bottom",
        delay: 410
    });

    reveal.reveal(".home .socials", {
        origin: "bottom",
        delay: 490
    });

    reveal.reveal(".home .image", {
        origin: "right",
        distance: "45px",
        delay: 180,
        scale: 0.98
    });


    /* =====================================================
       SECTION HEADERS
    ===================================================== */

    reveal.reveal(
        ".about-heading, .clients-heading, .work-header, .grading-header, .visuals-header, .experience-modern-header, .education-modern-header, .contact-modern-header",
        {
            origin: "bottom",
            distance: "24px",
            duration: 650,
            interval: 80
        }
    );


    /* =====================================================
       ABOUT
    ===================================================== */

    reveal.reveal(".about-photo", {
        origin: "left",
        delay: 100,
        distance: "35px"
    });

    reveal.reveal(".about-story", {
        origin: "bottom",
        delay: 180
    });

    reveal.reveal(".about-capabilities", {
        origin: "right",
        delay: 240
    });


    /* =====================================================
       CLIENTS
    ===================================================== */

    reveal.reveal(".client-logo", {
        origin: "bottom",
        distance: "18px",
        duration: 550,
        interval: 80
    });


   /* =====================================================
   SELECTED WORK
===================================================== */

reveal.reveal(".work-slider-wrapper", {
    origin: "bottom",
    distance: "24px",
    duration: 700
});


/* =====================================================
   COLOR GRADING
===================================================== */

reveal.reveal(".grading-slider-wrapper", {
    origin: "bottom",
    distance: "24px",
    duration: 700
});


    /* =====================================================
       SELECTED VISUALS
    ===================================================== */

    reveal.reveal(".visuals-shortform", {
        origin: "left",
        distance: "35px",
        delay: 100
    });

    reveal.reveal(".visuals-right", {
        origin: "bottom",
        distance: "30px",
        delay: 180
    });

    reveal.reveal(".visuals-featured", {
        origin: "right",
        distance: "35px",
        delay: 260
    });


    /* =====================================================
       EXPERIENCE
    ===================================================== */

    reveal.reveal(".experience-item", {
        origin: "bottom",
        distance: "22px",
        duration: 600,
        interval: 120
    });


    /* =====================================================
       EDUCATION
    ===================================================== */

    reveal.reveal(".education-card", {
        origin: "bottom",
        distance: "28px",
        delay: 120
    });


    /* =====================================================
       CONTACT
    ===================================================== */

    reveal.reveal(".contact-main", {
        origin: "left",
        distance: "30px"
    });

    reveal.reveal(".contact-details", {
        origin: "bottom",
        distance: "25px",
        delay: 150
    });


    /* =====================================================
       FOOTER
    ===================================================== */

    reveal.reveal(".modern-footer", {
        origin: "bottom",
        distance: "20px",
        duration: 650
    });

});

/* =========================================================
   SELECTED WORK - VIDEO MODAL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const videoModal = document.getElementById("videoModal");
    const videoPlayer = document.getElementById("videoPlayer");
    const videoModalTitle = document.getElementById("videoModalTitle");
    const videoModalClose = document.getElementById("videoModalClose");
    const videoModalBackdrop = document.querySelector(".video-modal-backdrop");

    if (!videoModal || !videoPlayer || !videoModalTitle || !videoModalClose) {
        console.warn("Video modal elements not found.");
        return;
    }

    const videoTriggers = document.querySelectorAll(
        "#workSlider .video-trigger"
    );

    console.log("Video triggers found:", videoTriggers.length);


    /* =====================================================
       OPEN MODAL
    ===================================================== */

    videoTriggers.forEach(function (trigger) {

        trigger.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const videoUrl = this.getAttribute("data-video");
            const videoTitle = this.getAttribute("data-title") || "Portfolio Video";

            console.log("Clicked video:", videoTitle);
            console.log("Video URL:", videoUrl);

            if (!videoUrl || videoUrl.trim() === "") {
                console.warn("No video URL available for:", videoTitle);
                return;
            }

            videoPlayer.src = videoUrl;
            videoModalTitle.textContent = videoTitle;

            videoModal.classList.add("active");
            document.body.classList.add("modal-open");

        });

    });


    /* =====================================================
       CLOSE MODAL
    ===================================================== */

    function closeVideoModal() {

        videoModal.classList.remove("active");
        document.body.classList.remove("modal-open");

        videoPlayer.src = "";

    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    videoModalClose.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        closeVideoModal();

    });


    /* =====================================================
       CLOSE BACKDROP
    ===================================================== */

    if (videoModalBackdrop) {

        videoModalBackdrop.addEventListener("click", function () {

            closeVideoModal();

        });

    }


    /* =====================================================
       ESC
    ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            videoModal.classList.contains("active")
        ) {
            closeVideoModal();
        }

    });

});

/* =========================================================
   COLOR GRADING — BEFORE / AFTER DRAG
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const comparisons =
        document.querySelectorAll(".grading-compare");

    comparisons.forEach(function (comparison) {

        let isDragging = false;


        function getClientX(event) {

            if (event.touches && event.touches.length) {
                return event.touches[0].clientX;
            }

            if (event.changedTouches && event.changedTouches.length) {
                return event.changedTouches[0].clientX;
            }

            return event.clientX;
        }


        function updatePosition(clientX) {

            const rect =
                comparison.getBoundingClientRect();

            let position =
                ((clientX - rect.left) / rect.width) * 100;

            position =
                Math.max(0, Math.min(100, position));

            comparison.style.setProperty(
                "--compare-position",
                position + "%"
            );
        }


        function startDrag(event) {

            isDragging = true;

            comparison.classList.add("is-dragging");

            updatePosition(
                getClientX(event)
            );

            event.preventDefault();
        }


        function moveDrag(event) {

            if (!isDragging) {
                return;
            }

            updatePosition(
                getClientX(event)
            );

            event.preventDefault();
        }


        function stopDrag() {

            isDragging = false;

            comparison.classList.remove("is-dragging");
        }


        comparison.addEventListener(
            "pointerdown",
            startDrag
        );

        window.addEventListener(
            "pointermove",
            moveDrag,
            { passive: false }
        );

        window.addEventListener(
            "pointerup",
            stopDrag
        );

        window.addEventListener(
            "pointercancel",
            stopDrag
        );


        /* Initial position */

        comparison.style.setProperty(
            "--compare-position",
            "50%"
        );

    });

});

/* =========================================================
   COLOR GRADING — HORIZONTAL SLIDER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById("gradingSlider");
    const prevButton = document.querySelector(".grading-arrow-prev");
    const nextButton = document.querySelector(".grading-arrow-next");

    if (!slider || !prevButton || !nextButton) {
        return;
    }


    function getScrollAmount() {

        const card = slider.querySelector(".grading-card");

        if (!card) {
            return 0;
        }

        const gap =
            parseFloat(
                window.getComputedStyle(slider).gap
            ) || 0;

        return card.offsetWidth + gap;
    }


    function updateArrowState() {

        const maxScroll =
            slider.scrollWidth - slider.clientWidth;

        const currentScroll =
            slider.scrollLeft;

        prevButton.disabled =
            currentScroll <= 5;

        nextButton.disabled =
            currentScroll >= maxScroll - 5;
    }


    /* PREVIOUS */

    prevButton.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        slider.scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth"
        });

    });


    /* NEXT */

    nextButton.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        slider.scrollBy({
            left: getScrollAmount(),
            behavior: "smooth"
        });

    });


    /* UPDATE */

    slider.addEventListener(
        "scroll",
        updateArrowState
    );

    window.addEventListener(
        "resize",
        updateArrowState
    );


    /* INITIAL */

    updateArrowState();

});

/* =========================================================
   SELECTED VISUALS — THREE CAROUSELS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    function setupVisualCarousel(trackId, carouselSelector) {

        const track =
            document.getElementById(trackId);

        const carousel =
            document.querySelector(carouselSelector);

        if (!track || !carousel) {
            return;
        }


        const prevButton =
            carousel.querySelector(".visual-arrow-prev");

        const nextButton =
            carousel.querySelector(".visual-arrow-next");


        if (!prevButton || !nextButton) {
            return;
        }


        function getScrollAmount() {

            const firstItem =
                track.firstElementChild;

            if (!firstItem) {
                return 0;
            }

            const gap =
                parseFloat(
                    window.getComputedStyle(track).gap
                ) || 0;

            return firstItem.offsetWidth + gap;
        }


        function updateArrowState() {

            const maxScroll =
                track.scrollWidth - track.clientWidth;

            const currentScroll =
                track.scrollLeft;


            prevButton.disabled =
                currentScroll <= 5;

            nextButton.disabled =
                currentScroll >= maxScroll - 5;

        }


        prevButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                track.scrollBy({
                    left: -getScrollAmount(),
                    behavior: "smooth"
                });

            }
        );


        nextButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                track.scrollBy({
                    left: getScrollAmount(),
                    behavior: "smooth"
                });

            }
        );


        track.addEventListener(
            "scroll",
            updateArrowState
        );


        window.addEventListener(
            "resize",
            updateArrowState
        );


        updateArrowState();

    }


    /*
     * SHORT-FORM VIDEO
     */

    setupVisualCarousel(
        "shortformTrack",
        ".shortform-carousel"
    );


    /*
     * VISUAL DESIGN
     */

    setupVisualCarousel(
        "posterTrack",
        ".poster-carousel"
    );


    /*
     * VISUAL CAMPAIGN
     */

    setupVisualCarousel(
        "campaignTrack",
        ".campaign-carousel"
    );

});

/* =========================================================
   05 SELECTED VISUALS
   - Layered short-form carousel
   - Poster carousel
   - Campaign carousel
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       SHORT-FORM — LAYERED CAROUSEL
    ====================================================== */

    const shortformItems =
        document.querySelectorAll(".shortform-item");

    const shortformPrev =
        document.querySelector(".shortform-prev");

    const shortformNext =
        document.querySelector(".shortform-next");

    const shortformTitle =
        document.getElementById("shortformTitle");

    const shortformCategory =
        document.getElementById("shortformCategory");

    const shortformCounter =
        document.querySelector(".shortform-counter");


    const shortformData = [
        {
            title: "Collaboration Kahf × HIMAFISI",
            category: "TikTok Collaboration",
            number: "01 / 03"
        },
        {
            title: "Behind The Scene Recap — short film“Suwung”",
            category: "Behind the Scenes",
            number: "02 / 03"
        },
        {
            title: "Recap Event Bizarre",
            category: "Client Social Content",
            number: "03 / 03"
        }
    ];


    let shortformIndex = 1;


    function updateShortform() {

        const total =
            shortformItems.length;


        if (!total) {
            return;
        }


        shortformItems.forEach(
            function (item, index) {

                item.classList.remove(
                    "is-active",
                    "is-left",
                    "is-right"
                );


                let diff =
                    (index - shortformIndex + total)
                    % total;


                if (diff === 0) {

                    item.classList.add(
                        "is-active"
                    );

                } else if (diff === 1) {

                    item.classList.add(
                        "is-right"
                    );

                } else if (diff === total - 1) {

                    item.classList.add(
                        "is-left"
                    );

                }

            }
        );


        const current =
            shortformData[
                shortformIndex
            ];


        if (current) {

            if (shortformTitle) {
                shortformTitle.textContent =
                    current.title;
            }

            if (shortformCategory) {
                shortformCategory.textContent =
                    current.category;
            }

            if (shortformCounter) {
                shortformCounter.textContent =
                    current.number;
            }

        }


        /*
         * With 3 items, every state always has:
         * left / active / right.
         */

    }


    if (
        shortformItems.length &&
        shortformPrev &&
        shortformNext
    ) {

        shortformPrev.addEventListener(
            "click",
            function () {

                shortformIndex =
                    (
                        shortformIndex - 1 +
                        shortformItems.length
                    )
                    %
                    shortformItems.length;

                updateShortform();

            }
        );


        shortformNext.addEventListener(
            "click",
            function () {

                shortformIndex =
                    (
                        shortformIndex + 1
                    )
                    %
                    shortformItems.length;

                updateShortform();

            }
        );


        updateShortform();

    }


    /* =====================================================
       GENERIC HORIZONTAL CAROUSEL
    ====================================================== */

    function setupCarousel(
        trackId,
        carouselSelector,
        prevSelector,
        nextSelector
    ) {

        const track =
            document.getElementById(trackId);

        const carousel =
            document.querySelector(
                carouselSelector
            );

        if (!track || !carousel) {
            return;
        }


        const prevButton =
            carousel.querySelector(
                prevSelector
            );

        const nextButton =
            carousel.querySelector(
                nextSelector
            );


        if (!prevButton || !nextButton) {
            return;
        }


        function getAmount() {

            const item =
                track.firstElementChild;

            if (!item) {
                return 0;
            }


            const gap =
                parseFloat(
                    window.getComputedStyle(
                        track
                    ).gap
                ) || 0;


            return item.offsetWidth + gap;

        }


        function updateState() {

            const maxScroll =
                track.scrollWidth -
                track.clientWidth;

            const currentScroll =
                track.scrollLeft;


            prevButton.disabled =
                currentScroll <= 5;

            nextButton.disabled =
                currentScroll >=
                maxScroll - 5;

        }


        prevButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                track.scrollBy({
                    left: -getAmount(),
                    behavior: "smooth"
                });

            }
        );


        nextButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                track.scrollBy({
                    left: getAmount(),
                    behavior: "smooth"
                });

            }
        );


        track.addEventListener(
            "scroll",
            updateState
        );


        window.addEventListener(
            "resize",
            updateState
        );


        updateState();

    }


    /* POSTER */

    setupCarousel(
        "posterTrack",
        ".poster-carousel",
        ".poster-prev",
        ".poster-next"
    );


    /* CAMPAIGN */

    setupCarousel(
        "campaignTrack",
        ".campaign-carousel",
        ".campaign-prev",
        ".campaign-next"
    );


});

/* =========================================================
   SELECTED VISUALS — CAMPAIGN CAROUSEL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const campaignCarousel =
        document.querySelector(".campaign-carousel");

    if (!campaignCarousel) {
        return;
    }

    const campaignTrack =
        campaignCarousel.querySelector(".campaign-track");

    const campaignPrev =
        campaignCarousel.querySelector(".campaign-prev");

    const campaignNext =
        campaignCarousel.querySelector(".campaign-next");


    if (!campaignTrack || !campaignPrev || !campaignNext) {
        return;
    }


    function getScrollAmount() {

        const card =
            campaignTrack.querySelector(".campaign-card");

        if (!card) {
            return 0;
        }

        const gap =
            parseFloat(
                window.getComputedStyle(campaignTrack).gap
            ) || 0;

        return card.offsetWidth + gap;
    }


    function updateCampaignButtons() {

        const maxScroll =
            campaignTrack.scrollWidth -
            campaignTrack.clientWidth;

        const currentScroll =
            campaignTrack.scrollLeft;


        campaignPrev.disabled =
            currentScroll <= 5;

        campaignNext.disabled =
            currentScroll >= maxScroll - 5;
    }


    campaignPrev.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            campaignTrack.scrollBy({
                left: -getScrollAmount(),
                behavior: "smooth"
            });

        }
    );


    campaignNext.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            campaignTrack.scrollBy({
                left: getScrollAmount(),
                behavior: "smooth"
            });

        }
    );


    campaignTrack.addEventListener(
        "scroll",
        updateCampaignButtons
    );


    window.addEventListener(
        "resize",
        updateCampaignButtons
    );


    updateCampaignButtons();

});

/* =========================================================
   SELECTED VISUALS — SHORT-FORM CAROUSEL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const stage = document.querySelector(".shortform-stage");
    const items = document.querySelectorAll(".shortform-item");

    const prevButton = document.querySelector(".shortform-prev");
    const nextButton = document.querySelector(".shortform-next");

    const counter = document.querySelector(".shortform-counter");
    const title = document.getElementById("shortformTitle");
    const category = document.getElementById("shortformCategory");


    if (
        !stage ||
        items.length === 0 ||
        !prevButton ||
        !nextButton
    ) {
        return;
    }


    /* -------------------------------------------------------
       DATA
    ------------------------------------------------------- */

    const shortformData = [
        {
            title: "Collaboration Kahf × HIMAFISI",
            category: "TikTok Collaboration"
        },
        {
            title: "Behind The Scene Recap — Short Film “Suwung”",
            category: "Behind the Scenes"
        },
        {
            title: "Recap Event Bizarre",
            category: "Client Social Content"
        }
    ];


    let currentIndex = 1;


    /* -------------------------------------------------------
       UPDATE VISUAL STATE
    ------------------------------------------------------- */

    function updateShortform() {

        items.forEach(function (item, index) {

            item.classList.remove(
                "is-left",
                "is-active",
                "is-right"
            );


            if (index === currentIndex) {

                item.classList.add("is-active");

            } else if (
                index ===
                (currentIndex - 1 + items.length) % items.length
            ) {

                item.classList.add("is-left");

            } else if (
                index ===
                (currentIndex + 1) % items.length
            ) {

                item.classList.add("is-right");

            }

        });


        /* Counter */

        if (counter) {

            counter.textContent =
                `${String(currentIndex + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;

        }


        /* Text */

        if (title && shortformData[currentIndex]) {

            title.textContent =
                shortformData[currentIndex].title;

        }

        if (category && shortformData[currentIndex]) {

            category.textContent =
                shortformData[currentIndex].category;

        }


        /* Arrow state */

        prevButton.disabled =
            currentIndex === 0;

        nextButton.disabled =
            currentIndex === items.length - 1;

    }


    /* -------------------------------------------------------
       NEXT
    ------------------------------------------------------- */

    nextButton.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        if (currentIndex >= items.length - 1) {
            return;
        }

        currentIndex++;

        updateShortform();

    });


    /* -------------------------------------------------------
       PREVIOUS
    ------------------------------------------------------- */

    prevButton.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        if (currentIndex <= 0) {
            return;
        }

        currentIndex--;

        updateShortform();

    });


    /* -------------------------------------------------------
       INITIAL STATE
    ------------------------------------------------------- */

    updateShortform();

});

/* =========================================================
   POSTER PREVIEW MODAL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const posterModal =
        document.getElementById("posterModal");

    const posterModalImage =
        document.getElementById("posterModalImage");

    const posterModalClose =
        document.getElementById("posterModalClose");

    const posterModalBackdrop =
        document.querySelector(
            ".poster-modal-backdrop"
        );

    const posterCards =
        document.querySelectorAll(".poster-card");


    if (
        !posterModal ||
        !posterModalImage ||
        !posterModalClose
    ) {
        return;
    }


    /* =====================================================
       OPEN
    ===================================================== */

    posterCards.forEach(function (poster) {

        poster.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const image =
                poster.querySelector("img");

            if (!image) {
                return;
            }


            posterModalImage.src =
                image.src;

            posterModalImage.alt =
                image.alt || "Poster Preview";


            posterModal.classList.add("active");

            document.body.classList.add(
                "poster-modal-open"
            );

        });

    });


    /* =====================================================
       CLOSE
    ===================================================== */

    function closePosterModal() {

        posterModal.classList.remove("active");

        document.body.classList.remove(
            "poster-modal-open"
        );

        posterModalImage.src = "";

    }


    posterModalClose.addEventListener(
        "click",
        closePosterModal
    );


    if (posterModalBackdrop) {

        posterModalBackdrop.addEventListener(
            "click",
            closePosterModal
        );

    }


    /* =====================================================
       ESC
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                posterModal.classList.contains("active")
            ) {

                closePosterModal();

            }

        }
    );

});

/* =========================================================
   CAMPAIGN PREVIEW MODAL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const campaignModal =
        document.getElementById("campaignModal");

    const campaignModalImage =
        document.getElementById("campaignModalImage");

    const campaignModalClose =
        document.getElementById("campaignModalClose");

    const campaignModalBackdrop =
        document.querySelector(
            ".campaign-modal-backdrop"
        );

    const campaignCards =
        document.querySelectorAll(".campaign-card");


    if (
        !campaignModal ||
        !campaignModalImage ||
        !campaignModalClose
    ) {
        return;
    }


    /* =====================================================
       OPEN
    ===================================================== */

    campaignCards.forEach(function (campaign) {

        campaign.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const image =
                campaign.querySelector("img");

            if (!image) {
                return;
            }

            campaignModalImage.src =
                image.src;

            campaignModalImage.alt =
                image.alt || "Campaign Preview";


            campaignModal.classList.add("active");

            document.body.classList.add(
                "campaign-modal-open"
            );

        });

    });


    /* =====================================================
       CLOSE
    ===================================================== */

    function closeCampaignModal() {

        campaignModal.classList.remove("active");

        document.body.classList.remove(
            "campaign-modal-open"
        );

        campaignModalImage.src = "";

    }


    campaignModalClose.addEventListener(
        "click",
        closeCampaignModal
    );


    if (campaignModalBackdrop) {

        campaignModalBackdrop.addEventListener(
            "click",
            closeCampaignModal
        );

    }


    /* =====================================================
       ESC
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                campaignModal.classList.contains("active")
            ) {

                closeCampaignModal();

            }

        }
    );

});

/* =========================================================
   ANIMATION PASS V4
   CINEMATIC SECTION CHOREOGRAPHY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const sectionHeaders = document.querySelectorAll(
        ".about-heading, " +
        ".clients-heading, " +
        ".work-header, " +
        ".grading-header, " +
        ".visuals-header, " +
        ".experience-modern-header, " +
        ".education-modern-header, " +
        ".contact-modern-header"
    );

    if (!sectionHeaders.length) {
        return;
    }

    const observer = new IntersectionObserver(
        function (entries, obs) {

            entries.forEach(function (entry) {

                if (!entry.isIntersecting) {
                    return;
                }

                const header = entry.target;

                const line =
                    header.querySelector(".heading-line");

                const number =
                    header.querySelector(".section-number");

                /* NUMBER FIRST */

                if (number) {

                    setTimeout(function () {

                        number.classList.add("v4-visible");

                    }, 50);

                }


                /* LINE SECOND */

                if (line) {

                    setTimeout(function () {

                        line.classList.add("v4-visible");

                    }, 180);

                }


                /*
                 * Trigger once only.
                 */

                obs.unobserve(header);

            });

        },
        {
            threshold: 0.35
        }
    );


    sectionHeaders.forEach(function (header) {

        observer.observe(header);

    });

});

/* =========================================================
   FOOTER REVEAL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof ScrollReveal === "undefined") {
        return;
    }

    const footerReveal = ScrollReveal({
        distance: "18px",
        duration: 700,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        opacity: 0,
        scale: 0.99,
        reset: false,
        mobile: true,
        cleanup: true,
        viewFactor: 0.15
    });

    footerReveal.reveal(".footer-brand", {
        origin: "left",
        delay: 100
    });

    footerReveal.reveal(".footer-navigation", {
        origin: "bottom",
        delay: 180
    });

    footerReveal.reveal(".footer-socials", {
        origin: "right",
        delay: 240
    });

    footerReveal.reveal(".footer-bottom", {
        origin: "bottom",
        delay: 320
    });

});

/* =========================================================
   ANIMATION PASS V5 / V6
   CINEMATIC SCROLL CONTROLLER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector("header");

    if (!header) {
        return;
    }

    let ticking = false;


    function updateScrollState() {

        const scrollTop =
            window.scrollY || window.pageYOffset;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;


        /* -----------------------------------------
           HEADER DEPTH
        ----------------------------------------- */

        if (scrollTop > 40) {

            header.classList.add("v6-scrolled");

        } else {

            header.classList.remove("v6-scrolled");

        }


        /* -----------------------------------------
           SCROLL PROGRESS
        ----------------------------------------- */

        if (documentHeight > 0) {

            const progress =
                (scrollTop / documentHeight) * 100;

            header.style.setProperty(
                "--scroll-progress",
                `${Math.min(progress, 100)}%`
            );

        } else {

            header.style.setProperty(
                "--scroll-progress",
                "0%"
            );

        }


        ticking = false;
    }


    function requestScrollUpdate() {

        if (ticking) {
            return;
        }

        window.requestAnimationFrame(
            updateScrollState
        );

        ticking = true;
    }


    window.addEventListener(
        "scroll",
        requestScrollUpdate,
        { passive: true }
    );


    window.addEventListener(
        "resize",
        updateScrollState
    );


    updateScrollState();

});
