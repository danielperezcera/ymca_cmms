import "./AreaCard.css";

export default function AreaCard() {
  return (
    <>
      <div>
        <h2>Area</h2>
        <div className="infoZone">
          <div className="maintenance">
            <img
              src={require("../../images/2639855_maintenance_icon.png")}
              alt="maintenance icon"
            />
            <p>4</p>
          </div>
          <div className="custodial">
            <img src={require("../../images/custodial.png")} alt="" />
            <p>3</p>
          </div>
          {/* <div className="maintenance">
            <img src="../../images/three-dots-svgrepo-com.svg" alt="" />
            <p>2</p>
          </div> */}
        </div>
      </div>
    </>
  );
}
