import Navbar from '../utils/Navbar'
import Footer from '../utils/Footer'
import aboutImg from '../images/about.svg'
import gallery1 from '../images/galery1.png'
import gallery2 from '../images/galarey2.png'
import gallery3 from '../images/galery3.png'
import gallery4 from '../images/galery4.png'
import gallery5 from '../images/galery5.png'
import gallery6 from '../images/galery6.png'
import gallery7 from '../images/galery7.png'
import ImgGallary from './Gallary'


export default function About() {
    return (
        <div className="container">
            <header style={{ backgroundImage: 'none', height: 'auto' }}>
                <Navbar />
            </header>
            <main>
                <div className="about" style={{ marginTop: '147px' }}>
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
                    <ImgGallary/>
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