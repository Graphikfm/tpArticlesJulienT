let bouton = document.querySelector("button");
let bouton1 = document.querySelector(".add")
let titre = document.querySelector("input");
let contenu = document.querySelector("textarea");
let articles;
let liste = document.querySelector("#listeTitre")
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
            json.id = response.length+1; //
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
            .then((result) => console.log(result))
            .catch( function(err) {
                console.warn(err)
            });
        })
            .catch( function(err) {
            console.warn(err)
            });
})

bouton1.addEventListener("click", function(){
    document.location.href="indexid.html";
});



/// fonction pour ajouter les titres de mes articles à une ul avec des li
function addTitre(){
    fetch('http://localhost:3000/articles')
    .then(function(response){
        return response.json()

    })
    .then(function(tab){
        for(let cell =0; cell< tab.length; cell++){
            console.log(tab[cell].title)
            liste.innerHTML +=`<li dataset-id=${tab[cell].id}>${tab[cell].title}>/li>`
            
        }
        let liTitle = document.querySelectorAll("li[data-id");
        for(let i =0; i< liTitle.length; i++){
            liTitle.addEventListener("click", function(){
                let currentId = this.dataset.liste;
                console.log(currentId);
                
            })
        }
     })

    }

   

