import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import ProjectContainer from './components/project/project';
import Footer from './components/footer/footer';
import Helmet from 'react-helmet';

function App() {
    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Projecten | mitchellvdhut.com</title>
            </Helmet>
            <Navbar />
            <div className="main container">
                <ProjectContainer />
            </div>
            <Footer />
        </div>
    );
}

export default App;
