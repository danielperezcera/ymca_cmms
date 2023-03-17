import Navbar from "../Navbar/Navbar";
import AreaCard from "../AreaCard/AreaCard";
import "./Dashboard.css";
import { useContext } from "react";
import { Context } from "../../contexts/context";

export default function Dashboard() {
  const Northwest = useContext(Context);

  return (
    <>
      <Navbar />

      <div className="cardArea">
        {/* {Northwest.branch.areaList.((area) => {
          console.log("inside");
        })} */}
        <AreaCard
          area="Women Locker Room"
          maintenance="4"
          custodial="3"
          other="2"
        ></AreaCard>
      </div>
    </>
  );
}
