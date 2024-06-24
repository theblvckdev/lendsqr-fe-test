import React, { ReactElement } from "react";

interface AchivementCardPropsType {
  icon: ReactElement;
  title: string;
  amount: number;
}

const AchivementCard = ({ amount, icon, title }: AchivementCardPropsType) => {
  return (
    <>
      <div className="bg-white p-5 shadow-spread rounded flex flex-col space-y-2">
        <div>{icon}</div>
        <div className="text-sm uppercase text-secondary font-primary">
          {title}
        </div>
        <h3 className="text-2xl text-secondary font-semibold font-primary">
          {amount.toLocaleString()}
        </h3>
      </div>
    </>
  );
};

export default AchivementCard;
