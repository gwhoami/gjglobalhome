import React from 'react';
import { IconType } from 'react-icons';
interface Props {
  type: string;
  name: string;
  id: string;
  title?: string;
  placeholder?: string;
  compulsory?: boolean;
  Style?: string;
  state?: string | number | undefined;
  setState?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  IconStyle?: string;
  icon: IconType;
}

const InputField: React.FC<Props> = ({
  type,
  name,
  id,
  title,
  placeholder,
  compulsory,
  Style,
  state,
  setState,
  disabled,
  IconStyle = 'bottom-4',
  icon: Icon,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 justify-start relative">
      <label htmlFor={name} className="">
        {title}
      </label>

      <input
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        name={name}
        value={state}
        placeholder={placeholder}
        onChange={setState}
        type={type}
        disabled={disabled}
        required={compulsory}
        id={id}
        className={`w-full h-[46px] font-[500] text-[16px] bg-gray-50 border disabled:cursor-not-allowed rounded-lg focus:outline-none  px-2.5 pl-[3rem] ${Style}`}
      />
      <div className={`absolute left-2 ${IconStyle} `}>
        <Icon className="text-xl" />
      </div>
    </div>
  );
};

export default InputField;
