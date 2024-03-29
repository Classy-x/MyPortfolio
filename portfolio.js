let cv=document.getElementById("cv");

cv.addEventListener("click",()=>{
    
    let link=document.createElement('a');
    link.href='other/Senthil Kumar Resume.pdf';

    link.download="Senthil reference CV";
    document.body.appendChild(link);

    link.click();
})

let detail = document.getElementById("deta1");
let data = document.getElementById("cd2"); 
detail.addEventListener("click", () => {
    data.style.display = "block"; 
});

let detail1 = document.getElementById("deta2");
let data1 = document.getElementById("cd1"); 
detail1.addEventListener("click", () => {
    data1.style.display = "block"; 
});

let detail2 = document.getElementById("deta3");
let data2 = document.getElementById("cd3"); 
detail2.addEventListener("click", () => {
    data2.style.display = "block"; 
});

let detail3 = document.getElementById("deta4");
let data3 = document.getElementById("cd4"); 
detail3.addEventListener("click", () => {
    data3.style.display = "block"; 
});


document.getElementById("disable").addEventListener("click",()=>{
  data.style.display="none"
})

document.getElementById("disable1").addEventListener("click",()=>{
  data1.style.display="none"
})

document.getElementById("disable2").addEventListener("click",()=>{
  data2.style.display="none"
})

document.getElementById("disable3").addEventListener("click",()=>{
  data3.style.display="none"
})

let anchors=document.getElementsByClassName("nav");

for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener("click", () => {
      for (let j = 0; j < anchors.length; j++) {
          anchors[j].style.color = ""; 
      }
      anchors[i].style.color = "tomato"; 
      
  });
}

let input = document.getElementsByClassName("input_data");
let text =document.getElementById("text")

function reset() {
  for (let i = 0; i < input.length; i++) {
    input[i].style.boxShadow = "0px 0px 0px 0px ";
  }
  text.style.boxShadow="0px 0px 0px 0px"
}

text.addEventListener("focus",(obj)=>{
  obj.stopPropagation();
  reset();
  text.style.boxShadow="0px 0px 5px 0px rgb(31, 207, 219)"
})
text.addEventListener("click",(obj)=>{
  obj.stopPropagation();
  reset();
  text.style.boxShadow="0px 0px 5px 0px rgb(31, 207, 219)"
})

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("click", function (obj) {
    obj.stopPropagation();
    reset();
    this.style.boxShadow = "0px 0px 5px 0px rgb(31, 207, 219)";
  });
  input[i].addEventListener("focus", function () {
    reset(); 
    this.style.boxShadow = "0px 0px 5px 0px rgb(31, 207, 219)";
  });
}
document.body.addEventListener("click", function () {
  reset(); 
});

let bar = document.getElementById("bar");
let nav = document.getElementsByClassName("nav");

bar.addEventListener("click", () => {
    for (let i = 0; i < nav.length; i++) {
        if (parseFloat(window.getComputedStyle(nav[i]).opacity) === 1) {
            nav[i].style.opacity = "0";
            setTimeout(() => {
                nav[i].style.display = "none";
                bar.classList.toggle("fa-bars", true);
                bar.classList.toggle("fa-x", false);
            }, 300);
        } else {
            nav[i].style.display = "block";
            setTimeout(() => {
                nav[i].style.opacity = "1";
                bar.classList.toggle("fa-bars", false);
                bar.classList.toggle("fa-x", true);
            }, 0);
        }
    }
});

let loader=document.getElementById("loader");

document.addEventListener("scroll",()=>{
   let sc=window.scrollY;
   loader.style.marginTop=sc*1+"px";
})


document.addEventListener("DOMContentLoaded", function() {
  
  let cursor = document.getElementById("cursor");

  document.addEventListener("mousemove", function(e) {
      
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
  });
});