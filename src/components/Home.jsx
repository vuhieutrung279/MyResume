import React from 'react'
import Avatar from '../assets/avatar.jpg';
function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                <div className="col-sm-6 home__detail">
                    <span className="home__hello">Hello I'm</span>
                    <h1 className="home__name">Vu Hieu Trung</h1>
                    <h3 className="home__job">Front End Developer</h3>
                    <ul className="home__info">
                        <li>
                            <a href="mailto:vuhieutrung279@gmail.com">
                                <i className="fa fa-envelope"></i>
                                <span>vuhieutrung279@gmail.com</span>
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer">
                                <i class="fas fa-calendar-alt"></i>
                                <span>27/09/1996</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:079.797.0742">
                                <i className="fa fa-mobile-alt"></i>
                                <span>079.797.0742</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://goo.gl/maps/WkowcnFxBS91zxik9" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-map-marker-alt"></i>
                                <span>Go Vap District, Ho Chi Minh City</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="home__social">
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/vuhieutrung279">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/augvutrung">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/vuhieutrung279">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-sm-6 d-flex align-items-center justify-content-center">
                    <div className="avatar">
                        <img src={Avatar} alt="avatar" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home
