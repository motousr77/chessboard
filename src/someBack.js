/*

// white
import wk from './images/pieces/wk.png';
import wq from './images/pieces/wq.png';
import wn from './images/pieces/wn.png';

// black
import bk from './images/pieces/bk.png';
import br from './images/pieces/br.png';

const imap = {
    wk: wk,
    wq: wq,
    wn: wn,
    bk: bk,
    br: br,
};

const boardColors = {
    'lichess_org': { odd: '#ecdab9', even: '#ae8a68', border: 'black' },
    'chess_com': { odd: '#ebecd3', even: '#7d945d', border: 'black' },
    'simple_gray': { odd: 'white', even: 'gray', border: 'black' },
};

const color = boardColors.chess_com;

const mps = { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h' };
const smp = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };

console.log('matched', pos[el], rps, getChars(rps));

    const [pos, _] = useState({
        d6: 'bk',
        d4: 'wq',
        e7: 'wn',
        e4: 'wk',
    });

const parsePositionXmpl = (pos) => {
    const kk = Object.keys(pos);

    kk.forEach(pp => {

console.log('matched', pos[el], rps, getChars(rps));

    const [pos, _] = useState({
        d6: 'bk',
        d4: 'wq',
        e7: 'wn',
        e4: 'wk',
    });

const parsePositionXmpl = (pos) => {
    const kk = Object.keys(pos);

    kk.forEach(pp => {

console.log('matched', pos[el], rps, getChars(rps));

    const [pos, _] = useState({
        d6: 'bk',
        d4: 'wq',
        e7: 'wn',
        e4: 'wk',
    });

const parsePositionXmpl = (pos) => {
    const kk = Object.keys(pos);

    kk.forEach(pp => {
        const p0 = pp.match('[a-h]+');
        const p1 = pp.match('[1-8]+');

        if (p0 && p1) {
            console.log('axi:', position[pp], smp[p0[0]], p1[0]);
        }
    });
};

parsePositionXpml(posXmpl);

const flt = Object.keys(sw).filter(k => sw[k][1] === mps[j] && sw[k][2] === i);
const [pos, setPos] = useState<{row: number, col: string} | undefined>({});

    const [position, setPosition] = useState({
        white: {
            'N': ['N', 'g', 1], 
            'K': ['K', 'e', 1],
        },
        black: {},
    });


console.log('pos:', pp.match('[a-h]+'), pp.match('[1-8]+'));

                        {showAxiosCells && <div style={{ padding: '15px' }}>`${mps[j]}${i}`</div>}
                        <div
                            style={{
                                padding: '3px',
                                fontSize: '12px',
                                color: isEven ? color.odd : color.even,
                            }}
                        >{j === 1 && i}</div>
                        <div
                            style={{
                                paddingTop: '34px',
                                paddingRight: '5px',
                                fontSize: '12px',
                                color: isEven ? color.odd : color.even,
                            }}
                        >{i === 1 && mps[j]}</div>

    <div style={{ padding: '15px' }}>{`${j}:${i}`}</div>
    <span style={{ padding: '10px' }}>{`${i}:${j}`}</span>

    const showAxiosCells = false;

King=K
Queen=Q
Rook=R
Bishop=B
Knight=N (K is already taken by the king)

const king_ = 'K';
const queen = 'Q';

*/
