export interface ITriForce {
    chaos: number;
    calm: number;
    focus: number;
}

export class TriForce implements ITriForce{
    chaos: number;
    calm: number;
    focus: number;

    constructor(calm: number, chaos: number, focus: number){
        this.calm = calm;
        this.chaos = chaos;
        this.focus = focus;
    }
}