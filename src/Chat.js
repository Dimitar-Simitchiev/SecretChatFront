import './Chat.css';
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
function Chat() {
  const[coments,setComents]=useState("");
  const[objcoments,setObjComents]=useState([]);
  const[user,setUser]=useState(document.getElementById('user').textContent);
  let date=new Date().toLocaleDateString("en-GB");
  const navigate = useNavigate();
  
  useEffect(()=>{
   

    fetch("https://secretchat-9zd7.onrender.com/jsonstore/com")
   .then(res=>res.json())
   .then(x=>Object.values(x))
   .then(result=>{
  
    
     
    setObjComents(result)})
    if (document.getElementById('user').textContent===``){
      setUser('anonimus')
    }
  },[])
      
     
  function topFunction() {
   
 document.getElementById('container');

  }

  const Comment=(e)=>{
    e.preventDefault()
  
   topFunction()


    const empobj = {coments,date,user};

   
   
    fetch("https://secretchat-9zd7.onrender.com/jsonstore/com", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(empobj)
    }).then(() => {
      navigate("/c");
    }).catch((err) => {
        console.log(err.message);
    })
   
   
      fetch("https://secretchat-9zd7.onrender.com/jsonstore/com")
     .then(res=>res.json())
     .then(x=>Object.values(x))
     .then(result=>{
 
     setObjComents(result)
     
     
     

     })
    
    
  
  
 
      
      

   }
    return (
      <> <h1 id='user' className='user'>{user}</h1>
      <div className='container'>
      <div className="coment" id="coment">
       {objcoments.map(x=>{
         return <div className='coment-div'>
          <span>
           <p className="name-coment" clsssName="date-time"><p>{x.user}  :{x.coments}<span className="time-right">{x.date}</span></p></p>
          </span>
           </div>
       
      })}</div>
      </div>
      <div className='intput-coment'>
       <input id="int" value={coments} className="int" onChange={e => setComents(e.target.value)} />
       <button className="coment-btn"  id="coment-btn" onClick={Comment}>SEND</button>
       
      </div>
     </>
     
    );
  }
  
  export default Chat;
  