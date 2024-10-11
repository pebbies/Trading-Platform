import React, { useState } from "react";

const OrderTypeDropdown = () => {
  const [orderType, setOrderType] = useState("");

  const handleChange = (event) => {
    setOrderType(event.target.value);
  };

  return (
    <div className="flex flex-col items-start px-4 pt-4 text-dark-white">
      <label htmlFor="orderType">
        Order Type
      </label>
      <select
        id="orderType"
        value={orderType}
        onChange={handleChange}
        className="my-2 py-2 shadow-sm bg-[#2b2b2b] text-sm p-2 rounded-sm"
      >
        <option value="">Select an option</option>
        <option value="MARKET">MARKET</option>
        <option value="LIMIT">LIMIT</option>
        <option value="STOP">STOP</option>
      </select>
    </div>
  );
};

export default OrderTypeDropdown;
