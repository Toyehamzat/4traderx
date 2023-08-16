import React from "react";

export default function Bid({ request }) {
  return (
    <div className="my-request-body">
      <div>
        <label>{request.username}</label>
      </div>
      <div>
        <label>{request.reference}</label>
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
        <label>{request.askStatus}</label>
      </div>
      <div>
        <label>{request.paymentStatus}</label>
      </div>
    </div>
  );
}
