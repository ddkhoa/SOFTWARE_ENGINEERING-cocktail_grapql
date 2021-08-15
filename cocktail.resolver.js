const { findCocktailById, findCocktailsByName,
    findCocktailsPagination, findRandomCocktails } = require("./cocktail.service");

const cocktailResolver = {

    cocktail: ({ id }) => findCocktailById({ id }),

    cocktailByName: ({ name }) => findCocktailsByName({ name }),

    cocktails: ({ page, nbPerPage }) => findCocktailsPagination({ page, nbPerPage }),

    randomCocktails: () => findRandomCocktails(),
};

module.exports = cocktailResolver;