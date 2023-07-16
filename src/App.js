import { Route, Routes } from "react-router-dom"
import HomePage from './HomePage';
import Chat from'./Chat';

function App() {
  return (
    
    <>
    
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/c" element={<Chat/>}/>
    </Routes>
    </>
  );
}

export default App;
