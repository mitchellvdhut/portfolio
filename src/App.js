import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Router from './components/router/router';
import Footer from './components/footer/footer';
import Helmet from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs';

function App() {
    const dispatch = useDispatch();
    const location = useLocation();
    const menuStatus = useSelector(state => state.isMenuOpen);

    useEffect(() => {
        dispatch({ type: 'CLOSE_MENU' });
    }, [dispatch, location.pathname]);

    menuStatus
        ? document.body.classList.add('cover')
        : document.body.classList.remove('cover');

    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="description"
                    content="Welkom op de portfolio website van Mitchell van der Hut. Bekijk mijn projecten of mijn cv, en laat een berichtje achter!"
                />
                <title>Projecten | mitchellvdhut.com</title>
            </Helmet>
            <Navbar />
            <div className="main container">
                {location.pathname === '/' ? '' : <Breadcrumbs />}
                <Router />
            </div>
            <Footer />
        </div>
    );
}

export default App;
