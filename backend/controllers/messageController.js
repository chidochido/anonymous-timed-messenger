const asyncHandler = require('express-async-handler')
const Message = require('../models/messageModel')

// @desc  get messages
// @route GET /api/messages
const getMessages = asyncHandler(async (req, res) => {
	const messages = await Message.find()
	res.status(200).json(messages)
})

// @desc  set message
// @route POST /api/messages
const setMessage = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400)
		throw new Error('please add text')
	}
	const message = await Message.create({
		text: req.body.text,
	})

	res.status(200).json(message)
})

// @desc  update message
// @route PUT /api/messages/:id
const updateMessage = asyncHandler(async (req, res) => {
	const message = await Message.findById(req.params.id)

	if (!message) {
		res.status(400)
		throw new Error('message not found')
	}

	const updatedMessage = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true })
	res.status(200).json(updatedMessage)
})

// @desc  delete message
// @route DELETE /api/messages/:id
const deleteMessage = asyncHandler(async (req, res) => {
	const message = await Message.findById(req.params.id)

	if (!message) {
		res.status(400)
		throw new Error('message not found')
	}

	await message.delete()
	res.status(200).json({ id: req.params.id })
})

module.exports = {
	getMessages,
	setMessage,
	updateMessage,
	deleteMessage,
}
