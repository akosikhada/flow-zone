import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { StateContext } from "./GlobalContext";

const StateProvider = ({ children }) => {
  const [focusTime, setFocusTime] = useState(25 * 60);
  const [shortBreakTime, setShortBreakTime] = useState(5 * 60);
  const [longBreakTime, setLongBreakTime] = useState(10 * 60);
  const [initTime, setInitTime] = useState(0);
  const [activeTag, setActiveTag] = useState(0);
  const [progress, setProgress] = useState(20);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showAlarm, setShowAlarm] = useState(false);
  const [audio, setAudio] = useState(null);
  const [showSnooze, setShowSnooze] = useState(true);
  const [showReset, setShowReset] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    switch (activeTag) {
      case 0:
        setTime(focusTime);
        setInitTime(focusTime);
        break;
      case 1:
        setTime(shortBreakTime);
        setInitTime(shortBreakTime);
        break;
      case 2:
        setTime(longBreakTime);
        setInitTime(longBreakTime);
        break;
      default:
        break;
    }
  }, [activeTag, focusTime, shortBreakTime, longBreakTime]);

  return (
    <StateContext.Provider
      value={{
        activeTag,
        setActiveTag,
        progress,
        setProgress,
        time,
        setTime,
        isActive,
        setIsActive,
        initTime,
        setInitTime,
        focusTime,
        setFocusTime,
        shortBreakTime,
        setShortBreakTime,
        longBreakTime,
        setLongBreakTime,
        showAlarm,
        setShowAlarm,
        audio,
        setAudio,
        showSnooze,
        setShowSnooze,
        showReset,
        setShowReset,
        isOpen,
        setIsOpen,
        isLoading,
        setIsLoading,
        tasks,
        setTasks,
        newTask,
        setNewTask,
        inputError,
        setInputError,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StateProvider;
