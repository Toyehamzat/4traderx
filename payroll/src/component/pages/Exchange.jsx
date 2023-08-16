import React from "react";
// import notfication from "../component/images/Vector (3).svg";
import background from "../images/Ellipse 1103 (1).svg";
import profile from "../images/Ellipse 1076.svg";
import "../../styles/exchange.css";
import AOS from "aos";
import "aos/dist/aos.css";
import VISA from "../images/VISA.svg";
import logo from "../images/logo.svg";
import { useState, useEffect } from "react";
import africa from "../images/africa 4.png";
import Dropdown from "./exchangeRequestDropdown";
import Myrequest from "./my-request";
import requests from "../../data/myRequest.json";
import Request from "./request";
import Bid from "./bid";
import Sidebar from "../sidebar";
function Exchange() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const picks = ["Requests", "My Requests", "My bids"];

  const [mypick, setMyPick] = useState("My Requests");

  const [swap, setSwap] = useState(false);

  const options = [
    { value: "naira", label: "NGN" },
    { value: "dollar", label: "USD" },
  ];

  const shortMyRequest = requests.slice(0, 3);

  const shortRequest = requests.slice(0, 3);

  const shortBid = requests.slice(0, 3);

  const [full, setFull] = useState(false);

  return (
    <div className="Exchange-page">
      <Sidebar/>
      <div className="Div">
        <div>
          <div className="Header">
            <div className="search-bar">
              <i className="bi bi-search"></i>
              <input type="text" placeholder="search"></input>
            </div>
            <div className="notification-profile">
              <div className="notification">
                <img src={background} alt="logo" />
                {/* <img className="noty" src={notfication} alt="logo" /> */}
              </div>
              <div className="profile">
                <img src={profile} alt="logo" />
                <div>
                  <p className="name">Micheal Ajayi</p>
                  <p className="x">xxxxxxxxx</p>
                </div>
              </div>
            </div>
          </div>
          <div className={full ? "hidden" : ""}>
            <div className="first-content-exchange" data-aos="fade-up">
              <div className="virtual-card" data-aos="fade-right">
                <div className="top-virtual-card">
                  <label className="virtual">Virtual</label>
                  <div className="logo">
                    <img src={logo} alt="" />
                    <label className="traderx">4Traderx</label>
                  </div>
                </div>
                <div className="middle-virtual-card">
                  <div className="for-africa">
                    <label className="acct-number">**** **** **** 1234</label>
                    <img className="africa" src={africa} alt="" />
                  </div>

                  <div className="expdate-cvv">
                    <div className="expdate-cvv-child">
                      <label className="exp-date">EXP DATE</label>
                      <label className="exp-date-number">12/24</label>
                    </div>
                    <div className="expdate-cvv-child">
                      <label className="CVV">CVV</label>
                      <label className="CVV-number">***</label>
                    </div>
                  </div>
                </div>
                <div className="bottom-virtual-card">
                  <label className="QUANTUM">QUANTUM inc</label>
                  <div className="bottom-virtual-card-child">
                    <img src={VISA} alt="" />
                    <label className="debit">DEBIT</label>
                  </div>
                </div>
              </div>
              <div className="primary-wallet" data-aos="zoom-in">
                <div className="primary-wallet-title-container">
                  <label className="primary-wallet-title">
                    Primary Wallet (NGN)
                  </label>
                </div>
                <div className="primary-wallet-child">
                  <label className="primary-wallet-child-label1">
                    Available Balance
                  </label>
                  <label className="primary-wallet-child-label2">
                    ₦500,000.00
                  </label>
                </div>
                <hr />
                <div className="primary-wallet-child">
                  <label className="primary-wallet-child-label1">
                    Spending Power
                  </label>
                  <label className="primary-wallet-child-label2">
                    ₦450,000.00
                  </label>
                </div>
              </div>
              <div className="secondary-wallet" data-aos="fade-left">
                <div className="secondary-wallet-title-container">
                  <label className="secondary-wallet-title">
                    Secondary Wallet (USD)
                  </label>
                </div>
                <div className="secondary-wallet-child">
                  <label className="secondary-wallet-child-label1">
                    Available Balance
                  </label>
                  <label className="secondary-wallet-child-label2">
                    $5,000.00
                  </label>
                </div>
                <hr />
                <div className="secondary-wallet-child">
                  <label className="secondary-wallet-child-label1">
                    Spending Power
                  </label>
                  <label className="secondary-wallet-child-label2">
                    $4,950.00
                  </label>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <p className="show-virtual-card-datails">Show Card Details</p>
            </div>

            <div className="second-content-exchange" data-aos="zoom-in">
              <div>
                <button>
                  <i className="bi bi-send-fill"></i>
                  Send Money
                </button>
                <button>
                  <i className="bi bi-box-seam-fill"></i>
                  Fund Wallet
                </button>
                <button>
                  <i className="bi bi-currency-exchange"></i>
                  Exchange History
                </button>
                <button>
                  <i className="bi bi-amd"></i>
                  Join Exchange pool
                </button>
              </div>
            </div>
            <div className="third-content-exchange" data-aos="zoom-in">
              <div className="third-content-exchange-headings">
                <label className="third-content-exchange-headings-title">
                  {" "}
                  Exchange
                </label>
                <div className="button-container">
                  <button
                    className="third-content-exchange-headings-button"
                    onClick={() => setSwap(!swap)}
                  >
                    <i className="bi bi-plus-circle-fill"></i>
                    Swap Currency
                  </button>
                </div>

                <div className="picks">
                  {picks.map((pick) => (
                    <button
                      type="button"
                      key={pick}
                      className="pick-btn"
                      onClick={() => setMyPick(pick)}
                    >
                      {pick}
                    </button>
                  ))}
                </div>
              </div>
              <hr />
              {mypick === "Requests" && (
                <div className="my-request-container">
                  <div className="my-request-headings">
                    <div>
                      <label>Currency</label>
                    </div>
                    <div>
                      <label>Username</label>
                    </div>
                    <div>
                      <label>Have Amount</label>
                    </div>
                    <div>
                      <label>Need Amount</label>
                    </div>
                    <div>
                      <label>Rate</label>
                    </div>
                    <div>
                      <label>Fraction</label>
                    </div>
                    <div>
                      <label className="flex-this">Status</label>
                    </div>
                    <div>
                      <label>Accept Bid Amount</label>
                    </div>
                    <div>
                      <label>Remaining Amount</label>
                    </div>
                  </div>
                  <hr />
                  {shortRequest.map((request, index) => (
                    <Request key={index} request={request} />
                  ))}
                  <div className="view-all-my-request">
                    <button onClick={() => setFull(!full)}>View all</button>
                  </div>
                </div>
              )}
              {mypick === "My Requests" && (
                <div className="my-request-container">
                  <div className="my-request-headings">
                    <div>
                      <label>Currency</label>
                    </div>
                    <div>
                      <label>Have Amount</label>
                    </div>
                    <div>
                      <label>Need Amount</label>
                    </div>
                    <div>
                      <label>Rate</label>
                    </div>
                    <div>
                      <label>Fraction</label>
                    </div>
                    <div>
                      <label className="flex-this">Status</label>
                    </div>
                  </div>
                  <hr />
                  {shortMyRequest.map((request, index) => (
                    <Myrequest key={index} request={request} />
                  ))}
                  <div className="view-all-my-request">
                    <button onClick={() => setFull(!full)}>View all</button>
                  </div>
                </div>
              )}
              {mypick === "My bids" && (
                <div className="my-request-container">
                  <div className="my-request-headings">
                    <div>
                      <label>Username</label>
                    </div>
                    <div>
                      <label>Reference</label>
                    </div>
                    <div>
                      <label>Ask Amount</label>
                    </div>

                    <div>
                      <label>Bid Amount</label>
                    </div>
                    <div>
                      <label>Ask Rate</label>
                    </div>
                    <div>
                      <label className="flex-this">Ask Status</label>
                    </div>
                    <div>
                      <label>Payment Status</label>
                    </div>
                  </div>
                  <hr />
                  {shortBid.map((request, index) => (
                    <Bid key={index} request={request} />
                  ))}
                  <div className="view-all-my-request">
                    <button onClick={() => setFull(!full)}>View all</button>
                  </div>
                </div>
              )}
            </div>

            <div className={swap ? "create-Request active" : "create-Request"}>
              <div className="create-Request-head">
                <label className="create-Request-title"> Create Request</label>
                <i
                  className="bi bi-x-circle-fill"
                  onClick={() => setSwap(!swap)}
                />
              </div>
              <div className="create-Request-first-body">
                <div className="create-Request-first-div">
                  <div>
                    <Dropdown placeHolder options={options} />
                    <label>I have</label>
                  </div>
                  <input type="number" placeholder="0.00" />
                </div>
                <div className="create-Request-second-div">
                  <label>
                    Rate <span> (Maximum Rate 743)</span>
                  </label>
                  <input type="number" placeholder="0.00" />
                </div>
                <div className="create-Request-first-div">
                  <div>
                    <Dropdown placeHolder options={options} />
                    <label>How much you’ll get</label>
                  </div>
                  <input type="number" placeholder="0.00" />
                </div>
                <div className="create-Request-second-div">
                  <label>Allow Fraction</label>
                  <input type="number" placeholder="0.00" />
                </div>
              </div>
            </div>
          </div>
          <div className={full ? "my-request-full active" : "my-request-full"}>
            <div className="third-content-exchange-headings">
              <label className="third-content-exchange-headings-title">
                {" "}
                Exchange
              </label>

              <div className="picks">
                {picks.map((pick) => (
                  <button
                    type="button"
                    key={pick}
                    className="pick-btn"
                    onClick={() => setMyPick(pick)}
                  >
                    {pick}
                  </button>
                ))}
              </div>
            </div>
            <hr />
            {mypick === "Requests" && (
              <div className="my-request-container">
                <div className="my-request-headings">
                  <div>
                    <label>Currency</label>
                  </div>
                  <div>
                    <label>Username</label>
                  </div>
                  <div>
                    <label>Have Amount</label>
                  </div>
                  <div>
                    <label>Need Amount</label>
                  </div>
                  <div>
                    <label>Rate</label>
                  </div>
                  <div>
                    <label>Fraction</label>
                  </div>
                  <div>
                    <label className="flex-this">Status</label>
                  </div>
                  <div>
                    <label>Accept Bid Amount</label>
                  </div>
                  <div>
                    <label>Remaining Amount</label>
                  </div>
                </div>
                <hr />
                {requests.map((request, index) => (
                  <Request key={index} request={request} />
                ))}
                <div className="view-all-my-request">
                  <button onClick={() => setFull(!full)}>View less</button>
                </div>
              </div>
            )}
            {mypick === "My Requests" && (
              <div>
                <div className="my-request-headings">
                  <div>
                    <label>Currency</label>
                  </div>
                  <div>
                    <label>Have Amount</label>
                  </div>
                  <div>
                    <label>Need Amount</label>
                  </div>
                  <div>
                    <label>Rate</label>
                  </div>
                  <div>
                    <label>Fraction</label>
                  </div>
                  <div>
                    <label className="flex-this">Status</label>
                  </div>
                </div>
                <hr />
                {requests.map((request, index) => (
                  <Myrequest key={index} request={request} />
                ))}
                <div className="view-all-my-request">
                  <button onClick={() => setFull(!full)}>View less</button>
                </div>
              </div>
            )}
            {mypick === "My bids" && (
              <div className="my-request-container">
                <div className="my-request-headings">
                  <div>
                    <label>Username</label>
                  </div>
                  <div>
                    <label>Reference</label>
                  </div>
                  <div>
                    <label>Ask Amount</label>
                  </div>

                  <div>
                    <label>Bid Amount</label>
                  </div>
                  <div>
                    <label>Ask Rate</label>
                  </div>
                  <div>
                    <label className="flex-this">Ask Status</label>
                  </div>
                  <div>
                    <label>Payment Status</label>
                  </div>
                </div>
                <hr />
                {requests.map((request, index) => (
                  <Bid key={index} request={request} />
                ))}
                <div className="view-all-my-request">
                  <button onClick={() => setFull(!full)}>View less</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exchange;
