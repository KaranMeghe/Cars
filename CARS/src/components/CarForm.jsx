import { changeName, changeCost, addCars } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const CarForm = () => {
  const dispatch = useDispatch();
  const [warningMessage, setWarningMessage] = useState("");

  const handleNameChange = (event) => {
    setWarningMessage(""); // Clear the warning message on input change
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    setWarningMessage(""); // Clear the warning message on input change)
    const carCost = parseInt(event.target.value) || 0;
    return dispatch(changeCost(carCost));
  };

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting
    name.length && cost ? dispatch(addCars({ name, cost })) : null;

    if (!name || !cost) {
      return setWarningMessage("Please Provide both name and cost");
    }
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label htmlFor="cost" className="label">
              Cost
            </label>
            <input
              type="number"
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
      {warningMessage && <p className="has-text-danger">{warningMessage}</p>}
    </div>
  );
};

export default CarForm;
