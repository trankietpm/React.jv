import './Final.css'
import Bio from './Bio/Bio'
import Location from './Location/Location'
import Direct from './Direct/Direct'
import Request from './Request/Request'
function Final(){
    return(
        <div className="final">
            <div><Bio/></div>
            <div><Location/></div>
            <div><Direct/></div>
            <div><Request/></div>
        </div>
    )
}
export default Final