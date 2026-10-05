const menuButton=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav nav");

if(menuButton&&nav){
  menuButton.addEventListener("click",()=>{
    const open=nav.classList.toggle("mobile-open");
    nav.style.display=open?"flex":"";
    nav.style.position=open?"absolute":"";
    nav.style.top=open?"78px":"";
    nav.style.left=open?"0":"";
    nav.style.right=open?"0":"";
    nav.style.padding=open?"18px 28px":"";
    nav.style.background=open?"#FFFFFF":"";
    nav.style.flexDirection=open?"column":"";
    nav.style.gap=open?"16px":"";
    nav.style.borderBottom=open?"1px solid #D8E5E6":"";
    menuButton.setAttribute("aria-expanded",String(open));
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener("click",()=>{
  if(nav?.classList.contains("mobile-open")) menuButton?.click();
}));
