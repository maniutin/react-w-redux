import React from "react";

const seasonConfig = {
  summer: {},
  winter: {},
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};

const SeasonsDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === "winter" ? "Chillllllllyyyyyy!!!!" : "HIT THE BEACH, B!";
  const icon = season === "winter" ? "snwoflake" : "sun";

  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonsDisplay;
