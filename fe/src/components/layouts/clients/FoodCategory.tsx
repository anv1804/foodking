import React from 'react'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
const FoodCategory = () => {
    const swiper = new Swiper('.swiper.food-catagory-slider', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        slidesPerView: 4,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.array-next',
            prevEl: '.array-prev',
        },
    })
    return (
        <>
            {/* Food Catagory Section Start */}
            <section className="food-category-section fix section-padding section-bg">
                <div className="tomato-shape">
                    <img src="assets/img/shape/tomato-shape.png" alt="shape-img" />
                </div>
                <div className="burger-shape-2">
                    <img src="assets/img/shape/burger-shape-2.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-9">
                            <div className="section-title">
                                <span className="wow fadeInUp">crispy, every bite taste</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    Popular Food Items
                                </h2>
                            </div>
                        </div>
                        <div
                            className="col-md-5 ps-0 col-3 text-end wow fadeInUp"
                            data-wow-delay=".5s"
                        >
                            <div className="array-button rotate-90">
                                <button className="array-prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 7l-5 5l5 5" /></svg>
                                </button>
                                <button className="array-next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="0.5em" height="1em" viewBox="0 0 12 24"><path fill="currentColor" fillRule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="swiper food-catagory-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div
                                    className="catagory-product-card bg-cover"
                                    style={{
                                        backgroundImage:
                                            'url("./src/assets/img/shape/catagory-card-shape.jpg")'
                                    }}
                                >
                                    <h5>5 products</h5>
                                    <div className="catagory-product-image text-center">
                                        <a href="shop.html">
                                            <img src="./src/assets/img/food/pizza.png" alt="product-img" />
                                            <div className="decor-leaf">
                                                <img
                                                    src="./src/assets/img/shape/decor-leaf.svg"
                                                    alt="shape-img"
                                                />
                                            </div>
                                            <div className="decor-leaf-2">
                                                <img
                                                    src="./src/assets/img/shape/decor-leaf-2.svg"
                                                    alt="shape-img"
                                                />
                                            </div>
                                            <div className="burger-shape">
                                                <img
                                                    src="./src/assets/img/shape/burger-shape.png"
                                                    alt="shape-img"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="catagory-product-content text-center">
                                        <div className="catagory-product-icon">
                                            <img src="assets/img/shape/food-shape.svg" alt="shape-text" />
                                        </div>
                                        <h3>
                                            <a href="shop-single.html">pro pizza</a>
                                        </h3>
                                        <p>5 products</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div
                                    className="catagory-product-card bg-cover"
                                    style={{
                                        backgroundImage:
                                            'url("assets/img/shape/catagory-card-shape.jpg")'
                                    }}
                                >
                                    <h5>5 products</h5>
                                    <div className="catagory-product-image text-center">
                                        <a href="shop.html">
                                            <img src="assets/img/food/pasta.png" alt="product-img" />
                                            <div className="decor-leaf">
                                                <img
                                                    src="assets/img/shape/decor-leaf.svg"
                                                    alt="shape-img"
                                                />
                                            </div>
                                            <div className="decor-leaf-2">
                                                <img
                                                    src="assets/img/shape/decor-leaf-2.svg"
                                                    alt="shape-img"
                                                />
                                            </div>
                                            <div className="burger-shape">
                                                <img
                                                    src="assets/img/shape/burger-shape.png"
                                                    alt="shape-img"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="catagory-product-content text-center">
                                        <div className="catagory-product-icon">
                                            <img src="assets/img/shape/food-shape.svg" alt="shape-text" />
                                        </div>
                                        <h3>
                                            <a href="shop-single.html">pro pizza</a>
                                        </h3>
                                        <p>5 products</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div
                                    className="catagory-product-card bg-cover"
                                    style={{
                                        backgroundImage:
                                            'url("assets/img/shape/catagory-card-shape.jpg")'
                                    }}
                                >
                                    <h5>5 products</h5>
                                    <div className="catagory-product-image text-center">
                                        <a href="shop.html">
                                            <img src="assets/img/food/burger.png" alt="product-img" />
                                            <div className="decor-leaf">
                                                <img
                                                    src="assets/img/shape/decor-leaf.svg"
                                                    alt="shape-img"
                                                />
                                            </div>
                                            <div className="decor-leaf-2">
                                                <img
                                                    src="assets/img/shape/decor-leaf-2.svg"
                                                    alt="shape-img"
                                                />
                                            </div>
                                            <div className="burger-shape">
                                                <img
                                                    src="assets/img/shape/burger-shape.png"
                                                    alt="shape-img"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="catagory-product-content text-center">
                                        <div className="catagory-product-icon">
                                            <img src="assets/img/shape/food-shape.svg" alt="shape-text" />
                                        </div>
                                        <h3>
                                            <a href="shop-single.html">pro pizza</a>
                                        </h3>
                                        <p>5 products</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div
                                    className="catagory-product-card bg-cover"
                                    style={{
                                        backgroundImage:
                                            'url("assets/img/shape/catagory-card-shape.jpg")'
                                    }}
                                >
                                    <h5>5 products</h5>
                                    <div className="catagory-product-image text-center">
                                        <a href="shop.html">
                                            <img src="assets/img/food/french-fry.png" alt="product-img" />
                                            <div className="decor-leaf">
                                                <img
                                                    src="assets/img/shape/decor-leaf.svg"
                                                    alt="shape-img"
                                                />
                                            </div>
                                            <div className="decor-leaf-2">
                                                <img
                                                    src="assets/img/shape/decor-leaf-2.svg"
                                                    alt="shape-img"
                                                />
                                            </div>
                                            <div className="burger-shape">
                                                <img
                                                    src="assets/img/shape/burger-shape.png"
                                                    alt="shape-img"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="catagory-product-content text-center">
                                        <div className="catagory-product-icon">
                                            <img src="assets/img/shape/food-shape.svg" alt="shape-text" />
                                        </div>
                                        <h3>
                                            <a href="shop-single.html">pro pizza</a>
                                        </h3>
                                        <p>5 products</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default FoodCategory