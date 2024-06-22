"use client";

import React, { ChangeEvent, useState } from "react";

interface FormInputPropTypes {
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const FormInput = ({
  type,
  value,
  onChange,
  required,
  placeholder,
}: FormInputPropTypes) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      {type === "password" ? (
        <div
          className={`flex py-2.5 px-3 duration-200 ease-in items-center bg-white ring-2 overflow-hidden ${
            focused ? "ring-primary" : "ring-gray-200"
          } rounded text-gray-400 font-montserrat`}
        >
          <input
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            required={required}
            className="w-full box-border outline-none border-0"
          />

          <div
            onClick={() => setShowPassword(!showPassword)}
            className="outline-none cursor-pointer text-primary uppercase text-[12px] font-semibold"
          >
            {showPassword ? "Hide" : "Show"}
          </div>
        </div>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="py-2.5 px-3 bg-white ring-2 outline-none ring-gray-200 w-full box-border focus:ring-primary duration-200 ease-in rounded text-gray-400 font-montserrat"
        />
      )}
    </>
  );
};

export default FormInput;
