import { useEffect } from "react";
import $ from 'jquery';
const MyComponent = () => {
    useEffect(() => {
        toggleOverlay
        $(".sidebar__toggle").on("click", function () {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });
        return () => {
            $(".offcanvas__close, .offcanvas__overlay").off("click");
            $(".sidebar__toggle").off("click");
        };
    }, []);
    return (
        <>
            <>
                {/* Proloader Start */}
                {/* <div id="preloader" className="preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="F" className="letters-loading">
                                F
                            </span>
                            <span data-text-preloader="O" className="letters-loading">
                                O
                            </span>
                            <span data-text-preloader={0} className="letters-loading">
                                O
                            </span>
                            <span data-text-preloader="D" className="letters-loading">
                                D
                            </span>
                            <span data-text-preloader="K" className="letters-loading">
                                K
                            </span>
                            <span data-text-preloader="I" className="letters-loading">
                                I
                            </span>
                            <span data-text-preloader="N" className="letters-loading">
                                N
                            </span>
                            <span data-text-preloader="G" className="letters-loading">
                                G
                            </span>
                        </div>
                        <p className="text-center">Loading</p>
                    </div>
                    <div className="loader">
                        <div className="row">
                            <div className="col-3 loader-section section-left">
                                <div className="bg" />
                            </div>
                            <div className="col-3 loader-section section-left">
                                <div className="bg" />
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg" />
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg" />
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* Offcanvas Area Start */}
                <div className="fix-area">
                    <div className="offcanvas__info">
                        <div className="offcanvas__wrapper">
                            <div className="offcanvas__content">
                                <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                    <div className="offcanvas__logo">
                                        <a href="index-2.html">
                                            <img src="assets/img/logo/logo.svg" alt="logo-img" />
                                        </a>
                                    </div>
                                    <div className="offcanvas__close">
                                        <button>
                                            <i className="fas fa-times" />
                                        </button>
                                    </div>
                                </div>
                                <p className="text d-none d-lg-block">
                                    This involves interactions between a business and its customers.
                                    It's about meeting customers' needs and resolving their problems.
                                    Effective customer service is crucial.
                                </p>
                                <div className="offcanvas-gallery-area d-none d-lg-block">
                                    <div className="offcanvas-gallery-items">
                                        <a
                                            href="assets/img/header/01.jpg"
                                            className="offcanvas-image img-popup"
                                        >
                                            <img src="assets/img/header/01.jpg" alt="gallery-img" />
                                        </a>
                                        <a
                                            href="assets/img/header/02.jpg"
                                            className="offcanvas-image img-popup"
                                        >
                                            <img src="assets/img/header/02.jpg" alt="gallery-img" />
                                        </a>
                                        <a
                                            href="assets/img/header/03.jpg"
                                            className="offcanvas-image img-popup"
                                        >
                                            <img src="assets/img/header/03.jpg" alt="gallery-img" />
                                        </a>
                                    </div>
                                    <div className="offcanvas-gallery-items">
                                        <a
                                            href="assets/img/header/04.jpg"
                                            className="offcanvas-image img-popup"
                                        >
                                            <img src="assets/img/header/04.jpg" alt="gallery-img" />
                                        </a>
                                        <a
                                            href="assets/img/header/05.jpg"
                                            className="offcanvas-image img-popup"
                                        >
                                            <img src="assets/img/header/05.jpg" alt="gallery-img" />
                                        </a>
                                        <a
                                            href="assets/img/header/06.jpg"
                                            className="offcanvas-image img-popup"
                                        >
                                            <img src="assets/img/header/06.jpg" alt="gallery-img" />
                                        </a>
                                    </div>
                                </div>
                                <div className="mobile-menu fix mb-3" />
                                <div className="offcanvas__contact">
                                    <h4>Contact Info</h4>
                                    <ul>
                                        <li className="d-flex align-items-center">
                                            <div className="offcanvas__contact-icon">
                                                <i className="fal fa-map-marker-alt" />
                                            </div>
                                            <div className="offcanvas__contact-text">
                                                <a target="_blank" href="#">
                                                    Main Street, Melbourne, Australia
                                                </a>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <div className="offcanvas__contact-icon mr-15">
                                                <i className="fal fa-envelope" />
                                            </div>
                                            <div className="offcanvas__contact-text">
                                                <a href="tel:+013-003-003-9993">
                                                    <span className="mailto:info@enofik.com">
                                                        info@foodking.com
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <div className="offcanvas__contact-icon mr-15">
                                                <i className="fal fa-clock" />
                                            </div>
                                            <div className="offcanvas__contact-text">
                                                <a target="_blank" href="#">
                                                    Mod-friday, 09am -05pm
                                                </a>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <div className="offcanvas__contact-icon mr-15">
                                                <i className="far fa-phone" />
                                            </div>
                                            <div className="offcanvas__contact-text">
                                                <a href="tel:+11002345909">+11002345909</a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="header-button mt-4">
                                        <a href="shop-single.html" className="theme-btn">
                                            <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                                                <span className="button-icon">
                                                    <i className="flaticon-delivery" />
                                                </span>
                                                <span className="button-text">order now</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="social-icon d-flex align-items-center">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas__overlay" />
            </>

            <header className="section-bg">
                <div className="header-top">
                    <div className="container">
                        <div className="header-top-wrapper">
                            <ul>
                                <li>
                                    <span>100%</span> Secure delivery without contacting the courier
                                </li>
                                <li>
                                    <i className="fas fa-truck" />
                                    Track Your Order
                                </li>
                            </ul>
                            <div className="top-right">
                                <div className="search-wrp">
                                    <button>
                                        <i className="far fa-search" />
                                    </button>
                                    <input placeholder="Search" aria-label="Search" />
                                </div>
                                <div className="social-icon d-flex align-items-center">
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-vimeo-v" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-pinterest-p" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-sticky" className="header-1">
                    <div className="container">
                        <div className="mega-menu-wrapper">
                            <div className="header-main">
                                <div className="logo">
                                    <a href="" className="header-logo">
                                        <img src="./src/assets/img/logo/logo.svg" alt="logo-img" />
                                    </a>
                                </div>
                                <div className="header-left">
                                    <div className="mean__menu-wrapper d-none d-lg-block">
                                        <div className="main-menu">
                                            <nav id="mobile-menu">
                                                <ul>
                                                    <li className="has-dropdown active">
                                                        <a href="index-2.html">
                                                            Home Page
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"></path></svg>
                                                        </a>
                                                        <ul className="submenu has-homemenu">
                                                            <li className="border-none">
                                                                <div className="row g-4">
                                                                    <div className="col-lg-4 homemenu">
                                                                        <div className="homemenu-thumb">
                                                                            <img
                                                                                src="./src/assets/img/header/home-1.jpg"
                                                                                alt="img"
                                                                            />
                                                                            <div className="demo-button">
                                                                                <a href="index-2.html" className="theme-btn">
                                                                                    View Demo
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="homemenu-content text-center">
                                                                            <h4 className="homemenu-title">
                                                                                <a href="index-2.html">Home 01</a>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4  homemenu">
                                                                        <div className="homemenu-thumb mb-15">
                                                                            <img
                                                                                src="./src/assets/img/header/home-2.jpg"
                                                                                alt="img"
                                                                            />
                                                                            <div className="demo-button">
                                                                                <a href="index-3.html" className="theme-btn">
                                                                                    View Demo
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="homemenu-content text-center">
                                                                            <h4 className="homemenu-title">
                                                                                <a href="index-3.html">Home 02</a>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 homemenu">
                                                                        <div className="homemenu-thumb mb-15">
                                                                            <img
                                                                                src="./src/assets/img/header/home-3.jpg"
                                                                                alt="img"
                                                                            />
                                                                            <div className="demo-button">
                                                                                <a href="index-4.html" className="theme-btn">
                                                                                    View Demo
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="homemenu-content text-center">
                                                                            <h4 className="homemenu-title">
                                                                                <a href="index-4.html">Home 03</a>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 homemenu">
                                                                        <div className="homemenu-thumb">
                                                                            <img
                                                                                src="./src/assets/img/header/home-4.jpg"
                                                                                alt="img"
                                                                            />
                                                                            <div className="demo-button">
                                                                                <a href="index-5.html" className="theme-btn">
                                                                                    View Demo
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="homemenu-content text-center">
                                                                            <h4 className="homemenu-title">
                                                                                <a href="index-5.html">Home 04</a>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4  homemenu">
                                                                        <div className="homemenu-thumb mb-15">
                                                                            <img
                                                                                src="./src/assets/img/header/home-5.jpg"
                                                                                alt="img"
                                                                            />
                                                                            <div className="demo-button">
                                                                                <a href="index-6.html" className="theme-btn">
                                                                                    View Demo
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="homemenu-content text-center">
                                                                            <h4 className="homemenu-title">
                                                                                <a href="index-6.html">Home 05</a>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 homemenu">
                                                                        <div className="homemenu-thumb mb-15">
                                                                            <img
                                                                                src="./src/assets/img/header/home-6.jpg"
                                                                                alt="img"
                                                                            />
                                                                            <div className="demo-button">
                                                                                <a href="index-7.html" className="theme-btn">
                                                                                    View Demo
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="homemenu-content text-center">
                                                                            <h4 className="homemenu-title">
                                                                                <a href="index-7.html">Home 06</a>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-dropdown">
                                                        <a href="shop.html">
                                                            Shop
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"></path></svg>
                                                        </a>
                                                        <ul className="submenu">
                                                            <li>
                                                                <a href="shop.html">Shop Grid</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-list.html">Shop List</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-left-sidebar.html">Shop Left SideBar</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-right-sidebar.html">
                                                                    Shop Right SideBar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-single.html">Shop Single</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-single-2.html">Shop Single 2</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-cart.html">Shop Cart</a>
                                                            </li>
                                                            <li>
                                                                <a href="checkout.html">checkout</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="news.html">
                                                            Blog
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"></path></svg>
                                                        </a>
                                                        <ul className="submenu">
                                                            <li>
                                                                <a href="news.html">Blog</a>
                                                            </li>
                                                            <li>
                                                                <a href="news-details.html">Blog Details</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-dropdown">
                                                        <a href="news.html">
                                                            Pages
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"></path></svg>
                                                        </a>
                                                        <ul className="submenu">
                                                            <li>
                                                                <a href="about.html">About Us</a>
                                                            </li>
                                                            <li className="has-dropdown">
                                                                <a href="team.html">
                                                                    Chef Page
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"></path></svg>
                                                                </a>
                                                                <ul className="submenu">
                                                                    <li>
                                                                        <a href="team.html">Chef</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="team-details.html">Chef Details</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="has-dropdown">
                                                                <a href="food-menu.html">
                                                                    Food Menu
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"></path></svg>
                                                                </a>
                                                                <ul className="submenu">
                                                                    <li>
                                                                        <a href="food-menu.html"> Food Menu 01</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="food-menu-2.html"> Food Menu 02</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="gallery.html">Gallery</a>
                                                            </li>
                                                            <li>
                                                                <a href="testimonial.html">testimonial</a>
                                                            </li>
                                                            <li>
                                                                <a href="reservation.html">Reservation</a>
                                                            </li>
                                                            <li>
                                                                <a href="faq.html">Faq's</a>
                                                            </li>
                                                            <li>
                                                                <a href="404.html">404 Page</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">Contact</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                            {/* for wp */}
                                        </div>
                                    </div>
                                </div>
                                <div className="header-right d-flex justify-content-end align-items-center">
                                    <div className="menu-cart">
                                        <div className="cart-box">
                                            <ul>
                                                <li>
                                                    <img src="./src/assets/img/shop-food/s2.png" alt="image" />
                                                    <div className="cart-product">
                                                        <a href="#0">grilled chiken</a>
                                                        <span>168$</span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li className="border-none">
                                                    <img src="./src/assets/img/shop-food/s3.png" alt="image" />
                                                    <div className="cart-product">
                                                        <a href="#0">grilled chiken</a>
                                                        <span>168$</span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="shopping-items d-flex align-items-center justify-content-between">
                                                <span>Shopping : $20.00</span>
                                                <span>Total : $168.00</span>
                                            </div>
                                            <div className="cart-button d-flex justify-content-between mb-4">
                                                <a href="shop-cart.html" className="theme-btn">
                                                    View Cart
                                                </a>
                                                <a href="checkout.html" className="theme-btn bg-red-2">
                                                    Checkout
                                                </a>
                                            </div>
                                        </div>
                                        <a href="shop-cart.html" className="cart-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8.75 13a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm7.25-.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-3.25.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"></path><path fill="currentColor" fillRule="evenodd" d="M17.274 3.473c-.476-.186-1.009-.217-1.692-.222A1.75 1.75 0 0 0 14 2.25h-4a1.75 1.75 0 0 0-1.582 1c-.684.006-1.216.037-1.692.223A3.25 3.25 0 0 0 5.3 4.563c-.367.493-.54 1.127-.776 1.998l-.628 2.303a3 3 0 0 0-1.01.828c-.622.797-.732 1.746-.621 2.834c.107 1.056.44 2.386.856 4.05l.026.107c.264 1.052.477 1.907.731 2.574c.265.696.602 1.266 1.156 1.699c.555.433 1.19.62 1.929.71c.708.084 1.59.084 2.675.084h4.724c1.085 0 1.966 0 2.675-.085c.74-.088 1.374-.276 1.928-.71c.555-.432.891-1.002 1.156-1.698c.255-.667.468-1.522.731-2.575l.027-.105c.416-1.665.748-2.995.856-4.05c.11-1.09 0-2.038-.622-2.835a3 3 0 0 0-1.009-.828l-.628-2.303c-.237-.871-.41-1.505-.776-1.999a3.25 3.25 0 0 0-1.426-1.089M7.272 4.87c.22-.086.486-.111 1.147-.118c.282.59.884.998 1.58.998h4c.698 0 1.3-.408 1.582-.998c.661.007.927.032 1.147.118c.306.12.572.323.768.587c.176.237.279.568.57 1.635l.354 1.297c-1.038-.139-2.378-.139-4.043-.139H9.622c-1.664 0-3.004 0-4.042.139l.354-1.297c.29-1.067.394-1.398.57-1.635a1.75 1.75 0 0 1 .768-.587M10 3.75a.25.25 0 0 0 0 .5h4a.25.25 0 1 0 0-.5zm-5.931 6.865c.279-.357.72-.597 1.63-.729c.931-.134 2.193-.136 3.986-.136h4.63c1.793 0 3.054.002 3.985.136c.911.132 1.352.372 1.631.73c.279.357.405.842.311 1.758c-.095.936-.399 2.16-.834 3.9c-.277 1.108-.47 1.876-.688 2.45c-.212.554-.419.847-.678 1.05c-.259.202-.594.331-1.183.402c-.61.073-1.4.074-2.544.074h-4.63c-1.144 0-1.935-.001-2.544-.074c-.59-.07-.924-.2-1.183-.402c-.26-.203-.467-.496-.678-1.05c-.218-.574-.411-1.342-.689-2.45c-.434-1.74-.739-2.964-.834-3.9c-.093-.916.033-1.402.312-1.759" clipRule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                    <div className="header-button">
                                        <a href="contact.html" className="theme-btn bg-red-2">
                                            contact us
                                        </a>
                                    </div>
                                    <div className="header__hamburger d-xl-block my-auto">
                                        <div className="sidebar__toggle">
                                            <div className="header-bar">
                                                <span />
                                                <span />
                                                <span />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default MyComponent;
