const asyncHandler = require('express-async-handler')

// @desc  get messages
// @route GET /api/messages
const getMessages = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'get messages' })
})

// @desc  set message
// @route POST /api/messages
const setMessage = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400)
		throw new Error('please add text')
	}
	res.status(200).json({ message: 'set message' })
})

// @desc  update message
// @route PUT /api/messages/:id
const updateMessage = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `update message ${req.params.id}` })
})

// @desc  delete message
// @route DELETE /api/messages/:id
const deleteMessage = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `delete message ${req.params.id}` })
})

module.exports = {
	getMessages,
	setMessage,
	updateMessage,
	deleteMessage,
}
