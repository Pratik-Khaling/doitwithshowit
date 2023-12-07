// Function to check if an element is in the viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  var elements = document.querySelectorAll('*');
  console.log("Scrolled!");
  elements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('animate');
    }
  });
}

// Function to animate elements already in viewport when page is loaded
function animateOnLoad() {
  var elements = document.querySelectorAll('*');
  console.log("Calling animateOnLoad"); // Debugging log
  elements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('animate');
    }
  });
}

// Call the animateOnLoad function once after the page has loaded
window.onload = function() {
  console.log("Page loaded");
  animateOnLoad();
};

// Event listener for scroll event
window.addEventListener('scroll', handleScroll);
