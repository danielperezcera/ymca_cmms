import "./Navbar.css";
import { Link, useParams } from "react-router-dom";

export default function Navbar() {
  const { id } = useParams();
  return (
    <>
      <div className="wrapper">
        <img
          src={require("../../images/ymca-logo-white.png")}
          alt="YMCA Logo"
          className="logo"
        ></img>
        <div className="titleContainer">
          <h1 className="title">YMCA CMMS</h1>
        </div>
      </div>
      <div className="navigation">
        <ul className="breadcrumb">
          <li>
            <Link to="/">Dashboard</Link>{" "}
          </li>
          <li>
            <Link to={`/area/${id}`}>{id}</Link>{" "}
          </li>
        </ul>
      </div>
    </>
  );
}
