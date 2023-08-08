module.exports = class Order {
    #total;
    #items;
    #user;
    constructor(items, user) {
        items.forEach(({ product, qtd }) => {
            if (qtd > product.inStock) {
                throw new Error('Quantidade insuficiente em estoque');
            }
        });
        this.#items = items;
        this.#user = user;
        this.#total = items.reduce((sum, { product, qtd }) => sum + (product.price * qtd));
    }

    get data() {
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}