const inputBox = document.getElementById("inputBox");
const fetchBtn = document.getElementById("fetchBtn");
const pokimonImg = document.getElementById("pokimonImg");

async function whenCLicked() {
    const pokeName = inputBox.value.trim().toLowerCase();

    // 1. Empty check first
    if (pokeName === "") {
        alert("Please enter a name");
        pokimonImg.style.display = "none";
        return;
    }

    try {
        // 2. Fetch after validation
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

        // 3. Check if fetch was successful
        if (!result.ok) {
            alert("Please enter a valid Pokémon");
            pokimonImg.style.display = "none";
            return;
        }

        // 4. Parse JSON only if valid
        const data = await result.json();

        // 5. Show sprite
        const sprite =
            data.sprites.versions["generation-v"]["black-white"].animated.front_default;

        if (sprite) {
            pokimonImg.style.display = "block";
            pokimonImg.src = sprite;
        } else {
            alert("No animated sprite available for this Pokémon.");
            pokimonImg.style.display = "none";
        }
    } catch (error) {
        console.error(error);
        alert("Something went wrong, please try again.");
        pokimonImg.style.display = "none";
    }
}

fetchBtn.addEventListener("click", whenCLicked);
