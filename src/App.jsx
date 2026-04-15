import { useState } from "react";
import ComponentA from "./components/ComponentA";

function App() {

  const [ isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return ( 
    <div style={{
      backgroundColor: '',
      width: '100%',
      height: '100dvh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      
      <div style={{ width: '200px', height: 'auto', padding: '5px', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '15px'}}>
        <button onClick={handleClick}>{isOpen ? 'Hide Details' : 'Show Details'}</button>
        {isOpen && <ComponentA />}
      </div>
    </div>

   );
}

export default App;