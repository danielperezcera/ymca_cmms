import "./AreaCard.css";
import { useNavigate, Link } from "react-router-dom";

export default function AreaCard({ area, maintenance, custodial, other }) {
  const navigate = useNavigate();

  const handleAreaClick = () => {
    navigate("/area/" + `${area}`);
  };

  return (
    <>
      <div className="areaCard" onClick={handleAreaClick}>
        <h2>{area}</h2>
        <div className="infoZone">
          <section>
            <div className="maintenance">
              <img
                src={require("../../images/2639855_maintenance_icon.png")}
                alt="maintenance icon"
                className="icon"
              />
              <p>{maintenance}</p>
            </div>
          </section>

          <section>
            <div className="custodial">
              <img
                src={require("../../images/custodial.png")}
                alt="mop and bucket icon"
                className="icon"
              />
              <p>{custodial}</p>
            </div>
          </section>

          <section>
            <div className="other">
              <img
                src={require("../../images/ellipsis.png")}
                alt="ellipsis/other icon"
                className="icon"
              />
              <p>{other}</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
