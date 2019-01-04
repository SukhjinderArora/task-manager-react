import React from 'react';
import style from './Header.module.css';

const Header = (props) => {
  return (
    <header className={style.header}>
      <h1 className={style.heading__primary}>Task Manager</h1>
      <p className={style.heading__secondary}>Get Your Tasks Done</p>
    </header>
  )
}

export default Header;