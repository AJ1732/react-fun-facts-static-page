import React from 'react'
import reactLogo from '../images/react-logo.png'

const Header = () => {
  return (
    <header>
      <nav>
        <div className='nav-left'>
          <img className='nav-logo' src={reactLogo} width="40" alt="react logo" />
          <h3 className='nav-logo-text'>React Facts</h3>
        </div>

        <h4 className='nav-title'>React Course - Project 1</h4>
      </nav>
    </header>
  )
}

export default Header