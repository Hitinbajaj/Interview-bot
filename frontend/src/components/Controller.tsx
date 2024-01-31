
import { useState } from 'react'
import Title from './Title.js';
import RecordMessage from './RecordMessage.js';
import axios from 'axios';
function Controller() {

  const [isLoading, setIsLoading]= useState(false);
  const [messages, setMessages]= useState<any[]>([]);

  const createBlobUrl = (data: any) =>{
    const blob = new Blob([data], {type: "audio/mpeg"});
    const url= window.URL.createObjectURL(blob);
    return url;
  };
  const handleStop= async (blobUrl: string)=>{
    setIsLoading(true);
    const myMessage= {sender: "me", blobUrl};
    const messagesArr= [...messages, myMessage];

    fetch(blobUrl).then((res) => res.blob()).then(async (blob)=>{
        const formData = new FormData();
        formData.append("file", blob, "myFile.wav");

        await axios.post("http://localhost:8000/post-audio", formData, {
            headers: {"Content-Type": "audio/mpeg"},
            responseType: "arraybuffer",
        }).then((res:any)=>{
            const blob= res.data;
            const audio= new Audio();
            audio.src= createBlobUrl(blob);

            const rachelMessage= {sender:"Rachel", blobUrl: audio.src};
            messagesArr.push(rachelMessage);
            setMessages(messagesArr);
            setIsLoading(false);
            // play audio

            audio.play();
        }).catch((err)=>{
            console.error(err.message);
            setIsLoading(false);
        });
    });

    
  };

  return (
    <div className="h-screen overflow-y-hidden">
      <Title setMessages={setMessages}/>
      <div className="flex flex-col justify-between h-full overflow-y-scroll pb-96">
        <div className='mt-5 px-5'>
            {messages.map((audio, index)=>{
                return <div key={index + audio.sender} className={'flex flex-col '+ (audio.sender == "rachel" && "flex items-end")}>
                    <div className='mt-4'>
                        <p className={audio.sender=="rachel"?"text-right mr-2 italic text-green-500": "ml-2 italic text-blue-500" }>
                            {audio.sender}
                        </p>
                        <audio src={audio.blobUrl} className='appearance-none' controls></audio>
                    </div>
                </div>
            })}

        {messages.length==0 && !isLoading && (
            <div className='text-centre font-light italic mt-10'>
                Send a message
            </div>
        )}
        {isLoading && (
            <div className='text-centre font-light italic mt-10 animate-pulse'>
                Wait for a few seconds..
            </div>
        )}
        </div>
        <div className='flex justify-center items-center fixed bottom-0 w-full py-6 border-t bg-gradient-to-r from-sky-500 to-green-400'>
            <RecordMessage handleStop= {handleStop}/>
        </div>
      </div>
    </div>
  )
}

export default Controller
