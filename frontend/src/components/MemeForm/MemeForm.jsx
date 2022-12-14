import "./MemeForm.scss"
import SecondButton from "../SecondButton/SecondButton";
function MemeForm(props) {
    return (
        <div>
            <form className="memeForm">
                <div className="formInputLabel">
                    <label htmlFor="description">Descriere</label>
                    <input type="text" id="description" name="description" placeholder="descriere" />
                </div>
                <div className="formInputLabel">
                    <label htmlFor="Meme">Meme (jpg, jpeg, png, gif)</label>
                    <label htmlFor="meme" className="labelFile">drag & drop image or click to upload</label>
                    <input type="file" id="meme" name="meme" accept="image/png, image/jpg, image/gif, image/jpeg" className="inputFile" placeholder="descriere" />
                </div>
                <div className="formInputButton">
                    <SecondButton button="Trimite"></SecondButton>
                </div>
            </form>
        </div>
    );
}

export default MemeForm;