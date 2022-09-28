url = window.location.search;
console.log(url);
params = new URLSearchParams(url);
idMovie = params.get("id");
console.log('idMovie', idMovie);
newUrl = 'http://www.omdbapi.com/?apikey=cf09fe5c&i='+idMovie;
(function sendRequest(){
	//se crea objeto que guardara las peticiones
	const peticionHttp = new XMLHttpRequest();
	//objeto prepara el tipo de peticion y hacia donde la hara
	peticionHttp.open('GET', newUrl, true);
	peticionHttp.onreadystatechange= function(){
		if(this.readyState == 4 && this.status == 200){
			var jsontransformado = JSON.parse(this.responseText);
			console.log(jsontransformado);
			container = document.getElementById('containerMovies');
            console.log(container);
            
		}
	}
	//fin
	peticionHttp.send();
})();
