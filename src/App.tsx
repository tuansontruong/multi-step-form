import "./App.css";
import { ToastMessage } from "@common";
import { useAppError } from "@hooks";
import { FormOverview, Header } from "./components";

function App() {
  const { appError, setAppError } = useAppError();
  return (
    <div className="flex flex-col gap-6 py-3 md:py-0">
      <Header />
      <FormOverview setAppError={setAppError} />
      {appError && <ToastMessage message={appError} />}
    </div>
  );
}

export default App;
