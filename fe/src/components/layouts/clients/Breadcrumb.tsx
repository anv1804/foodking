import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
    return (
        <>
            {/*<< Breadcrumb Section Start >>*/}
            <div
                className="breadcrumb-wrapper bg-cover"
                style={{ backgroundImage: 'url("./src/assets/img/banner/breadcrumb.jpg")' }}
            >
                <div className="container">
                    <div className="page-heading center">
                        <h1>error page</h1>
                        <ul className="breadcrumb-items">
                            <li>
                                <Link to={``}>Home Page</Link>
                            </li>
                            <li>
                                <i className="far fa-chevron-right" />
                            </li>
                            <li>error page</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Breadcrumb