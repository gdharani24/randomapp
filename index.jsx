import { useState } from "react";


 function RandomColor(){

    const[typecolor,setTypeofcolor] = usestate('hex');
    const[color,setColor] = useState('#000')
    return <div className="container" style={{width:'100vw',height:'100vh',backgroundColor:color}}>
        <button>Generator HEX color</button>
        <button>Generator RGB color</button>
<button>Generator random color</button>
    </div>
}

export default RandomColor;