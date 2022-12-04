import React from 'react'

export default function Todo({todo, onDelete}) {
  return (
    <div>
		<>
		<h5 className='my-2'>
			{todo.title}
		</h5>
		<div>
			<p>{todo.description}</p>
			<button className='btn btn-danger btn-sm' onClick={()=> {onDelete(todo)}}>Delete</button>
		</div>
		<hr/>
		</>
    </div>
  )
}
