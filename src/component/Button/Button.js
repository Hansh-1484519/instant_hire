import React from 'react';
import './button.css'
const Button = (props) =>{
    return(
        <div >
            <button type = "button" className='button'>{props.text}</button>
        </div>
    )
}

export default Button 