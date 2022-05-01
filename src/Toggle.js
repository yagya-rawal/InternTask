import React from 'react';
import './Toggle.css';
import cx from 'classnames';
const Toggle = ({rounded = false}) =>{
    
    const sliderCX = cx('slider',{
        'rounded': rounded
    });

    return (
         <label className='toggle'>
             <input type='checkbox' />
             <span className={sliderCX} />
         </label>
     )
}

export default Toggle;