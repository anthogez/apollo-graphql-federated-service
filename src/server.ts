import { ApolloServer, gql } from 'apollo-server';
import logger from './helpers/logger';
import schema from './schema';

const server = new ApolloServer({ schema });

server.listen(4001).then(({ url }) => {
	logger.info(`Server ready at ${url}`);
});
