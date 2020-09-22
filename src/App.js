import React from 'react';
import logo from './logo.svg';
import './App.css';
import './js/scripts.js';

function App() {
	return (
		<div className='App'>
			<header>
				<div class='container header-container'>
					<div class='branding'>
						<a href='#'>Mitchell van der Hut</a>
					</div>
					<div class='hamburger-toggler' onclick='toggleMenu(this)'>
						<div class='bar1' />
						<div class='bar2' />
						<div class='bar3' />
					</div>
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
