import React, { useState } from 'react'

const AddTodo = (props) => {
    let currTitle = "";
    let currDesc = "";
    // console.log(props.currTodo, currDesc, currTitle);
    if (props.currTodo){
        currTitle = props.currTodo.title;
        currDesc = props.currTodo.description
    }
    return (
        <div className='container'>
            <h4 className='text-center'>Add a Todo</h4>
            <form onSubmit={props.submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={props.title || currTitle} onChange={(e) =>{ props.setTitle(e.target.value)}} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" value={props.desc || currDesc} onChange={(e) =>{ props.setDesc(e.target.value)}} className="form-control"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">{props.toggleBtn? "Save": "Add Todo"}</button>
            </form>
        </div>
    )
}

export default AddTodo
