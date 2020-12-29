import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const data = response.json();

      return setTours(data);
    } catch (error) {
      throw new Error(`oops!: ${error}`);
    }
  };
  console.log(tours);
  useEffect(() => {
    fetchTours();
  }, []);
  return <main>Tours Project Setup</main>;
}

export default App;
