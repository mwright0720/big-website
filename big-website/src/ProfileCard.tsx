interface Props {
  characterName: string;
  title: string;
}

function ProfileCard({characterName, title}: Props) {
  return (
    <div>
      <div>Name: {characterName}</div>
      <div>{title}</div>
    </div>
  );
}

export default ProfileCard;
