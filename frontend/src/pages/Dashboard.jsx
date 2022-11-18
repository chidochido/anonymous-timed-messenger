import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import MessageForm from '../components/MessageForm'
import Spinner from '../components/Spinner'
import { getMessages, reset } from '../features/messages/messageSlice'
import MessageItem from '../components/MessageItem'

function Dashboard() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { user } = useSelector((state) => state.auth)
	const { messages, isLoading, isError, message } = useSelector((state) => state.messages)

	useEffect(() => {
		if (isError) {
			console.log(message)
		}
		if (!user) {
			navigate('/login')
		}

		dispatch(getMessages())
		return () => {
			dispatch(reset())
		}
	}, [user, navigate, isError, message, dispatch])

	if (isLoading) {
		return <Spinner />
	}

	return (
		<>
			<section className="heading">
				<h1>Welcome {user && user.name}</h1>
				<p>Messages Dashboard</p>
			</section>
			<MessageForm />

			<section className="content">
				{messages.length > 0 ? (
					<div className="messages">
						{messages.map((message) => (
							<MessageItem key={message._id} message={message} />
						))}
					</div>
				) : (
					<h3> no messages </h3>
				)}
			</section>
		</>
	)
}

export default Dashboard
