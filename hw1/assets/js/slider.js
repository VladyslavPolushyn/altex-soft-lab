const sliderContainer = document.getElementsByClassName('slideshow-container')[0];
const slideHeader = document.querySelector('.slide-item-header');

// <576px
// ≥576px
// ≥768px
// ≥992px
// ≥1200px
// ≥1400px

renderSlides();

const slideItems = [...document.querySelectorAll('.slideshow-container .mySlides li')];

slideItems.forEach(elem => {

	elem.addEventListener('click', (event) => {
		removeActiveClass(slideItems);
		event.target.classList.add('active');
		slideHeader.innerHTML = elem.innerHTML;
	})
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

}

function removeActiveClass(arr) {

	arr.forEach(item => {
		item.classList.remove('active');
	});

}

function renderSlides() {
	if (window.matchMedia("(min-width: 767px)").matches) {
		sliderContainer.insertAdjacentHTML('afterbegin', `
			<div class="mySlides fade">
		    <div class="text">
		    	<ul>
		    		<li class="active">Botnet</li>
						<li>Breach</li>
						<li>Cloud</li>
						<li>DDoS</li>
						<li>Domain</li>
						<li>Endpoint</li>
						<li>Exploit</li>
						<li>Firewall</li>
						<li>IP Address</li>
						<li>Malware</li>
						<li>Penetration Test</li>
						<li>Phishing/Spearphishing</li>
						<li>Ransomware</li>
						<li>Session Hijacking</li>
						<li>Social Engineering</li>
		    	</ul>
		    </div>
		  </div>

		  <div class="mySlides fade">
		    <div class="text">
		    	<ul>
		    		<li>Software</li>
		    		<li>SOC</li>
		    		<li>Trojan Horse</li>
		    		<li>VPN</li>
		    		<li>Virus</li>
		    		<li>Worm</li>
		    	</ul>
		    </div>
		  </div>
		`);
	} else {
		sliderContainer.insertAdjacentHTML('afterbegin', `
			<div class="mySlides fade">
		    <div class="text">
		    	<ul>
		    		<li class="active">Botnet</li>
						<li>Breach</li>
						<li>Cloud</li>
						<li>DDoS</li>
						<li>Domain</li>
		    	</ul>
		    </div>
		  </div>

		  <div class="mySlides fade">
		    <div class="text">
		    	<ul>
		    		<li>Endpoint</li>
						<li>Exploit</li>
						<li>Firewall</li>
						<li>IP Address</li>
						<li>Malware</li>
		    	</ul>
		    </div>
		  </div>

		  <div class="mySlides fade">
		    <div class="text">
		    	<ul>
		    		<li>Penetration Test</li>
						<li>Phishing/Spearphishing</li>
						<li>Ransomware</li>
						<li>Session Hijacking</li>
						<li>Social Engineering</li>
		    	</ul>
		    </div>
		  </div>

		  <div class="mySlides fade">
		    <div class="text">
		    	<ul>
		    		<li>Software</li>
		    		<li>SOC</li>
		    		<li>Trojan Horse</li>
		    		<li>VPN</li>
		    		<li>Virus</li>
		    		<li>Worm</li>
		    	</ul>
		    </div>
		  </div>
		`);
	}
}

