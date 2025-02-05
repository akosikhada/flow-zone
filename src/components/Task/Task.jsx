import { useContext, useState } from "react";
import styled from "styled-components";
import { FaCheck, FaTrash } from "react-icons/fa";
import { StateContext } from "../StateProvider";
import { motion, AnimatePresence } from "framer-motion";

const Task = () => {
  const { tasks, setTasks, newTask, setNewTask } = useContext(StateContext);
  const [inputError, setInputError] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      setInputError("Please enter a task before adding.");
    } else {
      setTasks([...tasks, { text: newTask, done: false }]);
      setNewTask("");
      setInputError("");
    }
  };

  const handleToggleDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <TaskContainer>
      <AddTaskContainer>
        <TaskInput
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <AddButton onClick={handleAddTask}>Add Task</AddButton>
      </AddTaskContainer>
      {inputError && <ErrorMessage>{inputError}</ErrorMessage>}
      <TaskList>
        <AnimatePresence>
          {tasks.map((task, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TaskItem done={task.done}>
                <TaskText done={task.done}>{task.text}</TaskText>
                <TaskActions>
                  <DoneButton onClick={() => handleToggleDone(index)}>
                    <FaCheck />
                  </DoneButton>
                  <DeleteButton onClick={() => handleDeleteTask(index)}>
                    <FaTrash />
                  </DeleteButton>
                </TaskActions>
              </TaskItem>
            </motion.li>
          ))}
        </AnimatePresence>
      </TaskList>
    </TaskContainer>
  );
};

export default Task;

const TaskContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  padding: 2rem;
  background: ${(props) => props.theme.colors.background};
  border-radius: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const AddTaskContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const TaskInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.primary};
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

const AddButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  background: ${(props) => props.theme.colors.primary};
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
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
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
  }
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-transform: capitalize;
`;

const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: ${(props) => (props.done ? "#1a1a1a" : "#333333")};
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  transition: background 0.3s ease;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 2.5rem;
  text-align: center;
  margin-top: -1rem;
  margin-bottom: 2rem;
`;

const TaskText = styled.span`
  flex: 1;
  font-size: 2.5rem;
  font-weight: 600;
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  color: ${(props) => (props.done ? "#888" : "#fff")};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TaskActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const DoneButton = styled.button`
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 0.3rem;
  }
`;

const DeleteButton = styled.button`
  background: #f44336;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 0.3rem;
  }
`;
