import React, { Component } from 'react';

export default class Menu extends Component {

    constructor(props) {
        super();
        this.state = { addClass: false };
    }
    componentDidMount() {
        
    }
    
    toggle() {
        this.setState({addClass: !this.state.addClass});
        
        var menuToToggle = document.getElementById('header_menu');
        var header = document.getElementsByTagName('header');
        var mainContent = document.getElementById('main-content');

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

    render() {
        let menu = ["menuClosed"];
        if(this.state.addClass) {
            menu.push('menuOpen');
        }

        console.log(this.state)

        return(
            <div className={`${menu.join(' ')} hamburger-toggler`} onClick={this.toggle.bind(this)}>
                <div className='bar1' />
                <div className='bar2' />
                <div className='bar3' />
            </div>
        )
    }
}