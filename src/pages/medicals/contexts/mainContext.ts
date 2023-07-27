import { createContext } from 'react';

//Created this context to run useEffect again whenever we schedule any event.
interface MedicalContextType {
  fetchAgain: boolean;
  setFetchAgain: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MedicalContext = createContext<MedicalContextType>(
  {} as MedicalContextType
);
