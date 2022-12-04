import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if (!title || !desc){
            alert("Please set title and Description");
        }else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
        
    }
    return (
        <div className='container'>
            <h4 className='text-center'>Add a Todo</h4>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) =>{ setTitle(e.target.value)}} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) =>{ setDesc(e.target.value)}} className="form-control"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
