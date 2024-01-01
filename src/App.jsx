import illustrationMobile from "./assets/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import "./App.css";
import { useState } from "react";
import SuccessPage from "./Success"

function App() {
  const [email, setemail] = useState("");
  const [check, setCheck] = useState({
    click: false,
    valid: false,
  });

  console.log("Running!", check);

  function handleEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    setCheck({
      click: true,
      valid: re.test(email),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleEmail(email);
  }

  return (
    <main>
      <div className={`container ${check.valid ? "success" : ""}`}>
        {check.click && check.valid ? (
          <SuccessPage />
        ) : (
          <>
            <picture className="picture child">
              <source srcSet={illustrationMobile} media="(max-width: 576px)" />
              <img src={illustrationDesktop} alt="" />
            </picture>
            <form onSubmit={handleSubmit} className="form child">
              <h1 className="title">Stay updated!</h1>
              <p className="description">
                Join 60,000+ product managers receiving monthly updates on:{" "}
              </p>
              <ul className="list">
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li>
                <li>And much more!</li>
              </ul>
              <label className="label" htmlFor="email">
                <span className="email-address">Email address</span>
                {check.click && (
                  <span className="valid-email-required">
                    Valid email required
                  </span>
                )}
              </label>
              <input
                className={`email ${check.click && "error"}`}
                type="text"
                name="email"
                id="email"
                placeholder="email@company.com"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <button className="submit-btn" type="submit">
                Subscribe to monthly newsletter
              </button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}

export default App;
