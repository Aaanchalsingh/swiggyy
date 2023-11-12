import React from "react";
import "./index.css";
import "./Cart.css";

function Cart(props) {
  return (
    <div className="outer">
      <div className="cart shadow-lg shadow-black">
        <div className="add">
          <div className="cont">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/kfyjswpxcfh0uom3prke" alt="" height={70} width={70}/>
            <div>
            <p>The Belgian Waffle Co. <br/><span style={{textAlign:"left",color:"grey"}}>Ladpur</span></p>
            <div className="under"></div>
            </div>
          </div>
          <div class="suggestion">Any suggestions? We will pass it on...</div>
          <div class="check">
            <div>
              <div class="">
                <label>
                  <input type="checkbox" />
                </label>
              </div>
              <div aria-hidden="true">
                <div class="_2gBWe">Opt in for No-contact Delivery</div>
                <div>
                  Unwell, or avoiding contact? Please select no-contact
                  delivery. Partner will safely place the order outside your
                  door (not for COD)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accounts">
          <div className="coup text-center ">
            <p className="p-2 mb-12">Apply Coupon</p>
          </div>
          <div className="c w-full">
            <p className="text-left" style={{ fontSize: "1.2rem" }}>
              Bill Details
            </p>
            <div className="f w-full">
              <div className="f1">
                <p>Item Total</p>
                <p>Delivery Fee|4.7 kms</p>
              </div>
              <div className="f2">
                <p>$511.19</p>
                <p style={{ color: "green" }}>FREE</p>
              </div>
              <hr />
            </div>
            <div style={{ display: "flex", gap: "29px", color: "grey" }}>
              <p
                style={{
                  fontSize: "0.8rem",
                }}
              >
                GST and Restaurant Charges
              </p>
              <p>$45.56</p>
            </div>
            <div className="underline"></div>
            <div style={{ display: "flex", gap: "54%",marginBottom:"10%" }}>
              <p>TO PAY</p>
              <p className="font-bold">$558</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
