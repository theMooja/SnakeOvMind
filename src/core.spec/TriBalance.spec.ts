import {TriBalance} from './../core/TriBalance';

describe('TriBalance', () => {
    let self: TriBalance;

    function getSum() : number {
        var sum = self.calm + self.chaos + self.focus;
        expect(sum).toEqual(108);
        return sum;
    }

    it('constructs with initial triforce value', () => {
        self = new TriBalance();

        expect(self.calm).toEqual(36);
        expect(self.focus).toEqual(36);
        expect(self.chaos).toEqual(36);
    });

    describe('shove', () => {

        beforeEach(() => {
            self = new TriBalance();
        });

        it('adds to shoved force', ()=> {
            self.shove('chaos');

            expect(self.chaos).toEqual(37);
        });

        it('prevents exceeding 108', () => {
            self.shove('focus', 100);

            expect(self.focus).toEqual(108);
        });
    })
});