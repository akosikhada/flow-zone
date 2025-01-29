import styled from "styled-components";
import { useEffect, useContext } from "react";
import { StateContext } from "../../../StateProvider";
import Alarm from "../Clock/Alarm/Alarm";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

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
      <TimerText>{getTime(time)}</TimerText>
      <StartPauseButton onClick={toggleClock}>
        {isActive ? (
          <>
            <FaPause fontSize={"2rem"} />
            Pause
          </>
        ) : (
          <>
            <FaPlay fontSize={"2rem"} />
            Start
          </>
        )}
      </StartPauseButton>
      {isActive && (
        <ResetButton onClick={resetTime}>
          <FaRedo fontSize={"2rem"} />
          RESET
        </ResetButton>
      )}
      {showAlarm && <Alarm />}
    </ClockContainer>
  );
};

export default Clock;

const ClockContainer = styled.div`
  display: grid;
  place-items: center;
`;

const TimerText = styled.h3`
  font-size: 10rem;

  @media (max-width: 768px) {
    font-size: 8rem;
  }
`;

const StartPauseButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  text-transform: uppercase;
  width: fit-content;
  border: none;
  outline: none;
  letter-spacing: 0.7rem;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #4f4f4f;
    transform: scale(1.05);
  }

  &:active {
    background: #666666;
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0.5rem 1rem;
  }
`;

const ResetButton = styled(StartPauseButton)`
  background: #e74c3c;
  margin-top: 1rem;

  &:hover {
    background: #c0392b;
  }

  &:active {
    background: #a93226;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;
