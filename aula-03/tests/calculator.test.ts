import calculator from "calculator";

describe('Calculator Tests', () => {
    it('should sum two numbers, 1 + 2 should return 3', ()=> {
        expect(calculator.sum(1,2)).toBe(3)
    })
    it('should subtract two numbers, 3 - 2 should return 1', ()=> {
        expect(calculator.sub(3,2)).toBe(1)
    })
    it('should multiply two numbers,2 * 2 should return 4', ()=> {
        expect(calculator.mul(2,2)).toBe(4)
    })
    it('should divide two numbers, 4 / 2 should return 2', ()=> {
        expect(calculator.div(4,2)).toBe(2)
    })
})