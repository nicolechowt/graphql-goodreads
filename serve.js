//this server gives us a graphiQL tool to play with

// create a basic express server
const express = require('express');
const app = express();

// create graphQL endpoint
const graphqlHTTP = require('express-graphql');

const schema = require('./schema');


app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}))

app.listen(4000);
console.log('Listening on port 4000.');