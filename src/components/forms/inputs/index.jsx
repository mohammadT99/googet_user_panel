//  =================== styles ================== //
import { FolderAdd, Send2 } from "iconsax-react";
import "./style.scss";

// ======================== imports ==================== //
import React from "react";

const Input = ({
  placeholder,
  icon,
  label,
  otherClass,
  name,
  value ,
  onChange ,
}) => {
  return (
    <>
      <div className="input">
        <label htmlFor="input-name" className="label-input">
          {label}
        </label>
        <input
          type="text"
          className={`input-form ${otherClass}`}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          {...register(label)}
        />
      </div>
    </>
  );
};

export default Input;
