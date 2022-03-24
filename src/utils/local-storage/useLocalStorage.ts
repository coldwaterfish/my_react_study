import { useState } from "react";

const useLocalStorage = (key: string, initialValue?: any) => {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorageState = (newState: (state: any) => void | string) => {
    try {
      const newStateValue =
        typeof newState === "function" ? newState(state) : newState;
      setState(newStateValue);
      window.localStorage.setItem(key, JSON.stringify(newStateValue));
    } catch (error) {
      console.error(`Unable to store new value for ${key} in localStorage.`);
    }
  };

  return [state, setLocalStorageState];
};

export default useLocalStorage;

// const defaultSettings = {
//     notifications: 'weekly',
//   };
  
//   const [appSettings, setAppSettings] = useLocalStorage(
//       'app-settings',
//       defaultSettings
//     );
    
//   onChange={e =>
//     setAppSettings(settings => ({
//       ...settings,
//       notifications: e.target.value,
//     }))
//   }