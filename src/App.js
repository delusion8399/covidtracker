import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <Hero countries={countries} />
      </div>
    </div>
  );
};

export default App;
