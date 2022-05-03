
import circles from './pattern-circles.svg';
import './App.css';
import Toggle from './Toggle.js';
import Slider from './Slider/Single-value.svg';
import iconcheck from './icon-check.svg'
import React,{useState} from 'react';

function App() {
   const [darkMode, setdarkMode] = useState(false)
   const darkModeToggleHandler=()=>{
    console.log(darkMode)
    setdarkMode((darkMode)=>(!darkMode))
   }
  const visualModeClass=darkMode?"darkClass":"";
  return (
    <div className={"page"+" "+visualModeClass}>
    <div className={'App'+' '+visualModeClass}>
      {/* <img src={bgpattern} className='bgimage' /> */}
      <div className={'darkmodetoggle'+' '+visualModeClass}>
      <Toggle rounded={false} darkModeToggleHandler={darkModeToggleHandler} />
      </div>
      <div className="header">
        <div className=''><img src={circles} alt='img' className='circles'/> </div>
        <div className={"heading"+" "+visualModeClass}>

          <h2 className={visualModeClass}>Simple, traffic-based pricing</h2>
          Sign-up for our 30-day trial. No credit card required.
        </div>

      </div>

      <div className={"container"+" "+visualModeClass}>
        <div className={'box'+" "+visualModeClass}>
          <div className='inbox1'>
            <span className={'views'+" "+visualModeClass}>100k Pageviews</span>
            <h1 className={visualModeClass}>$16.00</h1>
            <span className={'fees'+" "+visualModeClass}> /month</span>
          </div>

          <div className='Slider'><img src={Slider} alt='slider' />
          </div>
          <div className='billing'>
            <span className={'bill monthly'+' '+visualModeClass}>Monthly Billing </span>
            <Toggle className='toggle' rounded={true} />
            <span className={'bill yearly'+' '+visualModeClass}>Yearly Billing </span>
            <span className={'disc'+' '+visualModeClass}>25% discount</span></div>

          <div className='inbox2'>

            <div className={'checkboxes'+' '+visualModeClass}>
              <div className={'checks first'+' '+visualModeClass}> <img src={iconcheck} alt='checked' /> Unlimited websites     </div>
              <div className={'checks second'+' '+visualModeClass}> <img src={iconcheck} alt='checked' /> 100% data ownership  </div>
              <div className={'checks third'+' '+visualModeClass}> <img src={iconcheck} alt='checked' /> Email reports</div>
            </div>
           
            <div className='trial'>
              <button className={'startbutton'+' '+visualModeClass}>  Start my trial</button>
            </div>
          </div>
 <div></div>
        </div>
      </div>
    </div></div>
  );
}

export default App;
