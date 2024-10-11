import React, { useState } from "react";

const OrderSize = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;

    const regex = /^\d*\.?\d{0,4}$/;

    if (regex.test(inputValue)) {
      setValue(inputValue);
    }
  };

  const handleMaxClick = () => {
    setValue("100000");
  };

  return (
    <div className="relative w-[288px] h-[40px] mt-2">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="w-full h-full pr-16 px-3 py-2 bg-[#2b2b2b] text-white rounded-sm"
        placeholder="Enter a number"
      />
      <button
        onClick={handleMaxClick}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#3b3b3b] text-white px-2 py-1 rounded-md focus:outline-none"
      >
        Max
      </button>
</div>
  );
};

export default OrderSize;
