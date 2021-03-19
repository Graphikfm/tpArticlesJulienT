let bouton = document.querySelector("button");
let bouton1 = document.querySelector(".add")
let titre = document.querySelector("input");
let contenu = document.querySelector("textarea");
let articles;
let json={
    "id":1,
    "title" : "",
    "content": ""
}

bouton.addEventListener("click", function(){
    let resultat = fetch(`http://localhost:3000/articles `)
      .then( response => response.json() )
      .then( function(response){ // on fait une fonction pour faire un console.log de response
            console.log(response) 
            json.id = response.length+1; // lorsque l'on click, on ajoute un nouvel id
            json.title = titre.value;
            json.content = contenu.value;

            console.log(json);
            fetch('http://localhost:3000/articles', {
                method: 'POST',
                
                body: JSON.stringify(json),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then((response) => response.json())
            .then(function(result){
                console.log(result)
                document.location.href="index.html";
                

            })
            .catch( function(err) {
                console.warn(err)
            });
        })
        .catch( function(err) {
            console.warn(err)
        });
})

//npm install -g json-server
//json-server --watch db.json









//id=${id.json}&titre=${title.json}& contenu=${content.json}

/*  fetch('http://localhost:3000/articles', {
     method: 'POST',
     body: JSON.stringify(variable_json),
     headers: {
     'Content-type': 'application/json; charset=UTF-8',
    }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));      */