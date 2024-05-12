import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Introducton from './Pages/Introducton';
import Sharelink from './Pages/Sharelink';
import { ThemeContext } from './Themecontext/context';
function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  console.log(themename);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className={`${themename} absolute left-0 right-0 mb-10 h-[100vh]`}>
      <div className=''>
        <Navbar />
      </div>
      <div id='about' className={` mt-52`}>
        <About />
        <Sharelink />
      </div>
      <div
      // className={` relative top-72 mobole:top-[32rem]  tablet:top-[32rem]`}
      >
        <Introducton />
      </div>
    </div>
  );
}

export default App;
