import React from "react";

const CardBody = ({ description }) => {
  return (
    <div className="px-4 pt-2 text-gray">
      <p className="pr-1 text-sm">{description}</p>
    </div>
  );
};

export default CardBody;
