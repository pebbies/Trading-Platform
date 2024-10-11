import React, { useState } from "react";

const LeverageSlider = ({ onLeverageChange }) => {
  const [sliderValue, setSliderValue] =
    useState(0);

  const ticks = [1, 2, 5, 10, 25, 50, 100];

  const handleDrag = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);

    if (onLeverageChange) {
      onLeverageChange(ticks[newValue]);
    }
  };

  return (
    <div className="w-full">
      <div className="relative w-full pb-2">
        <div className="absolute bottom-[-16px] w-full flex justify-between">
          {ticks.map((tick, index) => (
            <div
              key={index}
              className="text-center"
            >
              <span className="text-dark-white">
                {tick}x
              </span>
            </div>
          ))}
        </div>

        <input
          type="range"
          min="0"
          max="6"
          value={sliderValue}
          onChange={handleDrag}
          className="w-full h-1 bg-[#2B2B2B] rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
};

export default LeverageSlider;
