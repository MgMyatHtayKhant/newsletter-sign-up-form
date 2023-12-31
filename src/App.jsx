import illustrationMobile from "./assets/images/illustration-sign-up-mobile.svg"
import illustrationDesktop from "./assets/images/illustration-sign-up-desktop.svg"
import './App.css'

function App() {
  

  return (
    <main>
      <div className="container">
        <picture className='picture child'>
          <source srcSet={illustrationMobile} media='(max-width: 576px)'/>
          <img src={illustrationDesktop} alt="" />
        </picture>
        <form className='form child'>
          <h1 className='title'>Stay updated!</h1>
          <p className='description'>Join 60,000+ product managers receiving monthly updates on: </p>
          <ul className='list'>
            <li>
              Product discovery and building what matters
            </li>
            <li>
              Measuring to ensure updates are a success
            </li>
            <li>
              And much more!
            </li>
          </ul>
          <label className='label' htmlFor="email">Email address</label>
          <input className='email'
           type="email"
            name="email"
             id="email" 
             placeholder='email@company.com'
             />
          <button className='submit-btn' type="submit">Subscribe to monthly newsletter</button>
        </form>
      </div>
    </main>
  )
}

export default App
