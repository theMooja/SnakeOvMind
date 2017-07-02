import { ITriForce, TriForce } from './ITriForce';

export class TriBalance {
    private triforce: ITriForce = new TriForce(36, 36, 36);

    constructor() { }

    get calm() { return this.triforce.calm };
    get focus() { return this.triforce.focus };
    get chaos() { return this.triforce.chaos };

    shove(force: 'chaos' | 'calm' | 'focus', i: number = 1) {
        let increment = Math.min(i, 108 - this[force]);
        let other = Object.keys(this.triforce).filter(x => x != force);

        this.triforce[force] += increment;
    }
}