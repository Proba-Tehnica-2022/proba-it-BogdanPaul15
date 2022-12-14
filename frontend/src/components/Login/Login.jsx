import "./Login.scss"
import SecondButton from "../SecondButton/SecondButton";
function Login(props) {
    return (
        <dialog id="favDialog">
            <form className="loginForm">
                <div className="formInputLabel">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="username" />
                </div>
                <div className="formInputLabel">
                    <label htmlFor="description">Parolă</label>
                    <input type="text" id="passwd" name="passwd" placeholder="parolă" />
                </div>
                <div className="formInputButton">
                    <SecondButton button="Logare"></SecondButton>
                </div>
            </form>
        </dialog>
    );
}

export default Login;