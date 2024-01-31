import { ReactMediaRecorder } from "react-media-recorder"
import RecordIcon from "./RecordIcon.js";
type Props={
    handleStop: any;
}
function RecordMessage({handleStop}: Props) {
  return <ReactMediaRecorder audio onStop={handleStop} render={({status, startRecording, stopRecording}) => (
    <div>
        <button onMouseDown={startRecording} onMouseUp={stopRecording} className="bg-white p-4 rounded-full">
            <RecordIcon classText={status=="recording" ? "animate-pulse text-red-500": "text-sky-500"}/>
        </button>  
    </div>
  )} />
}

export default RecordMessage
