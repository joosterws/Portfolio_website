class ScrollBtn extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <button onclick="topFunction()" id="scrollBtn" title="Go to top"><img src="/images/Scroll-up.svg" alt="Menu" style="width:30px;height:30px"></button>
        `
    }
}
customElements.define('app-scrolltotopbtn', ScrollBtn);


// Get the button
let mybutton = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}