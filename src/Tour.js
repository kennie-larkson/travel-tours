import React, { useState } from "react";

const Tour = ({ id, name, info, image, price }) => {
  return (
    <article className="single-tour">
      <img src={image} />
    </article>
  );
};

export default Tour;
