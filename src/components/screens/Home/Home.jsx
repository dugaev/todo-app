import React, { useState } from 'react'
import CreateTodoField from './create-todo-field/CreateTodoField'
import TodoItem from './item/TodoItem'
import logo from './../../../logo1.png'

const data = [
	// {
	// 	_id: 'wefw23',
	// 	title: 'Finish the essay collaboration',
	// 	isCompleted: false,
	// },
	// {
	// 	_id: 'wefw23232',
	// 	title: 'Read next chapter of the book',
	// 	isCompleted: false,
	// },
	// {
	// 	_id: 'wefw2qwefcev3',
	// 	title: 'Send the finished assignment',
	// 	isCompleted: false,
	// },
]

const Home = () => {
	const [todos, setTodos] = useState(data)

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}

	const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))

	return (
		<div className='text-white w-4/5 mx-auto'>
			{/* <h1 className='text-5xl font-bold text-center mb-12 decoration-orange-500 font-semibold'><img src="./logo1.png" alt="" /></h1> */}
			<img src={logo} alt="" className='flex item-center justify-center w-300px h-300px mb-12'/>
			{todos.map(todo => (
				<TodoItem
					key={todo._id}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
				/>
			))}
			<CreateTodoField setTodos={setTodos} />
		</div>
	)
}

export default Home
