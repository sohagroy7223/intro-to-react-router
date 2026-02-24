import React from "react";
import { Link } from "react-router";

const Sohag = () => {
  return (
    <div>
      <h3>Sohag all details</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Link to={"https://github.com/sohagroy7223"} target="blank">
          gitHub page
        </Link>
        <Link to={"https://www.facebook.com/sohag.roy.283426"} target="blank">
          facebook
        </Link>
        <Link to={"https://www.instagram.com/sohagroy7223/"} target="_blank">
          Instagram
        </Link>
        <Link to={"https://www.youtube.com/@sohagroy7223"} target="_blank">
          YouTube
        </Link>
        <Link to={"https://www.linkedin.com/in/sohag-roy-/"} target="_blank">
          Linkedin
        </Link>
        <Link to={"https://x.com/sohag_roy7223"} target="_blank">
          X
        </Link>
      </div>
    </div>
  );
};

export default Sohag;
