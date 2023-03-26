import Navbar from '../utils/Navbar'
import Footer from '../utils/Footer'
import uzum from '../images/uzum.png'
import tesla from '../images/tesla.png'
import apple from '../images/apple.png'
import spesX from '../images/spesX.png'


export default function Portfolio() {
    return (
        <div className="container">
            <header style={{ backgroundImage: 'none', height: 'auto' }}>
                <Navbar />
            </header>
            <main>
                <div className="portfolio">
                    <span className="portfolioTitle">Our Projects</span>
                    <div className="portfolios">
                        <a href="https://www.tesla.com/"><img src={tesla} alt="" /></a>
                        <a href="https://apple.com"><img src={apple} alt="" /></a>
                        <a href="https://uzum.uz"><img src={uzum} alt="" /></a>
                        <a href="https://www.spacex.com/"><img src={spesX} alt="" /></a>
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
    )
}