import React from 'react';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Service></Service>
        </div>
    );
};

export default Home;