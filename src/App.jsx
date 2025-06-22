import { Route, Routes } from "react-router-dom";
import WillYouGo from "./feautures/WillYouGo";
import CountFlowers from "./feautures/CountFlowers";

const App = () => {
  return (
    <Routes>
      <Route path="/will-you-go" element={<WillYouGo />} />
      <Route path="/" element={<CountFlowers />} />
    </Routes>
  );
};

export default App;
