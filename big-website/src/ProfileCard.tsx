interface Props {
  characterName: string;
  title: string,
  image: string;
}

function ProfileCard({characterName, title, image}: Props) {
  return (
    <div>
      <img src = {image} alt = "Image of character"></img>
      <div>Name: {characterName}</div>
      <div>{title}</div>
    </div>
  );
}

export default ProfileCard;
