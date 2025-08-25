function grp(imageContainer,w,h) {
  const endX = window.innerWidth - window.innerWidth - w; // 100px from right, - half width of image
  const endY = window.innerHeight + h; // 100px from bottom, - half height
  gsap.to(imageContainer, {
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top left",
      end: "bottom+=200 top", // adjust this to control distance required to finish move
      scrub: true,
    },
    x: endX,
    y: endY,
    scale: 1,
    ease: "none",
  });
} 

function applyLazyLoading() {
  document.querySelectorAll('img:not([loading])').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
}

document.addEventListener("DOMContentLoaded", function () {

  document.getElementById('currentYear').textContent = new Date().getFullYear();

  const workYearsEl = document.getElementById('workYears');
  if (workYearsEl) {
    const start = new Date(2022, 5); // June 2022 (0-based month)
    const now = new Date();
    let years = (now.getFullYear() - start.getFullYear()) + (now.getMonth() - start.getMonth()) / 12;
    years = Math.ceil(years);

    const numberWords = [
      'zero', 'one', 'two', 'three', 'four', 'five', 'six',
      'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'
    ];
    let yearsWord = years <= 12 ? numberWords[years] : years.toString();
    workYearsEl.textContent = yearsWord;
  }

  applyLazyLoading();

  let instr =  document.getElementsByClassName('infinite-scroll-track');
  Array.from(instr).forEach(element => {
    let instrHtml =  element.innerHTML;
    $(instr).append(instrHtml+instrHtml+instrHtml+instrHtml);
  });
  let instr1 =  document.getElementsByClassName('infinite-scroll-track-1');
  Array.from(instr1).forEach(element => {
    let instr1Html =  element.innerHTML;
    $(instr1).append(instr1Html+instr1Html+instr1Html);
  });

  setTimeout(fn => {
    $("#loader").hide()
    $("#w-content").show()

    gsap.registerPlugin(ScrollTrigger);
    const imageContainer = document.getElementById("imageContainer");

    if (window.innerWidth > 1200) {
      grp(imageContainer,680,130)
    }
    else if(window.innerWidth > 1000){
      grp(imageContainer,530,210)
    }
  }, 1000)
});



const observer = new IntersectionObserver((entries, cl) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const className = entry.target.className;

      if (className.includes('fadeOut')) {
        anime({
          targets: entry.target,
          opacity: [0, 1],
          duration: 3000,
          easing: 'easeInOutQuad',
        });
      }
      if (className.includes('zoomOut')) {
        anime({
          targets: entry.target,
          opacity: [0, 1],
          scale: [1.5, 1],
          duration: 2000,
          easing: 'easeInOutQuad'
        });
      }
      if (className.includes('zoomIn')) {
        anime({
          targets: entry.target,
          opacity: [0, 1],
          scale: [0.5, 1],
          duration: 2000,
          easing: 'easeInOutQuad'
        });
      }
      if (className.includes('floatRight')) {
        anime({
          targets: entry.target,
          translateX: [300, 0],   // Slide in from 300px right to original position
          opacity: [0, 1],        // Fade in
          scale: [0.5, 1],        // Zoom in
          duration: 2000,
          easing: 'easeInOutQuad'
        });
      }
      if (className.includes('floatLeft')) {
        anime({
          targets: entry.target,
          translateX: [-300, 0],   // Slide in from 300px right to original position
          opacity: [0, 1],        // Fade in
          scale: [0.5, 1],        // Zoom in
          duration: 2000,
          easing: 'easeInOutQuad'
        });
      }
      if (className.includes('floatBottomSm')) {
        anime({
          targets: entry.target,
          translateY: [30, 0],   // Slide in from 300px right to original position
          opacity: [0, 1],        // Fade in
          scale: [0.5, 1],        // Zoom in
          duration: 1000,
          easing: 'easeInOutQuad'
        });
      }
      if (className.includes('floatBottom')) {
        anime({
          targets: entry.target,
          translateY: [300, 0],   // Slide in from 300px right to original position
          opacity: [0, 1],        // Fade in
          scale: [0.5, 1],        // Zoom in
          duration: 2000,
          easing: 'easeInOutQuad'
        });
      }
      if (className.includes('floatTop')) {
        anime({
          targets: entry.target,
          translateY: [-300, 0],   // Slide in from 300px right to original position
          opacity: [0, 1],        // Fade in
          scale: [0.5, 1],        // Zoom in
          duration: 2000,
          easing: 'easeInOutQuad'
        });
      }
      if (className.includes('floatTopSm')) {
        anime({
          targets: entry.target,
          translateY: [-30, 0],   // Slide in from 300px right to original position
          opacity: [0, 1],        // Fade in
          scale: [0.5, 1],        // Zoom in
          duration: 1000,
          easing: 'easeInOutQuad'
        });
      }
      // Element is now visible in the viewport
      //entry.target.classList.add('animate'); // or trigger your animation here
      // Optionally stop observing after it's visible once
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // Adjust based on how much visibility is required (0.1 = 10%)
});

// Attach observer to each .tiymce-sm element
const animationClasses = [
  'fadeOut',
  'zoomIn',
  'zoomOut',
  'floatRight',
  'floatLeft',
  'floatBottom',
  'floatBottomSm',
  'floatTop',
  'floatTopSm',
];
animationClasses.forEach(className => {
  document.querySelectorAll('.' + className).forEach(el => {
    observer.observe(el);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Function to animate number
  function animateNumber(element, targetNumber, nonNumeric = '') {
    let start = 0;
    const increment = targetNumber / 100; // This defines how smooth the animation will be
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        clearInterval(interval);
        start = targetNumber;
      }
      element.textContent = Math.floor(start) + nonNumeric; // Update the number in the element
    }, 20); // Update every 10ms
  }
  // Create an intersection observer to trigger the animation when the element is visible
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        let nonNumeric = element.getAttribute('data-number').replace(/\d+/g, '');
        const targetNumber = parseInt(element.getAttribute('data-number')); // Get the target number from the text content
        animateNumber(element, targetNumber, nonNumeric);
        observer.unobserve(element); // Stop observing after animation starts
      }
    });
  }, { threshold: 0.1 }); // Trigger when 100% of the element is visible
  // Start observing the element
  const numberElements = document.querySelectorAll('.number_to_be_counted');
  if (numberElements) {
    Array.from(numberElements).forEach(numberElement => {
      observer.observe(numberElement);
    });
  }

  const fadeLeftText = document.querySelector('.fade-left-text');
  fadeLeftText.innerHTML = fadeLeftText.textContent.replace(/\S/g, "<span>$&</span>");

  anime.timeline({ loop: true })
    .add({
      targets: '.fade-left-text span',
      opacity: [0, 1],
      translateX: [-30, 0],
      easing: "easeOutExpo",
      duration: 800,
      delay: anime.stagger(100)
    }).add({
      targets: '.fade-left-text span',
      opacity: [1, 0],
      translateX: [0, 30],
      easing: "easeInExpo",
      duration: 800,
      delay: anime.stagger(100)
    });


  const typeText = document.getElementById('typeText1').innerText;
  document.getElementById('typeText1').innerText = '';
  const typeEl = document.querySelector('.typewriter-text');
  let index = 0;
  function typeWriter() {
    if (index < typeText.length) {
      typeEl.textContent += typeText.charAt(index);
      index++;
      setTimeout(typeWriter, 30);
    }
    // for infinite repeat /
    // else {
    //   console.log(`run -- ${index}`)
    //   setTimeout(() => {
    //     typeEl.textContent = '';
    //     index = 0;
    //     typeWriter();
    //   }, 1000);
    // }
  }
  typeWriter();
});

