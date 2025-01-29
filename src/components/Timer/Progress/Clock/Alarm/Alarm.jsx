import styled from "styled-components";
import { useEffect, useContext } from "react";
import { FaBell } from "react-icons/fa";
import alarmSoundOne from "/alarm.mp3";
import alarmSoundTwo from "/alarm-2.mp3";
import { StateContext } from "../../../../StateProvider";

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
  };

  return (
    <AlarmContainer>
      {showSnooze && (
        <SnoozeButton onClick={handleSnooze}>
          <FaBell style={{ marginRight: "0.5rem", fontSize: "2rem" }} />
          Snooze
        </SnoozeButton>
      )}
    </AlarmContainer>
  );
};

export default Alarm;

const AlarmContainer = styled.div`
  display: grid;
  place-items: center;
`;

const SnoozeButton = styled.button`
  all: unset;
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 3rem;
  font-weight: 600;
  border-radius: 1rem;
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
  }
`;
