function toggleMenu(x) {
	var menuToToggle = document.getElementById('header_menu');
	var header = document.getElementsByTagName('header');
	var mainContent = document.getElementById('main-content');

	x.classList.toggle('change');
	if (menuToToggle.style.display === 'flex') {
		menuToToggle.style.display = 'none';
		menuToToggle.classList.remove('fadeSlide');
		menuToToggle.classList.remove('fade');
		header.classList.remove('fade');
		mainContent.classList.remove('fade');
	} else {
		menuToToggle.style.display = 'flex';
		menuToToggle.classList.add('fadeSlide');
		menuToToggle.classList.add('fade');
		header.classList.add('fade');
		mainContent.classList.add('fade');
	}
}
