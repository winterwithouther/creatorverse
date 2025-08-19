import { ClipLoader } from "react-spinners"
import "../css/Loading.css"

export default function Loading() {
    return (<div className="container">
        <ClipLoader size={40} color="#3498db" />
        <p className="text">Loading...</p>
    </div>)
}