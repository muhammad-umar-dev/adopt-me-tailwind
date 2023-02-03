import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "../components/Results";
// import AdoptedPetContext from "../context/AdoptedPetContext";
import useBreedList from "../fetches/useBreedList";
import fetchSearch from "../fetches/fetchSearch";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  // const [adoptedPet] = useContext(AdoptedPetContext);
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];
  // console.log(pets.numberOfResults);

  return (
    <div className="search-params my-0 mx-auto w-11/12">
      <form
        className="p-10 mb-10  bg-gray-200 rounded-lg shadow-lg flex flex-col justify-center items-center "
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center md:justify-evenly w-full   ">
          <label htmlFor="location">
            Location
            <input
              type="text"
              id="location"
              name="location"
              className="search-input"
              placeholder="Location"
            />
          </label>

          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              name="animal"
              className="search-input"
              onChange={(e) => {
                setAnimal(e.target.value);
              }}
              onBlur={(e) => {
                setAnimal(e.target.value);
              }}
            >
              <option />
              {ANIMALS.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="breed">
            Breed
            <select
              disabled={!breeds.length}
              id="breed"
              name="breed"
              className="search-input grayed-out-disabled"
            >
              <option />
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="flex flex-col lg:flex-row justify-evenly  ">
          <button className="rounded px-6 py-2  text-white hover:bg-pink border-none bg-pink/80">
            Submit
          </button>
        </div>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
