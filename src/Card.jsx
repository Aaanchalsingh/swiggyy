import React from "react";
import './Card.css';
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="outercard">
    <div class="cardd">
          <div className="parentpromote">
          <Link to="/cart" image={props.img} >
            <img
              className="_2tuBw _12_oN"
              alt="Yummy Delicious Till Last Bite"
              width="250"
              height="160"
              src={props.img}
            />
          </Link>
          <div class="promote"
            style={{
              background: "rgb(58, 60, 65)",
              color: "rgb(255, 255, 255)",
              borderColor: "rgb(30, 32, 35) transparent",
            }}
          >Recommended</div>
          </div>
          <div class="_3Ztcd">
            <div class="tagline">Yummy Delicious Till Last Bite</div>
            <div class="_1gURR" title="Chinese, Continental, Italian">
              Chinese, Continental, Italian
            </div>
          </div>
          <div class="tags">
            <div class="_9uwBC wY0my">
              <span class="icon-star _537e4"></span>
              <span className="btn-success px-2">4.2</span>
            </div>
            <div>•</div>
            <div>24 MINS</div>
            <div>•</div>
            <div class="nVWSi">₹300 FOR TWO</div>
          </div>
        </div>
      </div>
  );
}

export default Card;
