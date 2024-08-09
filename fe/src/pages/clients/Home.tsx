import React from 'react'
import Header from "../../components/layouts/clients/Header";
import Footer from '@/components/layouts/clients/Footer';
import Hero from '@/components/layouts/clients/Hero';
import FoodCategory from '@/components/layouts/clients/FoodCategory';
import ScrollToTop from '../../components/layouts/common/ScrollToTop';


const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <FoodCategory />
            <ScrollToTop />
            <Footer />
        </>
    )
}

export default Home