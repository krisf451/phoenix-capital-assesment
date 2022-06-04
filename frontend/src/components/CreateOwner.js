import React, { useState } from "react";
import { createOwner } from "../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const initalValues = {
  name: "",
  entityType: "",
  ownerType: "",
  address: "",
};

const CreateOwner = () => {
  const [formValues, setFormValues] = useState(initalValues);
  const navigate = useNavigate();
  const { name, entityType, ownerType, address } = formValues;

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      data: { data },
    } = await createOwner(formValues);
    console.log(data);
    if (data?.name) {
      setFormValues(initalValues);
      navigate("/owners");
      toast.success("Successfully Created A New Owner!!");
    } else {
      toast.error("Error Creating an Owner!!");
    }
  };
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-main-bg dark:text-white dark:bg-main-dark-bg">
      <h1 className="mb-4 text-2xl font-extrabold">Add Owner</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-gray-200 justify-center items-center w-[350px] p-2 rounded-md dark:bg-secondary-dark-bg"
      >
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Name
        </label>
        <input
          type="text"
          value={name}
          name="name"
          required
          placeholder="Owner's Name"
          onChange={handleChange}
          className="h-8 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-2"
        />
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Address
        </label>
        <input
          type="text"
          value={address}
          name="address"
          placeholder="1234 Test Ln, Riverside CA 92504"
          onChange={handleChange}
          className="h-8 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-2"
        />
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Entity Type
        </label>
        <select
          name="entityType"
          value={entityType}
          className="h-8 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-2"
          onChange={handleChange}
        >
          <option value=""></option>
          <option value="company">Company</option>
          <option value="individual">Individual</option>
          <option value="investor">Investor</option>
          <option value="trust">Trust</option>
        </select>
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Owner Type
        </label>
        <select
          name="ownerType"
          value={ownerType}
          className="h-8 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-2"
          onChange={handleChange}
        >
          <option value=""></option>
          <option value="competitor">Competitor</option>
          <option value="seller">Seller</option>
          <option value="investor">Investor</option>
          <option value="professional">Professional</option>
        </select>
        <button
          type="submit"
          className="bg-blue-400 text-white h-8 w-3/4 rounded-md transition-all hover:bg-blue-500 duration-300 ease-in-out mt-4 flex justify-center items-center"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => setFormValues(initalValues)}
          className="bg-blue-400 text-white h-8 w-3/4 rounded-md transition-all hover:bg-blue-500 duration-300 ease-in-out mt-4 flex justify-center items-center mb-4"
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default CreateOwner;
