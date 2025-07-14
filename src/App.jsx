import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import NewsBoard from "./Components/NewsBoard/NewsBoard";
const App = () => {
  // creating a useState variable
  const [category, setCategory] = useState("general");

  return (
    <div>
      {/* Mount navbar component here */}
      <Navbar setCategory={setCategory} />
      {/* Mount NewsBoard component here */}
      <NewsBoard category={category} />
    </div>
  );
};
export default App;
