

import React from 'react'
import img from "../../assets/images/man.jpg"
import star1 from "../../assets/images/star-yellow.png"
import star2 from "../../assets/images/star-white.png"

const Feedback = () => {
  return (
    <div className='feedback'>
      <h2>Customer's Feedback</h2>
      <div className='feedback-box'>
        <div className='card'>
          <div className='user'>
            <img src={img} className='img-fluid' alt="" />
            <p>jenny Wilson</p>
          </div>
          <div className='d-flex'>
            <img src={star1} className='img-fluid star' alt="" />
            <img src={star1} className='img-fluid star' alt="" />
            <img src={star1} className='img-fluid star' alt="" />
            <img src={star1} className='img-fluid star' alt="" />
            <img src={star2} className='img-fluid star' alt="" />
          </div>
          <p className='feed'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo fuga placeat eligendi quo ipsa sint. Quae, recusandae hic. Autem pariatur consectetur vero repellat incidunt voluptates tempora asperiores aliquid repellendus ex.</p>
        </div>
        <div className='card'>
          <div className='user'>
            <img src={img} className='img-fluid' alt="" />
            <p>jenny Wilson</p>
          </div>
          <div className='d-flex'>
            <img src={star1} className='img-fluid star' alt="" />
            <img src={star1} className='img-fluid star' alt="" />
            <img src={star1} className='img-fluid star' alt="" />
            <img src={star1} className='img-fluid star' alt="" />
            <img src={star2} className='img-fluid star' alt="" />
          </div>
          <p className='feed'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo fuga placeat eligendi quo ipsa sint. Quae, recusandae hic. Autem pariatur consectetur vero repellat incidunt voluptates tempora asperiores aliquid repellendus ex.</p>
        </div>
        <div className='card'>
          <div className='user'>
            <img src={img} className='img-fluid' alt="" />
            <p>jenny Wilson</p>
          </div>
          <div className='d-flex'>
            <img src={star1} className='img-fluid star' alt="" />
            <img src={star1} className='img-fluid star' alt="" />
            <img src={star1} className='img-fluid star' alt="" />
            <img src={star1} className='img-fluid star' alt="" />
            <img src={star2} className='img-fluid star' alt="" />
          </div>
          <p className='feed'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo fuga placeat eligendi quo ipsa sint. Quae, recusandae hic. Autem pariatur consectetur vero repellat incidunt voluptates tempora asperiores aliquid repellendus ex.</p>
        </div>
      </div>
    </div>
  )
}

export default Feedback