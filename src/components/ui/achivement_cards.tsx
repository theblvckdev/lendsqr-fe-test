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
        <div className="xl:text-sm text-[11px] uppercase text-secondary font-secondary">
          {title}
        </div>
        <h3 className="text-2xl text-secondary font-semibold font-secondary">
          {amount.toLocaleString()}
        </h3>
      </div>
    </>
  );
};

export default AchivementCard;
