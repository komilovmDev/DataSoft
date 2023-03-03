import logo from '../images/Logo.svg.svg'
import aboutImg from '../images/about.svg'
import gallery1 from '../images/galery1.png'
import gallery2 from '../images/galarey2.png'
import gallery3 from '../images/galery3.png'
import gallery4 from '../images/galery4.png'
import gallery5 from '../images/galery5.png'
import gallery6 from '../images/galery6.png'
import gallery7 from '../images/galery7.png'
import uzum from '../images/uzum.png'
import tesla from '../images/tesla.png'
import apple from '../images/apple.png'
import spesX from '../images/spesX.png'
import telegramBot from '../images/serviceBot.svg.svg'
import servicesWeb from '../images/service-web.svg.svg'
import telegram from '../images/telegram.svg'
import whatsapp from '../images/whatsapp.svg'
import internet from '../images/internet.svg'
import discord from '../images/discord.svg'
import line from '../images/line.svg'



export default function Home() {
    return (
        <div className="container">
            <header>
                <nav className='con'>
                    <img src={logo} alt="" />
                    <ul>
                        <li>About Us</li>
                        <li>Service</li>
                        <li>Portfolio</li>
                        <li>FAQ's</li>
                        <button>Contact Us</button>
                    </ul>
                </nav>
                <div className="header">
                    <span className="headerTItle">Making Software a Reality.</span>
                    <span className="headerInfo">Just Think. We'll do the rest.</span>
                    <button className="headerBtn">Get in touch</button>
                </div>
            </header>
            <main>
                <div className="about">
                    <div className="aboutInfo">
                        <span className="aboutInfo_title">About us</span>
                        <p><b>We crossed the world to build Axel. Now,
                            Axel is always right at your side to build
                            something for you!</b>
                            You hear some crazy stories about folks meeting
                            online, but you won’t hear a story crazier
                            than Axel. Phil lived in New York, and Adi lived on the other side of the globe
                            in Bishkek, Kyrgyzstan. Their paths crossed online as they
                            worked on mutual projects. They made a great team with Phil handling
                            the front-end, mobile development while Adi worked
                            his magic as a back-end developer. After a while, Phil thought it
                            would be nice to take a week-long trip to Central Asia and meet his
                            online coworker. That week soon turned into two full years of Phil and Adi
                            building something really special. The result? Axel. <a href='#'>View More</a>
                        </p>
                    </div>
                    <img src={aboutImg} alt="" />
                </div>
                <div className="gallery">
                    <span className="galleryTitle">Gallery</span>
                    <div className="gallerys">
                        <div className="gallerysBox1">
                            <img src={gallery2} alt="" />
                            <img src={gallery5} alt="" />
                        </div>
                        <div className="gallerysBox1">
                            <img src={gallery1} alt="" />
                            <img src={gallery4} alt="" />
                            <img src={gallery6} alt="" />
                        </div>
                        <div className="gallerysBox1">
                            <img src={gallery3} alt="" />
                            <img src={gallery7} alt="" />
                        </div>
                    </div>
                </div>
                <div className="portfolio">
                    <span className="portfolioTitle">Our Projects</span>
                    <div className="portfolios">
                        <a href="https://www.tesla.com/"><img src={tesla} alt="" /></a>
                        <a href="https://apple.com"><img src={apple} alt="" /></a>
                        <a href="https://uzum.uz"><img src={uzum} alt="" /></a>
                        <a href="https://www.spacex.com/"><img src={spesX} alt="" /></a>
                    </div>
                </div>
                <div className="services">
                    <span className="servicesTitle">Our Core Services</span>
                    <div className="servicesMain">
                        <div className="servis">
                            <div className="servisInfo">
                                <span className="servisInfo_Title">Website Development</span>
                                <p>Productive and engaging web solutions for smarter work and improved customer service</p>
                                <div className="servisInfoBtns">
                                    <button><img src={internet} alt="" /></button>
                                </div>
                            </div>
                            <img className='servisImg' src={servicesWeb} alt="" />
                        </div>
                        <div className="servis">
                            <div className="servisInfo">
                                <span className="servisInfo_Title">Telegram Bot Development</span>
                                <p>Native, hybrid, and cross-platform mobile apps for consumer-facing and corporate environments.</p>
                                <div className="servisInfoBtns">
                                    <button><img src={telegram} alt="" /></button>
                                    <button><img src={discord} alt="" /></button>
                                    <button><img src={whatsapp} alt="" /></button>
                                </div>
                            </div>
                            <img className='servisImg' src={telegramBot} alt="" />
                        </div>
                        <div className="software">
                            <span className="softwareTitle">Software Development Process</span>
                            <img src={line} alt="" />
                            <div className="softwareMain">
                                <div className="softwareMainStructura">
                                    <div className="softwareMainStructuraInfo">
                                        <span>Discover</span>
                                        <p>We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.</p>
                                    </div>
                                    <img src="" alt="" className="softwareMainStructuraImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}