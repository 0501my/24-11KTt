import {Product} from "./Product";

export class ProductManager {
    listProduct: Product[] = [];

    add(product: Product): void {
        this.listProduct.push(product)
    }

    edit(id: number, t: Product): void {
        let index = this.findById(id)
        if (index === -1) {
            console.log(`không có`)
        } else {
            this.listProduct[index] = t
        }


    }

    findById(id: number) {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (id === this.listProduct[i].id) {
                return i
            }
        }
        return -1;
    }

    remove(id: number): void {
        let index = this.findById(id);
        if (index === -1) {
            console.log(`không có sản phẩm này`)
        } else {
            this.listProduct.splice(index, 1)
        }
    }

    findByName(t: string) {
        // @ts-ignore
        return this.listProduct.filter(el => el.name.toLowerCase().includes(t.toLowerCase()))
    }

    findByPrice(a: number, b: number) {
        let result = this.listProduct.filter(product => a <= product.price && product.price <= b)
        return result
    }

    findByTheFirm(theFirm: string) {
        let result = this.listProduct.filter(product => product.theFirm === theFirm)
        return result
    }

    show() {
        return this.listProduct;
    }

    sortPriceUp() {
        let result = this.listProduct.slice().sort((a, b) => a.price - b.price)
        return result
    }

    sortPriceDown() {
        let result = this.listProduct.slice().sort((a, b) => b.price - a.price)
        return result
    }

    sortAmountDown() {
        let result = this.listProduct.slice().sort((a, b) => b.amount - b.amount)
        return result
    }

}