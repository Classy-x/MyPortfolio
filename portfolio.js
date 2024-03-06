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



