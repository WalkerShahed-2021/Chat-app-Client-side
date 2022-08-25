import React from 'react';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import Service from './Service/Service';
import Footer from './Shared/Footer/Footer';
// import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Service></Service>
            {/* <Testimonials></Testimonials> */}
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;