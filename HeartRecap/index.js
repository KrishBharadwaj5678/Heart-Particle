let page1=document.querySelector("div.page1");

page1.addEventListener("mousemove",(e)=>{
    let size=Math.floor(Math.random()*50);
    left=e.x;
    bottom=e.y;
    let heart=document.createElement("div");
    heart.classList.add("image");
    heart.style.left=`${left}px`;
    heart.style.top=`${bottom}px`;
    heart.style.width=20+size+"px";
    heart.style.height=20+size+"px";
    page1.appendChild(heart);
    setInterval(()=>{
        heart.remove();
    },1000)

})

