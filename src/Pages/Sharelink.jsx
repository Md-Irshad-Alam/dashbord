import React from 'react';
import { FaFacebook } from 'react-icons/fa6';
import { SlSocialInstagram } from 'react-icons/sl';
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialGithubCircular } from 'react-icons/ti';
import { TiSocialLinkedin } from 'react-icons/ti';
import { SlSocialSkype } from 'react-icons/sl';
import { TiSocialInstagramCircular } from 'react-icons/ti';
import { ThemeContext } from '../Themecontext/context';

function Sharelink() {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <div className={`  w-full fixed left-0 right-0 top-60 z-1`}>
      <li className='list-none flex items-center justify-between'>
        <ul className='flex flex-col gap-y-4 font-bold text-lg'>
          <FaFacebook />
          <SlSocialInstagram />
          <TiSocialTwitter />
          <TiSocialGithubCircular />
          <TiSocialLinkedin />
          <SlSocialSkype />
          <TiSocialInstagramCircular />
        </ul>
        <ul className=' rotate-90 font-bold font-reguler'>
          irshadalam2000@gmail.com
        </ul>
      </li>
    </div>
  );
}

export default Sharelink;
