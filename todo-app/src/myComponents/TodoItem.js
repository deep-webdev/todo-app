import React from 'react'

export default function Todo({todo, onDelete, onEdit}) {
  return (
    <div>
		<>
		<h5 className='my-2'>
			{todo.title}
		</h5>
		<div>
			<p>{todo.description}</p>
			<button className='btn btn-success btn-sm' onClick={()=> {onEdit(todo.sno)}}>Edit</button>
			<button className='btn btn-danger btn-sm mx-3' onClick={()=> {onDelete(todo)}}>Delete</button>
		</div>
		<hr/>
		</>
    </div>
  )
}
