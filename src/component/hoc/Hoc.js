import React from "react"

const Hoc = (WrappedComponent, entity) => {
    return class extends React.Component{
         state = {
             data: [],
             term: ""
         }
     
        fetchData = async () => {
            console.log("running")
              const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`)
              const json = await res.json()
              const jsonData = json.slice(0, 10)
              this.setState({...this.state, data: jsonData})
        }
        componentDidMount(){ 
            this.fetchData()
        }

 
render() {
    let filteredData = this.state.data.filter(d => {
        if(entity === "todos"){
            const {title} = d;
            return title.indexOf(this.state.term) >= 0;
    
        }
        if(entity === "users"){
            const {name} = d;
            return name.indexOf(this.state.term) >= 0;
    
        }
    }) 
    return(
        <div>
            <h2>{entity}</h2>
            <input type="text" placeholder="search" onChange={(e) => this.setState({...this.state, term: e.target.value})}/>
            <WrappedComponent data={filteredData}></WrappedComponent>
        </div>
     )
   
}
}
}

export default Hoc