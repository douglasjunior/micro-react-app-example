import React, { useState } from 'react';

const ReactComponentExample = () => {
    const [value, setValue] = useState('');
    return (
        <div>
            <input placeholder='teste' value={value} onChange={event => setValue(event.target.value)} />
            <br />
            <button>enviar!!</button>
        </div>
    );
};

export default ReactComponentExample;
