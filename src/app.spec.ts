import {BasicCalculator} from "../app";

describe("BasicCalculatorAdd", () => {

    let calc: BasicCalculator = new BasicCalculator(1, 2);

    test("BasicCalculatorAdd", () => {
        expect(calc.add()).toBe(3);
    })

    test("BasicCalculatorSub", () => {
        expect(calc.sub()).toBe(-1);
    })

    test("BasicCalculatorMul", () => {
        expect(calc.mul()).toBe(2);
    })

    test("BasicCalculatorDiv", () => {
        expect(calc.div()).toBe(0.5);
    })
})