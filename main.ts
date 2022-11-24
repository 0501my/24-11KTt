import {Product} from "./Product";
import {ProductManager} from "./productManager";
let productManager = new ProductManager()
let product = new Product(1, "máy tính", 500, 1, "dell")
let product1 = new Product(2, "điện thoại", 600, 11, "samsung");
let product2 = new Product(3, "xe máy", 900, 3, "honda")
let product3 = new Product(4, "oto", 700, 7, "mẹc")
let product4 = new Product(5, "oto", 800, 5, "audi")
let product5 = new Product(6, "xe máy", 1000, 9, "yamaha")
let product6 = new Product(7, "xe máy", 1100, 6, "honda")
//thêm sản phẩm
productManager.add(product)
productManager.add(product1)
productManager.add(product2)
productManager.add(product3)
productManager.add(product4)
productManager.add(product5)
productManager.add(product6)


// console.log(`------------Danh sách sản phẩm----------`)
// console.log(productManager)
console.log(`-------tìm kiếm theo tên gần nhất------`)
console.log(productManager.findByName("xe"))
// console.log(`-----tìm kiếm theo khoảng giá-------`)
// console.log(productManager.findByPrice(500,800))
// console.log(`-------sắp xếp tăng dần-----`)
// console.log(productManager.sortPriceUp())
// console.log(`-----sắp xếp giảm dần------`)
// console.log(productManager.sortPriceDown())
// console.log(`----sắp xếp số lượng giảm dần------`)
// console.log(productManager.sortAmountDown())
// console.log(`------tìm các sản phẩm theo hãng--------`)
// console.log(productManager.findByTheFirm("honda"))
// //sửa sản phẩm
// let productEdit = new Product(8,"xe máy",1200,1,"waye")
// productManager.edit(1,productEdit)
// console.log(`-----Sau khi Edit------`)
// console.log(productManager)
// //xóa sản phẩm
// productManager.remove(2)
// console.log(`----Sau khi xóa------`)
// console.log(productManager)