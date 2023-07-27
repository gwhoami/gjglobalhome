import React from 'react';
import { AiTwotoneEyeInvisible, AiTwotoneEye } from 'react-icons/ai';
import { TbPassword } from 'react-icons/tb';
interface Props {
  name: string;
  id: string;
  title?: string;
  placeholder?: string;
  compulsory?: boolean;
  Style?: string;
  state?: string | number | undefined;
  setState?: any;
  disabled?: boolean;
  password: Boolean;
  togglePassword: any;
}

const PasswordInputField: React.FC<Props> = ({
  name,
  id,
  title,
  placeholder,
  compulsory,
  Style,
  state,
  setState,
  disabled,
  password,
  togglePassword,
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
        type={password ? 'text' : 'password'}
        disabled={disabled}
        required={compulsory}
        id={id}
        className={`w-full h-[46px] font-[500] text-[16px] bg-gray-50 border disabled:cursor-not-allowed rounded-lg focus:outline-none  px-2.5 pl-[2.5rem] ${Style}`}
      />
      <div className="absolute bottom-[0.8rem] left-2">
        <TbPassword className="text-xl" />
      </div>
      <div
        onClick={togglePassword}
        className="absolute bottom-[0.8rem] right-4 text-2xl"
      >
        {password ? <AiTwotoneEyeInvisible /> : <AiTwotoneEye />}
      </div>
    </div>
  );
};

export default PasswordInputField;
