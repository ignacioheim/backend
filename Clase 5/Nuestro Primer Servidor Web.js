let http = require("http");

let server = http.createServer((req, res)=>{
  
    let miObjeto = {
        id: (Math.random()) * (10-1) + 1,
        title: "Producto " + (Math.random()) * (10-1) + 1,
        price: Math.random() * 9999.99,
        thumbnail: "Foto " + (Math.random()) * (10-1) + 1
        }
    res.end(JSON.stringify(miObjeto))
})
server.listen(3000, function () {
         console.log("Tu servidor está list en " + this.address().port)
});