import React, {useState, useEffect} from "react"
import Hoc from "../hoc/Hoc"

function UsersList({data}){
//     const [users, setusers] = useState([]);
//     const [term , setterm] = useState("")

//     const fetchUsers = async() => {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users")
//         const json = await res.json()
//         setusers(json)
//         console.log(users)
// }
//     useEffect(() => {
//         fetchUsers()
//     }, [])

    // let filteredUsers = users.filter(({name}) => {
    //    return name.indexOf(term) >= 0
    // }).map(({name}) => {
    //     return(
    //         <div>{name}</div>
    //     )
    // })

    let renderedUsers = data.map(d => {
        return(
            <div  key={d.id}>{d.name}</div>
        )
    })
     return(
        <div>
         <div>{renderedUsers}</div>
        </div>
    )
}

const SearchUsers = Hoc(UsersList, "users")

export default SearchUsers