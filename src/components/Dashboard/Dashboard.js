import Navbar from "../Navbar/Navbar";
import AreaCard from "../AreaCard/AreaCard";
export default function Dashboard() {
  return (
    <>
      <Navbar />

      <AreaCard
        area="Women Locker Room"
        maintenance="4"
        custodial="3"
        other="2"
      ></AreaCard>
    </>
  );
}
