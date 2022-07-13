document.querySelector("#buttn").addEventListener('onclick', pokemon);

{/* <p>WEIGHT</p></div><div class="type"><h4>1.2kg</h4><p>WEIGHT</p></div><div class="height"><h4>'+data.height+' M</h4><p>HEIGHT</p></div>' */}



function pokemon() {
    const name = document.querySelector('#uinp').value.toLowerCase();
    // name.charAt(0).toUpperCase() + string.slice(1)
    var pokemon = document.querySelector(".pfig")
     
    

    fetch('https://pokeapi.co/api/v2/pokemon/'+ name)
    .then((response) => response.json())
    .then((data)=> {
        
        var pkmN = data.name.charAt(0).toUpperCase() + data.name.slice(1)
        var pkmN2 = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1)


        pokemon.innerHTML = '<h2>Name: '+ pkmN +'</h2>'+'<img class="pkm__img" src='+data.sprites.other["home"].front_default +'><div id="stats" class="stats"><div id ="weight" class="weight"><h4 class="w">'+data.weight+'kg</h4><p>WEIGHT</p></div><div class="type"><h4>'+pkmN2+'</h4><p>TYPE</p></div><div class="height"><h4 class="height">'+data.height+'M</h4><p>HEIGHT</p></div>';
        console.log(data.sprites.other["home"].front_default)
        // '<div id="stats" class="stats"><div id ="weight" class="weight"><h4 class="w">1.2kg</h4><p>WEIGHT</p></div>'
        // '<div class="type"><h4>Normal</h4><p>TYPE</p></div>'
        '<div class="height"><h4 class="height">0.74 M</h4><p>HEIGHT</p></div>'

        
    })
    .catch((err) => {
        console.log(err)
    });
   
    return false;
}


// data.types[0].type.name

function color () {
    var pokemon = document.querySelector(".pfig")
    const name = document.querySelector('#uinp').value;
    var pokemonstat = document.querySelector(".w")  
    var pokemonColor = document.getElementById("pkm_C") 
    let thelist = ["fire","water","fairy","dragon","poison","flying","ghost","bug","dark","grass","rock","ground","steel","ice","normal","fighting","psychic","electric"]
    fetch('https://pokeapi.co/api/v2/pokemon/' + name)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.types[0].type.name)
  if (thelist.includes(data.types[0].type.name))
        pokemonColor.style.backgroundImage= "var(--"+data.types[0].type.name+")"
        pokemonstat.innerHTML = '<h4>'+ data.types[0].type.name +' kg</h4>'
        console.log(pokemonstat)
    })

    .catch((err) => {
        console.log(err)
    });
    return false



}

