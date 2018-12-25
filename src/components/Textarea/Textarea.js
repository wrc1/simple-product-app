import React from 'react';

export const Textarea = ({type, value, onChange, placeholder, initValue}) => {
    
    if (value === null) 
        value = initValue;
    return(
            <textarea 
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            ></textarea>
    )
}