import * as flsFunctions from './modules/functions.js'


flsFunctions.isWebp()
import { All } from './contact.js'
const burgerBtn=document.querySelectorAll('.burger-btn')
const closeBtn=document.querySelectorAll('.burger-btn1')
const list=document.querySelector('.list')
const header=document.querySelector('.header')
const headerBottom=document.querySelector('.header__bottom')
const headerInfo=document.querySelector('.header__info')
const headerWrapInf=document.querySelector('.header__info-wrapper')
const headerText=document.querySelectorAll('.header__text')
const menuTitle=document.querySelector('.menu__title')
const footer=document.querySelector(".footer")
const email=document.querySelectorAll('.email')
const rightBtn=document.querySelector(".header__right-btn")
const socialWrap=document.querySelector(".social__wrapper")
burgerBtn.forEach(item=>{
item.addEventListener('click',function(){
    list.classList.add('active')
    
    window.location.pathname=="/contact.html"? footer.style.display="none":null
    closeBtn.forEach(item=>[
item.classList.add("active")
    ])
    header.style.background="#000"
    screen.width<=425 ?  header.style.height="667px":header.style.height="768px"
   headerBottom.style.display="none"

   screen.width<=425 ? headerInfo.style.marginTop="580px":headerInfo.style.marginTop="630px"
    headerText.forEach(item=>[
item.style.display="none"
    ])
    
    rightBtn.classList.add("active")

  
item.style.display="none"

    menuTitle.style.display="none"  
    email.forEach(item=>{
      item.style.top="627px"
          })
          window.location.pathname=="/one__project.html" && screen.width<=425 ?headerWrapInf.style.display="none":null
window.location.pathname=="/one__project.html" && screen.width<=425 ?socialWrap.style.marginTop="0px":null
})

})
closeBtn.forEach(item=>{
item.addEventListener('click',function(){
    list.classList.remove('active')
      item.classList.remove("active")
      window.location.pathname=="/contact.html"? footer.style.display="block":null
    header.style.background="none"
    window.location.pathname=="/contact.html"? headerBottom.style.display="none": headerBottom.style.display="block"
    rightBtn.classList.remove("active")
    email.forEach(item=>{
item.style.top="505px"
    })
    window.location.pathname=="/contact.html"? headerText.style.display="none":headerText.forEach(item=>{item.style.display="block"})
     screen.width<=425 ? headerInfo.style.marginTop="110px":headerInfo.style.marginTop="210px"
     window.location.pathname=="/one__project.html" && screen.width<=425 ?headerInfo.style.marginTop="36px":null
     window.location.pathname=="/one__project.html" && screen.width<=425 ?socialWrap.style.marginTop="35px":null
     burgerBtn.forEach(item=>{item.style.display="block"})
     screen.width<=425 ? menuTitle.style.display="none":menuTitle.style.display="block"
     screen.width<=850 ?  header.style.height="959px": null
     screen.width<=425 ?  header.style.height="542px":null
     window.location.pathname=="/news.html"?header.style.height="160px":null
     window.location.pathname=="/news.html"  && screen.width<=850?header.style.height="136px":null
     window.location.pathname=="/news.html"  && screen.width<=420?header.style.height="116px":null
     window.location.pathname=="/news.html"?headerBottom.style.display="none":null
     window.location.pathname=="/news.html"?headerText.style.display="none":null
     window.location.pathname=="/about.html"?header.style.height="160px":null
     window.location.pathname=="/about.html"  && screen.width<=1100?header.style.height="96px":null
     window.location.pathname=="/about.html"  && screen.width<=1100?header.style.background="white":null
     window.location.pathname=="/about.html"?headerBottom.style.display="none":null
     window.location.pathname=="/about.html"?headerText.style.display="none":null
     window.location.pathname=="/projects.html"?header.style.height="160px":null
     window.location.pathname=="/projects.html"  && screen.width<=1100?header.style.height="109px":null
     window.location.pathname=="/projects.html"  && screen.width<=1100?header.style.background="white":null
     window.location.pathname=="/projects.html"?headerBottom.style.display="none":null
     window.location.pathname=="/projects.html"?headerText.style.display="none":null
     window.location.pathname=="/one.html"?header.style.height="162px":null
     window.location.pathname=="/one.html"  && screen.width<=850?header.style.height="138px":null
     window.location.pathname=="/one.html"  && screen.width<=420?header.style.height="118px":null
     window.location.pathname=="/one.html"  && screen.width<=1100?header.style.background="white":null
     window.location.pathname=="/one.html"?headerBottom.style.display="none":null
     window.location.pathname=="/one.html"?headerText.style.display="none":null
     window.location.pathname=="/one__project.html" && screen.width<=1024 ?header.style.background="url(../img/one__project1024.png)":null
window.location.pathname=="/one__project.html" && screen.width<=850 ?header.style.background="url(../img/one__project850.png)":null
window.location.pathname=="/one__project.html" && screen.width<=425 ?header.style.height="542px":null
window.location.pathname=="/one__project.html" && screen.width<=425 ?header.style.backgroundSize="cover":null
window.location.pathname=="/one__project.html" && screen.width<=425 ?header.style.backgroundPosition="center":null

window.location.pathname=="/one__project.html" && screen.width<=425 ?headerWrapInf.style.display="flex":null
window.location.pathname=="/one__project.html" && screen.width<=425 ?headerWrapInf.style.flexDirection="column":null
 })

})



 window.location.pathname=="/news.html"  && screen.width<=1024 ? footer.style.background="url(../img/bg__1024.png)":null
 window.location.pathname=="/news.html"  && screen.width<=850 ? footer.style.background="url(../img/bg__768.png)":null

window.location.pathname=="/one__project.html" && screen.width<=1024 ?header.style.background="url(../img/one__project1024.png)":null
window.location.pathname=="/one__project.html" && screen.width<=850 ?header.style.background="url(../img/one__project850.png)":null
window.location.pathname=="/one__project.html" && screen.width<=850 ?header.style.height="961px":null
window.location.pathname=="/one__project.html" && screen.width<=425 ?header.style.height="542px":null
window.location.pathname=="/one__project.html" && screen.width<=425 ?header.style.backgroundSize="cover":null
window.location.pathname=="/one__project.html" && screen.width<=425 ?header.style.backgroundPosition="center":null


