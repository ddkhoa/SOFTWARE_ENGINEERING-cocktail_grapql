const rawData = require("./csvjson.json");
const fs = require("fs");

let result = [];

for (let i = 0; i < rawData.length; i = i + 1) {

    // rename some columns
    let item = {
        id: rawData[i].idDrink+"",
        name: rawData[i].strDrink,
        isAlcoholic: rawData[i].strAlcoholic == "Alcoholic",
        category: rawData[i].strCategory,
        thumbnail: rawData[i].strDrinkThumb,
        glass: rawData[i].strGlass,
        instruction: rawData[i].strInstructions,
    }

    // group all ingredient and mesure to an array
    let itemIngredients = [];
    for (let j = 1; j <= 15; j = j + 1) {

        item["ingredient" + j] = rawData[i]["strIngredient" + j];
        item["mesure" + j] = rawData[i]["strMeasure" + j];

        if (rawData[i]["strIngredient" + j] != "") {
            itemIngredients.push({
                name: rawData[i]["strIngredient" + j],
                mesure: rawData[i]["strMeasure" + j]
            });
        }
        item.ingredients = itemIngredients;

    }
    result.push(item);
}

fs.writeFileSync("data/cocktail.json", JSON.stringify(result));
