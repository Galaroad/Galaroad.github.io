// Переменные
let butHide = document.querySelector(".doIt__button");
let overHide = butHide.style;

let butAnimate = document.querySelector(".doIt__animate");
let styleAnimate = butAnimate.style;

let butBack = document.querySelector(".doIt__buttonBack");
let styleBack = butBack.style;

let iconBack = document.querySelector(".fa-undo");
let styleIcon = iconBack.style;

let textArea = document.querySelector(".darkfield");

let finText = document.querySelector(".finalText");
let styleFinalField = finText.style;
let answer = document.querySelector(".answer");
let styleAnswer = answer.style;

let info = document.querySelector(".information");
let styleInfo = info.style;

let rotate = document.querySelector(".rotate");
let styleRotate = rotate.style;

let flag = 0;

// Поле

// btn "Обработать"
butHide.addEventListener("click", function() {
  overHide.height = "0";
  overHide.fontSize = "0";
  overHide.width = "0";
  overHide.cursor = "default";
  console.log(textArea.value);
  setTimeout(function () {
    styleAnimate.width = "227px";
    setTimeout(function () {
      styleFinalField.display = "block";
      finText.value = "new text"; // Обработанный текст с сервера
      overHide.display = "none";
      styleIcon.display = "inline-block";
      styleBack.width = "50px";
      styleAnimate.width = "0";
    }, 10000); 
  }, 100);
})

// btn Обновить страницу
butBack.addEventListener("click", function() {
  location.reload();
})

//Попап "Как пользоваться?"
function panelInfo() {
   if(flag == 0){
    styleRotate.top = "calc(50% - 8.5px)";
    styleRotate.transform = "rotate(135deg)";
    setTimeout(() => {
    styleAnswer.display = "block";
    },400);
    setInterval(() => styleAnswer.opacity = "1",3000);
    clearInterval();
    return flag = 1;
  } 
  if (flag == 1) {
    styleRotate.top = "calc(50% - 6.5px)";
    setTimeout(() => {
      styleAnswer.display = "none";
    },400);
    styleRotate.transform = "rotate(-45deg)";
    return flag = 0;
  }  
}
info.addEventListener('click', panelInfo);
