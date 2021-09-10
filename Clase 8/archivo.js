let products = [];

let len = products.length;

class Product {
    constructor (title, price, thumbnail) {
        this.title = title,
        this.price = price,
        this.thumbnail = thumbnail
    }

    addProducts = () => {
        products.push({
            title: this.title,
            price: this.price,
            thumbnail: this.thumbnail
        })
    }

    addId = () => {
        products.forEach((data, len)=>{
        data.id = len + 1;
        })  
    }
}

export default {products, len, Product}



// let item = new Product("escuadra", 150, "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png")

// item.addProducts()
// item.addId()



// let item2 = new Product("regla", 100, "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png")

// item2.addProducts()
// item2.addId()

//console.log(products)