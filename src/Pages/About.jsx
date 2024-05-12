import React from 'react';
import { Button } from '@mui/material';
import style from '../ModuleCSS/about.module.css';
import { ThemeContext } from '../Themecontext/context';
function About() {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <div
      className={`${themename} container absolute left-0 right-0 h-full mb-10 `}
    >
      <div
        className={`${style.aboutpage} mobole:flex-col  tablet:flex-col tablet:w-full laptop:flex-row  flex items-center justify-between h-fit mb-10`}
      >
        <div className=' w-2/3 mobole:w-full tablet:w-full  text-left overflow-x-hidden'>
          <Button
            className='w-[12.313rem] h-[4.5rem] shadow-[0px_15px_50px_rgba(153,_153,_153,_0.25)] mb-2'
            variant='contained'
            sx={{
              textTransform: 'none',
              color: '#fff',
              fontSize: '36',
              background: 'linear-gradient(90deg, #32f6f6, #a6a79f)',
              borderRadius: '50px 50px 50px 0px',
              '&:hover': {
                background: 'linear-gradient(90deg, #32f6f6, #a6a79f)',
              },
              width: 100,
              height: 42,
            }}
          >
            Hello!
          </Button>
          <h5 className=' font-reguler text-2xl font-bold flex items-center gap-x-2 '>
            I'm{' '}
            <span className='  text-dimgray font-extrabold text-2xl '>
              Irshad
            </span>
            <span>
              <img src='./Wave.svg' className='w-[30px]' alt='' />
            </span>
          </h5>
          <p className=' font-font_bold text-xl text-md'>
            UI/UX Designer, Front-End Developer & Thinker. Based in India.
          </p>

          <br />
          <div className='flex items-center gap-x-4'>
            <Button
              className='self-stretch h-[2.75rem] shadow-[0px_15px_50px_rgba(153,_153,_153,_0.25)]'
              variant='contained'
              sx={{
                textTransform: 'none',
                color: '#fefefe',
                fontSize: '20',
                background: 'linear-gradient(90deg, #df580c, #fd993d)',
                border: '#fff solid 3px',
                borderRadius: '10px',
                '&:hover': {
                  background: 'linear-gradient(90deg, #df580c, #fd993d)',
                },
                height: 40,
              }}
            >
              Download CV
            </Button>
            <Button
              className='self-stretch h-[3.75rem] shadow-[0px_15px_50px_rgba(153,_153,_153,_0.25)]'
              variant='contained'
              sx={{
                textTransform: 'none',
                color: '#fefefe',
                fontSize: '20',
                background: 'linear-gradient(90deg, #434343, #817e7e)',
                border: '#fff solid 3px',
                borderRadius: '10px',
                '&:hover': {
                  background: 'linear-gradient(90deg, #434343, #817e7e)',
                },
                height: 40,
              }}
            >
              Get In Touch!
            </Button>
          </div>
        </div>
        <div className=' float-right'>
          <img
            src='./profile.png'
            width='350px'
            height='350px'
            className=' object-fill overflow-scroll'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default About;
