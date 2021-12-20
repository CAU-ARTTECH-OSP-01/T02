const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const story = document.querySelector("#story");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const img5 = document.querySelector("#img5");
const img6 = document.querySelector("#img6");
const img7 = document.querySelector("#img7");
const img8 = document.querySelector("#img8");
const img9 = document.querySelector("#img9");
const img10 = document.querySelector("#img10");
const img11 = document.querySelector("#img11");
const img12 = document.querySelector("#img12");
const endPoint = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function calResult(){
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = "./img/image" + point + ".png";
  resultImg.scr = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 450)})
  console.log(select);
  setResult();
}

function addAnswer(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');
  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList')
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      var target = qnaList[qIdx].a[idx].type;
      for(let i = 0; i < target.length; i++){
        select[target[i]] += 1;
      }

      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    }, 450)
  }, false);
}

function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function goQna() {
  img12.style.WebkitAnimation = "fadeOut 1s";
  img12.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      img12.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}

function changeImg1() {
  img1.style.display = "none";
  img2.style.display = "block";
}

function changeImg2() {
  img2.style.display = "none";
  img3.style.display = "block";
}

function changeImg3() {
  img3.style.display = "none";
  img4.style.display = "block";
}

function changeImg4() {
  img4.style.display = "none";
  img5.style.display = "block";
}

function changeImg5() {
  img5.style.display = "none";
  img6.style.display = "block";
}

function changeImg6() {
  img6.style.display = "none";
  img7.style.display = "block";
}

function changeImg7() {
  img7.style.display = "none";
  img8.style.display = "block";
}

function changeImg8() {
  img8.style.display = "none";
  img9.style.display = "block";
}

function changeImg9() {
  img9.style.display = "none";
  img10.style.display = "block";
}

function changeImg10() {
  img10.style.display = "none";
  img11.style.display = "block";
}

function changeImg11() {
  img11.style.display = "none";
  img12.style.display = "block";
}

function goStory() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    img1.style.WebkitAnimation = "fadeIn 1s";
    img1.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      img1.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
