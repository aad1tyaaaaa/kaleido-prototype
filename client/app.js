document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('login-container');
    const formInputs = loginContainer.querySelectorAll('input, button');
    
    // GSAP Timeline for page load animations
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    
    // Animate the main login container
    tl.to(loginContainer, {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.5
    });

    // Animate individual elements (buttons, inputs)
    tl.from(loginContainer.children, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
    }, "-=0.8");

    // Add hover effect to buttons
    const buttons = loginContainer.querySelectorAll('button');
    buttons.forEach(button => {
        gsap.to(button, {
            scale: 1.05,
            duration: 0.2,
            paused: true,
            ease: "power1.out"
        });
        button.addEventListener('mouseenter', () => gsap.to(button, { scale: 1.05 }));
        button.addEventListener('mouseleave', () => gsap.to(button, { scale: 1 }));
    });

    // Form handling
    const phoneForm = document.getElementById('phone-login-form');
    phoneForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const phoneNumber = document.getElementById('phone-number').value;
        console.log("Phone number submitted:", phoneNumber);
        alert(`Requesting login for ${phoneNumber}. This would trigger a backend process to send a verification code.`);
        // In a real application, you would send this to your backend for processing.
    });
});