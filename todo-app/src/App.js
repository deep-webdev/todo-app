// import logo from "./logo.svg";
import "./App.css";
import {  
    BrowserRouter as Router,  
    Routes,  
    Route,  
} from 'react-router-dom';
import Header from "./myComponents/Header";
import Todos from "./myComponents/Todos";
// import TodoItem from "./myComponents/TodoItem";
import Footer from "./myComponents/Footer";
import React, { useState, useEffect} from 'react';
import AddTodo from "./myComponents/AddTodo";
import About from "./myComponents/About";

function App() {
    let initTodo;
    if (localStorage.getItem("todos") === null){
        initTodo = []
    } else{
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }


    const onDelete = (todo) =>{
        setTodos(todos.filter((e)=>{
            return e!== todo;
        }));
    };

    const addTodo = (title, desc) =>{
        let sno = todos.length === 0? 0 : todos[todos.length - 1].sno + 1;
        const myTodo = {
            sno : sno,
            title: title,
            description: desc,
        }
        setTodos([...todos, myTodo]);
    }

    const [todos, setTodos] = useState(initTodo);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <>
        <Router>
        <Header title="My Todos List"/>

        <Routes>
            <Route exact path="/" element={
                    <>
                    <AddTodo addTodo={addTodo}/>
                    <Todos todos={todos} onDelete={onDelete}/>
                    </>
                }>
            </Route>
            <Route exact path="/about" element={
                <>
                <About/>
                </>
            }>
                
            </Route>
        </Routes>       
        
        <Footer/>
        </Router>
        </>
    );
}

export default App;
