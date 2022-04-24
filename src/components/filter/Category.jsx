import React from "react";
import { Link } from "react-router-dom";

const FilterCategory = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-header font-weight-bold text-uppercase">
        Categories
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <Link to="/category" className="text-decoration-none stretched-link">
          LE MIEL
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/category" className="text-decoration-none stretched-link">
          MATERIEL
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default FilterCategory;
