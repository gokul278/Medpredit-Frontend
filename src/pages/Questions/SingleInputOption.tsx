import React from "react";

const SingleInputOption: React.FC = () => {
  return (
    <div>
      <div className="questions singleSelect">
        <p className="question">Volume</p>
        <div className="options">
          <p className="option">Normal</p>
          <p className="option">Hypervolemic</p>
          <p className="option">Hypovolemic</p>
        </div>
      </div>
    </div>
  );
};

export default SingleInputOption;
