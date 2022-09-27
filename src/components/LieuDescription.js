import React from "react";
// import obscuraAxios from "../obscuraAxios";
import { Link } from "react-router-dom";

export const LieuDescription = () => {
  // recup descs du local storage
  let descStocked = JSON.parse(localStorage.getItem("descriptionValues"));
  if (descStocked != null) {
    console.log("------ desc code local storage ------");
    console.log(descStocked);

    return (
      <div>
        <div>
          <div className="heading-secondary">LIEU </div>
          <br />
          <div className="paragraph-place">{descStocked.lieu}</div>
        </div>
        <br />
        <div>
          <div className="heading-secondary"> DESCRIPTION</div> <br />
          <div className="paragraph">{descStocked.description}</div>
        </div>
        <br />
        <div>
          Bonus : <br />
          {descStocked.bonus}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link to="/">
          <button className="btn btn--white btn--animated">HOME</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="heading-secondary">Mauvais code...</h2>
        <br />
        <Link to="/">
          <button className="btn btn--white btn--animated">HOME</button>
        </Link>
      </div>
    );
  }
};
