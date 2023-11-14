function toggle(clickedElement) {
  clickedElement.classList.toggle('active');
}

// Selects HTML elements and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", function() {
  toggle(section1Element);
});

const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", function() {
  toggle(section2Element);
});

const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", function() {
  toggle(section3Element);
});
