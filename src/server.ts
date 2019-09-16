import { ApolloServer, gql } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import logger from './helpers/logger';

const typeDefs = gql`
	type Query {
		me: User
	}
	type User @key(fields: "id") {
		id: ID!
		username: String
	}
`;

const resolvers = {
	Query: {
		me() {
			return { id: '1', username: '@ava' };
		}
	},
	User: {
		__resolveReference(user, { fetchUserById }) {
			return fetchUserById(user.id);
		}
	}
};

const graphqlSchema: any = { typeDefs, resolvers };

const server = new ApolloServer({
	schema: buildFederatedSchema([graphqlSchema])
});

server.listen(4001).then(({ url }) => {
	logger.info(`Server ready at ${url}`);
});
