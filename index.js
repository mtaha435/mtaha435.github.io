//greeting fade in/out with letter-by-letter animation
const greetings = ["Hello", "مرحبا", "Hola", "Bonjour", "Ciao"]
let i = 0;
const textElement = document.getElementById("hello_text");

function animateLetters(text, fontSize) {
    textElement.innerHTML = ''; // Clear current text
    textElement.style.fontSize = fontSize;
    
    // Create spans for each letter
    const letters = text.split('').map(letter => {
        const span = document.createElement('span');
        span.textContent = letter === ' ' ? '\u00A0' : letter; // Use non-breaking space
        span.style.opacity = '0';
        span.style.transition = 'opacity .3s ease-in';
        return span;
    });
    
    // Add all letter spans to the text element
    letters.forEach(span => textElement.appendChild(span));
    
    // Animate each letter with a delay
    letters.forEach((span, index) => {
        setTimeout(() => {
            span.style.opacity = '1';
        }, index * 100); // 100ms delay between each letter
    });
}

function fadeOutLetters() {
    return new Promise((resolve) => {
        const currentLetters = textElement.querySelectorAll('span');
        
        if (currentLetters.length === 0) {
            resolve();
            return;
        }
        
        // Fade out letters from right to left (reverse order)
        currentLetters.forEach((span, index) => {
            const reverseIndex = currentLetters.length - 1 - index;
            setTimeout(() => {
                span.style.opacity = '0';
            }, reverseIndex * 80); // 80ms delay for faster fade-out
        });
        
        // Resolve promise after all letters have started fading
        setTimeout(() => {
            resolve();
        }, currentLetters.length * 80 + 300); // Extra time for last letter to fade
    });
}

async function animate_greeting(){
    // Fade out current letters one by one
    await fadeOutLetters();
    
    // Move to next greeting
    i = (i + 1) % greetings.length;
    const fontSize = i === 1 ? "69px" : "80px";
    
    // Start letter-by-letter fade-in animation for new greeting
    animateLetters(greetings[i], fontSize);
}

// Initialize with first greeting
animateLetters(greetings[0], "80px");
textElement.style.opacity = 1;
setInterval(animate_greeting, 4000); // Increased interval to accommodate letter animation

// Animation function for about section
let aboutAnimationTriggered = false;

function triggerAboutAnimation() {
    if (!aboutAnimationTriggered) {
        aboutAnimationTriggered = true;
        
        const aboutTitle = document.getElementById('about-title');
        const aboutParagraph = document.getElementById('about-paragraph');
        const waveEmoji = document.getElementById('wave-emoji');
        
        // Slide in both the title (from left) and paragraph (from right) simultaneously
        aboutTitle.classList.add('slide-in');
        aboutParagraph.classList.add('slide-in');
        
        // Start wave animation after a short delay
        setTimeout(() => {
            waveEmoji.classList.add('waving');
        }, 400);
        
        // Remove wave class after animation completes
        setTimeout(() => {
            waveEmoji.classList.remove('waving');
        }, 1000);
    }
}

// Scroll button functionality
const scrollButton = document.getElementById('scroll-button');
scrollButton.addEventListener('click', () => {
    // Trigger animation immediately when button is clicked
    triggerAboutAnimation();
    
    // Then scroll to the section
    document.getElementById('about_section').scrollIntoView({
        behavior: 'smooth'
    });
});

// Hide scroll button when not on home section and handle about section animations
window.addEventListener('scroll', () => {
    const homeSection = document.getElementById('home');
    const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
    
    // Handle scroll button visibility
    if (scrollPosition > homeSectionBottom + 100) {
        scrollButton.style.opacity = '0';
        scrollButton.style.pointerEvents = 'none';
    } else {
        scrollButton.style.opacity = '1';
        scrollButton.style.pointerEvents = 'auto';
    }
    
    // Handle about section title animation for natural scrolling
    const aboutSection = document.getElementById('about_section');
    const aboutSectionTop = aboutSection.offsetTop;
    const currentScrollY = window.scrollY;
    
    // Trigger animation when about section comes into view (for natural scrolling)
    if (currentScrollY + window.innerHeight > aboutSectionTop + 200) {
        triggerAboutAnimation();
    }
});
