import React from 'react';

import './common.css';

export default function Nav() {
  return (
    <div className='nav-container'>
      <a className='logo' href='/home'>Redstone Database</a>
      <div className='navbar-list'>
        <a className='navbar-link' href='/home'>Home</a>
        <a className='navbar-link' href='/guides'>Guides</a>
        <a className='navbar-link' href='/contraptions'>Contraptions</a>
        <a className='navbar-link' href='/forums'>Forums</a>
      </div>
    </div>
  );
}