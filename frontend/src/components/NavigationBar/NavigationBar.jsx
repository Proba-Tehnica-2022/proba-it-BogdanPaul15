import './NavigationBar.scss';
import SecondButton from "../SecondButton/SecondButton";
function NavigationBar() {
    return (
        <div>
            <dialog id="favDialog">
                <form className="loginForm" method="dialog">
                    <div className="formInputLabel">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="username" />
                    </div>
                    <div className="formInputLabel">
                        <label htmlFor="description">Parolă</label>
                        <input type="text" id="passwd" name="passwd" placeholder="parolă" />
                    </div>
                    <div className="formInputButton">
                        <button value="cancel">Cancel</button>
                        <SecondButton button="Logare" id="confirmBtn" value="default"></SecondButton>
                    </div>
                </form>
            </dialog>
                <output></output>

            <header className="navBar">
                <div className="logo">
                    <img src="Logo.svg"/>
                </div>
                <div className="navBarLinks">
                    <ul>
                        <li>
                            <button>Logare</button>
                        </li>
                        <li>
                            <button>Creare cont</button>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
export default NavigationBar;