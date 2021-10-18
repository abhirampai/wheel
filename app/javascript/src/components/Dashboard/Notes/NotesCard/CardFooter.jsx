import React from "react";

import { Clock } from "neetoicons";
import { Avatar, Tooltip, Tag, Typography } from "neetoui";

const CardFooter = ({ tags, imageUrl }) => {
  return (
    <>
      <div className="w-full px-4 pt-2">
        <div className="w-full border-b neeto-ui-gray-200"></div>
      </div>
      <div className="flex justify-between w-full px-4 pt-4 mb-4">
        <div className="flex gap-x-2">
          {tags.map((tag, idx) => (
            <Tag
              key={idx}
              className="text-gray-500 bg-gray-100"
              label={tag.label}
            />
          ))}
        </div>
        <div className="flex gap-x-2">
          <Clock className="my-auto" size={10} />
          <Tooltip
            content={<span>Wednesday, 10:30AM</span>}
            placement="bottom-start"
          >
            <Typography style="body3" className="my-auto text-gray">
              Created 2 hours ago
            </Typography>
          </Tooltip>
          <Avatar user={{ name: "Test User", imageUrl }} size="medium" />
        </div>
      </div>
    </>
  );
};

export default CardFooter;
