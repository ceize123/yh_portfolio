import React from 'react';
import { useParams } from 'react-router-dom';
import uiuxDetail from '../uiuxDetails';

function Uiux() {
    const { title } = useParams();
    return (
        <main>
            {/* use the result of filter function */}
            {uiuxDetail.filter(content => content.urlName === title).map((content, key) => (
                <div key={key}>
                    <h2>{content.mainTitle}</h2>
                    <p>{content.description}</p>
                </div>
            ))}
        </main>
    );
}

export default Uiux;