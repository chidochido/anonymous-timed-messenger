import { useDispatch } from 'react-redux'
import { deleteMessage } from '../features/messages/messageSlice'

function MessageItem({ message }) {
	const dispatch = useDispatch()
	return (
		<div className="message">
			<div>{new Date(message.createdAt).toLocaleString('en-US')}</div>
			<h2>{message.text}</h2>
			<button onClick={() => dispatch(deleteMessage(message._id))} className="close">
				X
			</button>
		</div>
	)
}

export default MessageItem
