import React from "react";
import "./HoverCard.css";

const HoverCard = () => {
  return (
    <div className="hover-card">
      <div className="card-content">
        <div className="card-image">
          <img src="/2024-Ford-F-150.png" alt="Ford F-150" />
        </div>
        <div className="card-overlay">
          <h2 className="title">Ford F-150</h2>
          <div className="details">
            <p>🏎️ 5.0L V8 with 400 horsepower & 4WD</p>
            <p>💰 Starting at $39,060</p>
            <p>⛽ 16 City / 25 Highway MPG</p>
            <p>🛢️ Up to 36 gallon tank</p>
            <p>🚛 13,500 lbs towing capacity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
