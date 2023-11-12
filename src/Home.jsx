import React from "react";
import Header from "./Header";
import "./Home.css";
import Card from "./Card";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <div>
          <div>
            <div>
              <div class="body">
                <div
                  class="a"
                  subtype="topCarousel"
                  style={{ marginRight: "50px" }}
                >
                  <a
                    href="/collections/56407?type=rcv2"
                    className="icon-link-hover"
                  >
                    <img
                      alt=""
                      width="260"
                      height="260"
                      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ef3i0k1ilhdsistcykog"
                      class="_1gDnr icon-link-hover"
                    />
                  </a>
                </div>
                <div
                  class="a"
                  subtype="topCarousel"
                  style={{ marginRight: "50px" }}
                >
                  <a href="/collections/47670?type=rcv2">
                    <img
                      alt=""
                      width="260"
                      height="260"
                      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/lori508m4xps01tnywxf"
                      class="_1gDnr"
                    />
                  </a>
                </div>
                <div
                  class="a"
                  subtype="topCarousel"
                  style={{ marginRight: "50px" }}
                >
                  <a href="/collections/56413?type=rcv2">
                    <img
                      alt=""
                      width="260"
                      height="260"
                      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/yparhmxrby5lv0ubsel4"
                      class="_1gDnr"
                    />
                  </a>
                </div>
                <div
                  class="a"
                  subtype="topCarousel"
                  style={{ marginRight: "50px" }}
                >
                  <a href="/collections/56422?type=rcv2">
                    <img
                      alt=""
                      width="260"
                      height="260"
                      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/dpqcjrxwruipnt1wyqnh"
                      class="_1gDnr"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards">
        <Card img="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/siiyygdsewrchwglfyre" />
        <Card img="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wwgslew60sfsdtfy2ijz" />
        <Card img="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cc84d172c8acb034e61ffaeb2d2557e3" />
        <Card img="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/usllk61gnicqmykbiyrb" />
        <Card img="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/08eee882fda81b68e5c36e3a5d89d8c0" />
        <Card img="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wnteh4cpcctz7needphz" />
        <Card img="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/l68iq6yh6tenyntrxwgb" />
        <Card img="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/9c4a77ad2251c30b25d224bedae8542a" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
