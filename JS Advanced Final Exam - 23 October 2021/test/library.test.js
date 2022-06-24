const {expect} = require('chai')
const {library} = require('../library')

describe("library …", () => {
    describe("calcPriceOfBook", () => {
        it("test1", () => {
            expect(() => library.calcPriceOfBook('string', [])).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook('string', {})).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook('string', 'string')).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook(1, 1)).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook({}, 1)).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook([], 1)).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook('string', null)).to.throw("Invalid input")
            expect(library.calcPriceOfBook('string', 2000)).to.be.equal(`Price of string is 20.00`)
            expect(library.calcPriceOfBook('string', 1980)).to.be.equal(`Price of string is 10.00`)
            expect(library.calcPriceOfBook('string', 1979)).to.be.equal(`Price of string is 10.00`)
        });
    })
    describe('findBook', () => {
        it("Happy path", function () {
            expect(library.findBook(['a', 'b', 'c'], 'a')).to.equal("We found the book you want.");
            expect(library.findBook(['a', 'b', 'c'], 'd')).to.equal("The book you are looking for is not here!");
        });
        it("Throw error if length of booksArr is 0", function () {
            expect(() => library.findBook([], 'a')).to.throw(Error, "No books currently available");
        });
    })
    describe('arrangeTheBooks', () => {
        it("test3", () => {
            expect(() => library.arrangeTheBooks('')).to.throw("Invalid input")
            expect(() => library.arrangeTheBooks([])).to.throw("Invalid input")
            expect(() => library.arrangeTheBooks({})).to.throw("Invalid input")
            expect(() => library.arrangeTheBooks(null)).to.throw("Invalid input")
            expect(() => library.arrangeTheBooks(-1)).to.throw("Invalid input")
            expect(library.arrangeTheBooks(10)).to.be.equal("Great job, the books are arranged.")
            expect(library.arrangeTheBooks(40)).to.be.equal("Great job, the books are arranged.")
            expect(library.arrangeTheBooks(41)).to.be.equal("Insufficient space, more shelves need to be purchased.")
        });
    })
})