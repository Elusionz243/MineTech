import React from 'react';

import './home.css';

export default function Home() {

  return (
    <div className='home-container'>
      <div className='card'>
        <div className='card-header'>
          <div className='card-title'>
            <h4>This is an example title for the post</h4>
          </div>
        </div>
        <div className='card-body'>
          <p>This is an example message for the post!</p>
        </div>
        <div className='card-footer'>
          <button className='btn btn-warning' disabled>
            Example
          </button>
        </div>
      </div>
    </div>
  )
}