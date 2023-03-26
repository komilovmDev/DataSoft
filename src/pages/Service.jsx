import telegramBot from '../images/serviceBot.svg.svg'
import servicesWeb from '../images/service-web.svg.svg'
import telegram from '../images/telegram.svg'
import whatsapp from '../images/whatsapp.svg'
import internet from '../images/internet.svg'
import discord from '../images/discord.svg'
import Navbar from '../utils/Navbar'
import Footer from '../utils/Footer'
import jslogo from '../images/jslogo.svg'
import reactlogo from '../images/reactlogo.svg'
import django from '../images/django.svg'
import python from '../images/python.svg'
import nodejs from '../images/nodejs.svg'

export default function Service() {
    return (
        <>
            <div className="container">
                <header style={{ backgroundImage: 'none', height: 'auto' }}>
                    <Navbar />
                </header>
                <main>
                    <div className="services">
                        <span className="servicesTitle">Our Core Services</span>
                        <div className="servicesMain">
                            <div className="servis">
                                <div className="servisInfo">
                                    <span className="servisInfo_Title">Website Development</span>
                                    <p>Productive and engaging web solutions for smarter work and improved customer service</p>
                                    <div className="servisInfoBtns">
                                        <button><img src={jslogo} alt="" /></button>
                                        <button><img src={reactlogo} alt="" /></button>
                                        <button><img src={django} alt="" /></button>
                                        <button><img src={python} alt="" /></button>
                                        <button><img src={nodejs} alt="" /></button>
                                    </div>
                                </div>
                                <img className='servisImg' src={servicesWeb} alt="" />
                            </div>
                            <div className="servis">
                                <div className="servisInfo">
                                    <span className="servisInfo_Title">Bot Development</span>
                                    <p>Native, hybrid, and cross-platform mobile apps for consumer-facing and corporate environments.</p>
                                    <div className="servisInfoBtns">
                                        <button><img src={python} alt="" /></button>
                                        <button><img src={nodejs} alt="" /></button>
                                    </div>
                                </div>
                                <img className='servisImg' src={telegramBot} alt="" />
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
                                    <option value="">0$-100$</option>
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
                </main>
                <Footer />
            </div>
        </>
    )
}