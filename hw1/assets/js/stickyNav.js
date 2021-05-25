const tabLinks = document.querySelectorAll('.hero__tabs a');
const tabNav = document.querySelector('.hero__tabs');
const stickyTab = tabNav.offsetTop;

const headerNav = document.querySelector('.main-header');

const main = document.querySelector('.main');

window.onscroll = function() {scrollFunc(stickyTab)};

window.addEventListener('resize', function(event) {
  scrollFunc(stickyTab);
}, true);


window.addEventListener('scroll', event => {
	if (pageYOffset >= 30) {
		headerNav.classList.add('sticky');
	} else {
		headerNav.classList.remove('sticky');
	}
})


function scrollFunc(sticky) {
	if (window.pageYOffset >= sticky - 65) {
    tabNav.classList.add("sticky");
    // main.style.paddingTop = '90px';
  } else {
    tabNav.classList.remove("sticky");
    // main.style.paddingTop = '50px';
  }
}

tabLinks.forEach(elem => {
	elem.onclick = function() {
		removeActiveClass(tabLinks);
		elem.classList.add('active');
	}
});

function removeActiveClass(arr) {

	arr.forEach(item => {
		item.classList.remove('active');
	});

}

