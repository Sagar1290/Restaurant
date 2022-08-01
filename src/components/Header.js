import React from 'react'
import './Header.css'

const Header = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
                <div className='container-fluid'>
                    <div className="navbar-brand col-lg-2 text-justify">
                        <h4>Restaurant</h4>
                        <em>Kargi,Dehradun</em>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse col-lg-8 justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ">
                            <li className="nav-item">
                                <a className="nav-link" href="#about-us">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Book a Table</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Private Dining</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Offers</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    MENU
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Lunch</a>
                                    <a className="dropdown-item" href="#">Dessert</a>
                                    <a className="dropdown-item" href="#">Chai and Coffee</a>
                                    <a className="dropdown-item" href="#">Dinner</a>
                                    <hr className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Happy Hours</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <form className="ml-auto col-lg-1 mx-2">
                        <input className="d-flex form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <form name='cart-user' className='mx-2 d-lg-block col-lg-1'>
                        <div className='d-flex'>
                            <a className='join-us' href='#'>JOIN US</a>
                        </div>
                    </form>
                </div>
            </nav>

            <div id="carouselExampleIndicators" className="carousel slide slideshowContainer" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg" className="d-block w-100" alt="food" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="food" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="food" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="food" />
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Header