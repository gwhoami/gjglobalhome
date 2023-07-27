import React from 'react';

interface Props {
  Name: string;
  Value: string | number;
}

const InfoBox: React.FC<Props> = ({ Name, Value }) => {
  return (
    <div className="flex gap-2">
      <div className="w-1/2">
        <h1>{Name}</h1>
      </div>
      <div className="flex gap-1">
        <span>:</span>
        <h1 className="font-bold">{Value}</h1>
      </div>
    </div>
  );
};

export default InfoBox;
