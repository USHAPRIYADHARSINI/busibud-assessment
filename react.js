import React,{useState} from 'react';

const Toggle = ()=>{
    const [on, setOn] = useState("false")
    return(
        <button onClick={()=>setOn(!on)} className='toggle'>
            {on? "OFF" : "ON"}
        </button>
    )
}
// var btn = document.createElement('button')
// btn.setAttribute("class", "toggle")
// document.body.append(btn);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Toggle/>
);