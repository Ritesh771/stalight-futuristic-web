
// Initialize scroll animations when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initScrollReveal();
  initScrollProgress();
});

// Initialize scroll reveal animation
function initScrollReveal() {
  const revealItems = document.querySelectorAll('.scroll-reveal-item');
  
  if (revealItems.length === 0) return;
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once revealed, no need to observe anymore
        observer.unobserve(entry.target);
      }
    });
  };
  
  const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });
  
  revealItems.forEach(item => {
    revealObserver.observe(item);
  });
}

// Initialize scroll progress indicator
function initScrollProgress() {
  const progressIndicator = document.querySelector('.scroll-progress-indicator');
  const progressCircle = document.querySelector('.scroll-progress-circle-bar');
  const progressText = document.querySelector('.scroll-progress-percentage');
  
  if (!progressIndicator || !progressCircle || !progressText) return;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    const scrollPercentRounded = Math.round(scrollPercent * 100);
    
    // Show the progress indicator once scrolling starts
    if (scrollTop > 100) {
      progressIndicator.style.opacity = 1;
    } else {
      progressIndicator.style.opacity = 0;
    }
    
    // Update the circle progress and text
    const dashoffset = 113 - (scrollPercent * 113);
    progressCircle.style.strokeDashoffset = dashoffset;
    progressText.textContent = `${scrollPercentRounded}%`;
  });
}

// Add a global function to handle smooth scrolling
window.scrollToSection = function(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }
};
