import React, { useState } from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {IoMdClose} from 'react-icons/io'

const images = [
  'https://ucarecdn.com/40c800ed-2a5f-4f20-8d78-e268500f17fb/-/resize/1000x/',
  'https://ucarecdn.com/dab287df-01af-46ef-bbe7-93431e3ffe54/-/resize/1000x/',
  'https://ucarecdn.com/3294cc2d-5b92-40c3-850d-7131d33a7346/-/resize/1000x/',
  'https://ucarecdn.com/ebf84246-f2a6-43da-b2f0-07de43c2e697/-/resize/1000x/',
  'https://ucarecdn.com/d5aa9763-a51c-4c51-932a-dd315f8f224f/-/resize/1000x/',
  'https://ucarecdn.com/5505557b-1d61-47c3-a022-ce226b861ff8/-/resize/1000x/',
  'https://ucarecdn.com/6ca1f15c-8cc1-4a48-8802-76e186b53db1/-/resize/1000x/'
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
            <button className="imgClose" style={{position: 'absolute' ,top: '10px' , right: '10px' }} onClick={() => imgAction()}> <IoMdClose style={{color: '#FFFFFF'}}/> </button>
            <button className="imgPrev" style={{fontSize: '36px'}} onClick={() => imgAction('prev-img')} >{'<'}</button>
            <img src={data.img} style={{width: 'auto' , maxWidth: '90%' , maxHeight: '90%'}}/>
            <button className="imgNext" style={{fontSize: '36px'}} onClick={() => imgAction('next-img')} >{'>'}</button>
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
