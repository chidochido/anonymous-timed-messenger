const mongoose = require('mongoose')

const messageSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId, // _id
			required: true,
			ref: 'User',
		},
		text: {
			type: String,
			required: [true, 'Please add text'],
		},
		password: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Message', messageSchema)
