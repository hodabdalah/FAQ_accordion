async function getFaqs() {
  // Fetching the data 
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  // Looping through the data
  data.forEach((faq) => {
    console.log(faq)
   const questions = document.getElementById('questions')
    questions.innerHTML +=
    `<div class="title active" id="section1" onclick="toggle(this)">${faq.title}</div>
    <div class="description">
      <p>${faq.body}</p>
    </div>
`
  });
}
getFaqs();

function toggle(clickedElement) {
  clickedElement.classList.toggle('active');
}



