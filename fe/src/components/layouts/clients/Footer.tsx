import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer-section fix section-bg">
            <div
                className="burger-shape"
                style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0%, -53.6%) translate3d(0px, 0px, 0px)"
                }}
            >
                <img src="./src/assets/img/shape/burger-shape-3.png" alt="burger-shape" />
            </div>
            <div
                className="fry-shape"
                style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)"
                }}
            >
                <img src="./src/assets/img/shape/fry-shape-2.png" alt="burger-shape" />
            </div>
            <div className="container">
                <div className="footer-widgets-wrapper">
                    <div className="row">
                        <div
                            className="col-xl-3 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
                            data-wow-delay=".2s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.2s",
                                animationName: "fadeInUp"
                            }}
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link to={``}>
                                        <img src="./src/assets/img/logo/logo.svg" alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        We believe it has the power to do <br />
                                        amazing things.
                                    </p>
                                    <span>Interested in working with us?</span> <br />
                                    <Link to={`mailto:info@example.com`} className="link">
                                        info@example.com
                                    </Link>
                                    <div className="social-icon d-flex align-items-center">
                                        <Link
                                            to={``}
                                            className="d-flex justify-content-center align-items-center hover-text-danger "
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="0.49em"
                                                height="1em"
                                                // color="blue"
                                                viewBox="0 0 486.037 1000"
                                                className=""
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000z"
                                                />
                                            </svg>
                                        </Link>
                                        <Link
                                            to={``}
                                            className="d-flex justify-content-center align-items-center hover-text-danger "
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                    d="M20 3.894a8.3 8.3 0 0 1-2.357.636a4.06 4.06 0 0 0 1.804-2.234a8.3 8.3 0 0 1-2.605.98A4.13 4.13 0 0 0 13.847 2c-2.266 0-4.103 1.808-4.103 4.04q0 .475.106.92a11.7 11.7 0 0 1-8.457-4.22a4 4 0 0 0-.556 2.03a4.02 4.02 0 0 0 1.826 3.362a4.14 4.14 0 0 1-1.859-.505v.05c0 1.957 1.414 3.59 3.29 3.961a4.2 4.2 0 0 1-1.852.07c.522 1.604 2.037 2.772 3.833 2.805a8.3 8.3 0 0 1-5.096 1.73A8 8 0 0 1 0 16.185A11.75 11.75 0 0 0 6.29 18c7.547 0 11.674-6.155 11.674-11.492q0-.263-.012-.523A8.3 8.3 0 0 0 20 3.895"
                                                />
                                            </svg>
                                        </Link>
                                        <Link
                                            to={``}
                                            className="d-flex justify-content-center align-items-center hover-text-danger "
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M17.318.077c1.218.056 2.06.235 2.838.537a5.4 5.4 0 0 1 1.956 1.274a5.4 5.4 0 0 1 1.274 1.956c.302.779.481 1.62.537 2.838C23.992 8.192 24 8.724 24 12s-.008 3.808-.077 5.318c-.056 1.218-.235 2.06-.537 2.839a5.4 5.4 0 0 1-1.274 1.955a5.4 5.4 0 0 1-1.956 1.274c-.779.302-1.62.481-2.838.537c-1.51.069-2.041.077-5.318.077s-3.809-.008-5.318-.077c-1.218-.056-2.06-.235-2.839-.537a5.4 5.4 0 0 1-1.955-1.274a5.4 5.4 0 0 1-1.274-1.956c-.302-.779-.481-1.62-.537-2.838C.008 15.81 0 15.278 0 12s.008-3.81.077-5.318c.056-1.218.235-2.06.537-2.838a5.4 5.4 0 0 1 1.274-1.956A5.4 5.4 0 0 1 3.843.614C4.623.312 5.464.133 6.682.077C8.19.008 8.722 0 12 0s3.81.008 5.318.077M12 2.667c-3.24 0-3.736.007-5.197.074c-.927.042-1.483.16-1.994.359c-.435.17-.712.35-1.036.673S3.27 4.374 3.1 4.81c-.198.51-.317 1.067-.359 1.994c-.067 1.46-.074 1.956-.074 5.196s.007 3.736.074 5.197c.042.927.16 1.483.359 1.993c.17.436.35.713.673 1.037s.601.504 1.036.673c.51.198 1.067.317 1.994.359c1.462.067 1.958.074 5.197.074c3.24 0 3.735-.007 5.197-.074c.927-.042 1.483-.16 1.994-.359c.435-.17.712-.35 1.036-.673s.504-.601.673-1.036c.198-.51.317-1.067.359-1.994c.067-1.462.074-1.958.074-5.197s-.007-3.735-.074-5.197c-.042-.927-.16-1.483-.359-1.993a2.7 2.7 0 0 0-.673-1.037A2.7 2.7 0 0 0 19.19 3.1c-.51-.198-1.067-.317-1.994-.359c-1.461-.067-1.957-.074-5.197-.074m0 15.555a6.222 6.222 0 1 1 0-12.444a6.222 6.222 0 0 1 0 12.444m0-2.666a3.556 3.556 0 1 0 0-7.112a3.556 3.556 0 0 0 0 7.112m6.222-8.445a1.333 1.333 0 1 1 0-2.667a1.333 1.333 0 0 1 0 2.667"
                                                />
                                            </svg>
                                        </Link>
                                        <Link
                                            to={``}
                                            className="d-flex justify-content-center align-items-center hover-text-danger "
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104l.022.26l.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105l-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006l-.087-.004l-.171-.007l-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103l.003-.052l.008-.104l.022-.26l.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007l.172-.006l.086-.003l.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-2 ps-lg-5 col-sm-6 col-md-3 col-lg-3 wow fadeInUp"
                            data-wow-delay=".4s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.4s",
                                animationName: "fadeInUp"
                            }}
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h4>Quick Links</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <Link to={``}>
                                            <span className="text-effect">
                                                <span className="effect-1">Services</span>
                                                <span className="effect-1">Services</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={``}>
                                            <span className="text-effect">
                                                <span className="effect-1">About company</span>
                                                <span className="effect-1">About company</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={``}>
                                            <span className="text-effect">
                                                <span className="effect-1">latest news</span>
                                                <span className="effect-1">latest news</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={``}>
                                            <span className="text-effect">
                                                <span className="effect-1">team member</span>
                                                <span className="effect-1">team member</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={``}>
                                            <span className="text-effect">
                                                <span className="effect-1">testimonials</span>
                                                <span className="effect-1">testimonials</span>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-2 ps-lg-4 col-sm-6 col-md-3 col-lg-3 wow fadeInUp"
                            data-wow-delay=".6s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.6s",
                                animationName: "fadeInUp"
                            }}
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h4>My account</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <Link to={``}>
                                            <span className="text-effect">
                                                <span className="effect-1">My Profile</span>
                                                <span className="effect-1">My Profile</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={``}>
                                            <span className="text-effect">
                                                <span className="effect-1">My Order History</span>
                                                <span className="effect-1">My Order History</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={``}>
                                            <span className="text-effect">
                                                <span className="effect-1">My Wish List</span>
                                                <span className="effect-1">My Wish List</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={``}>
                                            <span className="text-effect">
                                                <span className="effect-1">Order Tracking</span>
                                                <span className="effect-1">Order Tracking</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={``}>
                                            <span className="text-effect">
                                                <span className="effect-1">Shopping Cart</span>
                                                <span className="effect-1">Shopping Cart</span>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-2 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
                            data-wow-delay=".8s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.8s",
                                animationName: "fadeInUp"
                            }}
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h4>Address:</h4>
                                </div>
                                <div className="footer-address-text">
                                    <h6>
                                        570 8th Ave, New York,NY <span>10018</span>
                                        United States
                                    </h6>
                                    <h5>Hours:</h5>
                                    <h6>
                                        9.30am – 6.30pm <br />
                                        Monday to Friday
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 ps-xl-5 col-sm-6 col-md-6 col-lg-4 wow fadeInUp"
                            data-wow-delay=".9s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.9s",
                                animationName: "fadeInUp"
                            }}
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h4>Install app</h4>
                                </div>
                                <div className="footer-apps-items">
                                    <h5>From App Store or Google Play</h5>
                                    <div className="apps-image d-flex align-items-center">
                                        <Link to={``}>
                                            <img src="./src/assets/img/app-store.png" alt="store-img" />
                                        </Link>
                                        <Link to={``}>
                                            <img src="./src/assets/img/google-play.png" alt="store-img" />
                                        </Link>
                                    </div>
                                    <div className="support-text">
                                        <h5>24/7 Support center</h5>
                                        <h3>
                                            <Link to={`tel:+1718-904-4450`}>+1718-904-4450</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-wrapper d-flex align-items-center justify-content-between">
                        <p
                            className="wow fadeInLeft"
                            data-wow-delay=".3s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInLeft"
                            }}
                        >
                            © Copyright <span className="theme-color-3">2024</span>{" "}
                            <Link to={``}>Foodking </Link>. All Rights Reserved.
                        </p>
                        <div
                            className="card-image wow fadeInRight"
                            data-wow-delay=".5s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInRight"
                            }}
                        >
                            <img src="./src/assets/img/card.png" alt="card-img" />
                        </div>
                    </div>
                </div>
            </div>
        </footer >


    )
}

export default Footer