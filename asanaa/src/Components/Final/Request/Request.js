import './Request.css'

function Request(){
    return(
        <div className="request">
        <p className="placeholder">
          <input type="text" value="" placeholder="Request a task from Nora..." />
        </p>
        <img src="./images/6.png" alt="Request" />
      </div>  
    )
}
export default Request