import React from "react";
import "./CohortCard.css";

const CohortCard = ({ cohort }) => {
  return (
    <div className="infoCard">
      <div className="cohortDetails">
        <h2 className="cohortName">
          {`${cohort.region_name} Class ${cohort.cohort_number}`}
        </h2>
        <ul className="cohortDetailsList">
          <li>
            <span className="cohortDetailType">Region: </span>
            {cohort.region_name}
          </li>
          <li>
            <span className="cohortDetailType">Cohort Number: </span>
            {cohort.cohort_number}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CohortCard;
