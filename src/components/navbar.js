import React, {useState} from 'react';
import Hamburger from "./hamburger";
import Menu from "./menu";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className='header'>
            <div className='container header-container'>
                <div className='branding'>
                    <a href='#'>Mitchell van der Hut</a>
                </div>
                <Hamburger callback={setIsOpen} isOpen={isOpen}/>
                <Menu expand={isOpen}/>
            </div>
        </header>
    );
};

export default Navbar ;
