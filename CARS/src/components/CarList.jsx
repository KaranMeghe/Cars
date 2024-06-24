import { useSelector, useDispatch } from "react-redux";
import { removeCars } from "../Redux/store";

const CarList = () => {
  const dispatch = useDispatch();

  const cars = useSelector((state) => {
    return state.cars.data;
  });

  console.log(cars);

  const handleCarDelete = (car) => {
    return dispatch(removeCars(car.id));
  };

  const renderedCars = cars.map((car) => {
    return cars.length ? (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ₹{car.cost}
        </p>

        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    ) : null;
  });
  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
};

export default CarList;
