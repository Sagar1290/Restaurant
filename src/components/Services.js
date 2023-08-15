import React, { useState } from 'react'
import './Services.css'

const Services = ({ serviceData }) => {

    const [show, setShow] = useState(false);


    return (
        <>

            <div className='container bg-light'>
                <div className='d-flex justify-content-between'>
                    <h4 className='service-name p-2'>{serviceData.name}<i className="fas fa-glass-cheers"></i></h4>
                    <a type="button " className="btn btn-outline-primary " onClick={() => setShow(!show)}>more</a>
                </div>
                {
                    show ?
                        <>
                            <div className='container'>
                                <div className='data'>
                                    <img src={serviceData.image} alt='bar'></img>
                                </div>
                            </div>
                            <div className='container'>
                                <p>{serviceData.desc}</p>
                            </div>
                        </>
                        : null
                }
            </div>
            <hr></hr>

        </>
    )
}

export default Services