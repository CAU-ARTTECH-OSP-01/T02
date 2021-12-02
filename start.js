const main = document.querySelector("#main");
const story = document.querySelector("#story");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");



function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    story.style.WebkitAnimation = "fadeIn 1s";
    story.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      story.style.display = "block";
    }, 450)
  }, 450)
}
