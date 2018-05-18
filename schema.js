//difference betwen require and import?
const { graphql, GraphQLSchema,GraphQLObjectType,GraphQLInt,GraphQLString,GraphQLList } = require('graphql');

//fetch doesn't exist in node
const fetch = require('node-fetch');
const util = require('util');
// the fetched data is returned in XML
// using util to promisify xml2js so that it is a promise instead of a callback

const parseXML = util.promisify(require('xml2js').parseString);

const BookType = new GraphQLObjectType({
	name: 'Book',
	description: '...',

	fields: () => ({
		title:{
			type: GraphQLString,
			resolve: xml => xml.title[0]

		},
		isbn: {
			type: GraphQLString,
			resolve: xml => xml.isbn[0]
		}
	})
})

const AuthorType = new GraphQLObjectType({
	name: 'Author',
	description: '...',

	fields: () => ({
		name:{
			type: GraphQLString,
			resolve: xml =>
				xml.GoodreadsResponse.author[0].name[0]
		},
		books: {
			type: new GraphQLList(BookType),
			resolve: xml =>
				xml.GoodreadsResponse.author[0].books[0].book
		}
	})
})

module.exports = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		description: '...',

		fields: () => ({
			author: {
				type: AuthorType,
				args: {
					id: { type: GraphQLInt }
				},
				resolve: (root, args) => fetch(
					`https://www.goodreads.com/author/show.xml?id=4432&key=CZX1ylOKSoMy8zbwk4xdRQ`
				)
				.then(response => response.text())
				.then(parseXML)
			}
		})
	})
})