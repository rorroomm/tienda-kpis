import React from 'react';

function Section({subtitle, text, text2}) {
    return (
        <div>
            <h2 style={{color:'red'}}>{subtitle}</h2>
            <p style={{backgroundColor: 'yellow', padding: 5, width: 400}}>{text}</p>
            <h3>{text2}</h3>
        </div>
    )
}

export default Section;
