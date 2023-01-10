const { expect } = require('chai')
const { companyAdministration } = require('../companyAdministration')

describe("companyAdministration", () => {
    describe("hiringEmployee", () => {
        it("test1", () => {
            expect(() => companyAdministration.hiringEmployee('Alex', 'Engineer', 1)).to.throw('We are not looking for workers for this position.')
            expect(companyAdministration.hiringEmployee('Alex', 'Programmer', 3)).to.be.equal(`Alex was successfully hired for the position Programmer.`)
            expect(companyAdministration.hiringEmployee('Alex', 'Programmer', 5)).to.be.equal(`Alex was successfully hired for the position Programmer.`)
            expect(companyAdministration.hiringEmployee('Alex', 'Programmer', 2)).to.be.equal(`Alex is not approved for this position.`)
        });
    });
    describe('calculateSalary', () => {
        it('test2', () => {
            expect(companyAdministration.calculateSalary(2)).to.be.equal(30)
            expect(companyAdministration.calculateSalary(161)).to.be.equal(3415)
            expect(() => companyAdministration.calculateSalary(-1)).to.throw('Invalid hours')
            expect(() => companyAdministration.calculateSalary('hey')).to.throw('Invalid hours')
            expect(() => companyAdministration.calculateSalary([])).to.throw('Invalid hours')
            expect(() => companyAdministration.calculateSalary(null)).to.throw('Invalid hours')
        })
    })
    describe('firedEmployee', () => {
        it('test3', () => {
            expect(() => companyAdministration.firedEmployee({}, 1)).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee([], 1)).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee({}, {})).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee(['Peter', 'Ivan'], null)).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee(['Peter', 'Ivan'], -1)).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee(['Peter', 'Ivan'], 3)).to.throw('Invalid input')
            expect(companyAdministration.firedEmployee(['Peter', 'Ivan', 'George'], 1)).to.be.equal('Peter, George')
        })
    })
});