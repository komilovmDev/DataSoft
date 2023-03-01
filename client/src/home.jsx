import logo from './images/Logo.svg'
import headerImg from './images/headerImg.png'
import serachIcon from './images/search.svg'

export default function Home() {
    return (
        <div className="container">
            <header>
                <nav className='con'>
                    <img src={logo} alt="" className="logo" />
                    <ul>
                        <li>Demos</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Pages</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div className="header con">
                    <div className="header_Img">
                        <img src={headerImg} alt="" />
                    </div>
                    <div className="header_Info">
                        <span className="header_Info_text1">Ensuring maximum security</span>
                        <span className="header_Info_text2">Protect all your data with strong security access</span>
                        <span className="header_Info_text3">This is software that protects all your data, including strong security access. Use data as needed and provide security.</span>
                        <button className='header_Info_btn'><img src={serachIcon} alt="" /> <span>Scan Your Website - Free!</span></button>
                    </div>
                </div>
            </header>
        </div>
    )
}