const mongoose = require('mongoose')
const { stringify } = require('querystring')

const userSchema = mongoose.Schema(
	{
		name: {
			type: string,
			required: [true, 'Please add a name'],
		},
		email: {
			type: string,
			required: [true, 'Please add an email'],
			unique: true,
		},
		password: {
			type: string,
			required: [true, 'Please add a password'],
			unique: true,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.Model('User', userSchema)
