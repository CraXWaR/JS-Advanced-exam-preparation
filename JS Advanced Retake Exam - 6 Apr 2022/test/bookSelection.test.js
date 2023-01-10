const { expect } = require('chai')
const { bookSelection } = require('../bookSelection')

describe("Tests …", () => {
    describe("isGenreSuitable", () => {
        it("appropriate age", () => {
            expect(bookSelection.isGenreSuitable('Thriller', 20)).to.be.equal('Those books are suitable')
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.be.equal('Those books are suitable')
            expect(bookSelection.isGenreSuitable('a', 20)).to.be.equal('Those books are suitable')
            expect(bookSelection.isGenreSuitable('a', 10)).to.be.equal('Those books are suitable')
        });
        it("inappropriate age", () => {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.be.equal('Books with Thriller genre are not suitable for kids at 10 age')
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.be.equal('Books with Horror genre are not suitable for kids at 10 age')
        });
        it("exacly on 12", () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.be.equal('Books with Thriller genre are not suitable for kids at 12 age')
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.be.equal('Books with Horror genre are not suitable for kids at 12 age')
        })
    });
    describe("isItAffordable", () => {
        it("can buy", () => {
            expect(bookSelection.isItAffordable(10, 10)).to.be.equal('Book bought. You have 0$ left')
            expect(bookSelection.isItAffordable(10, 20)).to.be.equal('Book bought. You have 10$ left')
        });
        it("can't buy", () => {
            expect(bookSelection.isItAffordable(1, 0)).to.be.equal("You don't have enough money")
        })
        it("checking input", () => {
            expect(() => bookSelection.isItAffordable('1', 1)).to.throw()
            expect(() => bookSelection.isItAffordable(1, '1')).to.throw()
            expect(() => bookSelection.isItAffordable('1', '1')).to.throw()
        })
    });
    describe("suitableTitles", () => {
        it("correct title", () => {
            expect(bookSelection.suitableTitles([{
                title: 'aa',
                genre: 'a'
            }], 'a')).to.deep.equal(['aa'])
        });
        it("if correct input", () => {
            expect(() => bookSelection.suitableTitles({
                title: 'aa',
                genre: 'a'
            }, 'a')).to.throw()
            expect(() => bookSelection.suitableTitles([{
                title: 'aa',
                genre: 'a'
            }], 1)).to.throw()
        });
    });
});