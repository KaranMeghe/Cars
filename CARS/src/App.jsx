import { CarForm, CarList, CarSearch, CarValue } from "./components";
import "bulma/css/bulma.css";
import "./style.css";
function App() {
  return (
    <div className="text-2xl">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;
