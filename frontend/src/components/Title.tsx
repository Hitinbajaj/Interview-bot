import { useState } from 'react'
import axios from 'axios'

type Props = {
    setMessages: any;
}
function Title({setMessages}: Props) {

    const [isResetting, setIsResetting]= useState(false);
    const resetConversation= async ()=>{
        setIsResetting(true);
            await axios.get("http://localhost:8000/reset").then((res) =>{
                if (res.status==200){
                    setMessages([]);
                }
                else{
                    console.error("ERROR");
                }
            }).catch((err)=>{
                console.error(err.message);
            })

        setIsResetting(false);
    }
    return (
        <div className='flex justify-between items-centre w-full p4 bg-gray-900 text-white shadow'>
            <div className='italic font-semibold p-2 '> Rachel </div>
            <button className="p-2" onClick={resetConversation}>{isResetting? "Wait...":"Reset"}</button>
        </div>
    )
}

export default Title
