function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

const Profile = ({ name, imageUrl, profession, awards = [], discovery }) => (
  <section className="profile">
    <h2>{name}</h2>
    <img
      className="avatar"
      src={getImageUrl(imageUrl)}
      alt={name}
      width={70}
      height={70}
    />
    <ul>
      <li>
        <b>Profession: </b>
        {profession}
      </li>
      <li>
        <b>Awards: {awards.length} </b>
        {`(${awards.toString()})`}
      </li>
      <li>
        <b>Discovered: </b>
        {discovery}
      </li>
    </ul>
  </section>
);

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageUrl="szV5sdG"
        profession="physicist and chemist"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovery="polonium (chemical element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageUrl="YfeOqp2"
        profession="geochemist"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
        discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
