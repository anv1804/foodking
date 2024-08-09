import React from 'react'

const Loading = () => {
    return (
        <div id="preloader" className="preloader">
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
        </div>
    )
}

export default Loading