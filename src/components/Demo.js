import React, { useState } from 'react'
import './Demo.css'

const Demo = () => {

    const [show, setShow] = useState('login')

    return (
        <>
            <section className='log-in-page'>
                <div className='log-in-div'>
                    <div className='log-in-toggle text-center'>
                        <div className={show === 'login' ? "active left" : null} onClick={() => (setShow('login'))}>
                            log in
                        </div>
                        <div className={show === "signin" ? "active right" : null} onClick={() => (setShow('signin'))}>
                            sign up
                        </div>
                    </div>
                    {(show === 'login') ?
                        <>
                            <form className='form-container'>
                                <div className="mb-3">
                                    <label forHTML="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label forHTML="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">I agree to the terms</label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-sm">LOGIN</button>
                            </form>
                            <hr></hr>
                            <button className='google text-center item'><i class="fab fa-google"></i> log in with google</button>
                            <button className='facebook item text-center'><i class="fab fa-facebook"></i> log in with facebook</button>
                            <div className='log-in-footer'>
                                <p></p>
                            </div>
                        </> :
                        <>
                            <form className='form-container'>
                                <div className="mb-2 input-group-sm">
                                    <label forHTML="exampleInputName" className="form-label">your name</label>
                                    <input type="name" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                                </div>

                                <div className="mb-2 input-group-sm">
                                    <label forHTML="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                </div>

                                <div className="mb-2 input-group-sm">
                                    <label forHTML="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 input-group-sm">
                                    <label forHTML="exampleInputNumber" className="form-label">Contact number</label>
                                    <input type="number" className="form-control" id="exampleInputNumber" aria-describedby="emailHelp" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-sm">Register</button>
                            </form>
                            <hr></hr>
                            <button className='google text-center item fs-6'><i class="fab fa-google"></i> continue with google</button>
                            <div className='text-center fs-6'>
                                <p>by registering user you are accepting our terms and conditions</p>
                            </div>
                        </>
                    }
                </div>
            </section>
        </>
    )
}

export default Demo