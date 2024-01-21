export class BasicCalculator {
    _a: number;
    _b: number;

    constructor(a: number, b: number) {
        this._a = a;
        this._b = b;
    }

    add (): number {
        return this._a + this._b;
    }

    sub (): number {
        return this._a - this._b;
    }

    mul (): number {
        return this._a * this._b;
    }

    div (): number {
        return this._a / this._b;
    }
}