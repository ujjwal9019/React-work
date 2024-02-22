// nano id is just to generte id 
import { createSlice , nanoid } from "@reduxjs/toolkit";

// this is what we store in initial state  this is just an object 
const initialState = {
    todos : [ {id: 1 , text : "hello words"} ]
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,

    // we get property and function in reducers 
    reducers : {
        addTodo : (state , action) => {
            // to add in todo we have to do in object because in initial state it is an object 
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

// individual functinality export kri takki  component me kaam aajhae
export const {addTodo , removeTodo} =todoSlice.actions

// humme sarre reducers export krne padenge takki store ko pata chale or vo manage kree jaise ki todoSlice banaya usko export krenge

export default todoSlice.reducer