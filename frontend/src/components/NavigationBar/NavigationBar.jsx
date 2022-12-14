import './NavigationBar.scss';
function NavigationBar(){
    return(
        <header className="navBar">
            <div className="logo">
                <img src="Logo.svg"/>
            </div>
            <div className="navBarLinks">
                <ul>
                    <li><a href="#">Logare</a></li>
                    <li><a href="#">Creare Cont</a></li>
                </ul>
            </div>
        </header>
    )
}

export default NavigationBar;