const sections = document.querySelector('section');
const secBtns = document.querySelector('controlls');
const secBtn = document.querySelector('control');
const  allSections = document.querySelector('main-content');

function PageTransition(){
    // Button click active class
    for(let i = 0; i < secBtn.length; i++){
        secBtn[i].addEventListner('click', ()=> {
            let currentBtn = document.querySelector('.active-btn');
            currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '');
        } )
    }
}