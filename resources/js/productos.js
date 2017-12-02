// Mediante una llamada ajax, consume el API rest
// Obtiene el listado de productos
// Despliega los datos
function mostrarProductos () {
    // Llamada ajax con JQuery
    $.ajax({
        url: "http://localhost:3000/productos",
        contentType: "application/json",
        type: "GET"
    }).done(function(data) {  
        // Invocando metodo para mostrar los datos      
        renderHTML(data);
    });
}

// Despliega el listado de datos 
// Arma el html dinamicamente 
function renderHTML (data) {
    // Recorremos los datos recibidos por parametro
    $.each(data, function(i, item) {
        // Obtenemos el contenedor donde se van a desplegar los productos
        var products = $("#products");
        // Generamos el nodo html con los datos que vienen en el JSON 
        var html = '<a  class= "Producto" id="'+ data[i].id +'" style="background-image: url('+data[i].imagen+')"  onclick="ofertum(this.id)">' + 
        '<p class="Promo">'+ data[i].descripcion + '</p></a>' ; 
        // Agregamos en el contenedor de productos el html para cada dato del listado
        products.append(html);
    });
}

function mostrarFiltros() {
    // Obtengo datos
    $.ajax({
        url: "http://localhost:3000/productos",
        contentType: "application/json",
        type: "GET"
    }).done(function(data) {  
        // Tengo los datos 
        $.each(data, function(i, item) {
            var filtro = $(".filtros");
            //  ARmo el html           
            var html = '<option value="'+data[i].id+'">'+data[i].name+'</option>';
            filtro.append(html);
        })
    });

}



$( "#logoIndex" ).click(function() {
    $("#products").empty();
    mostrarProductos ();
});


function ofertum(id) {
    $("#products").empty();
    $.ajax({
        url: "http://localhost:3000/productos",
        contentType: "application/json",
        type: "GET"
    }).done(function(data,i) {  
        // Invocando metodo para mostrar los datos      
        cambioPagina(data,id);
    });

}

function cambioPagina(data,x) {
   $.each(data, function(i, item) {
        // Obtenemos el contenedor donde se van a desplegar los productos
        var products = $("#products");
        // Generamos el nodo html con los datos que vienen en el JSON 
        if ( data[i].id == x ){
        var html = '<img class="imgReview" id="'+ data[i].id +'" src='+data[i].imagenReview+' >' + 
        '<div class="Titulo">'+ data[i].titulo + '</div>' + '<div class="review">'+data[i].review+'</div>' ; 
        // Agregamos en el contenedor de productos el html para cada dato del listado
         products.append(html);}
        });
}





function categoria(factor){ 


$.ajax({
        url: "http://localhost:3000/productos",
        contentType: "application/json",
        type: "GET"
    }).done(function(data) {  
        // Tengo los datos 
        $.each(data, function(i, item) {
            
            if ( data[i].tipo == factor){
           var products = $("#products");
        // Generamos el nodo html con los datos que vienen en el JSON 
        var html = '<a  class= "Producto" id="'+ data[i].id +'" style="background-image: url('+data[i].imagen+')"  onclick="ofertum(this.id)">' + 
        '<p class="Promo">'+ data[i].descripcion + '</p></a>' ; 
        // Agregamos en el contenedor de productos el html para cada dato del listado
        products.append(html);
        }
        })
    });


}






$("#search").submit(function(){ 
    var palabra = $("#campo").val();

    $("#products").empty();                                                                                                                                                      
    var bandera = false;
$.ajax({
        url: "http://localhost:3000/productos",
        contentType: "application/json",
        type: "GET"
    }).done(function(data) {  
        // Tengo los datos 
        $.each(data, function(i, item) {

            
            if ( data[i].review.indexOf(palabra) != -1){
                bandera = true;
           var products = $("#products");
        // Generamos el nodo html con los datos que vienen en el JSON 
        var html = '<a  class= "Producto" id="'+ data[i].id +'" style="background-image: url('+data[i].imagen+')"  onclick="ofertum(this.id)">' + 
        '<p class="Promo">'+ data[i].descripcion + '</p></a>' ; 
        // Agregamos en el contenedor de productos el html para cada dato del listado
        products.append(html);
        }
        });
 if (!bandera){
            var error = '<h2 style="color:red"> No hay resultados para esa busqueda</h2>';
            $("#products").append(error);
         }

    });

 
         return false;

}
)













