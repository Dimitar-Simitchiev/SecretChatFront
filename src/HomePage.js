import {useState} from "react";
import {useNavigate} from "react-router-dom"
import './HomePage.css';
function HomePage() {
    const navigate = useNavigate();
    const[name,setName]=useState("");
    const UsernameSend=(e)=>{
        e.preventDefault()
       document.getElementById('user').textContent=`${name}`;
      
        navigate('/c')
    
    }
    return (
        <>
       <img src="https://cdn.dribbble.com/users/113780/screenshots/3646420/media/a47b35e6ed52e259e673c7e9248f4699.png" alt="Girl in a jacket" width="800" height="300"></img>
        <h1 className="title-name">Write your name: <input id="user" value={name} className="user" onChange={e => setName(e.target.value)} /></h1>
        <button className="coment-btn2" id="coment-btn" onClick={UsernameSend}>SEND</button>
        </>
    
     );
  }
  
  export default HomePage;
  