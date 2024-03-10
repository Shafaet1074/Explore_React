
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Friends from './Friends'
import Users from './users'
import Friend from './Friend'

function App() {
  
  function handleClick(){
    alert('clicked')
  }

  const handleClick2=()=>{
    alert("clicked")
  }

  const addTofive=(num)=>{
     alert(num+5);
  }

  return (
    <>
      
      <h3>React Core Concepts 2</h3>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me2</button>
      <button onClick={()=>{
        alert("clicked")
      }}> Click3</button>
      <button onClick={()=>addTofive(5)}>Four</button>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Friends></Friends>
      <Friend></Friend>
    </>
  
  )
}

export default App
