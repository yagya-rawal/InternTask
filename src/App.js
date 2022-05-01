
import circles from './pattern-circles.svg';
import './App.css';
import Toggle from './Toggle.js';
import Slider from './Slider/Single-value.svg';
import iconcheck from './icon-check.svg'


function App() {
  // const [darkMode, setdarkMode] = useState(false)

  return (
    <div className='App'>
      <div className='darkmodetoggle'>
      <Toggle rounded={false} />
      </div>
      <div className="header">
        <div className=''><img src={circles} alt='img' /> </div>
        <div className="heading">

          <h2>Simple, traffic-based pricing</h2>
          Sign-up for our 30-day trial. No credit card required.
        </div>

      </div>

      <div className="container">
        <div className='box'>
          <div className='inbox1'>
            <span className='views'>100k Pageviews</span>
            <h1>$16.00</h1>
            <span className='fees'> /month</span>
          </div>

          <div className='Slider'><img src={Slider} alt='slider' />
          </div>
          <div className='billing'>
            <span className='bill monthly'>Monthly Billing </span>
            <Toggle className='toggle' rounded={true} />
            <span className='bill yearly'>Yearly Billing </span>
            <span className='disc'>25% discount</span></div>

          <div className='inbox2'>

            <div className='checkboxes'>
              <div className='checks first'> <img src={iconcheck} alt='checked' /> Unlimited websites     </div>
              <div className='checks second'> <img src={iconcheck} alt='checked' /> 100% data ownership  </div>
              <div className='checks third'> <img src={iconcheck} alt='checked' /> Email reports</div>
            </div>
           
            <div className='trial'>
              <button className='startbutton'>  Start my trial</button>
            </div>
          </div>
 <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
