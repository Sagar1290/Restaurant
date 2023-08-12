import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import Menu from './MenuApi'
import Header from './Header.js'
import Footer from './Footer.js'
import Services from './Services'
import Service from './ServicesApi'
import AboutUs from './AboutUs'
import { Api } from './api.json'

const Hero = () => {

    const [serviceData, setServiceData] = useState(Service)
    const [menuData, setMenuData] = useState(Menu)

    return (
        <>
            <Header />
            <AboutUs />
            <Cards menuData={menuData} />
            <div className='p-3'>
                <h3 className='text-center'>Services</h3>
                <hr></hr>
                {serviceData.map((currEle) =>
                    <Services serviceData={currEle} />
                )}

            </div>
            <Footer />
            {/* console.log(Api.tid) */}
        </>
    )
}

export default Hero