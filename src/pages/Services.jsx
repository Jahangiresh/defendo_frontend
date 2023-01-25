import React from "react";
import "../assets/css/services.scss";
import courthouse from "../assets/images/map_courthouse.png";

const Services = () => {
  return (
    <main>
      <div className="custom-container">
        <div className="row">
          <div className="col-lg-3">
            <div className="custom-card">
              <img src={courthouse} alt="" />
              <h5>Kommersiya hüququ</h5>
              <p>
                kommersiya, və ya sahibkarlıq (biznes) hüququ ticarət,
                kommersiya,
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="custom-card">
              <img src={courthouse} alt="" />
              <h5>Kommersiya hüququ</h5>
              <p>
                kommersiya, və ya sahibkarlıq (biznes) hüququ ticarət,
                kommersiya,
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="custom-card">
              <img src={courthouse} alt="" />
              <h5>Kommersiya hüququ</h5>
              <p>
                kommersiya, və ya sahibkarlıq (biznes) hüququ ticarət,
                kommersiya,
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="custom-card">
              <img src={courthouse} alt="" />
              <h5>Kommersiya hüququ</h5>
              <p>
                kommersiya, və ya sahibkarlıq (biznes) hüququ ticarət,
                kommersiya,
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
