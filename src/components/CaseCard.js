import React from "react";

const Card = ({ data }) => {
  return (
    <div
      className="bg-white rounded mt-10 p-4 text-accent"
      style={{ maxWidth: "350px" }}
    >
      <div className="flex text-sm">
        <div className="card-icon mr-2">CARD ICON</div>
        <div
          className="active-cases uppercase rounded p-1 text-xs "
          style={{ backgroundColor: "#F5ECD3" }}
        >
          active cases: {data?.active.toLocaleString()}
        </div>
      </div>
      <div>
        <div className="total-cases text-4xl font-bold mt-2">
          {data?.cases.toLocaleString()}
        </div>
        <div className="total-tagline text-md">Total cases as of today</div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex flex-col">
          <div className="yesterday uppercase">Today cases</div>
          <div className="count font-bold">
            {data?.todayCases.toLocaleString()}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="new uppercase">tests</div>
          <div className="count font-bold">{data?.tests.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
