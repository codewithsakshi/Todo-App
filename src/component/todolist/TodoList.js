import React, {useState, useEffect} from "react"
import Hoc from "../hoc/Hoc";

function TodosList({data}){
//     const [todos, settodos] = useState([]);
//     const [term , setterm] = useState("")

//     const fetchTodos = async() => {
//         const res = await fetch("https://jsonplaceholder.typicode.com/todos")
//         const json = await res.json()
//         settodos(json)
// }
//     useEffect(() => {
//         fetchTodos()
//     }, [])

//     let filteredTodos = todos.slice(0, 10).filter(({title}) => {
//         console.log("hii",title.indexOf(term) >= 0)
    
//        return title.indexOf(term) >= 0
//     }).map(({title}) => {
//         return(
//             <div>{title}</div>
//         )
//     })

let renderedUsers = data.map(d => {
    return(
        <div key={d.id}>{d.title}</div>
    )
})

     return(
        <div>
         <div>{renderedUsers}</div>
        </div>
    )
}

const SearchTodos = Hoc(TodosList, "todos")

export default SearchTodos