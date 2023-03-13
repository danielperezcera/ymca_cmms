import "./Navbar.css";

export default function Navbar() {
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
    </>
  );
}
