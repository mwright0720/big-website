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
        <section className="hero is-info">
            <div className="hero-body">
                <p className="title">Some fictional characters</p>
            </div>
        </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-one-fifth">
              <ProfileCard
                characterName="Marisa Kirisame"
                title="Magician"
                image={MarisaImage}
                description="Just an ordinary human who studied their way into becoming a magician. Do not expect her to return borrowed books."
              />
            </div>

            <div className="column is-one-fifth">
              <ProfileCard
                characterName="Hitagi Senjougahara"
                title="Crab"
                image={HitagiImage}
                description="She's not very easy to get along with. Also recovered from an apparition which caused her to be weightless."
              />
            </div>

            <div className="column is-one-fifth">
              <ProfileCard
                characterName="Fischl"
                title="Adventurer"
                image={FischlImage}
                description="The Prinzessin Der Verurtileung or however you spell it. If you call her Amy in front of others she will be sad."
              />
            </div>

            <div className="column is-one-fifth">
              <ProfileCard
                characterName="Suou Amane"
                title="Cook"
                image={AmaneImage}
                description="One of the more reasonable members in Grisaia. She is the lone survivor of a bus crash into the wilderness."
              />
            </div>

            <div className="column is-one-fifth">
              <ProfileCard
                characterName="Clukay"
                title="Soldier"
                image={ClukayImage}
                description="AOE damage super powerhouse. Also takes a cat and pretends the cat is a gun, which I do too, so you know she's a real one."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
