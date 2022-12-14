import "./MainButton.scss"
function MainButton(props) {
    return (
        <a href={ props.id } className="button">{ props.button }</a>
    );
}

export default MainButton;