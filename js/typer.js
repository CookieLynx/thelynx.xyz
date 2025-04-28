const text = "A Programming Lynx on the Interwebs.";
const container = document.getElementById('subheaderWriter');
let index = 0;

function typeText() {
  if (index < text.length) {
    container.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, Math.floor(Math.random() * (200 - 100 + 1)) + 100);
  }
}

window.onload = typeText;