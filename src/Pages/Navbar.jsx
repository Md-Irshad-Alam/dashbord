import React from 'react';

import { GoMoon } from 'react-icons/go';
import { WiMoonAltWaningCrescent3 } from 'react-icons/wi';
import { Link } from 'react-router-dom';
import style from '../ModuleCSS/navbar.module.css';
import { ThemeContext } from '../Themecontext/context';
function Navbar() {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);

  return (
    <div className='container absolute top-10 left-0 right-0 flex justify-between '>
      <div className='flex items-center gap-4 mobole:hidden tablet:hidden'>
        <img
          src='./logo.svg'
          alt=''
          className=' w-9 h-10 inline-block mb-2   object-cover bg-transparent'
        />
        <p className=' font-bold text-2xl font-font_reguler '>
          Md irshad alam{' '}
        </p>
      </div>
      <div className={style.navbarLink}>
        <Link to='/'>
          <span className=''>Home</span>
        </Link>
        <a href='#about'>
          <span>About</span>
        </a>
        <Link to='/'>
          <span>Resume</span>
        </Link>
        <Link to='/'>
          <span>Skill</span>
        </Link>
        <Link to='/'>
          <span>Project</span>
        </Link>
        <Link to='/'>
          <span>Contect</span>
        </Link>
        <p
          type='button'
          onClick={toggeltheme}
          className='text-xl '
          aria-label='toggle theme'
          style={{ backgroundColor: 'inherit' }}
        >
          {themename === 'dark' ? <GoMoon /> : <WiMoonAltWaningCrescent3 />}
        </p>
      </div>
    </div>
  );
}

export default Navbar;
