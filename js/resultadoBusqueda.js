var resultado = localStorage.getItem("productosFiltrados");
productosFiltrados = JSON.parse(resultado);

var productosFiltradosSplice = productosFiltrados.slice(0,4);

function llenarProductos(pfs){
    for(i = 0; i < pfs.length; i++){
        
        
        var itemProductos = pfs[i];
        
        if (itemProductos == pfs[0]){
            document.getElementById('img1').src = pfs[0].items[0].picture;
            document.getElementById('amount1').innerHTML = "$ " + pfs[0].items[0].price.amount;
            document.getElementById('state1').innerHTML = pfs[0].items[0].state;
            document.getElementById('city1').innerHTML = pfs[0].items[0].city;
            document.getElementById('title1').innerHTML = pfs[0].items[0].title;
        }
        
        if (itemProductos == pfs[1]){
            document.getElementById('img2').src = pfs[1].items[0].picture;
            document.getElementById('amount2').innerHTML = "$ " + pfs[1].items[0].price.amount;
            document.getElementById('state2').innerHTML = pfs[1].items[0].state;
            document.getElementById('city2').innerHTML = pfs[1].items[0].city;
            document.getElementById('title2').innerHTML = pfs[1].items[0].title;
        }
        
        if (itemProductos == pfs[2]){
            document.getElementById('img3').src = pfs[2].items[0].picture;
            document.getElementById('amount3').innerHTML = "$ " + pfs[2].items[0].price.amount;
            document.getElementById('state3').innerHTML = pfs[2].items[0].state;
            document.getElementById('city3').innerHTML = pfs[2].items[0].city;
            document.getElementById('title3').innerHTML = pfs[2].items[0].title;
        }
        
        if (itemProductos == pfs[3]){
            document.getElementById('img4').src = pfs[3].items[0].picture;
            document.getElementById('amount4').innerHTML = "$ " + pfs[3].items[0].price.amount;
            document.getElementById('state4').innerHTML = pfs[3].items[0].state;
            document.getElementById('city4').innerHTML = pfs[3].items[0].city;
            document.getElementById('title4').innerHTML = pfs[3].items[0].title;
        }
    } 
}

function verDetalle(index){
    //alert("Ver la descripcion del producto");
    
    productoIndex = JSON.stringify(index);
    localStorage.setItem("productoIndex",index);
    
    location.href ="detalleProducto.html";
}

llenarProductos(productosFiltradosSplice);