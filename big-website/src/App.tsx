import ProfileCard from "./ProfileCard";
import AmaneImage from "./images/amane.png";
import ClukayImage from "./images/clukay.png";
import FischlImage from "./images/fischl.png";
import HitagiImage from "./images/hitagi.png";
import MarisaImage from "./images/marisa.png";
function App() {
    return (
        <div>
            <div>Some Fictional Characters</div>
            <ProfileCard characterName="Marisa Kirisame" title="Magician" image={MarisaImage}/>
            <ProfileCard characterName = "Hitagi Senjougahara" title="Crab" image = {HitagiImage}/>
            <ProfileCard characterName = "Fischl" title = "Adventurer" image = {FischlImage}/>
            <ProfileCard characterName = "Suou Amane" title = "Cook" image = {AmaneImage}/>
            <ProfileCard characterName = "Clukay" title = "Soldier" image = {ClukayImage}/>
        </div>

    );
}

export default App;