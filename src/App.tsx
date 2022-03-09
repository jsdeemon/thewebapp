import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import mac from './mac.png'
import contact from './contact.png'
import './App.css';
import Moon from './components/Moon'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import GetProvider from './components/GetProvider/GetProvider';
import Modal from './components/Modal/Modal';

function App() {


  const [isHovered, setIsHovered] = useState(false)

  return (
    <>

    <header className='header'>
    <div className="white">
      <a href="#about">
    <i className="fa-solid fa-user-tie green"></i> <br />
    About me
    </a>
    </div>
  
    <div className="white pointer">
    <a href="#pentesting">
    <i className="fa-solid fa-book-skull fiolet"></i><br />
    Pentesting
    </a>
    </div>

    <div className="white pointer">
    <a href="#contact">
    <i className="fa-solid fa-file-signature orange"></i><br />
    Contact me
    </a>
    </div>


    </header>

<div style={{ 'float': 'right' }}>
  <GetProvider />
</div>

    <nav>
    
    </nav>
   

<Modal modalId='about' title='About me' text='Hello. My name is Dmitry Safarov, a programmer and web developer. I know JavaScript, Python and PHP. I develop various apps, bots and scripts. I use Linux and Docker.' />

<Modal modalId='portfolio' title='Portfolio' text="You can check github for some of my open source projects" />

<Modal modalId='pentesting' title='Pentesting & info gathering' text="I use whole power of Kali linux for information gathering and web pentesting of applications." /> 

<Modal modalId='contact' title='Contact me' text="Telegram: @Webdevinfobot" />

    </>
  );
}

export default App;
