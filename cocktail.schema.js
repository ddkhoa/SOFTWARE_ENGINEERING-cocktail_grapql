const { buildSchema } = require('graphql');

const schemaDefinition = `

    type Ingredient {
        name: String
        mesure: String
    }

    type Cocktail {
        id: String
        name: String
        isAlcoholic: Boolean
        category: String
        thumbnail: String
        glass: String
        instruction: String
        ingredients : [Ingredient]
    }

    type CocktailPagination {
        cocktails : [Cocktail]
        nbTotalCocktail : Int
    }

    type Query {
        cocktail(id: String): Cocktail
        cocktailByName(name: String): [Cocktail]
        cocktails(page : Int, nbPerPage: Int) : CocktailPagination
        randomCocktails : [Cocktail]
    }
`;
const schema = buildSchema(schemaDefinition);

module.exports = schema;