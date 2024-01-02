import "./Intro.css";
import illustrationMobile from "./assets/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "./assets/images/illustration-sign-up-desktop.svg";

/* eslint-disable react/prop-types */
const Intro = (props) => {
    return (
        <>
            <picture className="picture child">
                <source srcSet={illustrationMobile} media="(max-width: 576px)" />
                <img src={illustrationDesktop} alt="" />
            </picture>
            <form onSubmit={props.handleSubmit} className="form child">
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
                    {props.click && (
                        <span className="valid-email-required">
                            Valid email required
                        </span>
                    )}
                </label>
                <input
                    className={`email input ${props.click && "error"}`}
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email@company.com"
                    value={props.email}
                    onChange={(e) => props.setEmail(e.target.value)}
                />
                <button className="btn input" type="submit">
                    Subscribe to monthly newsletter
                </button>
            </form>
        </>
    );
};

export default Intro;