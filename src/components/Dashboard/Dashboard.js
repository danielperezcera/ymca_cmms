import Navbar from "../Navbar/Navbar";
import AreaCard from "../AreaCard/AreaCard";
import "./Dashboard.css";
import { useContext } from "react";
import { Context } from "../../contexts/context";
import { areaList } from "../../util/areaList";

export default function Dashboard() {
  const Northwest = useContext(Context);

  return (
    <>
      <Navbar />
      <div className="cardArea">
        {areaList.map((area) => {
          return (
            <AreaCard
              key={area}
              area={area}
              maintenance={Northwest.branch.areaList[area].maintenanceCount}
              custodial={Northwest.branch.areaList[area].custodialCount}
              other={Northwest.branch.areaList[area].otherCount}
            ></AreaCard>
          );
        })}
      </div>
    </>
  );
}
