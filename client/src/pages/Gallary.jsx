import React, { useState } from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import gallery1 from '../images/galery1.png'
import gallery2 from '../images/galarey2.png'
import gallery3 from '../images/galery3.png'
import gallery4 from '../images/galery4.png'
import gallery5 from '../images/galery5.png'
import gallery6 from '../images/galery6.png'
import gallery7 from '../images/galery7.png'

const images = [
  gallery2,
  gallery1,
  gallery3,
  gallery5,
  gallery4,
  gallery7,
  gallery6
]

function ImgGallary() {

    const [data , setData] = useState({img: '' , i: 0})

    const viewImage = (img , i) => {
      setData({img , i})
      console.log({img , i});
    }
  
    const imgAction = (action) => {
      let i = data.i ;
      if (action === 'next-img') {
        setData({img: images[i + 1] , i: i + 1}) ;
      }
      if (action === 'prev-img') {
        setData({img: images[i - 1] , i: i - 1}) ;
      }
      if (!action) {
        setData({img: '' , i: 0}) ;
      }
    }
  
    return (
      <>
        {data.img &&
          <div className="openImg">
            <button style={{position: 'absolute' ,top: '50px' , right: '50px' }} onClick={() => imgAction()} >x</button>
            <button style={{fontSize: '36px'}} onClick={() => imgAction('prev-img')} >{'<'}</button>
            <img src={data.img} style={{width: 'auto' , maxWidth: '90%' , maxHeight: '90%'}}/>
            <button style={{fontSize: '36px'}} onClick={() => imgAction('next-img')} >{'>'}</button>
          </div>
        }
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        ></ResponsiveMasonry>
        <Masonry columnsCount={3} gutter="10px">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: "100%", display: "block" }}
              onClick={() => viewImage(image , i)}
            />
          ))}
        </Masonry>
      </>
    );
  }

export default ImgGallary;
