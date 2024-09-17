import React, { useMemo, useState, useEffect } from 'react';
import { Board } from './Board';
import { dims, smp, mps } from './defs';

const position01 = {
    e4: 'wk',
    d6: 'bk',
    d4: 'wq',
    e5: 'wn',
    a1: 'br',
};

// const getChars = (data) => [mps[data[0]], data[1]];

const App = () => {
    const [pos, setPos] = useState(position01);
    const [text, setText] = useState('');
    const [someMove, setSomeMove] = useState();
    const [warnText, setWarnText] = useState(null);

    const handleCheck = () => {
        if (text) {
            const tmp = text.split(' ');
            const from = tmp[0];
            const to__ = tmp[1];

            console.log('from / to', from, to__);
            const prevPos = JSON.parse(JSON.stringify(pos));
            const tmpFrom = pos[from];

            if (tmpFrom) {
                delete prevPos[from];
                prevPos[to__] = tmpFrom;
                setPos(prevPos);
                setWarnText(null);
            } else {
                setWarnText('unavailable');
            }
        }
    };

    useEffect(() => {
        console.log('POS:', pos);
    }, [pos]);

    return (
        <div style={{ padding: `${dims.szxy}px` }}>
            <Board pos={pos}/>
            <br/>
            <input
                type='text'
                name='name'
                value={text}
                onChange={ev => setText(ev.target.value)}
            />
            <button onClick={handleCheck}>check</button>
            <br/>
            {
                warnText &&
                <label htmlFor='asdf'>{warnText}</label>
            }
            {/* <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" /> */}
        </div>
    );
};

export default App;
