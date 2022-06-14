import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => { 
  return (
    <div>
      <div className={s.item}> 
        < NavLink to="/1" className = {s.active}><img src='./images/1new.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/2"><img src='./images/2new.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/3"><img src='./images/3new.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/4"><img src='./images/4new.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/5"><img src='./images/5new.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/6"><img src='./images/6new.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/7"><img src='./images/7new.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/8"><img src='./images/8new.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/9"><img src='./images/9new.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/10"><img src='./images/10new.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/11"><img src='./images/11new.png' /></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        < NavLink to = "/12"><img src='./images/12new.png' /></NavLink>
      </div>
      </div>
  );
}

export default Navbar;