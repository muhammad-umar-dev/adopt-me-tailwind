import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  const newAnimal =
    animal.charAt(0).toUpperCase() + animal.substr(1).toLowerCase();
  return (
    <Link to={`/details/${id}`} className="relative block">
      <div className="">
        <img className="rounded-lg shadow-2xl" src={hero} alt={name} />
      </div>
      <div className="p-2 absolute bottom-0 rounded-b-lg left-0  right-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
        <h1 className="text-xl font-bold">{name}</h1>
        <h2 className=" ">{`${newAnimal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
