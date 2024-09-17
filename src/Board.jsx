import React, { useMemo, useState, useEffect } from 'react';
import { parseSome } from './utils';
import { color, dims, mps } from './defs';

import wb from './images/pieces/wb.png';
import wk from './images/pieces/wk.png';
import wn from './images/pieces/wn.png';
import wp from './images/pieces/wp.png';
import wq from './images/pieces/wq.png';
import wr from './images/pieces/wr.png';

import bb from './images/pieces/bb.png';
import bk from './images/pieces/bk.png';
import bn from './images/pieces/bn.png';
import bp from './images/pieces/bp.png';
import bq from './images/pieces/bq.png';
import br from './images/pieces/br.png';

const imap = {
    wb: wb,
    wk: wk,
    wn: wn,
    wp: wp,
    wq: wq,
    wr: wr,
    bb: bb,
    bk: bk,
    bn: bn,
    bp: bp,
    bq: bq,
    br: br,
};

export const Board = ({ pos, otherData }) => {
    const count = dims.count;
    const szxy = dims.szxy;

    const mainBoard = useMemo(() => {
        const rows = [];
        for (let i = 1; i < count + 1; i++) {

            const columns = [];
            for (let j = 1; j < count + 1; j++) {
                const isEven = (i + j) % 2 === 0;

                const gtm = Object.keys(pos).map(el => {
                    const rps = parseSome(el);

                    if (rps) {
                        if (rps[0] === j && rps[1] === i) {
                            return pos[el];
                        }
                    }

                    return null;
                }).filter(el => el);

                columns.push(
                    <div
                        key={`col-${j}`}
                        style={{
                            display: 'flex',
                            width: `${szxy}px`,
                            height: `${szxy}px`,
                            justifyContent: 'space-between',
                            background: isEven ? color.even : color.odd,
                        }}
                        // onMouseOver={() => console.log('OVER', mps[j], i)}
                        onClick={() => console.log('CHECK: ', mps[j], i)}
                    >
                        {
                            <div
                                // draggable // TBD: drop
                                style={{ cursor: 'pointer' }}
                            >
                                {
                                    gtm[0] &&
                                    <img
                                        width={48}
                                        height={48}
                                        src={imap[gtm[0]]}
                                        alt={`pece-${gtm[0]}`}
                                    />
                                }
                            </div>
                        }
                    </div>
                );
            }

            rows.push(<div key={`row-${i}`} style={{ display: 'flex' }}>{columns}</div>);
        }

        return rows.reverse();
    }, [pos]);

    return (
        <div
            style={{
                width: `${szxy * count}px`,
                height: `${szxy * count}px`,
                border: `1px solid ${color.border}`,
            }}
        >{mainBoard}</div>
    );
};
