import React from "react";

interface ButtonPropsType {
  buttonVariant: string;
  textColor: string;
  onClick?: () => void;
  buttonText: string;
  loading?: boolean;
}

const Button = ({
  buttonVariant,
  textColor,
  buttonText,
  onClick,
  loading,
}: ButtonPropsType) => {
  return (
    <>
      <button
        onClick={() => (loading ? null : onClick)}
        className={`outline-none p-3 text-center text-sm duration-200 ease-in ${textColor} font-primary uppercase rounded-md ${buttonVariant} ${
          loading
            ? "opacity-60 cursor-not-allowed"
            : "opacity-100 cursor-pointer"
        }`}
      >
        {loading ? (
          <div className="flex gap-2 items-center justify-center">
            <div
              className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
            <div className={`${textColor} capitalize font-primary text-sm`}>
              Processing...
            </div>
          </div>
        ) : (
          buttonText
        )}
      </button>
    </>
  );
};

export default Button;
