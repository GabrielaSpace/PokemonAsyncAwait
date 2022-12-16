
//   Obtener un Pokemon de manera aleatoria (fetch)
// Tras obtener dicho Pokémon
// Obten su imágen correspondiente
// Obtener nombre del Pokémon
// Dibujar nombre e imágen del Pokémon en el DOM
// OJO!! Te tocará estudiar cómo funciona la API de Pokémon para encontrar la imágen. Puede que tengas que hacer más de un fetch!! (depende de la ruta de consulta que uses)

async function randomPokemon(id) {
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    return data
}

async function showPokemon() {
    const aleatorio = await randomPokemon(Math.round(Math.random() * 151))
    window.image.setAttribute("src", aleatorio.sprites.front_default)
    window.pokemon.innerHTML = aleatorio.name
}
showPokemon()


async function randomPerrito() {
    const response = await fetch ("https://dog.ceo/api/breeds/image/random")
    const data = await response.json()
    return data
}
async function showPerrito() {
    const aleatorio = await randomPerrito()
    window.image2.setAttribute("src", aleatorio.message)
}
showPerrito()
