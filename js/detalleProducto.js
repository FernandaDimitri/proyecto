var resultado = localStorage.getItem("productosFiltrados");
productosFiltrados = JSON.parse(resultado);

var i = localStorage.getItem("productoIndex");
productoIndex = JSON.parse(i);

function validarDescripcion(){
    if(productoIndex == 0){
        document.getElementById('img').src = productosFiltrados[0].items[0].picture; 
        document.getElementById('title').innerHTML = productosFiltrados[0].items[0].title;
        document.getElementById('amount').innerHTML = "$ " + productosFiltrados[0].items[0].price.amount;
        document.getElementById('descripcion').innerHTML = productosFiltrados[0].items[0].title;
    }
    
    if(productoIndex == 1){
        document.getElementById('img').src = productosFiltrados[1].items[0].picture; 
        document.getElementById('title').innerHTML = productosFiltrados[1].items[0].title;
        document.getElementById('amount').innerHTML = "$ " + productosFiltrados[1].items[0].price.amount;
        document.getElementById('descripcion').innerHTML = productosFiltrados[1].items[0].title;
    }
    
    if(productoIndex == 2){
        document.getElementById('img').src = productosFiltrados[2].items[0].picture;   
        document.getElementById('title').innerHTML = productosFiltrados[2].items[0].title;
        document.getElementById('amount').innerHTML = "$ " + productosFiltrados[2].items[0].price.amount;
        document.getElementById('descripcion').innerHTML = productosFiltrados[2].items[0].title;
    }
    
    if(productoIndex == 3){
        document.getElementById('img').src = productosFiltrados[3].items[0].picture;  
        document.getElementById('title').innerHTML = productosFiltrados[3].items[0].title;
        document.getElementById('amount').innerHTML = "$ " + productosFiltrados[3].items[0].price.amount;
        document.getElementById('descripcion').innerHTML = productosFiltrados[3].items[0].title;
    }
}

function comprar(){
    alert('Se ha añadido éste producto al carrito!!');
}

validarDescripcion();