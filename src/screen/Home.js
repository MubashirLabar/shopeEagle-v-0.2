import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos'
import "aos/dist/aos.css"
import Typewriter from 'typewriter-effect';
import Header from "../components/Header"
import Footer from '../components/Footer';
import HeartIcon from '../components/HeartIcon'

function Home(props) {

    const whyLove = [
        {label: "Location-Based Shopping", txt: "Buy from any business anywhere."},
        {label: "In-app messaging", txt: "Directly message sellers. Secure and safe."},
        {label: "Exciting Shopping Categories", txt: "Jewellery, clothing, and many more!"},
        {label: "Custom Pricing", txt: "Special prices only for you."},
        {label: "Share your Fav", txt: "Share your favourites with just a click."},
        {label: "Safe Shopping", txt: "We protect our platform from fraudulent sellers."},
    ]

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-out',
        })
    },[])  

    return (
        <React.Fragment> 
            <Header shopePath="/" />
            <div className="home-p flex flex-col rel">
                <div className="sect-a flex aic rel wrapPadding">
                    <img className="banner abs" src="/images/wave-a.svg"/>
                    <div data-aos="fade-right" className="sect-a-lef flex flex-col">
                        <div className="meta flex flex-col">
                            <div className="title font s18 s30 b8 c000">Shop with convenience</div>
                            <div className="txt font s16"></div>
                            <div className="blk flex aic">
                                <div className="font s18 c69">Shop online from small businesses </div>&nbsp;
                                <div id="typewriter" className="typewriter font s20 b7 c000">
                                <Typewriter
                                    options={{
                                        strings: [ "near you.", "in any city.", "in any state.", "across India."],
                                        autoStart: true,
                                        loop: true,
                                    }} 
                                />
                                </div>
                            </div>
                            <br></br>
                            <br id="mobile-break"></br>
                            <div className="txt font s16">Download ShopeEagle app now for FREE.</div>
                            <div className="actions flex aic">
                                <Link to="/" className="lin"><img src="/images/appstore.svg" className="img"/></Link>
                                <Link to="/" className="lin"><img src="/images/playstore.svg" className="img"/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="rit">
                        <div className="mob flex aic">
                            <img src="/images/sect-a.svg" className="img" />
                        </div> 
                    </div>
                </div>
                
                {/* Section B */}
                <div className="sect-b flex aic">
                    <div className="lit flex rel">
                        <img data-aos="fade-up" src="/images/sect-b.svg" className="img" />
                    </div>
                    <div data-aos="fade-up" className="rit flex flex-col">
                        <div className="meta">
                        <div className="title font s30 b8 c000">What is ShopEagle?</div><br></br>
                        <div className="txt font s16 c69">ShopEagle is an online platform that connects shoppers with small businesses across India. </div><br></br>
                        <div className="txt font s16 c69">From cities to states, You can shop exceptional products from any location without compromising quality or security. </div><br></br>
                        <div className="txt font s16 c69">Genuine sellers and Genuine bonds.</div><br></br>
                        <div className="txt font s16 c69">As a company, we work to offer the best shopping experience to the shopper while transforming every small business that trusts us into a brand.</div>
                        </div>
                    </div>
                </div>

                {/* Section C */}
                <div className="sect-c flex flex-col aic">
                    <div data-aos="zoom-in" className="title font s30 b8 c000">How It Works!</div>
                    <div className="wrap flex flex-col aic rel">
                        {/* first */}
                        <div className="blk flex first">
                            <div data-aos="fade-up" className="item flex flex-col aic">
                                <div className="data flex flex-col aic">
                                    <img src="/images/explore.svg" className="img"/>
                                    <div className="meta flex flex-col">
                                        <div className="lbl font s20 b7 c000">Explore</div>
                                        <div className="txt font s16 c69">Explore the unlimited collection of products from small businesses.</div>
                                    </div>
                                </div>
                            </div>
                            <img data-aos="fade-up" src="/images/works/right-line.svg" className="right-line"/>
                            <div data-aos="fade-up" className="item flex flex-col aic">
                                <div className="data flex flex-col aic">
                                    <img src="/images/buy.svg" className="img"/>
                                    <div className="meta flex flex-col">
                                        <div className="lbl font s20 b7 c000">Buy</div>
                                        <div className="txt font s16 c69">Purchase a product of your choice in a hassle-free, secure, and safe way.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img data-aos="fade-up" src="/images/works/left-line.svg" className="left-line first"/>
                        {/* second */}
                        <div className="blk flex second">
                            <div data-aos="fade-up" className="item flex flex-col aic">
                                <div className="data flex flex-col aic">
                                    <img src="/images/deliver.svg" className="img"/>
                                    <div className="meta flex flex-col">
                                        <div className="lbl font s20 b7 c000">Delivery</div>
                                        <div className="txt font s16 c69">Purchase the items and have them delivered to your door.</div>
                                    </div>
                                </div>
                            </div>
                            <img data-aos="fade-up" src="/images/works/right-line.svg" className="right-line"/>
                            <div data-aos="fade-up" className="item flex flex-col aic">
                                <div className="data flex flex-col aic">
                                    <img src="/images/chat.svg" className="img"/>
                                    <div className="meta flex flex-col">
                                        <div className="lbl font s20 b7 c000">Chat</div>
                                        <div className="txt font s16 c69">Directly communicate with the sellers.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img data-aos="fade-up" src="/images/works/left-line.svg" className="left-line last"/>
                        {/* third */}
                        <div className="blk flex">
                            <div data-aos="fade-up" className="item flex flex-col aic">
                                <div className="data flex flex-col aic">
                                    <img src="/images/enquire.svg" className="img"/>
                                    <div className="meta flex flex-col">
                                        <div className="lbl font s20 b7 c000">Enquire</div>
                                        <div className="txt font s16 c69">Begin a product enquiry to find any product anywhere.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="item emt"/>
                        </div>
                        
                        <img data-aos="fade-up" src="/images/works/rit-top.svg" className="rit-top abs"/>
                        <img data-aos="fade-up" src="/images/works/rit-btm.svg" className="rit-btm abs"/>
                        <img data-aos="fade-up" src="/images/works/dot.svg" className="dot abs"/>
                        <img data-aos="fade-up" src="/images/works/btm.svg" className="btm abs"/>
                        <img data-aos="fade-up" src="/images/works/btm-left.svg" className="btm-left abs"/>
                        <img data-aos="fade-up" src="/images/works/circle.svg" className="circle abs"/>
                        <img data-aos="fade-up" src="/images/works/left-top.svg" className="left-top abs"/>
                        <img data-aos="fade-up" src="/images/works/left-btm.svg" className="left-btm abs"/>
                    </div> 
                </div>
            
                {/* Section D */}
                <div className="sect-d flex flex-col aic" style={{backgroundImage: 'url(/images/sect-d-wave.svg)'}}>
                    <div data-aos="zoom-in" className="title font b8 s30">Why you will love it!</div>
                    <div className="wrapper wrapPadding flex aic">
                        <div className="lef flex flex-col"><img src="/images/sect-d.svg" className="img" /></div>
                        <div className="rit flex">
                            <div className="wrap">
                                {
                                    whyLove.map(item => (
                                        <div data-aos="fade-up" className="item flex flex-col aic anim rel">
                                            <div className="icon flex aic anim"><HeartIcon/></div>
                                            <div className="meta flex flex-col aic">
                                                <div className="lbl font s18 b7 c000">{item.label}</div>
                                                <div className="txt font s16 c69">{item.txt}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div> 
            
                {/* Section E */}
                <div className="sect-e flex flex-col aic rel">
                    <div data-aos="zoom-in" className="title font s30 b7 cfff">Wanna start shopping?</div>
                    <div data-aos="fade" className="txt font s20 cfff">Download ShopeEagle for Free and get started.</div>
                    <div className="actions flex aic">
                        <Link to="/" className="lin"><img src="/images/appstore.svg" className="img"/></Link>
                        <Link to="/" className="lin"><img src="/images/playstore.svg" className="img"/></Link>
                    </div>
                    <img src="/images/shape-wave.svg" className="ftr"/>
                </div>
            </div>
            <Footer page='home'/>
        </React.Fragment>
    ); 
}

export default Home;