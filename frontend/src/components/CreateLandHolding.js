import React, { useState } from "react";

const CreateLandHolding = () => {
  const [formValues, setFormValues] = useState({
    owner: "",
    legalEntity: "",
    netMineralAcres: "",
    royaltyPercentage: "",
    section: "",
    township: "",
    range: "",
    titleSource: "",
  });
  const {
    owner,
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
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-200 dark:text-white dark:bg-main-dark-bg">
      <h1 className="mb-4 text-2xl font-extrabold">Add Land Holding</h1>
      <form className="flex flex-col bg-white justify-center items-center w-[350px] p-2 rounded-md dark:bg-secondary-dark-bg">
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Owner
        </label>
        <input
          type="text"
          value={owner}
          name="owner"
          onChange={handleChange}
          className="h-12 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-4"
        />
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Legal Entity
        </label>
        <input
          type="text"
          value={legalEntity}
          name="legalEntity"
          onChange={handleChange}
          className="h-12 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-4"
        />
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Net Acres
        </label>
        <input
          type="text"
          value={netMineralAcres}
          name="netMineralAcres"
          onChange={handleChange}
          className="h-12 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-4"
        />
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Royalty %
        </label>
        <input
          type="text"
          value={royaltyPercentage}
          name="royaltyPercentage"
          onChange={handleChange}
          className="h-12 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-4"
        />
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Section
        </label>
        <input
          type="text"
          value={section}
          name="section"
          onChange={handleChange}
          className="h-12 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-4"
        />
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Township
        </label>
        <input
          type="text"
          value={township}
          name="township"
          onChange={handleChange}
          className="h-12 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-4"
        />
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Range
        </label>
        <input
          type="text"
          value={range}
          name="range"
          onChange={handleChange}
          className="h-12 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-4"
        />
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Title Source
        </label>
        <input
          type="text"
          value={titleSource}
          name="titleSource"
          onChange={handleChange}
          className="h-12 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-4"
        />
      </form>
    </div>
  );
};

export default CreateLandHolding;

// {
//     "message": "Successfully created a new land holding",
//     "data": {
//         "name": "373-211S-643W-test",
//         "owner": "Brooks Brothers",
//         "legalEntity": "test",
//         "netMineralAcres": "465.55",
//         "royaltyPercentage": "0.9%",
//         "sectionName": "373-211S-643W",
//         "section": "373",
//         "township": "211S",
//         "range": "643W",
//         "titleSource": "class a",
//         "_id": "629a6ff6c8fa8c1162cb95bd",
//         "createdAt": "2022-06-03T20:32:54.800Z",
//         "updatedAt": "2022-06-03T20:32:54.800Z",
//         "__v": 0
//     }
// }
