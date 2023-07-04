import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Recent.css'
function Recent(){
    return(
        <div className="recent">
                  <p className="topic">Recent activities</p>
                  <p>
                    <FontAwesomeIcon icon={faCheckCircle} />Completed <strong>May 2016 Patches Release</strong> in Security Update Release
                  </p>
          </div>
    )
}
export default Recent