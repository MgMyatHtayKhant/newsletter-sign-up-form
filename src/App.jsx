import "./App.css";
import { useState } from "react";
import IntroPage from "./Intro"
import SuccessPage from "./Success"

function App() {
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState({
    click: false,
    valid: false,
  });

  function handleEmail(email) {
    //eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setCheck({
      click: true,
      valid: re.test(email),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleEmail(email);
  }

  function handleDismiss() {
    setCheck({
      click: false,
      valid: false,
    })
  }

  return (
    <main>
      <div className={`container ${check.valid ? "success" : "intro"}`}>
        {check.click && check.valid ? 
          <SuccessPage 
          email={email} 
          handleDismiss={handleDismiss}/>
        : 
          <IntroPage
          click={check.click} 
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}/>
        }
      </div>
    </main>
  );
}

export default App;
