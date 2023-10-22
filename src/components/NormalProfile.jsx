import React from "react";

const NormalProfile = ({ tag, name, image, actionText }) => {
  return (
    <div className="flex w-full h-fit justify-between items-center font-primary">
      <div className="flex w-fit h-fit gap-2 justify-center items-center">
        <img src={image} className="rounded-full w-10 h-10 object-cover" />
        <div className="leading-5">
          <p>{tag}</p>
          <span className="text-primaryWhiteMode/50 dark:text-primary/50">{name}</span>
        </div>
      </div>

      <span className="text-sm text-blue-500 hover:text-blue-100 cursor-pointer">
        {actionText}
      </span>
    </div>
  );
};

export default NormalProfile;
