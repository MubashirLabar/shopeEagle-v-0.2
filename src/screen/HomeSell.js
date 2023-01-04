import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos'
import "aos/dist/aos.css"
import Typewriter from 'typewriter-effect';

import Header from "../components/Header"
import Footer from '../components/Footer'
import HeartIcon from '../components/HeartIcon'

function HomeSell(props) {
    const whyLove = [
        {label: "Low commission", txt: "We charge just a 3% flat commission fee on every purchase order."},
        {label: "Custom Pricing", txt: "You can now offer custom prices to your special customers."},
        {label: "Delivery", txt: "You can decide where to deliver and how much to charge."},
        {label: "In-app messaging", txt: "Message any customer directly on ShopEagle."},
        {label: "Share your store", txt: "Share your store on social media with just a click."},
        {label: "Store Analytics", txt: "We provide information on what to focus on growing your business.s"},
    ]

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-out',
        })
    },[])  
  
    return ( 
        <React.Fragment>
            <Header color="ylw" shopePath="/sell" />  
            <div className="home-p home-sell flex flex-col">
                <div className="sect-a flex aic rel wrapPadding">
                    <img className="banner abs" src="/images/wave-a-y.svg"/>
                    <div data-aos="fade-right" className="sect-a-lef flex flex-col">
                        <div className="meta flex flex-col">
                            <div className="title font s18 s30 b8 c000">Create your online store for FREE in seconds. </div>
                            <div className="txt font s16">Start selling your products online and grow your business with ShopEagle more quickly and safely.</div>
                            {/* <div className="blk flex aic">
                                <div className="font s18 c69">And redeem for:</div>&nbsp;
                                <div className="typewriter font s22 b7 c000">
                                <Typewriter
                                    options={{
                                        strings: [ "coffee", "parmas", "smoothies", "tickets", "beers", "shoes", "clothes", "haircuts", "plants", "gym", "accommodation", "maintenance", "cosmetics" ],
                                        autoStart: true,
                                        loop: true,
                                }} 
                                />
                                </div>
                            </div> */}
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
                                <img  src="/images/sect-a-y.png" className="img" />
                        </div> 
                    </div>
                </div>

                {/* Section B */}
                <div className="sect-b flex aic wrapPadding">
                    <div className="lit flex rel">
                        <img data-aos="fade-up" src="/images/sect-b-y.svg" className="img" />
                    </div>
                    <div data-aos="fade-up" className="rit flex flex-col">
                        <div className="meta">
                        <div className="title font s30 b8 c000">What is ShopeEagle?</div>
                        <div className="txt font s16 c69">ShopEagle is an online platform that connects shoppers with small businesses across India. It's home to hardworking and reliable sellers. </div>
                        <br></br>
                        <div className="txt font s16 c69">Be it a home business, resellers, or manufacturers. We provide powerful tools to sellers to come online and scale up their businesses most effectively.</div>
                        <br></br>
                        <div className="txt font s16 c69">Our vision is to make every small business a brand in India.</div>
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
                                    <img src="/images/online-store.svg" className="img"/>
                                    <div className="meta flex flex-col">
                                        <div className="lbl font s20 b7 c000">Create online store</div>
                                        <div className="txt font s16 c69">Create your online store for FREE with just your business name, address and category.</div>
                                    </div>
                                </div>
                            </div>
                            <img data-aos="fade-up" src="/images/works/right-line-y.svg" className="right-line"/>
                            <div data-aos="fade-up" className="item flex flex-col aic">
                                <div className="data flex flex-col aic">
                                    <img src="/images/sell.svg" className="img"/>
                                    <div className="meta flex flex-col">
                                        <div className="lbl font s20 b7 c000">Sell</div>
                                        <div className="txt font s16 c69">Sell your products quicker and safer at the lowest commission of 3%.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img data-aos="fade-up" src="/images/works/left-line-y.svg" className="left-line first"/>
                        {/* second */}
                        <div className="blk flex second">
                            <div data-aos="fade-up" className="item flex flex-col aic">
                                <div className="data flex flex-col aic">
                                    <img src="/images/manage-order.svg" className="img"/>
                                    <div className="meta flex flex-col">
                                        <div className="lbl font s20 b7 c000">Manage orders</div>
                                        <div className="txt font s16 c69">Keep track of customer orders with ease.</div>
                                    </div>
                                </div>
                            </div>
                            <img data-aos="fade-up" src="/images/works/right-line-y.svg" className="right-line"/>
                            <div data-aos="fade-up" className="item flex flex-col aic">
                                <div className="data flex flex-col aic">
                                    <img src="/images/chat-y.svg" className="img"/>
                                    <div className="meta flex flex-col">
                                        <div className="lbl font s20 b7 c000">Chat</div>
                                        <div className="txt font s16 c69">Directly message customers on our platform.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img data-aos="fade-up" src="/images/works/left-line-y.svg" className="left-line last"/>
                        {/* third */}
                        <div className="blk flex">
                            <div data-aos="fade-up" className="item flex flex-col aic">
                                <div className="data flex flex-col aic">
                                    <img src="/images/increase-sale.svg" className="img"/>
                                    <div className="meta flex flex-col">
                                        <div className="lbl font s20 b7 c000">Increase sales</div>
                                        <div className="txt font s16 c69">Increase your sales by expanding your reach and responding to customer enquiries.</div>
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
                <div className="sect-d flex flex-col aic" style={{backgroundImage: 'url(/images/sect-d-wave-y.svg)'}}>
                    <div data-aos="zoom-in" className="title y font b8 s30">Why you will love it!</div>
                    <div className="wrapper wrapPadding flex aic">
                        <div className="lef flex flex-col"><img src="/images/sect-d-y.svg" className="img" /></div>
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
                    <div data-aos="zoom-in" className="title font s30 b7 cfff">Wanna start selling?</div>
                    <div data-aos="fade" className="txt font s20 cfff">Download ShopeEagle for Free and get started.</div>
                    <div className="actions flex aic">
                        <Link to="/" className="lin"><img src="/images/appstore.svg" className="img"/></Link>
                        <Link to="/" className="lin"><img src="/images/playstore.svg" className="img"/></Link>
                    </div>
                    <img src="/images/shape-wave.svg" className="ftr"/>
                </div>
            </div>
            <Footer page="sell"/>
        </React.Fragment>
    );
}

export default HomeSell;