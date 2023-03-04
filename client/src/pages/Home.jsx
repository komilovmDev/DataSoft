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
import soft1 from '../images/soft1.svg'
import soft2 from '../images/soft2.svg'
import soft3 from '../images/soft3.svg'
import soft4 from '../images/soft4.svg'
import datalogo from '../images/datalogo.png'
import gps from '../images/gps.svg'
import phone from '../images/phone.svg'
import sms from '../images/sms.svg'



export default function Home() {
    return (
        <div className="container">
            <header>
                <nav className='con'>
                    <img src={datalogo} alt="" />
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
                                <span className="servisInfo_Title">Bot Development</span>
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
                            <div className="softwareMain">
                                <img className='line' src={line} alt="" />
                                <div className="softwareMainStructura left">
                                    <div className="softwareMainStructuraInfo">
                                        <span>Discover</span>
                                        <p>We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.</p>
                                    </div>
                                    <img src={soft1} alt="" className="softwareMainStructuraImg" />
                                </div>
                                <div className="softwareMainStructura right">
                                    <div className="softwareMainStructuraInfo">
                                        <span>Design</span>
                                        <p>We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.</p>
                                    </div>
                                    <img src={soft2} alt="" className="softwareMainStructuraImg" />
                                </div>
                                <div className="softwareMainStructura left">
                                    <div className="softwareMainStructuraInfo">
                                        <span>Build</span>
                                        <p>We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.</p>
                                    </div>
                                    <img src={soft3} alt="" className="softwareMainStructuraImg" />
                                </div>
                                <div className="softwareMainStructura right">
                                    <div className="softwareMainStructuraInfo">
                                        <span>Deliver</span>
                                        <p>We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.</p>
                                    </div>
                                    <img src={soft4} alt="" className="softwareMainStructuraImg" />
                                </div>
                            </div>
                        </div>
                        <div className="contact">
                            <span className="contactTitle">Tell us about your project</span>
                            <div className="contactMain">
                                <div className="contactMainInfos">
                                    <input type="text" placeholder='First name' />
                                    <input type="text" placeholder='Last name' />
                                    <input type="text" placeholder='Email' />
                                    <input type="text" placeholder='Phone' />
                                    <select name="" id="">
                                        <option value="" selected disabled hidden>Budget</option>
                                        <option value="">100$</option>
                                        <option value="">100$-300$</option>
                                        <option value="">300$-700$</option>
                                        <option value="">700$-1000$</option>
                                        <option value="">1000$-2000$</option>
                                        <option value="">2000$+</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="" selected disabled hidden>Where did you hear about us?</option>
                                        <option value="">Google</option>
                                        <option value="">Instagram</option>
                                        <option value="">Telegram</option>
                                    </select>
                                </div>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="footerCon">
                    <div className="footerTop">
                        <div className="footerContact">
                            <a href="" className="footeradress">
                                <button><img src={phone} alt="" /></button>
                                <span>+1 (646) 418 9064</span>
                            </a>
                            <a href="" className="footeradress">
                                <button><img src={sms} alt="" /></button>
                                <span>info@axelhub.com</span>
                            </a>
                            <a href="" className="footeradress">
                                <button><img src={gps} alt="" /></button>
                                <span>New York (NY), Tampa (FL), Bishkek (KG)</span>
                            </a>
                        </div>
                        <div className="footerInfos">
                            <ul>
                                <span>Service</span>
                                <li>UI/UX Design</li>
                                <li>Mobile Development</li>
                                <li>Web Development</li>
                            </ul>
                            <ul>
                                <span>Company</span>
                                <li>About Us</li>
                                <li>Career Opportunities</li>
                                <li>FAQ's</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerBottom">  
                        <span>2023 DataSoft, All rights reserved</span>
                        <img src={datalogo} alt="" />
                    </div>
                </div>
            </footer>
        </div>
    )
}