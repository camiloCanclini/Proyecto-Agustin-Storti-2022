url = window.location.search;
console.log(url);
params = new URLSearchParams(url);
idMovie = params.get("imdbID");
console.log('idMovie', idMovie);
newUrl = 'http://www.omdbapi.com/?apikey=cf09fe5c&i='+idMovie;
(function sendRequest(){
	//se crea objeto que guardara las peticiones
	const peticionHttp = new XMLHttpRequest();
	//objeto prepara el tipo de peticion y hacia donde la hara
	peticionHttp.open('GET', newUrl, true);
	peticionHttp.onreadystatechange= function(){
		if(this.readyState == 4 && this.status == 200){
			var responseJson= JSON.parse(this.responseText);
			console.log(responseJson);
			const poster = document.getElementById('contain__img');
            console.log(poster);
            poster.setAttribute("src",responseJson["Poster"]);
			const info = document.getElementById('info');
			console.log('info:', info)
			const hijosInfo = info.children;
			const titulo = hijosInfo[0];
			const trama = hijosInfo[1];

			titulo.innerHTML = responseJson["Title"];
			trama.innerHTML = responseJson["Plot"];

			const info2 = document.getElementById('info2');
			const hijosInfo2 = info2.children;
			hijosInfo2[0].innerHTML += responseJson["Rated"];
			hijosInfo2[1].innerHTML += responseJson["Runtime"]; 
			hijosInfo2[2].innerHTML += responseJson["Genre"]; 
			hijosInfo2[3].innerHTML += responseJson["Director"]; 
			hijosInfo2[4].innerHTML += responseJson["Writer"]; 
			hijosInfo2[5].innerHTML += responseJson["Actors"]; 
			hijosInfo2[6].innerHTML += responseJson["Awards"]; 
			hijosInfo2[7].innerHTML += responseJson["imdbRating"];
			hijosInfo2[8].innerHTML += responseJson["imdbVotes"];
			hijosInfo2[9].innerHTML += responseJson["Production"];  
		}
	}
	//fin
	peticionHttp.send();
})();
