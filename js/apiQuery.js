/*   APIKEY = cf09fe5c    */
console.log('hola el codigo ajax esta funcionando'); //Comprobacion de Script
const url = 'http://www.omdbapi.com/?s=batman&apikey=cf09fe5c';//Se fija la URL de la API con la que haremos la consulta
(function sendRequest(){
	const HTTPREQUEST = new XMLHttpRequest(); //Se crea objeto HTTPREQUEST
	HTTPREQUEST.open('GET',url, true); //Se configura la petición
    /*Comienzan las operaciones AJAX*/
	HTTPREQUEST.onreadystatechange = function(){
        /*Se verifica que la petición fue exitosa*/
		if(this.readyState == 4 && this.status == 200){
			var respuesta = JSON.parse(this.responseText);//Se obtiene la respuesta de la API y se transforma array
            console.log(respuesta);
            let movies = respuesta["Search"];
            console.log('Imprimiendo respuesta...');
			console.log(movies);
			let container = document.getElementById('containerMovies');
            /*Se recorre el ARRAY y se pintan los datos que contiene*/
			for(let i of movies){
				console.log('Pintando Objetos...');
                console.log(i);
			}
		}
	}
	HTTPREQUEST.send();
})();