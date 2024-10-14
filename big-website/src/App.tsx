import ProfileCard from "./ProfileCard";

function App() {
    return (
        <div>
            <div>Some Fictional Characters</div>
            <ProfileCard characterName="Marisa Kirisame" title="Magician"/>
            <ProfileCard characterName = "Hitagi Senjougahara" title="Crab"/>
            <ProfileCard characterName = "Fischl" title = "Adventurer"/>
            <ProfileCard characterName = "Suou Amane" title = "Cook"/>
            <ProfileCard characterName = "Clukay" title = "Soldier"/>
        </div>

    );
}

export default App;