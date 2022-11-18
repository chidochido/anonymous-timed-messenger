const asyncHandler = require('express-async-handler')
const Message = require('../models/messageModel')
const User = require('../models/userModel')

// @desc  get messages
// @route GET /api/messages
const getMessages = asyncHandler(async (req, res) => {
	const messages = await Message.find({ user: req.user.id })
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
		user: req.user.id,
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

	// check for logged in user
	if (!req.user) {
		res.status(401)
		throw new Error('user not found')
	}

	// make sure logged in user matches user corresp. to message
	if (message.user.toString() !== req.user.id) {
		res.status(401)
		throw new Error('user not authorized')
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

	// check for logged in user
	if (!req.user) {
		res.status(401)
		throw new Error('user not found')
	}

	// make sure logged in user matches user corresp. to message
	if (message.user.toString() !== req.user.id) {
		res.status(401)
		throw new Error('user not authorized')
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
