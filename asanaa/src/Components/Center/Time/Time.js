import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLock, faGamepad, faGlobeAmericas, faBug } from '@fortawesome/free-solid-svg-icons';
import './Time.css'
function Time(){
    return(
        <div className="time">
                  <p className="topic">Nora spends most of their time on...</p>
                  <p className="product">
                    <FontAwesomeIcon icon={faPhone} />  Product Infrastructure
                  </p>
                  <p className="network">
                    <FontAwesomeIcon icon={faLock} />  Network Security
                  </p>
                  <p className="testing">
                    <FontAwesomeIcon icon={faGamepad} />  Security Testing
                  </p>
                  <p className="audit">
                    <FontAwesomeIcon icon={faGlobeAmericas} />  Security Audit Outsourcing
                  </p>
                  <p className="bug">
                    <FontAwesomeIcon icon={faBug} />  Bug
                  </p>
                </div>
    )
}
export default Time