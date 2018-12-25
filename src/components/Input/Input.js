import React from 'react';

export const Input = ({type, value, onChange, placeholder, initValue}) => {
   
   if (value === null) 
    value = initValue

    return (
        <div className={'ui input'}>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
             />   
        </div>
    )
} 