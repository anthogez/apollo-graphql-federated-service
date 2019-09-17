import { typeDefs, resolvers } from './components/user';
import { GraphQLSchema } from 'graphql';
import { buildFederatedSchema } from '@apollo/federation';

const schema: GraphQLSchema = buildFederatedSchema([{ typeDefs, resolvers }]);

export default schema;
