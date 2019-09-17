import { findOne, findAll } from './user.service';
import logger from '../../helpers/logger';

//resolver fn(parent, args, context, info)
const resolvers = {
	Query: {
		getUser(_, args, __, ___) {
			return findOne(args);
		},
		getUsers(_, args, __, ___) {
			logger.info(args)
			return findAll();
		},
		addUser() {},
		removeUser() {}
	},
	Mutation: {}
};
export default resolvers;
