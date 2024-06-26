import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserLoaingSkeleton = () => {
  return (
    <>
      <tr
        className="border-b last:border-b-0 border-b-gray-100 w-full
          "
      >
        <td className="text-[12px] font-secondary text-gray-400 py-2">
          <Skeleton width={100} />
        </td>
        <td className="text-[12px] font-secondary text-gray-400 py-2">
          <Skeleton width={100} />
        </td>
        <td className="text-[12px] font-secondary text-gray-400 py-2">
          <Skeleton width={200} />
        </td>
        <td className="text-[12px] font-secondary text-gray-400 py-2">
          <Skeleton width={100} />
        </td>
        <td className="text-[12px] font-secondary text-gray-400 py-2">
          <Skeleton width={100} />
        </td>
        <td
          className="text-[12px] font-secondary text-gray-400 py-2
                  "
        >
          <Skeleton width={80} />
        </td>
        <td className="font-secondary text-accent py-2 pl-7"></td>
      </tr>
    </>
  );
};

export default UserLoaingSkeleton;
