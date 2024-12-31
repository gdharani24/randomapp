import { useEffect, useState } from "react";


 function RandomColor(){

    const[typecolor,setTypeofcolor] = useState('hex');
    const[color,setColor] = useState('#000')

    function handleCreateRandomrgbColor(){

    }
    function randomcolorutility (length){
        return Math.floor(Math.random()*length)
    }
    function handleCreateRandomhexColor(){
const hex =[0,1,2,3,4,5,6,7,8,9,'A','B','C','E','F'];
let hexColor = "#";

for(let i=0;i<6;i++){
    hexColor +=hex[randomcolorutility(hex.length)]
}
console.log(hexColor);
setColor(hexColor)
    }
    function handleCreateRandomrgbColor(){
        const r = randomcolorutility(256)
        const g = randomcolorutility(256)
        const b = randomcolorutility(256)

        setColor(`rgb (${r},${g},${b})`)
    }
    useEffect(()=>{
        if(typecolor === 'rgb') handleCreateRandomrgbColor();
        else handleCreateRandomhexColor();
        },[typecolor]);

    
    return <div className="container" style={{width:'100vw',height:'100vh',backgroundColor:color}}>
        <button onClick={()=>setTypeofcolor('hex')}>Generator HEX color</button>
        <button onClick={()=>setTypeofcolor('rgb')}>Generator RGB color</button>
        <button  onClick=
        {typecolor === 'hex' ? handleCreateRandomhexColor : handleCreateRandomrgbColor}>
            Generator random color</button>
            <div style={{
                display:'flex',
                justifyContent:"center",alignItems:"center",flexDirection:"column",gap:'20px',
                color:'#fff',fontSize:'60px',marginTop:'50px'

            }}>
<h3>{typecolor === 'rgb' ? "RGB color" : "HEX color"}</h3>
<h1>{color}</h1>
            </div>
    </div>
}

export default RandomColor;