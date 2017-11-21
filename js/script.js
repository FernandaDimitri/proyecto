var productosFiltrados=[];

function buscar() {
    var buscarProducto = document.getElementById('textoBusqueda').value;
    var producto = buscarProducto.toUpperCase();
    if(producto == ""){
        alert('Debe ingresar una busqueda');
        return;
    } else{
        $.get("https://api.mercadolibre.com/sites/MLA/search?q= :query", function(respuesta) {
        var data = respuesta;
        var productos=[];
        for (i = 0; i < data.results.length; i++) { 
            var json = {
                categories: [
                    data.results[i].category_id
                ],
                items:[{
                        "id": data.results[i].id,
                        "title": data.results[i].title,
                        "price": {
                            "currency": data.results[i].installments.currency_id,
                            "amount": data.results[i].installments.amount,
                            //"decimals": 
                        },
                        "picture": data.results[i].thumbnail,
                        "condition": data.results[i].condition,
                        "free_shipping": data.results[i].shipping.free_shipping,
                        "state": data.results[i].address.state_name,
                        "city": data.results[i].address.city_name,
                    }]
            }
            productos.push(json);
        }
        filtrarProductos(productos, producto);
        //llenarProductos(productos);
    }).error(function(){
        alert("Se ha producido un error en la consulta");
    });
    }
}

function filtrarProductos(p,b){
    //var productosFiltrados=[];
    for(y=0; y < p.length; y++){    
        if(b == p[y].categories[0]){
            productosFiltrados.push(p[y]);
        }
    }
    
    productosFiltrados = JSON.stringify(productosFiltrados);
    localStorage.setItem("productosFiltrados",productosFiltrados);
    
    location.href ="resultadoBusqueda.html";
    //llenarProductos(productosFiltrados);
}


