const express = require('express')
const router = express.Router()
const {
	getMessages,
	setMessage,
	updateMessage,
	deleteMessage,
} = require('../controllers/messageController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getMessages).post(protect, setMessage)
router.route('/:id').put(protect, updateMessage).delete(protect, deleteMessage)

// router.get('/', getMessages)

// router.post('/', setMessage)

// router.put('/:id', updateMessage)

// router.delete('/:id', deleteMessage)

module.exports = router
