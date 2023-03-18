const hamburgerBtn=document.getElementById('hamburgerBtn');
const hamburgerMenu=document.querySelector('#hamburgerMenu');

hamburgerBtn.addEventListener('click',()=>{
    hamburgerMenu.classList.toggle("hidden")
    hamburgerBtn.classList.toggle("bg-grey")
})