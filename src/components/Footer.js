import React from 'react';
import { Link } from 'react-router-dom'

function Footer({page}) {

    const company = [
        {label: "Careers", slug: "/"},
        {label: "FAQs", slug: "/"},
    ]
    const support = [
        // {label: "Terms and Conditions", slug: "/terms-conditions"},
        {label: "Privacy Policy", slug: "/privacy-policy"},
    ]
    const date = new Date()
 
    return ( 
        <div className={`footer-p wrapPadding ${page}`}>
            <div className="wrapper flex rel">
                <div className="col flex flex-col one">
                    <Link to="/" className="logo flex aic" onClick={()=> document.documentElement.scrollTop = 0}>
                        {page == 'sell' ? <img src="/images/logo-y.png" className="img" /> : <img src="/images/logo.png" className="img" /> }
                        <div className="font s22 b8 black">ShopEagle</div>
                    </Link>
                    <div className="social flex aic">
                        <a href="https://www.instagram.com/shopeagleapp/" target= "_blank" className="item icon-instagram s22 flex aic anim"/>
                        <a href="https://www.facebook.com/shopeagleapp/" target= "_blank" className="item icon-facebook s22 flex aic anim"/>
                        <a href="https://twitter.com/shopeagleapp" target= "_blank" className="item icon-twitter s22 flex aic anim"/>
                        {/* <a to="/" className="item icon-phone s22 flex aic anim"/> */}
                        <a href="mailto:support@shopeagle.in" target= "_blank" className="item icon-envelope s20 flex aic anim"/>
                    </div>
                </div>
                <div className="col flex flex-col two">
                    <div className="font s18 b lbl c000">Company</div>
                    {
                        company.map( (item, index) => (
                            <Link 
                                key={index} 
                                to={item.slug} 
                                className="lin font s16 b6 flex aic c000"
                                onClick={()=> document.documentElement.scrollTop = 0}
                            >{item.label}</Link>
                        ))
                    }
                </div>
                <div className="col flex flex-col three">
                    <div className="font s18 lbl b c000">Legal Information</div>
                    {
                        support.map( (item, index) => (
                            <Link 
                                key={index} 
                                to={item.slug} 
                                className="lin font s16 b6 flex aic c000"
                                onClick={()=> document.documentElement.scrollTop = 0}
                            >{item.label}</Link>
                        ))
                    }
                </div>
                <div className="col flex flex-col four">
                    <div className="form">
                        <div className="font s18 lbl b c000">We love to hear what you think</div>
                        <div className="item flex aic">
                            <img src="/images/user-icon.svg" className="icon"/>
                            <input placeholder="Full Name" className="iput cleanbtn font s15 c000" />
                        </div>
                        <div className="item flex aic">
                            <img src="/images/message-icon.svg" className="icon"/>
                            <input placeholder="Email" className="iput cleanbtn font s15 c000" />
                        </div>
                        <div className="item flex">
                            <img src="/images/send-icon.svg" className="icon"/>
                            <textarea placeholder="Your Message" className="iput area cleanbtn font s15 c000" />
                        </div>
                        <button className="button font s16 b6 cfff anim">Send</button>
                    </div>
                </div>
            </div>
            <div className="cpy-rit font s15 b6 upc">{`COPYRIGHT © SHOPEAGLE RETAIL PRIVATE LIMITED ${date.getFullYear()}`}</div>   
        </div>
    );
}

export default Footer;