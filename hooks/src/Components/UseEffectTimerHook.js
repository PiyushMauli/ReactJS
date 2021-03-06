import React,{useState,useEffect} from 'react'

function UseEffectTimerHook() {
    const [count, setCount] = useState(0);

    const tick=()=>{
        setCount(prevCount=>prevCount+1);
    }

    useEffect(()=>{
        const interval=setInterval(tick,1);
        console.log("useEffect() called");

        return ()=>{
            clearInterval(interval);
        }
    },[])

    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default UseEffectTimerHook
