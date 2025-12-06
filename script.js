// Initialize Lucide Icons
lucide.createIcons();

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-dark-bg/95', 'shadow-lg');
        navbar.classList.remove('bg-dark-bg/0');
        duration: 0.8,
            ease: "power3.out"
    })
    .from("h1", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    }, "-=0.6")
    .from("p", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.8")
    .from(".hero-content .flex a", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
    }, "-=0.6")
    .from(".hero-content .mt-12 a", {
        y: 10,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
    }, "-=0.4");

// Section Headers
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
});

// Education Items
gsap.from(".edu-item", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});

// Experience Cards
gsap.from(".experience-col .card-hover", {
    scrollTrigger: {
        trigger: ".experience-col",
        start: "top 70%",
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});

// Skills Cards
gsap.from(".skill-card", {
    scrollTrigger: {
        trigger: "#skills",
        start: "top 75%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.2)"
});

// Projects (Alternating slides)
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
        },
        x: i % 2 === 0 ? -100 : 100, // Slide from left for even, right for odd (logic checked visually)
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});
});
