let letter = 0;
const title = "ChocoBix";
const textTitle = document.getElementById("title");

function typeTitle() {
  if (letter < title.length) {
    textTitle.textContent = title.substring(0, letter + 1);
    document.title = title.substring(0, letter + 1);
    letter++;
    setTimeout(typeTitle, 200); 
  }
}

textTitle.textContent = "."
document.title = "."

typeTitle();