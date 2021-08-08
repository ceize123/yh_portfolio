import React, { useState, useEffect } from 'react';

function Wrapper ({children}) { 
    return (
        <div className="container">
            {children}
        </div>
    );
}

export default Wrapper;