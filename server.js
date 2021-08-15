const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require("./cocktail.schema");
const cocktailResolver = require("./cocktail.resolver");

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: cocktailResolver,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');