import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">Contact me for your next adventure!</p>
      <Link to={"/contact"} className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
