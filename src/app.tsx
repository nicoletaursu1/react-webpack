import React from 'react';
import ReactDOM from 'react-dom';
import '../public/sass/styles.scss'

import Logo from './components/Logo';

const App = () => {
  return (
    <div className='container'>
      <Logo />
      <p className='logo__description'>Chinese B Pay</p>
      <p className='temp'>*Some cool content and functionality here*</p>
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));
