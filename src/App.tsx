import "./App.css";
import { Steps } from "./components/Steps";

function App() {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h1 className="text-2xl font-extrabold mb-3">
          Join our Community of Developers
        </h1>
        <div>To join our community and participate in frontend challenges.</div>
        <div>Please fill out the following form.</div>
      </div>
      <div className="w-full max-w-3xl bg-white drop-shadow-lg rounded-md p-4">
        <div className="flex flex-col gap-6">
          <Steps numberOfSteps={4} currentStep={2} />
          <div className=" bg-gray-light w-full h-[0.6px] rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
