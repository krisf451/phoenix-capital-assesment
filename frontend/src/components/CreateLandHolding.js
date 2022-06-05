import React, { useState } from "react";
import { createLandHoldings } from "../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const initalValues = {
  ownerName: "",
  legalEntity: "",
  netMineralAcres: "",
  royaltyPercentage: "",
  section: "",
  township: "",
  range: "",
  titleSource: "",
};

const CreateLandHolding = () => {
  const [formValues, setFormValues] = useState(initalValues);
  const navigate = useNavigate();
  const {
    ownerName,
    legalEntity,
    netMineralAcres,
    royaltyPercentage,
    section,
    township,
    range,
    titleSource,
  } = formValues;

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createLandHoldings(formValues);
      if (data?.data?.name) {
        setFormValues(initalValues);
        navigate("/landHoldings");
        toast.success("Successfully Created A Land Holding!!");
      } else {
        toast.error(data?.message);
      }
    } catch (e) {
      console.log(e);
      toast.error("Error Creating Land Holding!!");
    }
  };
  return (
    <div className="min-h-screen py-8 sm:p-0 w-full flex flex-col justify-center items-center bg-main-bg dark:text-white dark:bg-main-dark-bg">
      <h1 className="mb-4 text-2xl font-extrabold">Add Land Holding</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-gray-200 justify-center items-center w-[350px] p-2 rounded-md dark:bg-secondary-dark-bg"
      >
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Owner
        </label>
        <input
          type="text"
          value={ownerName}
          name="ownerName"
          required
          placeholder="Owner's Name"
          onChange={handleChange}
          className="h-8 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-2"
        />
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Legal Entity
        </label>
        <input
          type="text"
          value={legalEntity}
          name="legalEntity"
          placeholder="Legal Entity"
          onChange={handleChange}
          className="h-8 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-2"
        />
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Net Acres
        </label>
        <input
          type="text"
          value={netMineralAcres}
          name="netMineralAcres"
          placeholder="Net Mineral Acres"
          onChange={handleChange}
          className="h-8 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-2"
        />
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Royalty %
        </label>
        <input
          type="text"
          value={royaltyPercentage}
          name="royaltyPercentage"
          placeholder="Royalty Percentage"
          onChange={handleChange}
          className="h-8 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-2"
        />
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Section
        </label>
        <input
          type="text"
          value={section}
          name="section"
          placeholder="3 Numbers"
          required
          onChange={handleChange}
          className="h-8 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-2"
        />
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Township
        </label>
        <input
          type="text"
          value={township}
          name="township"
          placeholder="3 Numbers Ending with N or S"
          required
          onChange={handleChange}
          className="h-8 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-2"
        />
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Range
        </label>
        <input
          type="text"
          value={range}
          name="range"
          required
          placeholder="3 Numbers Ending with W or E"
          onChange={handleChange}
          className="h-8 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-2"
        />
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Title Source
        </label>
        <select
          value={titleSource}
          name="titleSource"
          onChange={handleChange}
          required
          className="h-8 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-4"
        >
          <option value=""></option>
          <option value="class a">Class A</option>
          <option value="class b">Class B</option>
          <option value="class c">Class C</option>
          <option value="class d">Class D</option>
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

export default CreateLandHolding;
