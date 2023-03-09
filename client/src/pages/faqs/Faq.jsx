import Navbar from '../Navbar'
import Footer from '../Footer'
import FaqMessage from './faqMeesge'


export default function Faq() {

    const faqs = [
        {
            question: 'Who is DataSoft?',
            answer: "Axel was founded in 2018 by Phil Kravtsov and Adi Nasirdinov who’s mission was to grow the next generation of software developers in the untapped talent pool of central Asia. Initially discovering each other online, Phil (a front-end mobile developer from New York) and Adi (a back-end developer from Bishkek) thought they could bring their talents and personalities together to build a software development experience for the world like no other. Phil moved to Kyrgyzstan for two years to help Adi build Axel. To read the full story, click here."
        },
        {
            question: 'Who are Axel’s clients?',
            answer: "Axel was founded in 2018 by Phil Kravtsov and Adi Nasirdinov who’s mission was to grow the next generation of software developers in the untapped talent pool of central Asia. Initially discovering each other online, Phil (a front-end mobile developer from New York) and Adi (a back-end developer from Bishkek) thought they could bring their talents and personalities together to build a software development experience for the world like no other. Phil moved to Kyrgyzstan for two years to help Adi build Axel. To read the full story, click here."
        },
        {
            question: 'Total project staff?',
            answer: "Axel was founded in 2018 by Phil Kravtsov and Adi Nasirdinov who’s mission was to grow the next generation of software developers in the untapped talent pool of central Asia. Initially discovering each other online, Phil (a front-end mobile developer from New York) and Adi (a back-end developer from Bishkek) thought they could bring their talents and personalities together to build a software development experience for the world like no other. Phil moved to Kyrgyzstan for two years to help Adi build Axel. To read the full story, click here."
        },
        {
            question: 'Where do employees work?',
            answer: "Axel was founded in 2018 by Phil Kravtsov and Adi Nasirdinov who’s mission was to grow the next generation of software developers in the untapped talent pool of central Asia. Initially discovering each other online, Phil (a front-end mobile developer from New York) and Adi (a back-end developer from Bishkek) thought they could bring their talents and personalities together to build a software development experience for the world like no other. Phil moved to Kyrgyzstan for two years to help Adi build Axel. To read the full story, click here."
        },
        {
            question: 'Are you an American company?',
            answer: "Axel was founded in 2018 by Phil Kravtsov and Adi Nasirdinov who’s mission was to grow the next generation of software developers in the untapped talent pool of central Asia. Initially discovering each other online, Phil (a front-end mobile developer from New York) and Adi (a back-end developer from Bishkek) thought they could bring their talents and personalities together to build a software development experience for the world like no other. Phil moved to Kyrgyzstan for two years to help Adi build Axel. To read the full story, click here."
        },
        {
            question: 'How does Axel recruit and hire its developers?',
            answer: "Axel was founded in 2018 by Phil Kravtsov and Adi Nasirdinov who’s mission was to grow the next generation of software developers in the untapped talent pool of central Asia. Initially discovering each other online, Phil (a front-end mobile developer from New York) and Adi (a back-end developer from Bishkek) thought they could bring their talents and personalities together to build a software development experience for the world like no other. Phil moved to Kyrgyzstan for two years to help Adi build Axel. To read the full story, click here."
        },
        {
            question: 'Will you sign my NDA?',
            answer: "Axel was founded in 2018 by Phil Kravtsov and Adi Nasirdinov who’s mission was to grow the next generation of software developers in the untapped talent pool of central Asia. Initially discovering each other online, Phil (a front-end mobile developer from New York) and Adi (a back-end developer from Bishkek) thought they could bring their talents and personalities together to build a software development experience for the world like no other. Phil moved to Kyrgyzstan for two years to help Adi build Axel. To read the full story, click here."
        },
        {
            question: 'Can Axel take over my existing custom software?',
            answer: "Axel was founded in 2018 by Phil Kravtsov and Adi Nasirdinov who’s mission was to grow the next generation of software developers in the untapped talent pool of central Asia. Initially discovering each other online, Phil (a front-end mobile developer from New York) and Adi (a back-end developer from Bishkek) thought they could bring their talents and personalities together to build a software development experience for the world like no other. Phil moved to Kyrgyzstan for two years to help Adi build Axel. To read the full story, click here."
        },
        {
            question: 'When you’re done, who owns the code?',
            answer: "Axel was founded in 2018 by Phil Kravtsov and Adi Nasirdinov who’s mission was to grow the next generation of software developers in the untapped talent pool of central Asia. Initially discovering each other online, Phil (a front-end mobile developer from New York) and Adi (a back-end developer from Bishkek) thought they could bring their talents and personalities together to build a software development experience for the world like no other. Phil moved to Kyrgyzstan for two years to help Adi build Axel. To read the full story, click here."
        },
        {
            question: 'What technologies / languages do you work with?',
            answer: "Axel was founded in 2018 by Phil Kravtsov and Adi Nasirdinov who’s mission was to grow the next generation of software developers in the untapped talent pool of central Asia. Initially discovering each other online, Phil (a front-end mobile developer from New York) and Adi (a back-end developer from Bishkek) thought they could bring their talents and personalities together to build a software development experience for the world like no other. Phil moved to Kyrgyzstan for two years to help Adi build Axel. To read the full story, click here."
        },
        {
            question: 'When you’re done, who owns the code?',
            answer: "Axel was founded in 2018 by Phil Kravtsov and Adi Nasirdinov who’s mission was to grow the next generation of software developers in the untapped talent pool of central Asia. Initially discovering each other online, Phil (a front-end mobile developer from New York) and Adi (a back-end developer from Bishkek) thought they could bring their talents and personalities together to build a software development experience for the world like no other. Phil moved to Kyrgyzstan for two years to help Adi build Axel. To read the full story, click here."
        },
        {
            question: 'What technologies / languages do you work with?',
            answer: "Axel was founded in 2018 by Phil Kravtsov and Adi Nasirdinov who’s mission was to grow the next generation of software developers in the untapped talent pool of central Asia. Initially discovering each other online, Phil (a front-end mobile developer from New York) and Adi (a back-end developer from Bishkek) thought they could bring their talents and personalities together to build a software development experience for the world like no other. Phil moved to Kyrgyzstan for two years to help Adi build Axel. To read the full story, click here."
        }
    ]

    return (
        <div className="container">
            <header style={{ backgroundImage: 'none', height: 'auto' }}>
                <Navbar />
            </header>
            <main>
                <div className="faqs">
                    <span className="faqsTitle">FAQ</span>
                    <div className="faqss">
                        {
                            faqs.map(faq => (
                                <FaqMessage  question={faq.question} answer={faq.answer}/>
                            ))
                        }
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
            </main>
            <Footer />
        </div>
    )
}