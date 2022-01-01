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
        <div className="flex w-1/2 gap-x-2">
          {tags.map((tag, idx) => (
            <Tag
              key={idx}
              className="text-gray-500 bg-gray-100"
              label={tag.label}
            />
          ))}
        </div>
        <div className="flex justify-end w-1/2 gap-x-2">
          <Clock className="my-auto" size={10} />
          <div className="my-auto">
            <Tooltip
              content={
                <span className="h-6 text-xs w-28">Wednesday, 10:30AM</span>
              }
              placement="bottom-start"
              className="absolute h-6 -inset-x-6 w-36"
            >
              <Typography style="body3" className="my-auto text-gray">
                Created 2 hours ago
              </Typography>
            </Tooltip>
          </div>
          <Avatar user={{ name: "Test User", imageUrl }} size="small" />
        </div>
      </div>
    </>
  );
};

export default CardFooter;
