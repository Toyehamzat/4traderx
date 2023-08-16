import React from "react";

export default function Request({ request }) {
  return (
    <div className="my-request-body">
    
      <div >
        <label className="align-this">
          <img src={`images/${request.currencyFrom}.svg`} alt="" />
          <i className="bi bi-arrow-right" />
          <img src={`images/${request.currencyTo}.svg`} alt="" />
        </label>
      </div>
      <div>
        <label>{request.username}</label>
      </div>
      <div>
        <label className="align-right">{`$${request.have}.00`}</label>
      </div>
      <div>
        <label className="align-right">{`₦${request.need}.00`}</label>
      </div>
      <div>
        <label>{`@${request.rate}`}</label>
      </div>
      <div>
        <label>{request.fraction}</label>
      </div>
      <div className="style-green">
        <label className="flex-this">{request.status}</label>
      </div>
      <div>
        <label className="align-right">{`₦${request.acceptBidAmount}.00`}</label>
      </div>
      <div>
        <label className="align-right">{`₦${request.remainingAmount}.00`}</label>
      </div>

    </div>
  );
}
