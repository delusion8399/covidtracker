import React from "react";

const DeathsCard = ({ data }) => {
  console.log(data);
  return (
    <div
      className="bg-white rounded mt-10 p-4 text-accent"
      style={{ maxWidth: "350px" }}
    >
      <div className="flex text-sm">
        <div className="card-icon mr-2">CARD ICON</div>
      </div>
      <div>
        <div className="total-cases text-4xl font-bold mt-2 text-red-500">
          {data?.deaths.toLocaleString()}
        </div>
        <div className="total-tagline text-md">Total deaths as of today</div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex flex-col">
          <div className="yesterday uppercase">Critical</div>
          <div className="count font-bold">
            {data?.critical.toLocaleString()}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="new uppercase">today deaths</div>
          <div className="count font-bold text-red-500">
            {data?.todayDeaths.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeathsCard;
