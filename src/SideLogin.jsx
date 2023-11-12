import React, { useState } from "react";
import "./Side.css";
import { Link } from "react-router-dom";

function SideLogin() {
  const [phone, usephone] = useState("");
  const [otp, setotp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const custom = {
    height: "100%",
    width: "80%",
    position: "absolute",
    right: "0%",
    backgroundColor: "white",
    opacity: "1",
  };

  const handleSubmit = () => {
    console.log("Phone number: " + phone);
    setShowOtpInput(true);
    <Link to="/Home"></Link>;
  };

  return (
    <div className="container-fluid sider  py-5 px-5 " style={custom}>
      <div
        className="hea "
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <h1 className="text-left my-3">Login</h1>
          <p>
            or{" "}
            <Link to="" style={{ textDecoration: "none", color: "#fc8019" }}>
              create an account
            </Link>
          </p>
        </div>
        <img
          className="_2tuBw _12_oN jdo4W"
          width="100"
          height="105"
          alt=""
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
        ></img>
      </div>

      <div className="form-floating my-5 text-grey">
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => usephone(e.target.value)}
          className="form-control"
          placeholder="Phone Number"
        />
        <label htmlFor="floatingInput" className="form-label">
          Phone Number
        </label>

        {showOtpInput && (
          <>
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => setotp(e.target.value)}
              className="form-control"
              placeholder="Enter OTP"
            />
            <label htmlFor="floatingInput" className="my-4 mb-4 py-5">
              OTP
            </label>
          </>
        )}
      </div>
      {!showOtpInput && (
        <button
          className="btn"
          type="submit"
          style={{ backgroundColor: "#fc8019", width: "70%", color: "white" }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
      {showOtpInput && (
        <Link to="/Home">
          <button
            className="btn"
            type="submit"
            style={{ backgroundColor: "#fc8019", width: "70%", color: "white" }}
          >
            Login
          </button>
        </Link>
      )}
      <p style={{ fontSize: "0.8rem", color: "grey", marginTop: "4px" }}>
        By clicking on Login, I accept the Terms & Conditions & Privacy Policy
      </p>
    </div>
  );
}

export default SideLogin;
