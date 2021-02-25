import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { ChallengesContext } from "./ChallengesContext";

interface CountDownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountDown: () => void;
  resetCountDown: () => void;
}

interface CountDownProviderProps {
  children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData);

let countDownTimeOut: NodeJS.Timeout;
let timeOfStart = 0.05 * 60;

export function CountDownProvider({ children }: CountDownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(timeOfStart);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countDownTimeOut);
    setIsActive(false);
    setTime(timeOfStart);
    setHasFinished(false)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      console.log(isActive);
      countDownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time == 0) {
      console.log("finalizou");
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
}
