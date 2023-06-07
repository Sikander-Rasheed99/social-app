import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">
                        LamaSocial
                    </h3>
                    <span className="loginDesc">
                        Connect with Friend and the world arround you on lamasocial.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="User name" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Password Again" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">
                            Login Into Account
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}
