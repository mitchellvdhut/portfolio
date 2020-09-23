import React from 'react';
import Menu from './components/Menu.js';
import './App.css';
import './js/scripts.js';

function App() {
	return (
		<div className='App'>
			<header className='header'>
				<div class='container header-container'>
					<div class='branding'>
						<a href='#'>Mitchell van der Hut</a>
					</div>
					<Menu />
				</div>
				<div id="header_menu" class="header_menu fadeSlide fade">
					<ul id="menu-hoofdmenu" class="menu">
						<li id="menu-item-26" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-26"><a href="http://mitchellvdhut.com">Home</a></li>
						<li id="menu-item-25" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25"><a href="http://mitchellvdhut.com/projects/this-is-a-new-project/">Project 1</a></li>
						<li id="menu-item-31" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31"><a href="#">Over mij</a></li>
						<li id="menu-item-32" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-32"><a href="#">Contact</a></li>
					</ul>
				</div>
			</header>
			<footer>
				<div class='container'>
					<h1>FOOTER</h1>
				</div>
			</footer>
		</div>
	);
}

export default App;
