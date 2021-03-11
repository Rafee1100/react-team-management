import React from 'react';

const NotFound = () => {

    const errorStyle={
        textAlign:'center',
        color:'red'
    }
    return (
        <div style={errorStyle}>
            <h2>Such Component not Found</h2>
        </div>
    );
};

export default NotFound;