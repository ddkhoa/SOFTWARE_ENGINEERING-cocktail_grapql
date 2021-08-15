const cocktailDatabase = require("./data/cocktail.json").filter(item => item.category == "Cocktail");

function findCocktailById({ id }) {

    return cocktailDatabase.find(item => item.id == id);
}

function findCocktailsByName({ name }) {

    return cocktailDatabase.filter(item => new RegExp(name, "i").test(item.name));
}

function findCocktailsPagination({ page, nbPerPage }) {

    return {
        cocktails: cocktailDatabase.slice((page - 1) * nbPerPage, page * nbPerPage - 1),
        nbTotalCocktail: cocktailDatabase.length
    }
}

function findRandomCocktails() {

    let result = [];
    const NB_RANDOM_COCKTAILS = 10;

    for (let i = 0; i < NB_RANDOM_COCKTAILS; i = i + 1) {
        let cocktail = cocktailDatabase[Math.floor(Math.random() * cocktailDatabase.length)];
        result.push(cocktail);
    }

    return result;
}

module.exports = {
    findCocktailById,
    findCocktailsByName,
    findCocktailsPagination,
    findRandomCocktails
}