import { gql } from 'apollo-server';

const typeDefs = gql`
	type User {
		username: String!
		email: String!
	}

	type Query {
		getUser(username: String!): User
	}
`;

export default typeDefs;
