import styled from "styled-components";
import { useEffect, useContext } from "react";
import { FaBell, FaCheck } from "react-icons/fa";
import alarmSoundOne from "/alarm.mp3";
import alarmSoundTwo from "/alarm-2.mp3";
import { StateContext } from "../../../../../context/GlobalContext";
import { motion } from "framer-motion";

const Alarm = () => {
  const {
    audio,
    setAudio,
    showSnooze,
    setShowSnooze,
    setTime,
    initTime,
    setIsActive,
    activeTag,
    setShowAlarm,
  } = useContext(StateContext);

  useEffect(() => {
    let newAudio;
    if (activeTag === 0) {
      newAudio = new Audio(alarmSoundTwo);
    } else if (activeTag === 1 || activeTag === 2) {
      newAudio = new Audio(alarmSoundOne);
    }

    if (newAudio) {
      newAudio.loop = true;
      newAudio.play();
      setAudio(newAudio);

      return () => {
        newAudio.pause();
        newAudio.currentTime = 0;
      };
    }
  }, [setAudio, activeTag]);

  const handleSnooze = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setShowSnooze(false);
    setTime(initTime);
    setIsActive(false);
    setShowAlarm(false);
  };

  return (
    <AlarmContainer
      as={motion.div}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <AlarmMessage>
        <PulsingIcon>
          <FaBell />
        </PulsingIcon>
        <AlarmText>Time&apos;s up!</AlarmText>
      </AlarmMessage>

      {showSnooze && (
        <ButtonsContainer>
          <DismissButton
            onClick={handleSnooze}
            as={motion.button}
            whileHover={{ scale: 1.05, backgroundColor: "#2ecc71" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCheck /> Dismiss
          </DismissButton>
        </ButtonsContainer>
      )}
    </AlarmContainer>
  );
};

export default Alarm;

const AlarmContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(231, 76, 60, 0.15);
  backdrop-filter: blur(5px);
  padding: 1.5rem 2rem;
  border-radius: 1.2rem;
  border: 1px solid rgba(231, 76, 60, 0.3);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  margin-top: 2rem;
  width: 100%;
  max-width: 25rem;
`;

const AlarmMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const pulse = `
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const PulsingIcon = styled.div`
  ${pulse}
  font-size: 3.5rem;
  color: #e74c3c;
  animation: pulse 1.5s infinite ease-in-out;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const AlarmText = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

const DismissButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  background-color: rgba(46, 204, 113, 0.8);
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  gap: 0.8rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  svg {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0.8rem 1.2rem;

    svg {
      font-size: 1.6rem;
    }
  }
`;
