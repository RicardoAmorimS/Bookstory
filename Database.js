module.exports = class Database {
    #storage = {
        athors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key) {
        return this.#storage[key]
    }

    saveAuthor(author) {
        this.#storage.athors.push(author);
    }

    findBookByName(bookName) {
        return this.#storage.books.find(b => b.name === bookName);
    }

    saveBook(book) {
        const bookExists = this.findBookByName(book.name);
        if (!bookExists) {
            this.#storage.books.push(book);
        }
    }

    addBookToStock(bookName, quantity) {
        const book = this.findBookByName(bookName);
        book?.addBookToStock(quantity);
    }

    removeBookFromStock(bookName, quantity) {
        const book = this.findBookByName(bookName);
        book?.removeBookFromStock(quantity);
    }


    findPosterByName(posterName) {
        return this.#storage.Posters.find(b => b.name === posterName);
    }

    savePoster(poster) {
        const posterExists = this.findPosterByName(poster.name);
        if (!posterExists) {
            this.#storage.Posters.push(poster);
        }
    }

    addPosterToStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName);
        poster?.addPosterToStock(quantity);
    }

    removePosterFromStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName);
        poster?.removePosterFromStock(quantity);
    }

    saveUser(user) {
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if (!userExists) {
            this.#storage.users.push(user)
        }
    }

    saveOrder(order) {
        this.#storage.orders.push(order);
    }

    showStorage() {
        console.table(this.#storage.athors);
        console.table(this.#storage.books);
        console.table(this.#storage.posters);
        console.table(this.#storage.users);
        console.table(this.#storage.orders.map(order => order.data));
    }
}