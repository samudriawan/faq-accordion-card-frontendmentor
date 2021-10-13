const tabLabel = document.querySelectorAll('.tab-label');
const tabContent = document.querySelectorAll('.tab-content');

for (var i = 0; i < tabLabel.length; i++) {
	tabLabel[i].addEventListener('click', toggleAccordion);
}

function toggleAccordion(e) {
	tabLabel.forEach(function (content) {
		// console.log(e.target.nextElementSibling);
		if (content === e.target) {
			toggleContent(content);
		} else {
			removeClass(content);
		}
	});
}

function toggleContent(kelas) {
	kelas.classList.toggle('open-label');
	kelas.nextElementSibling.classList.toggle('open');
}

function removeClass(kelas) {
	kelas.nextElementSibling.classList.remove('open');
	kelas.classList.remove('open-label');
}
