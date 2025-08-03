
// Optimized scroll animations with performance improvements
document.addEventListener('DOMContentLoaded', function() {
  // Use requestIdleCallback for non-critical initialization
  if (window.requestIdleCallback) {
    requestIdleCallback(() => {
      initOptimizedScrollReveal();
      setupReadMoreButtons();
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      initOptimizedScrollReveal();
      setupReadMoreButtons();
    }, 100);
  }
});

// Optimized scroll reveal with performance improvements
function initOptimizedScrollReveal() {
  const revealItems = document.querySelectorAll('.scroll-reveal-item');
  if (revealItems.length === 0) return;

  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Immediately unobserve to improve performance
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealItems.forEach(item => {
    revealObserver.observe(item);
  });

  // Auto-cleanup after 30 seconds to prevent memory leaks
  setTimeout(() => {
    revealObserver.disconnect();
  }, 30000);
}

// Only keep setupReadMoreButtons (not scroll-based)
function setupReadMoreButtons() {
  const readMoreButtons = document.querySelectorAll('.read-more-button');
  
  if (readMoreButtons.length === 0) return;
  
  readMoreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      const contentId = button.getAttribute('data-content-id');
      if (!contentId) return;
      
      const expandableContent = document.getElementById(contentId);
      if (!expandableContent) return;
      
      // Toggle content visibility
      if (expandableContent.classList.contains('expanded')) {
        expandableContent.classList.remove('expanded');
        button.textContent = 'Read more';
      } else {
        expandableContent.classList.add('expanded');
        button.textContent = 'Read less';
      }
    });
  });
  
  // Fix for "View All Articles" button
  const viewAllButton = document.querySelector('.view-all-button');
  if (viewAllButton) {
    viewAllButton.addEventListener('click', () => {
      console.log('View All Articles clicked');
      // In a real app, this would navigate to a blog listing page
      // For now, just scroll to the blog section
      document.getElementById('blog')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
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
