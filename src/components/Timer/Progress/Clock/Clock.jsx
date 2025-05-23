import styled from "styled-components";
import { useEffect, useContext } from "react";
import { StateContext } from "../../../../context/GlobalContext";
import Alarm from "../Clock/Alarm/Alarm";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Clock = () => {
  const {
    time,
    setTime,
    isActive,
    setIsActive,
    initTime,
    showAlarm,
    setShowAlarm,
  } = useContext(StateContext);

  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (time === 0 && isActive) {
      setShowAlarm(true);
      setIsActive(false);
    }
  }, [time, isActive, setTime, setIsActive, setShowAlarm]);

  const toggleClock = () => {
    setIsActive(!isActive);
    setShowAlarm(false);
  };

  const resetTime = () => {
    setTime(initTime);
    setIsActive(false);
    setShowAlarm(false);
  };

  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <ClockContainer>
      <TimerDisplay>
        <TimerText
          as={motion.h1}
          key={time}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 0.5, times: [0, 0.1, 1] }}
        >
          {getTime(time)}
        </TimerText>
        <TimerProgress value={time} max={initTime} />
      </TimerDisplay>

      <ButtonContainer>
        <StartPauseButton
          onClick={toggleClock}
          as={motion.button}
          whileHover={{
            scale: 1.05,
            backgroundColor: isActive ? "#c0392b" : "#2ecc71",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
          aria-label={isActive ? "Pause timer" : "Start timer"}
        >
          {isActive ? (
            <>
              <FaPause /> Pause
            </>
          ) : (
            <>
              <FaPlay /> Start
            </>
          )}
        </StartPauseButton>

        <AnimatePresence>
          {isActive && (
            <ResetButton
              onClick={resetTime}
              as={motion.button}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              aria-label="Reset timer"
            >
              <FaRedo /> Reset
            </ResetButton>
          )}
        </AnimatePresence>
      </ButtonContainer>

      {showAlarm && <Alarm />}
    </ClockContainer>
  );
};

export default Clock;

const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  height: 100%;
`;

const TimerDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
`;

const TimerText = styled.h1`
  font-size: 9rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 15px rgba(231, 76, 60, 0.3);
  letter-spacing: 0.1rem;
  margin: 0;
  padding: 0;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 7rem;
  }

  @media (max-width: 420px) {
    font-size: 6rem;
  }
`;

const TimerProgress = styled.progress`
  appearance: none;
  width: 12rem;
  height: 0.6rem;
  margin-top: 1.5rem;
  border-radius: 1rem;
  overflow: hidden;

  &::-webkit-progress-bar {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
  }

  &::-webkit-progress-value {
    background-color: rgba(231, 76, 60, 0.7);
    border-radius: 1rem;
    transition: width 0.3s ease;
  }

  &::-moz-progress-bar {
    background-color: rgba(231, 76, 60, 0.7);
    border-radius: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  position: relative;
`;

const StartPauseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.2rem 2.5rem;
  font-size: 2.4rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  svg {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 1rem 2rem;

    svg {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 420px) {
    font-size: 1.8rem;
    padding: 0.8rem 1.8rem;

    svg {
      font-size: 1.4rem;
    }
  }
`;

const ResetButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 0.8rem 1.8rem;
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: rgba(231, 76, 60, 0.8);
  color: white;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  svg {
    font-size: 1.6rem;
  }

  &:hover {
    background: #c0392b;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0.7rem 1.5rem;

    svg {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 420px) {
    font-size: 1.4rem;
    padding: 0.6rem 1.2rem;

    svg {
      font-size: 1.2rem;
    }
  }
`;
