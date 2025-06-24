const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransition(){
    for(let i = 0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
        })
    }

    // Section active class
    allSections.addEventListener('click', (e) => {
        // console.log(e.target);
        const id = e.target.dataset.id;
        if (id) {
            //remove selected from the other btns
            secBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
        }
    })
}

PageTransition(); 