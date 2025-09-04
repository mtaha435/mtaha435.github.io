//greeting fade in/out
const greetings = ["Hello", "مرحبا", "Hola", "Bonjour", "Ciao"]
let i = 0;
const textElement = document.getElementById("hello_text");
function animate_greeting(){
    textElement.style.opacity = 0;
    setTimeout(()=>{
        i = (i + 1) % greetings.length;
        if(i==1){
            textElement.style.fontSize="69px";
        }
        else{
            textElement.style.fontSize="80px";
        }
        textElement.textContent = greetings[i];
        textElement.style.opacity = 1;
    }, 1000);

}
textElement.style.opacity=1;
setInterval(animate_greeting,3000);

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
