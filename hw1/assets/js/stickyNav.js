const tabLinks = document.querySelectorAll('.hero__tabs a');
const tabNav = document.getElementById('heroTabs');
const stickyTab = tabNav.offsetTop;

const headerNav = document.getElementById('mainHeader');
const main = document.querySelector('.main');

const headerOffsetNumber = 30;
const headerHeight = 78;

window.onscroll = function() {scrollFunc(stickyTab)};

window.addEventListener('resize', function(event) {
  scrollFunc(stickyTab);
}, true);


window.addEventListener('scroll', event => {
	if (pageYOffset >= headerOffsetNumber) {
		headerNav.classList.add('sticky');
	} else {
		headerNav.classList.remove('sticky');
	}
})


function scrollFunc(sticky) {
	if (window.pageYOffset >= sticky - headerHeight) {
    tabNav.classList.add("sticky");
    main.style.paddingTop = '90px';
  } else {
    tabNav.classList.remove("sticky");
    main.style.paddingTop = '50px';
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

