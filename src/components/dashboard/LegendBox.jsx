import React from "react";

const LegendBox = () => {
  return (
    <div className="panel p-3">
      <h5>Legend</h5>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li><span style={{ background: "#f7b26a", padding: 5, marginRight: 5 }}></span> MOOE</li>
        <li><span style={{ background: "#c8f786", padding: 5, marginRight: 5 }}></span> CO</li>
        <li><span style={{ background: "#9ee9fa", padding: 5, marginRight: 5 }}></span> PS</li>
      </ul>
    </div>
  );
};

export default LegendBox;
