import Navbar from '../../utils/Navbar'
import Footer from '../../utils/Footer'
import FaqMessage from './faqMeesge';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Faq() {
  const [faqs, setFaqs] = useState([]);

  async function GetTack() {
    const response = await axios.get('https://soft.datashop.uz/api/');
    setFaqs(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    GetTack();
  }, []);

  return (
    <div className="container">
      <header style={{ backgroundImage: 'none', height: 'auto' }}>
        <Navbar />
      </header>
      <main>
        <div className="faqs">
          <span className="faqsTitle">FAQ</span>
          <div className="faqss">
            {faqs.map((faq) => (
              <FaqMessage key={faq.id} id={faq.id} question={faq.title} answer={faq.desc} />
            ))}
          </div>
        </div>
        <div className="contact">
          <span className="contactTitle">Tell us about your project</span>
          <div className="contactMain">
            <div className="contactMainInfos">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone" />
              <select name="" id="">
                <option value="" selected disabled hidden>
                  Budget
                </option>
                <option value="0-100">$0-$100</option>
                <option value="100-300">$100-$300</option>
                <option value="300-700">$300-$700</option>
                <option value="700-1000">$700-$1000</option>
                <option value="1000-2000">$1000-$2000</option>
                <option value="2000+">$2000+</option>
              </select>
              <select name="" id="">
                <option value="" selected disabled hidden>
                  Where did you hear about us?
                </option>
                <option value="Google">Google</option>
                <option value="Instagram">Instagram</option>
                <option value="Telegram">Telegram</option>
              </select>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <button>Submit</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}