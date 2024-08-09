import React from 'react'
import Swiper from 'swiper';

const Hero = () => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    return (
        <section className="hero-section">
            <div className="swiper hero-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div
                            className="hero-1 bg-cover"
                            style={{ backgroundImage: 'url("./src/assets/img/hero/hero-bg.jpg")' }}
                        >
                            <div
                                className="chilii-shape"
                                data-animation="fadeInUp"
                                data-delay="2.1s"
                            >
                                <img src="./src/assets/img/hero/chilli-shape.png" alt="shape-img" />
                            </div>
                            <div
                                className="fire-shape"
                                data-animation="fadeInUp"
                                data-delay="2.4s"
                            >
                                <img src="./src/assets/img/hero/fire-shape.png" alt="shape-img" />
                            </div>
                            <div
                                className="chilii-shape-2"
                                data-animation="fadeInUp"
                                data-delay="2.7s"
                            >
                                <img src="./src/assets/img/hero/chilli-shape-2.png" alt="shape-img" />
                            </div>
                            <div
                                className="chilii-shape-3"
                                data-animation="fadeInUp"
                                data-delay="3s"
                            >
                                <img src="./src/assets/img/hero/chilli-shape-3.png" alt="shape-img" />
                            </div>
                            <div
                                className="offer-shape"
                                data-animation="fadeInUp"
                                data-delay="2.1s"
                            >
                                <img src="./src/assets/img/hero/offer-shape.png" alt="shape-img" />
                            </div>
                            <h2
                                className="hero-back-title"
                                data-animation="fadeInRight"
                                data-delay="2.5s"
                            >
                                fast food
                            </h2>
                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="col-xl-5 col-lg-7">
                                        <div className="hero-content">
                                            <p data-animation="fadeInUp">crispy, every bite taste</p>
                                            <h1 data-animation="fadeInUp" data-delay="0.5s">
                                                delicious
                                                <span>fried</span>
                                                chiken
                                            </h1>
                                            <div className="hero-button">
                                                <a
                                                    href="shop-single.html"
                                                    className="theme-btn"
                                                    data-animation="fadeInUp"
                                                    data-delay="0.9s"
                                                >
                                                    <span className="button-content-wrapper d-flex gap-2 align-items-center justify-content-center">
                                                        <span className="button-icon">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="1.8em"
                                                                height="1.8em"
                                                                color="#fff"
                                                                viewBox="0 0 24 24"
                                                                className=""
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M.75 7.5h9.75l.75 1.5H1.5zm1 3h9.75l.75 1.5H2.5zm16.25 8c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM8 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3h-4c0 1.66-1.35 3-3 3c-1.66 0-3-1.34-3-3H3v-3.5h2V15h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6H3c0-1.11.89-2 2-2h12v4z"
                                                                />
                                                            </svg>{" "}
                                                        </span>
                                                        <span className="button-text">Đặt hàng ngay</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                                        <div
                                            className="chiken-image"
                                            data-animation="fadeInUp"
                                            data-delay="1.4s"
                                        >
                                            <img src="./src/assets/img/hero/chiken.png" alt="chiken-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div
                            className="hero-1 bg-cover"
                            style={{ backgroundImage: 'url("./src/assets/img/hero/hero-bg.jpg")' }}
                        >
                            <div
                                className="chilii-shape"
                                data-animation="fadeInUp"
                                data-delay="2.1s"
                            >
                                <img src="./src/assets/img/hero/chilli-shape.png" alt="shape-img" />
                            </div>
                            <div
                                className="fire-shape"
                                data-animation="fadeInUp"
                                data-delay="2.4s"
                            >
                                <img src="./src/assets/img/hero/fire-shape.png" alt="shape-img" />
                            </div>
                            <div
                                className="chilii-shape-2"
                                data-animation="fadeInUp"
                                data-delay="2.7s"
                            >
                                <img src="./src/assets/img/hero/chilli-shape-2.png" alt="shape-img" />
                            </div>
                            <div
                                className="chilii-shape-3"
                                data-animation="fadeInUp"
                                data-delay="3s"
                            >
                                <img src="./src/assets/img/hero/chilli-shape-3.png" alt="shape-img" />
                            </div>
                            <div
                                className="offer-shape"
                                data-animation="fadeInUp"
                                data-delay="2.1s"
                            >
                                <img src="./src/assets/img/hero/offer-shape.png" alt="shape-img" />
                            </div>
                            <h2
                                className="hero-back-title"
                                data-animation="fadeInRight"
                                data-delay="2.5s"
                            >
                                fast food
                            </h2>
                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="col-xl-5 col-lg-7">
                                        <div className="hero-content">
                                            <p data-animation="fadeInUp">crispy, every bite taste</p>
                                            <h1 data-animation="fadeInUp" data-delay="0.5s">
                                                Awesome
                                                <span>fried</span>
                                                chiken
                                            </h1>
                                            <div className="hero-button">
                                                <a
                                                    href="shop-single.html"
                                                    className="theme-btn"
                                                    data-animation="fadeInUp"
                                                    data-delay="0.9s"
                                                >
                                                    <span className="button-content-wrapper d-flex gap-2 align-items-center justify-content-center">
                                                        <span className="button-icon">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="1.8em"
                                                                height="1.8em"
                                                                color="#fff"
                                                                viewBox="0 0 24 24"
                                                                className=""
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M.75 7.5h9.75l.75 1.5H1.5zm1 3h9.75l.75 1.5H2.5zm16.25 8c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM8 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3h-4c0 1.66-1.35 3-3 3c-1.66 0-3-1.34-3-3H3v-3.5h2V15h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6H3c0-1.11.89-2 2-2h12v4z"
                                                                />
                                                            </svg>{" "}
                                                        </span>
                                                        <span className="button-text">Đặt hàng ngay</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                                        <div
                                            className="chiken-image"
                                            data-animation="fadeInUp"
                                            data-delay="1.4s"
                                        >
                                            <img src="./src/assets/img/hero/chiken.png" alt="chiken-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div
                            className="hero-1 bg-cover"
                            style={{ backgroundImage: 'url("./src/assets/img/hero/hero-bg.jpg")' }}
                        >
                            <div
                                className="chilii-shape"
                                data-animation="fadeInUp"
                                data-delay="2.1s"
                            >
                                <img src="./src/assets/img/hero/chilli-shape.png" alt="shape-img" />
                            </div>
                            <div
                                className="fire-shape"
                                data-animation="fadeInUp"
                                data-delay="2.4s"
                            >
                                <img src="./src/assets/img/hero/fire-shape.png" alt="shape-img" />
                            </div>
                            <div
                                className="chilii-shape-2"
                                data-animation="fadeInUp"
                                data-delay="2.7s"
                            >
                                <img src="./src/assets/img/hero/chilli-shape-2.png" alt="shape-img" />
                            </div>
                            <div
                                className="chilii-shape-3"
                                data-animation="fadeInUp"
                                data-delay="3s"
                            >
                                <img src="./src/assets/img/hero/chilli-shape-3.png" alt="shape-img" />
                            </div>
                            <div
                                className="offer-shape"
                                data-animation="fadeInUp"
                                data-delay="2.1s"
                            >
                                <img src="./src/assets/img/hero/offer-shape.png" alt="shape-img" />
                            </div>
                            <h2
                                className="hero-back-title"
                                data-animation="fadeInRight"
                                data-delay="2.5s"
                            >
                                fast food
                            </h2>
                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="col-xl-5 col-lg-7">
                                        <div className="hero-content">
                                            <p data-animation="fadeInUp">crispy, every bite taste</p>
                                            <h1 data-animation="fadeInUp" data-delay="0.5s">
                                                Favorite
                                                <span>fried</span>
                                                chiken
                                            </h1>
                                            <div className="hero-button">
                                                <a
                                                    href="shop-single.html"
                                                    className="theme-btn"
                                                    data-animation="fadeInUp"
                                                    data-delay="0.9s"
                                                >
                                                    <span className="button-content-wrapper d-flex gap-2 align-items-center justify-content-center">
                                                        <span className="button-icon">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="1.8em"
                                                                height="1.8em"
                                                                color="#fff"
                                                                viewBox="0 0 24 24"
                                                                className=""
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M.75 7.5h9.75l.75 1.5H1.5zm1 3h9.75l.75 1.5H2.5zm16.25 8c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM8 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3h-4c0 1.66-1.35 3-3 3c-1.66 0-3-1.34-3-3H3v-3.5h2V15h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6H3c0-1.11.89-2 2-2h12v4z"
                                                                />
                                                            </svg>{" "}
                                                        </span>
                                                        <span className="button-text">Đặt hàng ngay</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                                        <div
                                            className="chiken-image"
                                            data-animation="fadeInUp"
                                            data-delay="1.4s"
                                        >
                                            <img src="./src/assets/img/hero/chiken.png" alt="chiken-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div
                            className="hero-1 bg-cover"
                            style={{ backgroundImage: 'url("./src/assets/img/hero/hero-bg.jpg")' }}
                        >
                            <div
                                className="chilii-shape"
                                data-animation="fadeInUp"
                                data-delay="2.1s"
                            >
                                <img src="./src/assets/img/hero/chilli-shape.png" alt="shape-img" />
                            </div>
                            <div
                                className="fire-shape"
                                data-animation="fadeInUp"
                                data-delay="2.4s"
                            >
                                <img src="./src/assets/img/hero/fire-shape.png" alt="shape-img" />
                            </div>
                            <div
                                className="chilii-shape-2"
                                data-animation="fadeInUp"
                                data-delay="2.7s"
                            >
                                <img src="./src/assets/img/hero/chilli-shape-2.png" alt="shape-img" />
                            </div>
                            <div
                                className="chilii-shape-3"
                                data-animation="fadeInUp"
                                data-delay="3s"
                            >
                                <img src="./src/assets/img/hero/chilli-shape-3.png" alt="shape-img" />
                            </div>
                            <div
                                className="offer-shape"
                                data-animation="fadeInUp"
                                data-delay="2.1s"
                            >
                                <img src="./src/assets/img/hero/offer-shape.png" alt="shape-img" />
                            </div>
                            <h2
                                className="hero-back-title"
                                data-animation="fadeInRight"
                                data-delay="2.5s"
                            >
                                fast food
                            </h2>
                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="col-xl-5 col-lg-7">
                                        <div className="hero-content">
                                            <p data-animation="fadeInUp">crispy, every bite taste</p>
                                            <h1 data-animation="fadeInUp" data-delay="0.5s">
                                                delicious
                                                <span>fried</span>
                                                chiken
                                            </h1>
                                            <div className="hero-button">
                                                <a
                                                    href="shop-single.html"
                                                    className="theme-btn"
                                                    data-animation="fadeInUp"
                                                    data-delay="0.9s"
                                                >
                                                    <span className="button-content-wrapper d-flex gap-2 align-items-center justify-content-center">
                                                        <span className="button-icon">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="1.8em"
                                                                height="1.8em"
                                                                color="#fff"
                                                                viewBox="0 0 24 24"
                                                                className=""
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M.75 7.5h9.75l.75 1.5H1.5zm1 3h9.75l.75 1.5H2.5zm16.25 8c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM8 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3h-4c0 1.66-1.35 3-3 3c-1.66 0-3-1.34-3-3H3v-3.5h2V15h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6H3c0-1.11.89-2 2-2h12v4z"
                                                                />
                                                            </svg>{" "}
                                                        </span>
                                                        <span className="button-text">Đặt hàng ngay</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                                        <div
                                            className="chiken-image"
                                            data-animation="fadeInUp"
                                            data-delay="1.4s"
                                        >
                                            <img src="./src/assets/img/hero/chiken.png" alt="chiken-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-dot text-center pt-5">
                    <div className="dot" />
                </div>
            </div>
        </section>

    )
}

export default Hero