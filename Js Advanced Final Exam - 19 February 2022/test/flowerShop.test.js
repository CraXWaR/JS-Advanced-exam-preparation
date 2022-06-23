const {expect} = require('chai')
const {flowerShop} = require('../flowerShop')

describe("flowerShop", () => {
    describe("calcPriceOfFlowers", () => {
        it("test1", () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 1, '2')).to.throw("Invalid input!")
            expect(() => flowerShop.calcPriceOfFlowers('Rose', [], 2)).to.throw("Invalid input!")
            expect(() => flowerShop.calcPriceOfFlowers({}, 1, 2)).to.throw("Invalid input!")
            expect(() => flowerShop.calcPriceOfFlowers(3, 1, 2)).to.throw("Invalid input!")
            expect(flowerShop.calcPriceOfFlowers('Rose', 2, 3)).to.be.equal(`You need $6.00 to buy Rose!`)
            expect(flowerShop.calcPriceOfFlowers('Rose', 5, 3)).to.be.equal(`You need $15.00 to buy Rose!`)
            expect(flowerShop.calcPriceOfFlowers('Rose', 3, 3)).to.be.equal(`You need $9.00 to buy Rose!`)
        });
    })
    describe('checkFlowersAvailable', () => {
        it("test 2", () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.be.equal(`The Rose are available!`)
            expect(flowerShop.checkFlowersAvailable('Rose', ["Lily", "Orchid"])).to.be.equal(`The Rose are sold! You need to purchase more!`)
        });
    })
    describe('sellFlowers', () => {
        it("test3", () => {
            expect(() => flowerShop.sellFlowers('string', 'string').to.throw('Invalid input!'));
            expect(() => flowerShop.sellFlowers(['Rose', 'Orch', 'Lily'], 'string').to.throw('Invalid input!'));
            expect(() => flowerShop.sellFlowers('string', 2).to.throw('Invalid input!'));
            expect(() => flowerShop.sellFlowers(2, 2).to.throw('Invalid input!'));
            expect(flowerShop.sellFlowers(['Rose', 'Orch', 'Lily'], 0)).to.equal(`Orch / Lily`);
            expect(flowerShop.sellFlowers(['Rose', 'Orch', 'Lily'], 1)).to.equal(`Rose / Lily`);
            expect(flowerShop.sellFlowers(['Rose', 'Orch', 'Lily'], 2)).to.equal(`Rose / Orch`);
        });
    })
})