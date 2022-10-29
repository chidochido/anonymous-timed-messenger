const mongoose = require('mongoose')

const messageSchema = mongoose.Schema(
	{
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
