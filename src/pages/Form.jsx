import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import AdoptedPetContext from "../context/AdoptedPetContext";

const Form = () => {
  const [adoptedPet] = useContext(AdoptedPetContext);
  const navigate = useNavigate();

  console.log(adoptedPet);
  useEffect(() => {
    if (adoptedPet === null) {
      navigate("/");
    }
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      contactnumber: "",
      location: "",
    },
    onSubmit: (values) => {
      if (!values.name || !values.contactnumber || !values.location) {
        alert("Enter Values");
      } else if (values.name || values.contactnumber || values.location) {
        alert(JSON.stringify(values, null, 2));
        navigate("/");
      }
    },
  });

  return (
    <div className="flex flex-col  items-center  justify-center ">
      {adoptedPet !== null ? (
        <form
          className="flex flex-col bg-red-300/70 rounded-3xl w-[90%] md:w-4/6  p-4  items-center "
          onSubmit={formik.handleSubmit}
        >
          <div className="rounded-full flex justify-center w-32 h-32 bg-fuchsia-500 ">
            <img
              className="rounded-full"
              src={adoptedPet.images[0]}
              alt={adoptedPet.name}
            />
          </div>
          <div className="flex">
            <h1>
              {adoptedPet.animal.charAt(0).toUpperCase() +
                adoptedPet.animal.substr(1).toLowerCase()}{" "}
              : {adoptedPet.name}( {adoptedPet.breed}), {adoptedPet.city},{" "}
              {adoptedPet.state}{" "}
            </h1>
          </div>
          <div className="w-10/12 justify-center h-1 bg-white my-4 rounded-full" />

          <input
            type="text"
            id="name"
            name="name"
            className="bg-white/50 w-[90%] md:w-1/2 h-12 rounded-lg border-2 border-white my-4 focus:outline-none
          focus:border-white "
            placeholder="Name:"
            onChange={formik.handleChange}
            value={formik.values.name}
          />

          <input
            type="text"
            id="contactnumber"
            name="contactnumber"
            className="bg-white/50 w-[90%] md:w-1/2 h-12 rounded-lg border-2 border-white my-4 focus:outline-none focus:border-white"
            placeholder="Contact Number:"
            onChange={formik.handleChange}
            value={formik.values.contactnumber}
          />

          <input
            type="text"
            id="location"
            name="location"
            className="bg-white/50 w-[90%] md:w-1/2 h-12 rounded-lg border-2 border-white my-4 focus:outline-0 focus:border-white"
            placeholder="Location: (city, state)"
            onChange={formik.handleChange}
            value={formik.values.location}
          />

          <button
            className="bg-orange-500/50 w-1/2 h-12 rounded-lg border-2 font-bold text-white border-orange-400 hover:bg-orange-400 my-4"
            type="submit"
            // disabled={values}
          >
            Confirm
          </button>
        </form>
      ) : null}
      <div className="h-16 w-full"></div>
    </div>
  );
};

export default Form;
