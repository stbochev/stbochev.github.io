let scrollpos = window.scrollY;
const header = document.querySelector("nav");
const header_height = header.offsetHeight;

const add_class_on_scroll = () => header.classList.add("fade-in");
const remove_class_on_scroll = () => header.classList.remove("fade-in");

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

function toggle() {
  let x = document.querySelector("#myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const div = document.getElementById('myLinks');

div.addEventListener('click', myFunction)

function myFunction(e) {
 
  if((div.style.display === '' || div.style.display === 'none')) {
    div.style.display = 'block';    
  } else if((div.style.display === '' || div.style.display === 'none') ) {
    div.style.display = 'none';
  } else {
    div.style.display = 'none';
  }
}
