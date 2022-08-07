let tl = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }    
});

tl.from(".intro-image", {
    opacity: 0,
    duration: 1.8,
    x: 800
})
    .from(".intro-text", {
        opacity: 0,
        duration: 1,
        y: 300
    }, "-=1.4")