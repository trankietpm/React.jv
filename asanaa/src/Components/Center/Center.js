import Time from './Time/Time';
import Work from './Work/Work';
import Team from './Team/Team';
import Recent from './Recent/Recent';
import './Center.css'

function Center(){
    return(
        <div className="center">
        <div><Time/></div>
        <div><Work/></div>
        <div><Team/></div>
        <div><Recent/></div>
        </div>
    )
}
export default Center