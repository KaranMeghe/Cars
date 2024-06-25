import { useSelector, useDispatch } from "react-redux";
import { removeCars } from "../Redux/store";

const CarList = () => {
  const dispatch = useDispatch();

  const carsData = useSelector((state) => {
    const { data, searchTerm } = state.cars;
    const { name } = state.form;

    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return {
      cars: filteredCars,
      name: name,
    };
  });

  console.log(carsData);

  const { cars, name } = carsData;

  const handleCarDelete = (car) => {
    return dispatch(removeCars(car.id));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return cars.length ? (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
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

  console.log(renderedCars);
  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
};

export default CarList;
