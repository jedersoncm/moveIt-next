import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Countdown } from "../components/Countdown";
import { ChallengeContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownPrividerProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownPrivider({ children }: CountdownPrividerProps) {
  const { startNewChallenge } = useContext(ChallengeContext);

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startCountdown = () => {
    setIsActive(true);
  }

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
    setHasFinished(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(()=> {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
      
    }
  },[isActive, time])
  
  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    }}>
      {children}
    </CountdownContext.Provider>
  )
}