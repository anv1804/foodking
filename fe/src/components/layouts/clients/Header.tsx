import { useEffect } from "react";
import $ from "jquery";
import { toggleOverlay, toggleSideBar } from "@/services/toggle-menu-bar";
import { Link, NavLink } from "react-router-dom";
const MyComponent = () => {
  useEffect(() => {
    toggleOverlay();
    toggleSideBar();
    return () => {

    };
  }, []);
  return (
    <>
      <>
        {/* Offcanvas Area Start */}
        <div className="fix-area">
          <div className="offcanvas__info">
            <div className="offcanvas__wrapper">
              <div className="offcanvas__content">
                <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                  <div className="offcanvas__logo">
                    <a href="index-2.html">
                      <img
                        src="./src/assets/img/logo/logo.svg"
                        alt="logo-img"
                      />
                    </a>
                  </div>
                  <div className="offcanvas__close">
                    <button className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="0.9em"
                        height="0.9em"
                        viewBox="0 0 24 24"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <path
                          fill="currentColor"
                          color="#fff"
                          d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="text d-none d-lg-block">
                  This involves interactions between a business and its
                  customers. It's about meeting customers' needs and resolving
                  their problems. Effective customer service is crucial.
                </p>
                <div className="offcanvas-gallery-area d-none d-lg-block">
                  <div className="offcanvas-gallery-items">
                    <a
                      href="./src/assets/img/header/01.jpg"
                      className="offcanvas-image img-popup"
                    >
                      <img
                        src="./src/assets/img/header/01.jpg"
                        alt="gallery-img"
                      />
                    </a>
                    <a
                      href="./src/assets/img/header/02.jpg"
                      className="offcanvas-image img-popup"
                    >
                      <img
                        src="./src/assets/img/header/02.jpg"
                        alt="gallery-img"
                      />
                    </a>
                    <a
                      href="./src/assets/img/header/03.jpg"
                      className="offcanvas-image img-popup"
                    >
                      <img
                        src="./src/assets/img/header/03.jpg"
                        alt="gallery-img"
                      />
                    </a>
                  </div>
                  <div className="offcanvas-gallery-items">
                    <a
                      href="./src/assets/img/header/04.jpg"
                      className="offcanvas-image img-popup"
                    >
                      <img
                        src="./src/assets/img/header/04.jpg"
                        alt="gallery-img"
                      />
                    </a>
                    <a
                      href="./src/assets/img/header/05.jpg"
                      className="offcanvas-image img-popup"
                    >
                      <img
                        src="./src/assets/img/header/05.jpg"
                        alt="gallery-img"
                      />
                    </a>
                    <a
                      href="./src/assets/img/header/06.jpg"
                      className="offcanvas-image img-popup"
                    >
                      <img
                        src="./src/assets/img/header/06.jpg"
                        alt="gallery-img"
                      />
                    </a>
                  </div>
                </div>
                <div className="mobile-menu fix mb-3" />
                <div className="offcanvas__contact">
                  <h4>Contact Info</h4>
                  <ul>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            color="#D12525"
                            d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5"
                          />
                        </svg>
                      </div>
                      <div className="offcanvas__contact-text">
                        <a target="_blank" href="#">
                          Main Street, Melbourne, Australia
                        </a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            color="#D12525"
                            d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                          />
                        </svg>
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            color="#D12525"
                            d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z"
                          />
                        </svg>
                      </div>
                      <div className="offcanvas__contact-text">
                        <a target="_blank" href="#">
                          Mod-friday, 09am -05pm
                        </a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          color="#D12525"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                          />
                        </svg>
                      </div>
                      <div className="offcanvas__contact-text">
                        <a href="tel:+11002345909">+11002345909</a>
                      </div>
                    </li>
                  </ul>
                  <div className="header-button mt-4">
                    <a href="shop-single.html" className="theme-btn">
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
                  <div className="social-icon d-flex align-items-center">
                    <a
                      href="#"
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
                    </a>
                    <a
                      href="#"
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
                    </a>
                    <a
                      href="#"
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
                    </a>
                    <a
                      href="#"
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
                  <span>100%</span> Secure delivery without contacting the
                  courier
                </li>
                <li className="d-flex align-items-center gap-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.6em"
                    height="1.6em"
                    color="#D12525"
                    viewBox="0 0 24 24"
                    className="mr-2"
                  >
                    <path
                      fill="currentColor"
                      d="M.75 7.5h9.75l.75 1.5H1.5zm1 3h9.75l.75 1.5H2.5zm16.25 8c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM8 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3h-4c0 1.66-1.35 3-3 3c-1.66 0-3-1.34-3-3H3v-3.5h2V15h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6H3c0-1.11.89-2 2-2h12v4z"
                    />
                  </svg>{" "}
                  Giao hàng siêu tốc
                </li>
              </ul>
              <div className="top-right">
                <div className="search-wrp d-flex justify-content-center align-items-center">
                  <button className="d-flex justify-content-center align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      color="#D12525"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21l-4.3-4.3" />
                      </g>
                    </svg>
                  </button>
                  <input placeholder="Tìm Kiếm" aria-label="Search" />
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a
                    href="#"
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
                  </a>
                  <a
                    href="#"
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
                  </a>
                  <a
                    href="#"
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
                  </a>
                  <a
                    href="#"
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
                            <NavLink
                              to={``}
                              className="d-flex align-items-center"
                            >
                              Trang Chủ
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
                                ></path>
                              </svg>
                            </NavLink>
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
                                        <a
                                          href="index-2.html"
                                          className="theme-btn"
                                        >
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
                                        <a
                                          href="index-3.html"
                                          className="theme-btn"
                                        >
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
                                        <a
                                          href="index-4.html"
                                          className="theme-btn"
                                        >
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
                                        <a
                                          href="index-5.html"
                                          className="theme-btn"
                                        >
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
                                        <a
                                          href="index-6.html"
                                          className="theme-btn"
                                        >
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
                                        <a
                                          href="index-7.html"
                                          className="theme-btn"
                                        >
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
                          <li>
                            <NavLink
                              to={`/san-pham`}
                              className="d-flex align-items-center"
                            >
                              dịch vụ
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
                                ></path>
                              </svg>
                            </NavLink>
                            <ul className="submenu">
                              <li>
                                <Link
                                  to="news.html"
                                  className="d-flex align-items-center gap-2"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 256 256"
                                  >
                                    <g fill="currentColor">
                                      <path
                                        d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8"
                                        opacity="0.2"
                                      />
                                      <path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-96-88v64a8 8 0 0 1-16 0v-51.06l-4.42 2.22a8 8 0 0 1-7.16-14.32l16-8A8 8 0 0 1 112 120m59.16 30.45L152 176h16a8 8 0 0 1 0 16h-32a8 8 0 0 1-6.4-12.8l28.78-38.37a8 8 0 1 0-13.31-8.83a8 8 0 1 1-13.85-8A24 24 0 0 1 176 136a23.76 23.76 0 0 1-4.84 14.45" />
                                    </g>
                                  </svg>
                                  Đặt bàn
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="news-details.html"
                                  className="d-flex align-items-center gap-2"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="1.5"
                                      d="M20.198 3.002H3.802c-.75 0-1.126 0-1.386.177a1 1 0 0 0-.31.338c-.153.273-.116.64-.041 1.376c.125 1.228.187 1.842.513 2.28c.163.22.369.403.606.54c.476.277 1.102.277 2.355.277h12.922c1.253 0 1.879 0 2.355-.277c.237-.137.443-.32.606-.54c.326-.438.388-1.052.513-2.28c.075-.736.112-1.103-.04-1.376a1 1 0 0 0-.311-.338c-.26-.177-.636-.177-1.386-.177m-10.198 8h4m.539 4.976l2.727-.053c1.086-.02 3.237.247 3.237 2.503c0 2.34-2.249 2.57-3.262 2.57H8.05c-2.128 0-5.048-.472-5.048-4.488V7.997m11.536 7.981a.77.77 0 0 1 .232-.538l1.714-1.454m-1.946 1.992a.77.77 0 0 0 .234.579l1.712 1.414m4.495-9.974v5.028"
                                      color="currentColor"
                                    />
                                  </svg>
                                  Đặt đồ mang về
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <NavLink
                              to="news.html"
                              className="d-flex align-items-center"
                            >
                              Sản phẩm
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
                                ></path>
                              </svg>
                            </NavLink>
                            <ul className="submenu">
                              <li className="has-dropdown">
                                <Link
                                  to="team.html"
                                  className="d-flex align-items-center gap-2"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="32"
                                      d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64m258-80c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40"
                                    />
                                    <path
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="32"
                                      d="M344 336H179.31a8 8 0 0 0-5.65 2.34l-26.83 26.83a4 4 0 0 1-5.66 0l-26.83-26.83a8 8 0 0 0-5.65-2.34H56a24 24 0 0 1-24-24h0a24 24 0 0 1 24-24h288a24 24 0 0 1 24 24h0a24 24 0 0 1-24 24ZM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97"
                                    />
                                    <path
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="32"
                                      d="M256 480h139.31a32 32 0 0 0 31.91-29.61L463 112"
                                    />
                                    <path
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="32"
                                      d="m368 112l16-64l47-16"
                                    />
                                    <path
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="32"
                                      d="M224 112h256"
                                    />
                                  </svg>
                                  Đồ ăn nhanh
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
                                    ></path>
                                  </svg>
                                </Link>
                                <ul className="submenu">
                                  <li>
                                    <Link to="team.html">Hamburger</Link>
                                  </li>
                                  <li>
                                    <Link to="team-details.html">Bánh Mì</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="has-dropdown">
                                <Link
                                  to="food-menu.html"
                                  className="d-flex align-items-center gap-2"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M13.587 1.992a.5.5 0 0 0-.174-.984l-4.25.75a.5.5 0 0 0-.401.384L8.572 3H3.5a.5.5 0 0 0-.5.5v3a2 2 0 0 0 2 2a3 3 0 0 0 2.502 2.959L7.5 11.5V14h-2a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1h-2v-2.5l-.002-.041A3 3 0 0 0 11 8.5a2 2 0 0 0 2-2v-3a.5.5 0 0 0-.5-.5H9.596l.07-.316zM8.349 4l-.222 1H4V4zM4 6h3.905l-.643 2.892a.5.5 0 0 0 .976.217L8.93 6H12v.5a1 1 0 0 1-1 1h-.5a.5.5 0 0 0-.5.5v.5a2 2 0 0 1-4 0V8a.5.5 0 0 0-.5-.5H5a1 1 0 0 1-1-1zm8-1H9.151l.222-1H12z"
                                    />
                                  </svg>
                                  Đồ uống
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
                                    ></path>
                                  </svg>
                                </Link>
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
                                <Link
                                  to="gallery.html"
                                  className="d-flex align-items-center gap-2"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="1.5"
                                      d="M6.008 12h-.01M11 16.042c.463.153.908.329 1.31.61m0 0A3.95 3.95 0 0 1 14 19.885a.117.117 0 0 1-.118.116c-2.917-.013-4.224-.507-4.773-1.322L8 16.857c-2.492-.503-4.782-2.094-6-4.774c3-6.597 12.5-6.597 15.5 0m-5.19 4.57c2.17-.66 4.105-2.184 5.19-4.57m-5.19-4.569A3.95 3.95 0 0 0 14 4.282c0-.826-4.308.342-4.89 1.206L8 7.31m9.5 4.773c.333-.66 2.1-2.969 4.5-2.969c-.833.825-2.2 3.959-1 5.938c-1.2 0-3-2.309-3.5-2.969"
                                      color="currentColor"
                                    />
                                  </svg>
                                  Hải Sản
                                </Link>
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
                          <li className="has-dropdown">
                            <NavLink to={`/dich-vu`}>
                              sản phẩm
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
                                ></path>
                              </svg>
                            </NavLink>
                            <ul className="submenu">
                              <li>
                                <Link to="shop.html">Shop Grid</Link>
                              </li>
                              <li>
                                <Link to="shop-list.html">Shop List</Link>
                              </li>
                              <li>
                                <Link to="shop-left-sidebar.html">
                                  Shop Left SideBar
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-right-sidebar.html">
                                  Shop Right SideBar
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-single.html">Shop Single</Link>
                              </li>
                              <li>
                                <Link to="shop-single-2.html">
                                  Shop Single 2
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-cart.html">Shop Cart</Link>
                              </li>
                              <li>
                                <Link to="checkout.html">checkout</Link>
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
                          <img
                            src="./src/assets/img/shop-food/s2.png"
                            alt="image"
                          />
                          <div className="cart-product">
                            <a href="#0">grilled chiken</a>
                            <span>168$</span>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li className="border-none">
                          <img
                            src="./src/assets/img/shop-food/s3.png"
                            alt="image"
                          />
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M8.75 13a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm7.25-.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-3.25.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"
                        ></path>
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M17.274 3.473c-.476-.186-1.009-.217-1.692-.222A1.75 1.75 0 0 0 14 2.25h-4a1.75 1.75 0 0 0-1.582 1c-.684.006-1.216.037-1.692.223A3.25 3.25 0 0 0 5.3 4.563c-.367.493-.54 1.127-.776 1.998l-.628 2.303a3 3 0 0 0-1.01.828c-.622.797-.732 1.746-.621 2.834c.107 1.056.44 2.386.856 4.05l.026.107c.264 1.052.477 1.907.731 2.574c.265.696.602 1.266 1.156 1.699c.555.433 1.19.62 1.929.71c.708.084 1.59.084 2.675.084h4.724c1.085 0 1.966 0 2.675-.085c.74-.088 1.374-.276 1.928-.71c.555-.432.891-1.002 1.156-1.698c.255-.667.468-1.522.731-2.575l.027-.105c.416-1.665.748-2.995.856-4.05c.11-1.09 0-2.038-.622-2.835a3 3 0 0 0-1.009-.828l-.628-2.303c-.237-.871-.41-1.505-.776-1.999a3.25 3.25 0 0 0-1.426-1.089M7.272 4.87c.22-.086.486-.111 1.147-.118c.282.59.884.998 1.58.998h4c.698 0 1.3-.408 1.582-.998c.661.007.927.032 1.147.118c.306.12.572.323.768.587c.176.237.279.568.57 1.635l.354 1.297c-1.038-.139-2.378-.139-4.043-.139H9.622c-1.664 0-3.004 0-4.042.139l.354-1.297c.29-1.067.394-1.398.57-1.635a1.75 1.75 0 0 1 .768-.587M10 3.75a.25.25 0 0 0 0 .5h4a.25.25 0 1 0 0-.5zm-5.931 6.865c.279-.357.72-.597 1.63-.729c.931-.134 2.193-.136 3.986-.136h4.63c1.793 0 3.054.002 3.985.136c.911.132 1.352.372 1.631.73c.279.357.405.842.311 1.758c-.095.936-.399 2.16-.834 3.9c-.277 1.108-.47 1.876-.688 2.45c-.212.554-.419.847-.678 1.05c-.259.202-.594.331-1.183.402c-.61.073-1.4.074-2.544.074h-4.63c-1.144 0-1.935-.001-2.544-.074c-.59-.07-.924-.2-1.183-.402c-.26-.203-.467-.496-.678-1.05c-.218-.574-.411-1.342-.689-2.45c-.434-1.74-.739-2.964-.834-3.9c-.093-.916.033-1.402.312-1.759"
                          clipRule="evenodd"
                        ></path>
                      </svg>
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
