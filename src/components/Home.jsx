import React from 'react'
import Avatar from '../assets/avatar.jpg';
function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <span className="home__hello">Hello I'm</span>
                    <h1 className="home__name">Vu Hieu Trung</h1>
                    <h3 className="home__job">Front End Developer</h3>
                    <ul class="home__info">
                        <li>
                            <a href="mailto:vuhieutrung279@gmail.com">
                                <i class="fa fa-envelope"></i>
                                <span>vuhieutrung279@gmail.com</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:079.797.0742">
                                <i class="fa fa-mobile-alt"></i>
                                <span>079.797.0742</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://goo.gl/maps/WkowcnFxBS91zxik9" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-map-marker-alt"></i>
                                <span>Nguyen Thai Son, Ward 3, Go Vap District</span>
                            </a>
                        </li>
                    </ul>
                    <ul class="home__social">
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/vuhieutrung279">
                                <i class="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/augvutrung">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/vuhieutrung279">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-6 text-center">
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
