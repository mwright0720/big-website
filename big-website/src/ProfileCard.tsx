interface Props {
  characterName: string;
  title: string;
  image: string;
  description: string;
}

function ProfileCard({ characterName, title, image, description }: Props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="Image of character"></img>
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{characterName}</p>
          <p className="subtitle is-6">{title}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
