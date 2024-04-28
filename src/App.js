import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const name=['araf','ahmed','natok']

const product=[
  {name:'Photoshop', price:'90taka'},
  {name:'Illustrator', price:'90taka'},
  {name:'PDF Reader', price:'90taka'}
]

  return (
    <div className="App">
      <header className="App-header">

<ul>
  {
    product.map(name=><li>{name.name}{name.price}</li>)
  }
  <li>{name[0]}</li>
  <li>{name[1]}</li>
  <li>{name[2]}</li>
</ul>

{
product.map(product=><Product p={product}></Product>)
}
<Counter></Counter>

<User></User>
{
  name.map(name=><Person name={name}></Person>)
}
        {/* <Person name={name[0]} job="student"></Person>
        <Person name={name[1]} job="cricker"></Person>
        <Person name={name[2]} job="footboller"></Person> */}
      </header>
    </div>
  );
}

function User(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUsers(json))
  })
  return (
    <div>

     <h3>total User : {users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
function  Counter(){
  const [count,setCount]=useState(10);
  const handleIncrease=()=>{
setCount(count+1)
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

function Product(props){
  const st={
    border:'2px solid green',
    padding:'20px ',
    width:'300px',
    height:'300px'
  }

  const{name,price}=props.p;
  return(
    <div style={st}>
<h1>{name}</h1>
<h3>{price}</h3>
<button>Done</button>
    </div>

  )
}
function Person(props){
  const st={
    border:'2px solid red' ,
    margin:'10px',
    padding:'20px'
  }
  return (
    <div style={st}>
      <h1>My name: {props.name}</h1>
    <h3>Job:{props.job}</h3>
    </div>

  )
}

export default App;
