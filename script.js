 var modalBtn=document.querySelector ('.modal-btn');
 var modalBg=document.querySelector('.modal-bg');
var modalClose=document.querySelector('.modal-close');

var modalBtn2=document.querySelector ('.modal-btn2');
var modalBg2=document.querySelector('.modal-bg2');
var modalClose2=document.querySelector('.modal-close2');

var modalBtn3=document.querySelector ('.modal-btn3');
var modalBg3=document.querySelector('.modal-bg3');
var modalClose3=document.querySelector('.modal-close3');


 modalBtn.addEventListener('click',function(){
     modalBg.classList.add('bg-active');
 });

 modalClose.addEventListener('click',function(){
     modalBg.classList.remove('bg-active');
 });

 modalBtn2.addEventListener('click',function(){
    modalBg2.classList.add('bg-active');
});

modalClose2.addEventListener('click',function(){
    modalBg2.classList.remove('bg-active');
});

modalBtn3.addEventListener('click',function(){
    modalBg3.classList.add('bg-active');
});

modalClose3.addEventListener('click',function(){
    modalBg3.classList.remove('bg-active');
});
