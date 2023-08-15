import React from 'react'
import './Footer.css'

const Foooter = () => {
    return (

        <footer className="footer-main-div">
            <section className='contact-div'>
                <div className='contact-us'>
                    <h5><a href="#about-us">About us</a></h5>
                    <h5><a href="#">FAQs</a></h5>
                    <h5><a href="#">Services</a></h5>
                    <h5><a href="#">Terms</a></h5>
                    <h5><a href="#">Conditions</a></h5>
                    <h5><a href="#">Loyality Programme</a></h5>
                </div>
                <div className='form-div'>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Any Suggestion</span>
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>
            <section className='about-div'>
                <div>
                    <h4>
                        Get connected with us on social networks:
                    </h4>
                    <ul className='social-icons horizontal-list'>
                        <li>
                            <a href='#'>
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='footer-copyright'>
                <span>Copyright &copy; 2022 restaurant.com</span>
            </section>

        </footer >
    )
}

export default Foooter