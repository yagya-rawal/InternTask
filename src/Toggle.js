import React from 'react';
import './Toggle.css';
import cx from 'classnames';
const Toggle = ({rounded = false,darkModeToggleHandler}) =>{
    
    const sliderCX = cx('slider',{
        'rounded': rounded
    });
    const clicKHandler=(e)=>{
        darkModeToggleHandler();
    }
    return (
         <label className='toggle'>
             <input type='checkbox' onClick={clicKHandler} />
             <span className={sliderCX} />
         </label>
     )
}

export default Toggle;