import { gql } from 'apollo-server';

const typeDefs = gql`
	type User {
		username: String!
		email: String!
	}

	type Query {
		getUser(username: String!): User
		getUsers: [User!]!
	}
`;

export default typeDefs;
