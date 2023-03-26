import React, { useState, useEffect } from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { IoMdClose } from 'react-icons/io'
import axios from "axios";

function ImgGallary() {
  const URL = 'https://soft.datashop.uz'
  async function GetTack() {
    const response = await axios.get('https://soft.datashop.uz/gallery/');
    setImages(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    GetTack();
  }, []);
  // image function
  const [images , setImages] = useState([])

  const [data, setData] = useState({ img: '', i: 0 })

  const viewImage = (img, i) => {
    setData({ img, i })
    console.log({ img, i });
  }

  const imgAction = (action) => {
    let i = data.i;
    if (action === 'next-img') {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if (action === 'prev-img') {
      setData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: '', i: 0 });
    }
  }

  return (
    <>
      {data.img &&
        <div className="openImg">
          <button className="imgClose" style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={() => imgAction()}> <IoMdClose style={{ color: '#FFFFFF' }} /> </button>
          <button className="imgPrev" style={{ fontSize: '36px' }} onClick={() => imgAction('prev-img')} >{'<'}</button>
          <img src={data.img} style={{ width: 'auto', maxWidth: '90%', maxHeight: '90%' }} />
          <button className="imgNext" style={{ fontSize: '36px' }} onClick={() => imgAction('next-img')} >{'>'}</button>
        </div>
      }
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      ></ResponsiveMasonry>
      <Masonry columnsCount={3} gutter="10px">
        {images.map((image, i) => (
          <img
            key={i}
            src={URL + image.image}
            style={{ width: "100%", display: "block" }}
            onClick={() => viewImage(`${URL}${image.image}`, i)}
          />
        ))}
      </Masonry>
    </>
  );
}

export default ImgGallary;