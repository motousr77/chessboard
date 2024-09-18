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

const getNums = (data) => [smp[data[0]], parseInt(data[1])];
// const getChars = (data) => [mps[data[0]], data[1]];
// const chekPresent = (cll, obj) => Object.keys(obj).includes(cll);

const hld = [];

const App = () => {
    const [pos, setPos] = useState(position01);
    const [text, setText] = useState('');
    const [someSelect, setSomeSelect] = useState(null);
    const [warnText, setWarnText] = useState(null);

    const manualCheck = () => {
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

    const resetSelection = () => {
        hld.splice(0);
        setSomeSelect(null);
    };

    const passSelect = (cell) => {
        if (cell) {
            if (hld.length === 0 && Object.keys(pos).includes(cell)) {
                hld.push(cell);
                setSomeSelect(getNums(cell));
                // setSomeSelect(cell);
            } else if (hld.length > 0) {
                hld.push(cell);
            } else {
                resetSelection();
            }

            console.log('HLD:', hld);
            
            if (hld.length === 2 && Object.keys(pos).includes(hld[0])) {
                if (hld[0] !== hld[1]) {
                    const prev = JSON.parse(JSON.stringify(pos));
                    const tmpFrom = prev[hld[0]];
                    delete prev[hld[0]];
                    prev[hld[1]] = tmpFrom;
                    setPos(prev);
                    resetSelection();
                } else {
                    resetSelection();
                }
            }
        }
    };

    useEffect(() => {
        console.log('POS:', pos);
    }, [pos]);

    // useEffect(() => {
    //     console.log('preselect:', preselect);
    // }, [preselect]);

    return (
        <div style={{ padding: `${dims.szxy}px` }}>
            <Board
                pos={pos}
                selArr={someSelect}
                passClick={passSelect}
            />
            <br/>
            <input
                type='text'
                name='name'
                value={text}
                onChange={ev => setText(ev.target.value)}
            />
            <button onClick={manualCheck}>check</button>
            <br/>
            {
                warnText &&
                <label htmlFor='asdf'>{warnText}</label>
            }
        </div>
    );
};

export default App;
