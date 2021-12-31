import axios from "axios";
import React, { useEffect, useState } from "react";
import CaseCard from "./CaseCard";
import DeathsCard from "./DeathsCard";
import RecoveryCard from "./RecoveryCard";

const Hero = ({ countries }) => {
  const [renderChange, setRenderChange] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      `https://disease.sh/v3/covid-19/countries/${selectedCountry}`
    );

    await setData(response.data);
    console.log(data);
  };

  return (
    <div className="py-5">
      <div className=" text-center uppercase text-accent font-medium text-lg">
        Your country result
      </div>
      <div className="text-center text-4xl text-accent uppercase font-bold mt-2 mb-4">
        {selectedCountry}
      </div>
      <div className="text-center">
        <div className="select">
          {renderChange && (
            <select
              onChange={(e) => {
                setSelectedCountry(e.target.value);
              }}
              className="p-2 rounded-lg"
            >
              <option selected>India</option>
              {countries.map((country) => {
                return <option>{country.country}</option>;
              })}
            </select>
          )}
        </div>
        <button
          className="change-btn uppercase px-4 mt-3 py-1 rounded-md"
          style={{ backgroundColor: "#F5ECD3" }}
          onClick={() => {
            setRenderChange(true);
            fetchData();
          }}
        >
          Change
        </button>
      </div>
      <div className="card-grid grid grid-cols-3 gap-5">
        <CaseCard data={data} />
        <DeathsCard data={data} />
        <RecoveryCard data={data} />
      </div>
    </div>
  );
};

export default Hero;
