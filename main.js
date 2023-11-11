var quantidade = document.getElementById("quantidade");
            quantidade.addEventListener("keyup", function(){
                pegaPokemon(quantidade.value);
            })
            pegaPokemon(0);
           function pegaPokemon(quantidade){
            fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
            .then(response => response.json())
            .then(allpokemon => {

                var pokemons = [];

                allpokemon.results.map(function(val){
                    
                    fetch(val.url)
                        .then(response => response.json())
                        .then(pokemonSingle => {
                            pokemons.push({nome:val.name,imagem:pokemonSingle.sprites.front_default});
                            

                            if(pokemons.length == quantidade){
                                
                                let pokemonsBoxs = document.querySelector('.pokemon-boxs');
                                pokemonsBoxs.innerHTML = "";

                            pokemons.map(function(val){
                                pokemonsBoxs.innerHTML+=`
                                <div class="pokemon-box">
                                    <img src="`+val.imagem+`" alt="">
                                    <p>`+val.nome+`</p>
                                </div>
                                `;
                            });


                            }

                    })
                })


                pokemons.map(function(val){
                    console.log(val.nome);
                });

            })
           }