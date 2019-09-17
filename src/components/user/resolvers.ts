import logger from '../../helpers/logger';

const users = [
	{
		username: 'avram',
		email: 'avram@gmail.com'
	},
	{
		username: 'moshe',
		email: 'moshe@gmail.com'
	},
	{
		username: 'sarah',
		email: 'sarah@gmail.com'
	},
	{
		username: 'lev',
		email: 'lev@gmail.com'
	}
];

const resolvers = {
	Query: {
		getUser(parent, args, context, info) {
			const { username } = args;
			const user: any = users.find(user => user.username === username);
			if (user) {
				logger.info(`getUser() - user ${username} was found.`);
				return user;
			}
			logger.info(`getUser() - user ${username} not found.`);
			return {
				username: 'User not found',
				email: ''
			};
		}
	},
	Mutation: {}
};
export default resolvers;
