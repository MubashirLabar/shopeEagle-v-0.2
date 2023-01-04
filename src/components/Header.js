import React,{useState, useEffect} from 'react';
import { NavLink, Link } from 'react-router-dom';

import Logo from '../icons/Logo'
import ArrowUp from '../icons/ArrowUp';

function Header({color, shopePath}) {
 
    const [isTop, setTop] = useState(true)
    const [showFtr, setShowFtr] = useState(false)
    const [sideNav, setSideNav] = useState(false)
    const [showSocials, setshowSocials] = useState(false)
    const [sideNavColor, setSideNavColor] = useState(false)
    const [sideNavColorOnLarge, setSideNavColorOnLarge] =useState(false)
        
    useEffect(() => {
        window.onscroll = () =>{
            console.log(window.scrollY)
            if(window.scrollY > 60){setTop(false)} 
            else{setTop(true)}

            if(window.scrollY > 4100){setShowFtr(false)} 
            else if(window.scrollY > 100){setShowFtr(true)}
            else{setShowFtr(false)}

            if(window.scrollY > 150){setSideNav(true)} 
            else{setSideNav(false)}
            
            if(window.scrollY >= 3200 && window.scrollY < 3750){setSideNavColorOnLarge(true)}
            else{setSideNavColorOnLarge(false)}

            if(window.scrollY > 3800 && window.scrollY < 4300){setSideNavColor(true)}
            else{setSideNavColor(false)}
        }
        document.body.addEventListener("click", ()=>{setshowSocials(false)}) 
    })

    return (
        <React.Fragment>
            <div className={`header abs anim ${color} ${isTop ? '' : 'bg'}`}>
                <div className="wrapPadding flex aic">
                    <div className="lef flex aic">
                        <Link to="/" className={`logo flex aic ${!isTop && 'top'}`}>
                            {color == 'ylw' ? <img src="/images/logo-y.png" className="img" /> : <img src="/images/logo.png" className="img" />}
                            {color == 'ylw' ? <div id="seller" className="tt font s22 b8 black">ShopEagle</div> : <div id="shopper" className="tt font s22 b8 black">ShopEagle</div>}
                        </Link>
                    </div> 
                    <div className="rig flex aic">  
                        <div className={`btns flex aic ${!isTop && 'bg'}`}>
                            <NavLink exact to='/'  className={`btn font s15 b6 flex aic shop anim`}>Shopper</NavLink>
                            <NavLink exact to='/sell' className={`btn font s15 b6 flex aic sell anim`}>Seller</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Ftr Download */}
            <div className={`btm-download flex flex-col aic fixed anim ${showFtr ? 'show' : 'hide'} ${color}`}>
                <div className='lit flex aic'><div className="txt font s16 cfff">Download ShopeEagle</div></div>
                <div className='rit flex aic'> 
                    <Link to="/" className="lin"><img src="/images/appstore-white.svg" className="img"/></Link>
                    <Link to="/" className="lin"><img src="/images/playstore-white.svg" className="img"/></Link>
                </div>
            </div>

            {/* Right Side Socials icons */}
            <div className={`side-nav flex flex-col aic fixed ${sideNav ? 'show' : 'hide'} ${color} ${sideNavColor ? 'white' : ''} ${sideNavColorOnLarge ? 'white-l' : ''} `}>
                <button className='cleanbtn btn logo flex aic anim' onClick={(e) => {
                    e.stopPropagation()
                    setshowSocials(!showSocials); 
                    }}
                >
                    <Logo/>
                    <div className={`socials abs ${showSocials ? 'show' : 'hide'}`}>
                        <a href="https://www.instagram.com/shopeagleapp/" target= "_blank" className="btn icon-instagram cfff s22 flex aic anim"/>
                        <a href="https://www.facebook.com/shopeagleapp/" target= "_blank" className="btn icon-facebook cfff s22 flex aic anim"/>
                        <a href="https://twitter.com/shopeagleapp" target= "_blank" className="btn icon-twitter cfff s22 flex aic anim"/>
                        {/* <Link to="/" className="btn icon-phone cfff s22 flex aic anim"/> */}
                        <a href="mailto:support@shopeagle.in" target= "_blank" className="btn icon-envelope cfff s20 flex aic anim"/>
                    </div> 
                </button>  
                <button className='cleanbtn btn flex aic anim' onClick={()=> document.documentElement.scrollTop = 0}><ArrowUp/></button>
            </div>
        </React.Fragment>   
    );
}

export default Header;