(function() {
  let button = document.querySelector(".button");
  
  let parent = button.parentElement;
  
  button.addEventListener("click", function() {
    parent.classList.add("clicked");
    return setTimeout((function() {
      return parent.classList.add("success");
    }), 2600);
  });
  
  
}).call(this);
let textArea = document.querySelector(".darkfield");
let buttonText = document.querySelector("#button-wrapper");
buttonText.onclick = function (event) {
  event.preventDefault();
  console.log(textArea.value);
  textArea.placeholder = "Вставьте текст:";
};
let newText = document.querySelector(".fa");
newText.onclick = function () {
  console.log("dfdfdf");
  textArea.value = "";
  textArea.placeholder = "Вставьте";
}
let reStart = document.querySelector("#RStart");
reStart.onclick = function () {
  location.reload();
}
let answer = document.querySelector(".answer");
let info = document.querySelector(".information");
let rotate = document.querySelector(".rotate");
let flag = 0;
let styleRotate = rotate.style;
let style = answer.style;
info.onclick = () => {
   if(flag == 0){
    styleRotate.transform = "rotate(135deg)";
    setTimeout(() => style.opacity = "1",1);
    style.display = "block";
    return flag = 1;
  } 
  if (flag == 1) {
    style.display = "none";
    styleRotate.transform = "rotate(-45deg)";
    return flag = 0;
  }  
}








/*#button-wrapper.success .button .fa::after {
  content: "Заново      \f0e2";
  font-size: 25px;
  height: 100%;
  width: 300%;
  line-height: 50px;
  margin-left: 100px;
  position: absolute;
  background: #fee300; 
  border-radius: 50px;
}
*/