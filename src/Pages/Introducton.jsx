import React from 'react';
import style from '../ModuleCSS/introduction.module.css';
import { ThemeContext } from '../Themecontext/context';
function Introducton() {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <div className={`${themename} ${style.introuction}   `}>
      <div className={`${style.verctor1} float-left `}>
        <img
          src='./Rectangle.png'
          alt=''
          className='  w-[300px] h-fit object-cover float-start'
        />
      </div>

      <div className=' ml-20 mb-20'>
        <div className=' w-2/3 m-auto  ml-20 '>
          <div className='text-left'>
            <span className='text-[2.5rem] font-text_ittelic'>T</span>
            <span className='text-[1.5rem] font-text_ittelic'>
              his is it. ;)
            </span>
          </div>
          <div className='content text-left'>
            <p>
              Anish Kr. Sinha is an Indian{' '}
              <span className=' font-text_bold font-bold text-lg'>
                UI/UX Designer & Front End Developer
              </span>
              with a passion for designing beautiful and fuctional user
              experiences. Typically, he’s Driven & permanently Curious. He’s
              obsessed with designing things and even more obsessed with
              designing cool & clean stuff for the web and mobile. He has been
              in the business of creating since he hung his first painting on
              the wall when he was 11. He holds a{' '}
              <span className=' font-text_bold font-bold text-lg'>
                bachelor degree in Computer Applications.
              </span>
              During his graduation, he has been actively involved in the web
              design community for the last 3 years. he has designed websites
              for small businesses, events, nonprofits and more. Currently he’s
              based in jharkhand,{' '}
              <span className=' font-text_bold font-bold text-lg'>India</span>.
              Where he’s working as an independent creative. His interests,
              however, extend beyond the web and he loves helping people with
              branding and print design. He even loves designing{' '}
              <span className=' font-text_bold font-bold text-lg'>
                3D floor plan
              </span>
              . When he’s not designing, he’s probably hanging out with his
              girlfriend, watching series, sketching or messing around on
              something inspired by YouTube tutorials.
            </p>
          </div>
        </div>
      </div>
      <div className=' w-56 h-1 border-b-2  border-gray-400 m-auto '></div>

      <div className={`${style.leftvector3}`}>
        <div className={`${style.content}`}></div>
      </div>
      <div className='w-full m-auto bg-inherit flex items-center justify-between relative left-0 right-0 top-[0rem]'>
        <div className=' w-3/4 m-auto flex items-center justify-between'>
          <div>
            <img
              src='./Vector4.png'
              alt=''
              className='w-[250px] object-contain'
            />
          </div>
          <div>
            <img
              src='./Vector5.png'
              alt=''
              className='w-[300px] object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introducton;
