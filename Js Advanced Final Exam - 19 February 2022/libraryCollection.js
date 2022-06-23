class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity
        this.books = []
    }
    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error("Not enough space in the collection.")
        }
        this.books.push({bookName, bookAuthor, payed: false})

        return `The ${bookName}, with an author ${bookAuthor}, collect.` 
    }
    payBook(bookName) {
        const findBook = this.books.find(b => b.bookName === bookName);

        if (!findBook) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        if (findBook.payed) {
            throw new Error(`${bookName} has already been paid.`)
        } else {
            findBook.payed = true
            return `${bookName} has been successfully paid.`
        }
    }
    removeBook(bookName) {
        let findBook = this.books.find(b => b.bookName === bookName);

        if (!findBook) {
            throw new Error("The book, you're looking for, is not found.")
        }
        if (!findBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        } else {
            const index = this.books.indexOf(findBook);
            this.books.splice(index, 1);
            return `${bookName} remove from the collection.`
        }
    }
    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let sorted = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
            let result = []
            let cap = this.capacity - this.books.length
            result.push(`The book collection has ${ cap } empty spots left.`)
            sorted.map((b) => {
                let paid = b.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${b.bookName} == ${b.bookAuthor} - ${paid}.`);
            });
            return result.join('\n').trim()
        } else {
            let find = this.books.find(b => b.bookAuthor == bookAuthor)

            if (find) {
                let result = []
                let paid = find.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${find.bookName} == ${find.bookAuthor} - ${paid}.`)
                return result.join('\n').trim()
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
        }
    } 
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());

// The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.