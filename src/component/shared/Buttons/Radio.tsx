'use client';
import React, { ChangeEvent } from 'react';

type RadioProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

const Radio: React.FC<RadioProps> = ({
  label,
  value,
  checked,
  name,
  onChange,
}) => {
  return (
    <label className="inline-flex items-center space-x-2">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="text-blue-500 form-radio focus:ring-blue-500 focus:ring-offset-2"
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

export default Radio;
