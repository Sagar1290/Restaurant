import React from 'react'
import AboutUs from './AboutUs'
import './Cards.css'

const Cards = ({ menuData }) => {

    // console.log(menuData);

    const display = () => {
        <AboutUs />
    }

    return (
        <>
        <h2 className='heading text-center'> what we serve</h2>
        <section className='cards-main-container'>
            {menuData.map((curElem) => {
                return (
                    <>
                        <div className='cards-main-div'>
                            <div className='card-container' id='card'>
                                <div className='card-title'>
                                    <h2>{curElem.title}</h2>
                                </div>
                                <div className="card-image">
                                    <img src={curElem.image} alt='card'></img>
                                </div>
                                <div className='card-details'>
                                    <ul>
                                        <li>{curElem.item1}</li>
                                    </ul>
                                    <ul>
                                        <li>{curElem.item2}</li>
                                    </ul>
                                    <ul>
                                        <li>{curElem.item3}</li>
                                    </ul>
                                    <ul>
                                        <li>{curElem.item4}</li>
                                    </ul>
                                    <p className='card-description'>
                                        {curElem.desc}
                                    </p>
                                    <a className='card-read bottom-0 end-0' onClick={() => {display()}}> Read More</a>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </section>
        </>
    )
}

export default Cards