import React from 'react'
import './style.css'

function Header() {
  return (
    <div className='all'>

        <div className='myimage'>
             <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"></img>
        </div>

        <div className='mylinks'>
              <a href='#'>Home</a>
              <a href='#'>Tv Shows</a>
              <a href='#'>Movies</a>
              <a href='#'>News & popular</a>
              <a href='#'>My List</a>

        </div>

    </div>
  )
}

export default Header
