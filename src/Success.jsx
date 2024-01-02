import iconSuccess from "./assets/images/icon-success.svg"
import './Success.css'


const success = (props) => {
  return (
    <>
    <img src={iconSuccess} alt="Icon Success" />
    <h1 className="title">Thank for subscribling!</h1>
    <p className="description">
    A confirmation email has been sent to <span className="email">{props.email}</span>. 
    Please open it and click the button inside to confirm you
    subscription.
    </p>
    <button onClick={props.handleDismiss} className="btn input">
      Dismiss message
    </button>
    </>
  )
}

export default success