import React, {useState} from 'react'
import UseEffectMouse from './UseEffectMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Click Here</button>

            {display && <UseEffectMouse/>}
        </div>
    )
}

export default MouseContainer
