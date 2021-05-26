const tipsAcc = [...document.querySelectorAll('.tips__accordion .accordion')];
const tipsAccContent = [...document.querySelectorAll('.tips__accordion .accordion__content')];

const faqsAcc = [...document.querySelectorAll('.faqs__accordion .accordion')];
const faqsAccContent = [...document.querySelectorAll('.faqs__accordion .accordion__content')];


function accordionFunc(acc, accContent) {

    for (let i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            const setClasses = !this.classList.contains('active');
            setClass(acc, 'active', 'remove');
            setClass(accContent, 'show', 'remove');
            
            if (setClasses) {
                this.classList.toggle('active');
                this.nextElementSibling.classList.toggle('show');
            }
        }
    }

}

function setClass(els, className, fnName) {
    for (let i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

accordionFunc(tipsAcc, tipsAccContent);
accordionFunc(faqsAcc, faqsAccContent);