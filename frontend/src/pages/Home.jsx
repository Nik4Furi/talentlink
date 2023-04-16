import React from 'react'

import '../styles/Home.modules.css' //Specific for Home.jsx

// Home Component 
import ServicesCard from '../components/Home/ServicesCard'
import Testimonials from '../components/Home/Testimonials'
import RoadMapCard from '../components/Home/RoadMapCard'
import ContactUs from '../components/Home/ContactUs'

const Home = () => {
    return (
        <>
            {/* Hero-Section, here we tell about us, and show the img of our platform  */}
            <section className="container-fluid">
                <div className="d-flex align-items-center w-100">

                    {/* Left side,here telling about our plateform 
                    <div className="w-50"> 
                        We can create this text more attractive 
                         <div className="d-flex flex-column">
                            I will setup it after completing my other parts of app 
                            <h2><span className="text-highlight">TalentLink</span> is world's leading platform, who are providing </h2>
                            <div className='wrapper'>
                                <ul className='dynamic-text fs-4'>
                                    <li><span> Jobs to the workers</span></li>
                                    <li><span>Connect workers with recruiters</span></li>
                                    <li><span>Make links strong</span></li>
                                    <li><span>More & more jobs</span></li>
                                </ul>
                            </div>

                            <button className="btn btn-primary">Find Workers</button>
                            <button className="btn btn-primary">See Services</button>
                        </div> 
                    </div> */}

                    {/* Left side, here we introduce our selves  */}
                    <div className="w-50">
                        <div className="container-fluid">
                            <h2><span className="text-highlight">TalentLink</span> is platform where we provide communication between recruiters and workers</h2>
                            <p>We are providing the recruiters best match worker, or recruiters before recruitering the workers can judge in the respective of their ratings, comments and work experenice ,they have.</p>
                            <button className="btn btn-primary my-2">Recruit Workers</button>
                        </div>
                    </div>

                    {/* Right side, showing the img of our platform  */}
                    <div className="w-50" data-aos="zoom-in" data-aos-duration="3000" >
                        <img src="/img/main-header-2.jfif" alt="main-header" style={{ width: "59%" }} />
                    </div>
                </div>
            </section>

            {/* Why we choose us, and what we providing  */}
            <section className="container">
                <div className="my-2 mx-2">
                    <div className="d-flex align-items-center w-100">
                        {/* Left Side, for our img  */}
                        <div className="w-50">
                            <img src="/img/why_choose_us3.png" alt="why_choose_us" className="w-100" />
                        </div>
                        {/* Right Side, for our content to choose us  */}
                        <div className="w-50">
                            <div className="d-flex flex-column">
                                <h2>Why should you <span className="text-highlight">choose</span> us?</h2>
                                <p>In the last years, we are providing the 10,000 works and that works, at present converting into permanent jobs*</p>
                                <p>What are we providing our workers and recruiters</p>
                                <ul>
                                    <li> Workers can decline or accept any kind of request, which send by the recruiters</li>
                                    <li> Recruiters can call them, and choose many of one to perfect for his/her work.</li>
                                    <li> We also provide best of best, according to inquiry of the Recruiters</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section, we are providing such services and we add on in future */}
            <section id="services" className="container-fluid bg-secondary">
                <div className='container my-3'>
                    <h2 className="text-highlight text-center">Our Services</h2>
                    <div className="container my-3 p-3">
                        <div className="d-flex align-items-center flex-wrap">
                            <ServicesCard img={"/img/services/service1.jpg"} service={"Kitching"} content={"More you can create"} />
                            <ServicesCard img={"/img/services/service2.jpg"} service={"Lighting"} content={"Glowing your Business and Home"} />
                            <ServicesCard img={"/img/services/service3.jpg"} service={"Machinary"} content={"Tight the work help of screw"} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Sections  */}
            <section id="testiomials" className="container">
                <div className="my-3 mx-2 d-flex">
                    <Testimonials review={"Hello everyone, when i thinking about this paltform, first of all i amazed becuase this platform make my carrer, give me the jobs which i want and deserve"} name={"Chectan Prakash"} />
                    <Testimonials review={"I am house wife, but i am enthusias about art works, when i join this community, then its wonder for me, because here many clients buy my artworks, and i am convert this passion into my full time job"} name={"Susila Devi"} />
                    <Testimonials review={"I am builder and during the working of many small oppurtunites, I am using thousands of websites and portals, to hiring for the works, but these platform give me perfect matching workers opptunity."} name={"John Doe"} />
                </div>
            </section>

            {/* Workers how join us, Here the roadmap with the help they join us  */}
            <section id="roadmap" className="container-fluid bg-secondary" >
                <div className="container mx-auto w-75 d-flex align-items-center p-4 ">
                    <RoadMapCard img={"/img/roadmaps/roadmap1.png"} content={"1.Register account to begin applying"} />
                    <RoadMapCard img={"/img/roadmaps/roadmap2.png"} content={"2.Create portfolio to browse hundreds of jobs"} />
                    <RoadMapCard img={"/img/roadmaps/roadmap3.png"} content={"3.Apply for jobs in seconds"} />
                </div>
            </section>

            {/* Contact Us, here we defining a form, with the help of them anyone can contact with us  */}
            <section id="contact" className="container my-2">
                <h2 className="text-highlight text-center">Contact Us</h2>
                <div className="my-2">
                    <ContactUs />
                </div>
            </section>
        </>

    )
}

export default Home
