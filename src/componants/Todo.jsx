import React from 'react'
import { useParams } from 'react-router'
import { useState , useEffect} from 'react'
import axios from 'axios'
import { CircularProgress } from '@mui/material'

const Todo = () => {
    const {id} = useParams()
    const [ todoDetails ,setTodoDetails] = useState('')

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
            const responseTodo = res.data;
            setTodoDetails(responseTodo)     
        })
    }, []);
    const { id: todoId, userId , title , completed } = todoDetails;
    return (
        <div>
            {todoDetails ? (
            <div>
                <h1> {`Todo Id : ${todoId}`} </h1>
                <h1> {`Todo user Id : ${userId}`} </h1>
                <h1> {`Todo Title : ${title}`} </h1>
                <h1> {`Todo completed : ${completed}`} </h1>
            </div>
                ) : (
                    <CircularProgress/>
                )}
        
        </div>
        )
}

export default Todo
