let express = require("express");

var gatos_array = [
    {id: "gato1", nombre: "El gato volador", info: "informacion de gato1", imagen: "/img/gato1.jpg"}, 
    {id: "gato2", nombre: "El gato con botas", info: "informacion de gato2", imagen: "/img/gato2.jpg"}, 
];

let app = express();
// esta es la línea que le dice al servidor utilizar la carpeta "/estático" para el contenido estático
app.use(express.static(__dirname + "/static"));

app.get('/gatos', function(request, response) {
    response.render('gatos',{gatos: gatos_array});
})

app.get('/gatos/:id', function(request, response) {
    id = request.params.id;
    buscar = gatos_array[id];
    
    response.render('detalles',{gatos: buscar});
})

app.listen(8000, function() {
    console.log ("listening in port 8000");
})

// Esto establece la ubicación donde Express buscará por vistas EJS
app.set('views', __dirname + '/views'); 
// Ahora establezcamos el motor de vista para que Express sepa que estamos usando EJS al contrario de otro motor de plantilla como Jade
app.set('view engine', 'ejs');
