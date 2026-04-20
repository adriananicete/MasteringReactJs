import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Component Mounted')
        return () => console.log('Component Unmounted')
    }, [])

    useEffect(() => {
        console.log('Component Updated')
    }, [count])
    

    const handleCount = () => {
        setCount(prev => prev + 1)
    }
    return ( 
        <button className="bg-gray-300 px-8 rounded-[3px]" onClick={handleCount}>{count}</button>
     );
}

export default Counter;