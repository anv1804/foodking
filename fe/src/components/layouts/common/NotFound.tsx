import React from 'react'

const NotFound = () => {
    return (
        <section className="error-section section-bg section-padding fix">
            <div className="container">
                <div className="error-content text-center">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        4<span>0</span>4
                    </h2>
                    <h3 className="wow fadeInUp" data-wow-delay=".5s">
                        we’re sorry page not found
                    </h3>
                    <a
                        href="index-2.html"
                        className="theme-btn style-line-height mt-5 wow fadeInUp"
                        data-wow-delay=".7s"
                    >
                        <span className="button-text">Back To Home</span>
                    </a>
                </div>
            </div>
        </section>

    )
}

export default NotFound