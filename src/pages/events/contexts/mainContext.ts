import { createContext } from "react";


//Created this context to run useEffect again whenever we schedule any event.
interface EventContextType {
  fetchAgain: boolean;
  setFetchAgain: React.Dispatch<React.SetStateAction<boolean>>;
}


export const EventContext = createContext<EventContextType>({} as EventContextType);
