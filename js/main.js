
const bringCharacters = async () => {

    const characters = await fetch('https://rickandmortyapi.com/api/character/?page=2')

    const data = await characters.json();

    document.getElementById("characters").innerHTML = `${data.results.map(
        person => {
            return(`<div class="card"><div><img src="${person.image}" alt="${person.id}"/></div><div>${person.name}</div></div>`)
        }
    ).join("")}`

}

bringCharacters()
    