// SMOOTH SCROLL 

const lenis = new Lenis({
  autoRaf: true,
});

// MOUSE FOLLOWER ANIMATION --------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {

    // --- MOUSE FOLLOWER LOGIC ---
    const follower = document.getElementById('mouse-follower');

    // Make the follower circle track the mouse position
    window.addEventListener('mousemove', e => {
        gsap.to(follower, {
            duration: 0.3,
            x: e.clientX,
            y: e.clientY,
            ease: "power2.out"
        });
    });

    // --- HOVER SCALING EFFECT ---

    const hoverElements = document.querySelectorAll('button,h2,h3,i');

    hoverElements.forEach(el => {
        // Enlarge follower on mouse enter
        el.addEventListener('mouseenter', () => {
            gsap.to(follower, {
                duration: 0.2,
                scale: 1.5 
            });
        });

        // Shrink follower on mouse leave
        el.addEventListener('mouseleave', () => {
            gsap.to(follower, {
                duration: 0.2,
                scale: 1
            });
        });
    });

});



// page 2 (pricing) ---------------------------------------------------------------------------------

// upper cards -------------------

gsap.from(".price-animation",{
    y:50,
    opacity:0,
    duration: 1.5,
    stagger:1,
    scrollTrigger:{
        trigger:".price-animation",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 50%",
        scrub:1,
    }
})

// scaling animation --------------

const pricingCards = document.querySelectorAll(".price-animation");

pricingCards.forEach(card => {
  
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.02,        
      duration: 0.1,    
      ease: "power2.out"
    });
  });

  
  card.addEventListener("mouseleave", () => {
    
    gsap.to(card, {
      scale: 1,        
      duration: 0.1,      
      ease: "power2.out"
    });
  });

});

// lower card -------------------------

gsap.from(".lower-border",{
    y:50,
    opacity:0,
    duration: 1,
    stagger:1,
    scrollTrigger:{
        trigger:".lower-border",
        scroller:"body",
        // markers:true,
        start:"top 82%",
        end:"top 78%",
        scrub:1,
    }
})

const pricingCards_lower = document.querySelectorAll(".lower-border");

pricingCards_lower.forEach(card => {
  
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.02,        
      duration: 0.1,    
      ease: "power2.out"
    });
  });

  
  card.addEventListener("mouseleave", () => {
    
    gsap.to(card, {
      scale: 1,        
      duration: 0.1,      
      ease: "power2.out"
    });
  });

});

// page 3 (Explore) ---------------------------------------------------------------------------------

// upper cards ------------------

gsap.from(".exp-upper-animation",{
    y:50,
    opacity:0,
    duration: 1,
    stagger:1,
    scrollTrigger:{
        trigger:".exp-upper-animation",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:1,
    }
})

gsap.from(".exp-lower-animation",{
    y:50,
    opacity:0,
    duration: 1,
    stagger:1,
    scrollTrigger:{
        trigger:".exp-lower-animation",
        scroller:"body",
        // markers:true,
        start:"top 85%",
        end:"top 75%",
        scrub:1,
    }
})

//scale animation -------------

const exp_cards = document.querySelectorAll(".exp-scale");

exp_cards.forEach(card => {
  
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.02,        
      duration: 0.1,    
      ease: "power2.out"
    });
  });

  
  card.addEventListener("mouseleave", () => {
    
    gsap.to(card, {
      scale: 1,        
      duration: 0.5,      
      ease: "power2.out"
    });
  });

});

const toggle = document.getElementById('theme-toggle');
const body = document.body;

function updateTheme() {
  if (toggle.classList.contains('light-theme')) {
    body.classList.add('theme-white');
  } else {
    body.classList.remove('theme-white');
  }
}

// Toggle theme on button click
toggle.addEventListener('click', () => {
  toggle.classList.toggle('light-theme');
  updateTheme();
});

// Initialize theme on page load (dark by default)
updateTheme();
