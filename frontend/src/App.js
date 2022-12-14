import './assets/App.scss';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import MainTitle from "./components/MainTitle/MainTitle";
import SecondTitle from "./components/SecondTitle/SecondTitle";
import MainDescription from "./components/MainDescription/MainDescription";
import SecondDescription from "./components/SecondDescription/SecondDescription";
import MainButton from "./components/MainButton/MainButton";
import MemeForm from "./components/MemeForm/MemeForm";

function App() {
    return (
        <div>
            <div className="firstScreen">
                <NavigationBar/>
                <div  className="landingScreen">
                    <div className="landingScreenText">
                        <MainTitle title="Partajarea de meme-uri nu a fost niciodată mai simplă!"></MainTitle>
                        <MainDescription description="Platforma ideală pentru studenții de la Politehnică,
amuzați de câte materii o să pice semestrul asta."></MainDescription>
                        <MainButton button="Upload a MEME" id="#form"></MainButton>
                    </div>
                    <div className="landingScreenIlustration">
                        <img src="Ilustration.svg" />
                    </div>
                </div>
            </div>
            <div className="formSection" id="form">
                <div className="cardFormSection">
                    <div className="cardFormSectionText">
                        <SecondTitle title="Ai tupeu și crezi că ești amuzant?" className="secondTitleForm"></SecondTitle>
                        <SecondDescription description="Trimite-ne un mail și poate ai noroc să ne apuce râsul când îți vedem meme-ul."></SecondDescription>
                    </div>
                    <div className="cardFormSectionForm">
                        <MemeForm></MemeForm>
                    </div>
                </div>
            </div>
            {/*<div className="mostViewedSection">*/}
            {/*    <SecondTitle title="Most Viewed"></SecondTitle>*/}
            {/*    <div className="mostViewedMemes">*/}
            {/*        <img src="meme1.png" />*/}
            {/*        <img src="meme2.png" />*/}
            {/*        <img src="meme3.png" />*/}
            {/*    </div>*/}
            {/*</div>*/}
            <footer>
                <div className="icons">
                    <a href="https://www.instagram.com/lsacbucuresti/" target="_blank"><img src="instagram.svg" width="25" height="25"/></a>
                    <a href="https://www.twitch.tv/lsac_bucuresti" target="_blank"><img src="twitch.svg" width="25" height="25"/></a>
                    <a href="https://www.facebook.com/LsacBucuresti/" target="_blank"><img src="facebook.svg" width="25" height="25"/></a>
                </div>
                <p>Copyright 2022 | La muncă, nu la întins mâna.</p>
            </footer>
        </div>
    );
}

export default App;