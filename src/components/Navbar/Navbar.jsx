import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => { 
  return (
    <div>
      <div className={s.item}> 
        < NavLink to="/1" className = {s.active}><img src='https://pngimg.com/uploads/aries/aries_PNG4.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/2"><img src='https://pngimg.com/uploads/taurus/taurus_PNG51.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/3"><img src='https://abali.ru/wp-content/uploads/2019/11/BLIZNETSY-1897x2048.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/4"><img src='https://pngimg.com/uploads/cancer_zodiac/cancer_zodiac_PNG43.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/5"><img src='https://bumper-stickers.ru/48704-thickbox_default/tatuirovka-lev.jpg' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/6"><img src='https://pngimg.com/uploads/virgo/virgo_PNG1.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/7"><img src='https://mywebicons.ru/i/png/e713e2e9e13e2d4040a2334628241194.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/8"><img src='https://o-tendencii.com/uploads/posts/2022-01/1642535275_64-o-tendencii-com-p-tatu-znak-zodiaka-skorpion-foto-67.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/9"><img src='https://pngimg.com/uploads/sagittarius/sagittarius_PNG35.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/10"><img src='https://i.pinimg.com/originals/a6/3d/aa/a63daacc8cd0beeacfc09e655b832102.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/11"><img src='https://bipbap.ru/wp-content/uploads/2019/09/aquarius_PNG24.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/12"><img src='https://www.pngarts.com/files/1/Pisces-PNG-High-Quality-Image.png' /></NavLink>
      </div>
      </div>
  );
}

export default Navbar;