import "./App.css";
import { FormOverview, Header } from "./components";

function App() {
  return (
    <div className="flex flex-col gap-6">
      <Header />
      <FormOverview />
    </div>
  );
}

export default App;
