
const cabecalhomove = document.querySelector('header')

window.addEventListener("scroll",()=>{

if(window.scrollY > 25){

cabecalhomove.classList.add("header-scroll")

}else{

cabecalhomove.classList.remove("header-scroll")

}

})
