import React from 'react';

import './Menu.css';

export const Menu = () => {
  return (
    <div id='menubar'>
        <div id='section'>
            <div  id='single'>
                <p id='main'>7</p>
                <p id='sub'>Year Experience</p>
            </div>
            <div id='single'>
                <p id='main'>2</p>
                <p id='sub'>Opened in the Country</p>
            </div>
        </div>
        <div id='section'>
            <div id='single'>
                <p id='main'>10k+</p>
                <p id='sub'>Furniture Sold</p>
            </div>
            <div id='single'>
                <p id='main'>260+</p>
                <p id='sub'>Variant Furniture</p>
            </div>
        </div>
    </div>
  )
}
