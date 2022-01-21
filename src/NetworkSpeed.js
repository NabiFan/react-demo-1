import "./NetworkSpeed.css";
import React from "react";

export default function NetworkSpeed() {
  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <div className="unit-control">
          <div className="unit">Mbps</div>
          <span className="exchange-con fa-fw fa-stack">
            <i className="far fa-circle fa-stack-2x" />
          </span>
          <div className="unit">Mb/s</div>
        </div>
        <div className="converter">
          <div className="flex-1">
            <div className="converter-title">Set</div>
            <input
              type="number"
              className="input-number"
              min="0"
              // onChange={() => console.log(`nabi test`)}
            />
          </div>
          <span className="angle-icon fa-2x" style={{ "margin-top": "30px" }}>
            <i className="fas fa-angle-right" />
          </span>
          <div className="text-right flex-1">
            <div className="converter-title">Show</div>
            <input
              type="text"
              className="input-number text-right"
              value="125"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="card-footer">FAST</div>
    </div>
  );
}
