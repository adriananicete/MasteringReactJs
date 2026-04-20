import { useState } from "react";
import Counter from "./Counter";

function Tab1() {
    const [showCounter, setShowCounter ] = useState(false)

    const handleClick = () => {
        setShowCounter(!showCounter)
    }
    
    return ( 
        <div className=" w-full h-full flex flex-col justify-center items-center gap-5">
            <button onClick={handleClick} className="text-lg border px-8 rounded-[3px]">Show Counter</button>
            {showCounter && <Counter />}
        </div>
     );
}

export default Tab1;