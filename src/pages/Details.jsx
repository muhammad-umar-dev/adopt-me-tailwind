import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import AdoptedPetContext from "../context/AdoptedPetContext";
import Modal from "../components/Modal";
import ErrorBoundary from "../errors/ErrorBoundary";
import fetchPet from "../fetches/fetchPet";
import Carousel from "../components/Carousel";

const Details = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const results = useQuery(["details", id], fetchPet);
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  if (results.isLoading) {
    return (
      <div className="flex justify-center items-center">
        <h2 className="text-8xl animate-spin">🌀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="w-full h-full flex flex-col md:flex-row p-4 justify-center items-center">
      <Carousel images={pet.images} />
      <div className="w-full md:w-1/2 my-12 md:m-12 flex  flex-col ">
        <h1 className="text-6xl font-extrabold text-pink brightness-150">
          {pet.name}
        </h1>
        <hr />
        <h2>{`${
          pet.animal.charAt(0).toUpperCase() +
          pet.animal.substr(1).toLowerCase()
        } — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <p>{pet.description}</p>
        {/* button for modal */}
        <button
          className="rounded m-4 px-6 py-2  text-white hover:bg-pink border-none bg-pink/80 justify-center"
          onClick={() => setShowModal(true)}
        >
          Adopt {pet.name}
        </button>
        {showModal ? (
          <Modal>
            <div className="flex flex-col bg-white rounded-lg justify-center items-end p-10">
              <h1 className="text-lg text-black font-bold">
                Would you like to adopt {pet.name}?
              </h1>
              <div className="flex w-full justify-center items-center">
                <button
                  className="rounded m-4 px-6 py-2  text-white hover:bg-pink border-none bg-pink/80 justify-center"
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/form");
                  }}
                >
                  Yes
                </button>
                <button
                  className="rounded m-4 px-6 py-2  text-white hover:bg-pink border-none bg-pink/80 drop-shadow-sm justify-center"
                  onClick={() => setShowModal(false)}
                >
                  No
                </button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
