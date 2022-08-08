import * as flsFunctions from './modules/functions.js'


flsFunctions.isWebp()
import { All } from './contact.js'
const burgerBtn=document.querySelector('.burger-btn')
const closeBtn=document.querySelector('.burger-btn1')
const list=document.querySelector('.list')
const header=document.querySelector('.header')
const headerBottom=document.querySelector('.header__bottom')
const headerInfo=document.querySelector('.header__info')
const headerText=document.querySelector('.header__text')
const menuTitle=document.querySelector('.menu__title')
const footer=document.querySelector(".footer")
const email=document.querySelector('.email')
const rightBtn=document.querySelector(".header__right-btn")
burgerBtn.addEventListener('click',function(){
    list.classList.add('active')
    window.location.pathname=="/contact.html"? footer.style.display="none":null
    closeBtn.classList.add("active")
    header.style.background="#000"
    screen.width<=425 ?  header.style.height="667px":header.style.height="768px"
   headerBottom.style.display="none"
   screen.width<=425 ? headerInfo.style.marginTop="580px":headerInfo.style.marginTop="630px"
    headerText.style.display="none"
    rightBtn.classList.add("active")
    burgerBtn.style.display="none"
    menuTitle.style.display="none"  
    email.style.top="627px"
})

closeBtn.addEventListener('click',function(){
    list.classList.remove('active')
      closeBtn.classList.remove("active")
      window.location.pathname=="/contact.html"? footer.style.display="block":null
    header.style.background="none"
    window.location.pathname=="/contact.html"? headerBottom.style.display="none": headerBottom.style.display="block"
    rightBtn.classList.remove("active")
    email.style.top="505px"
    window.location.pathname=="/contact.html"? headerText.style.display="none":headerText.style.display="block"
     screen.width<=425 ? headerInfo.style.marginTop="110px":headerInfo.style.marginTop="210px"
     burgerBtn.style.display="block"
     screen.width<=425 ? menuTitle.style.display="none":menuTitle.style.display="block"
     screen.width<=850 ?  header.style.height="959px": null
     screen.width<=425 ?  header.style.height="542px":null
 })





