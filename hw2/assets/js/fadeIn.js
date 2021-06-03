function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('fade-show');
    }
  });

  for (let elm of elements) {
		observer.observe(elm);
	}
}

const options = { threshold: [0.5] };
const observer = new IntersectionObserver(onEntry, options);
// There are secondary displayed elements
const elements = document.querySelectorAll('.fade-in');
// It's the first displayed element
const mainElement = document.querySelectorAll('.fade-in-main');

for (let elm of mainElement) {
  observer.observe(elm);
}

// for (let elm of elements) {
// 	observer.observe(elm);
// }