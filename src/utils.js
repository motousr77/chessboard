import { smp } from './defs';

export const parseSome = (pp) => {
    const p0 = pp.match('[a-h]+');
    const p1 = pp.match('[1-8]+');

    if (p0 && p1) {
        return [smp[p0[0]], parseInt(p1[0])];
    }

    return null;
};
