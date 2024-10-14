import "bulma/css/bulma.css";
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
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-one-fifth">
              <ProfileCard
                characterName="Marisa Kirisame"
                title="Magician"
                image={MarisaImage}
              />
            </div>

            <div className="column is-one-fifth">
              <ProfileCard
                characterName="Hitagi Senjougahara"
                title="Crab"
                image={HitagiImage}
              />
            </div>

            <div className="column is-one-fifth">
              <ProfileCard
                characterName="Fischl"
                title="Adventurer"
                image={FischlImage}
              />
            </div>

            <div className="column is-one-fifth">
              <ProfileCard
                characterName="Suou Amane"
                title="Cook"
                image={AmaneImage}
              />
            </div>

            <div className="column is-one-fifth">
              <ProfileCard
                characterName="Clukay"
                title="Soldier"
                image={ClukayImage}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
