import React, { useEffect, useState } from "react";
import "../css/admin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = process.env.REACT_APP_BACKEND_URL;

export default function Admin() {
  
  const navigate = useNavigate()
  const handleForm=async()=>
  {
    navigate("/userresponse");
  }

  const [data,setData]=useState({
    count:0,
    avgOverall:0,
    avgQuality:0,
    avgTimeline:0,
    avgMoney:0,
    avgSupport:0,

    overallDistribution:{},
    overallQuality:{},
    overallTimeline:{},
    overallMoney:{},
    overallSupport:{},
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get( `${API_URL}/api/dashboard/details`);
console.log(response.data);
        const { count, averages, overDistribution,overQuality,overTimeline,overMoney,overSupport} = response.data;

        setData({
          count,

          avgOverall: averages.avgOverall,
          avgQuality: averages.avgQuality,
          avgTimeline: averages.avgTimeline,
          avgMoney: averages.avgMoney,
          avgSupport:averages.avgSupport,

          overallDistribution: overDistribution,
          overallQuality: overQuality,
          overallTimeline: overTimeline,
          overallMoney: overMoney,
          overallSupport: overSupport,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const { count, avgOverall, avgQuality,avgTimeline,avgMoney,avgSupport ,overallDistribution,overallQuality,overallTimeline,overallMoney ,overallSupport} = data;

  return (
    <div className="pcontainer">
      {/* For Dots   */}
      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

      <div id="mainCoantiner">

        <div className="col-sm-3 col-md-3 pricing-column-wrapper">
          <div className="pricing-column">
 
          <div className="pricing-price-row">
              <div className="pricing-price-wrapper">
                <div className="pricing-price">
                  <div
                    className="pie pie2  animate"
                    style={{
                      "--p": avgQuality,
                      "--c": "#b3f8f29e",
                      margin: "0px",
                    }}
                  ></div>

                  <div className="pricing-cost">{avgQuality}%</div>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="pricing-row-title">
              <div className="pricing_row_title">
                {/* {avgQuality}% <br /> */}
                Quality Review
              </div>
            </div>
            <div>
            {Object.entries(overallQuality).map(([key, value]) => (
            <figure className="pricing-row" key={key}>
              <span>{key.replace("quality", "")} Star</span>
              <div
                className="pie animate"
                style={{
                  "--p": value.percentage,
                  "--c": "#b3f8f29e",
                }}
              >
                {value.percentage}%
              </div>
            </figure>
          ))}
        </div>

          </div>
        </div>

        <div className="col-sm-3 col-md-3 pricing-column-wrapper">
          <div className="pricing-column">

          
          <div className="pricing-price-row">
              <div className="pricing-price-wrapper">
                <div className="pricing-price">
                  <div
                    className="pie pie2  animate"
                    style={{
                      "--p": avgTimeline,
                      "--c": "#b3f8f29e",
                      margin: "0px",
                    }}
                  ></div>

                  <div className="pricing-cost">{avgTimeline}%</div>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="pricing-row-title">
              <div className="pricing_row_title">
                {/* {avgTimeline}% <br /> */}
                Timeline Review
              </div>
            </div>
            <div>
            {Object.entries(overallTimeline).map(([key, value]) => (
            <figure className="pricing-row" key={key}>
              <span>{key.replace("timeline", "")} Star</span>
              <div
                className="pie animate"
                style={{
                  "--p": value.percentage,
                  "--c": "#b3f8f29e",
                }}
              >
                {value.percentage}%
              </div>
            </figure>
          ))}
        </div>

          </div>
        </div>
        
        <div className="col-sm-3 col-md-3 pricing-column-wrapper">
          <div className="pricing-column">
          
          
          <div className="pricing-price-row">
              <div className="pricing-price-wrapper">
                <div className="pricing-price">
                  <div
                    className="pie pie2  animate"
                    style={{
                      "--p": avgMoney,
                      "--c": "#b3f8f29e",
                      margin: "0px",
                    }}
                  ></div>

                  <div className="pricing-cost">{avgMoney}%</div>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="pricing-row-title">
              <div className="pricing_row_title">
                {/* {avgMoney}% <br /> */}
                Money Review
              </div>
            </div>
            <div>
            {Object.entries(overallMoney).map(([key, value]) => (
            <figure className="pricing-row" key={key}>
              <span>{key.replace("money", "")} Star</span>
              <div
                className="pie animate"
                style={{
                  "--p": value.percentage,
                  "--c": "#b3f8f29e",
                }}
              >
                {value.percentage}%
              </div>
            </figure>
          ))}
        </div>

          </div>
        </div>

        <div className="col-sm-3 col-md-3 pricing-column-wrapper">
          <div className="pricing-column">

            <div className="pricing-price-row">
              <div className="pricing-price-wrapper">
                <div className="pricing-price">
                  <div
                    className="pie pie2  animate"
                    style={{
                      "--p": avgSupport,
                      "--c": "#b3f8f29e",
                      margin: "0px",
                    }}
                  ></div>

                  <div className="pricing-cost">{avgSupport}%</div>
                </div>
              </div>
            </div>

            <div className="pricing-row-title">
              <div className="pricing_row_title">
                Support Rating
              </div>
            </div>
              {/* <div className="pricing_row_title">Average Review</div> */}
              
            <div>
            {Object.entries(overallSupport).map(([key, value]) => (
            <figure className="pricing-row" key={key}>
              <span>{key.replace("support", "")} Star</span>
              <div
                className="pie animate"
                style={{
                  "--p": value.percentage,
                  "--c": "#b3f8f29e",
                }}
              >
                {value.percentage}%
              </div>
            </figure>
          ))}
        </div>

      </div>
    </div>
    </div>
    
    <div className="viewform">
      <button className="shiny-cta" onClick={handleForm}>
       <span>View All Feedback</span>
      </button>
    </div>

      <div className="seocnd">
      <div className="col-sm-3 col-md-3 pricing-column-wrapper">
          <div className="pricing-column">

            <div className="pricing-price-row">
              <div className="pricing-price-wrapper">
                <div className="pricing-price">
                  <div
                    className="pie pie2  animate"
                    style={{
                      "--p": avgOverall,
                      "--c": "#b3f8f29e",
                      margin: "0px",
                    }}
                  ></div>

                  <div className="pricing-cost">{count}</div>
                  <div>Total Review </div>
                </div>
              </div>
            </div>

            <div className="pricing-row-title">
          
              <div className="pricing_row_title">
                <div>{avgOverall}%</div>
                Overall Rating
              </div>
            </div>
              {/* <div className="pricing_row_title">Average Review</div> */}
              
            <div>
            {Object.entries(overallDistribution).map(([key, value]) => (
            <figure className="pricing-row" key={key}>
              <span>{key.replace("overall", "")} Star</span>
              <div
                className="pie animate"
                style={{
                  "--p": value.percentage,
                  "--c": "#b3f8f29e",
                }}
              >
                {value.percentage}%
              </div>
            </figure>
          ))}
        </div>

      </div>
    </div>
</div>

    </div>
  );
}
