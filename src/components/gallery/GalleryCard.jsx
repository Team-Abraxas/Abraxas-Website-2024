import { React, useState } from "react";
import '../../styles/gallery/gallery.css';
// import ImageModel from './imageModel';

function GalleryCard({ identifier, style, width, image1, image2, image3 }) {

  function movement1(event) {
    const card = event.currentTarget;
    card.querySelector(".firstImg").classList.add('child-1');
    card.querySelector(".midImg").classList.add('child-2');
    card.querySelector(".lastImg").classList.add('child-3');
  }

  function movement2(event) {
    const card = event.currentTarget;
    card.querySelector(".firstImg").classList.remove('child-1');
    card.querySelector(".midImg").classList.remove('child-2');
    card.querySelector(".lastImg").classList.remove('child-3');
  }




  return (
    <>
      <div id="card-container" style={{ style, width: `${width}px` }} key={identifier} onMouseEnter={movement1} onMouseLeave={movement2} >
        <div className="firstImg tr fadeInClass" style={{ width: `${width}px` }}><img src={image1} /></div>
        <div className="midImg tr" style={{ width: `${width}px` }}><img src={image2} /></div>
        {/* <div className="lastImg tr" style={{ width: `${width}px` }}><img src={image3} /></div> */}
      </div>

    </>
  );
}

export default GalleryCard;