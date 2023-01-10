const { expect } = require('chai')
const { rentCar } = require('../rentCar')

describe("rentCar", () => {
    describe("searchCar", () => {
        it("test1", () => {
            expect(() => rentCar.searchCar({}, 'BMW')).to.throw("Invalid input!")
            expect(() => rentCar.searchCar('AUDI', 1)).to.throw("Invalid input!")
            expect(() => rentCar.searchCar(1, 'BMW')).to.throw("Invalid input!")
            expect(() => rentCar.searchCar('AUDI', 'BMW')).to.throw("Invalid input!")
            expect(() => rentCar.searchCar(['AUDI', 'Volkswagen', 'Toyota'], 'BMW')).to.throw("There are no such models in the catalog!")
            expect(() => rentCar.searchCar([], 'BMW')).to.throw("There are no such models in the catalog!")
            expect(rentCar.searchCar(['AUDI', 'Volkswagen', 'Toyota', 'BMW'], 'BMW')).to.be.equal(`There is 1 car of model BMW in the catalog!`)
        });
    })
    describe('calculatePriceOfCar', () => {
        it("test2", () => {
            expect(() => rentCar.calculatePriceOfCar('BMW', '1')).to.throw("Invalid input!")
            expect(() => rentCar.calculatePriceOfCar('BMW', [])).to.throw("Invalid input!")
            expect(() => rentCar.calculatePriceOfCar('BMW', {})).to.throw("Invalid input!")
            expect(() => rentCar.calculatePriceOfCar('BMW', null)).to.throw("Invalid input!")
            expect(() => rentCar.calculatePriceOfCar(5, null)).to.throw("Invalid input!")
            expect(() => rentCar.calculatePriceOfCar([], 1)).to.throw("Invalid input!")
            expect(() => rentCar.calculatePriceOfCar({}, 1)).to.throw("Invalid input!")
            expect(() => rentCar.calculatePriceOfCar(2, 1)).to.throw("Invalid input!")
            expect(() => rentCar.calculatePriceOfCar(undefined, 1)).to.throw("Invalid input!")
            expect(() => rentCar.calculatePriceOfCar('Opel', 1)).to.throw("No such model in the catalog!")
            expect(() => rentCar.calculatePriceOfCar('abgfa', 1)).to.throw("No such model in the catalog!")
            expect(rentCar.calculatePriceOfCar('BMW', 1)).to.be.equal(`You choose BMW and it will cost $45!`)
            expect(rentCar.calculatePriceOfCar('Mercedes', 2)).to.be.equal(`You choose Mercedes and it will cost $100!`)
        });
    })
    describe('checkBudget', () => {
        it("test3", () => {
            expect(() => rentCar.checkBudget(1, 2, '3')).to.throw("Invalid input!")
            expect(() => rentCar.checkBudget(1, '2', '3')).to.throw("Invalid input!")
            expect(() => rentCar.checkBudget('1', '2', '3')).to.throw("Invalid input!")
            expect(() => rentCar.checkBudget(1, 2, null)).to.throw("Invalid input!")
            expect(() => rentCar.checkBudget(1, 2, '3')).to.throw("Invalid input!")
            expect(() => rentCar.checkBudget(1, [], 3)).to.throw("Invalid input!")
            expect(() => rentCar.checkBudget({}, 2, 3)).to.throw("Invalid input!")
            expect(rentCar.checkBudget(1, 2, 3)).to.be.equal(`You rent a car!`)
            expect(rentCar.checkBudget(1, 2, 100)).to.be.equal(`You rent a car!`)
            expect(rentCar.checkBudget(2, 2, 4)).to.be.equal(`You rent a car!`)
            expect(rentCar.checkBudget(10, 2, 3)).to.be.equal(`You need a bigger budget!`)
            expect(rentCar.checkBudget(10, 2, 2)).to.be.equal(`You need a bigger budget!`)
        });
    })
})