const bars= document.querySelector('.bars');
const nav= document.querySelector('nav');
const cross= document.querySelector('.cross');
bars.addEventListener('click',function(event){
    nav.classList.add('open');
    bars.classList.remove('open');
    event.stopPropagation();
    document.body.classList.add('no-scroll');
})
nav.addEventListener('click',function(e){
    e.stopPropagation();
})
cross.addEventListener('click',function(){
    nav.classList.remove('open');
    bars.classList.add('open');
    document.body.classList.remove('no-scroll');
})
window.addEventListener('click',function(){
    nav.classList.remove('open');
    bars.classList.add('open');
    document.body.classList.remove('no-scroll');
})
