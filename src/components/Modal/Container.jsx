import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaWindowClose,
  FaGithub,
  FaCheck,
  FaCog,
  FaClock,
  FaCoffee,
  FaBed,
} from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import { StateContext } from "../../context/GlobalContext";
import { useContext } from "react";
import PropTypes from "prop-types";

const Container = ({ isOpen, onClose }) => {
  const {
    focusTime,
    setFocusTime,
    shortBreakTime,
    setShortBreakTime,
    longBreakTime,
    setLongBreakTime,
  } = useContext(StateContext);

  if (!isOpen) return null;

  // Click outside to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalContainer onClick={handleBackdropClick}>
      <ModalContent
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        <ModalHeader>
          <ModalTitle>
            <FaCog /> Settings
          </ModalTitle>
          <IconWrapper>
            <ModalCloseButton
              onClick={onClose}
              aria-label="Close settings"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWindowClose />
            </ModalCloseButton>
          </IconWrapper>
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              focus: focusTime / 60,
              short: shortBreakTime / 60,
              long: longBreakTime / 60,
            }}
            onSubmit={(values) => {
              // Ensure values are at least 1 minute
              const focus = Math.max(1, parseInt(values.focus) || 1);
              const short = Math.max(1, parseInt(values.short) || 1);
              const long = Math.max(1, parseInt(values.long) || 1);

              setFocusTime(focus * 60);
              setShortBreakTime(short * 60);
              setLongBreakTime(long * 60);
              onClose();
            }}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <InputWrapper>
                  <FormControl>
                    <label htmlFor="focus">
                      <FaClock /> Focus
                    </label>
                    <Field
                      type="number"
                      name="focus"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      min="1"
                      max="60"
                      aria-label="Focus time in minutes"
                      onBlur={(e) => {
                        const value = e.target.value;
                        if (value === "" || isNaN(value) || value < 1) {
                          setFieldValue("focus", 1);
                        }
                      }}
                    />
                    <TimePreview>
                      {parseInt(values.focus) || 1} minutes
                    </TimePreview>
                  </FormControl>
                  <FormControl>
                    <label htmlFor="short">
                      <FaCoffee /> Short Break
                    </label>
                    <Field
                      type="number"
                      name="short"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      min="1"
                      max="60"
                      aria-label="Short break time in minutes"
                      onBlur={(e) => {
                        const value = e.target.value;
                        if (value === "" || isNaN(value) || value < 1) {
                          setFieldValue("short", 1);
                        }
                      }}
                    />
                    <TimePreview>
                      {parseInt(values.short) || 1} minutes
                    </TimePreview>
                  </FormControl>
                  <FormControl>
                    <label htmlFor="long">
                      <FaBed /> Long Break
                    </label>
                    <Field
                      type="number"
                      name="long"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      min="1"
                      max="60"
                      aria-label="Long break time in minutes"
                      onBlur={(e) => {
                        const value = e.target.value;
                        if (value === "" || isNaN(value) || value < 1) {
                          setFieldValue("long", 1);
                        }
                      }}
                    />
                    <TimePreview>
                      {parseInt(values.long) || 1} minutes
                    </TimePreview>
                  </FormControl>
                </InputWrapper>
                <ButtonWrapper>
                  <ApplyButton
                    type="submit"
                    whileHover={{ scale: 1.05, backgroundColor: "#ff6b6b" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <FaCheck /> Apply
                  </ApplyButton>
                </ButtonWrapper>
              </Form>
            )}
          </Formik>
          <Divider />
          <Description>
            This is an open-source project aimed at helping users manage their
            time effectively using the Pomodoro Technique.
          </Description>
          <SourceCodeButton
            href="https://github.com/akosikhada/flow-zone.git"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "#e74c3c" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <FaGithub /> Source Code
          </SourceCodeButton>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};

Container.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Container;

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 150;
`;

const ModalContent = styled(motion.div)`
  width: 60rem;
  max-width: 90vw;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 1.2rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
  }
`;

const ModalHeader = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ModalTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0;
  color: #ffffff;

  svg {
    font-size: 2.8rem;
    color: #e74c3c;
  }

  @media (max-width: 768px) {
    font-size: 2.4rem;

    svg {
      font-size: 2.2rem;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ModalCloseButton = styled(motion.button)`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.7);
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  svg {
    font-size: 2.8rem;
  }

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    svg {
      font-size: 2.4rem;
    }
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const FormControl = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  gap: 0.7rem;

  label {
    font-size: 1.8rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: rgba(255, 255, 255, 0.9);
    -webkit-tap-highlight-color: transparent;

    svg {
      color: #e74c3c;
    }

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }

  input {
    width: 100%;
    font-size: 1.8rem;
    padding: 1rem 1.5rem;
    border-radius: 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #ffffff;
    background: rgba(255, 255, 255, 0.05);
    transition: all 0.2s ease;
    appearance: textfield;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    -webkit-tap-highlight-color: transparent;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      margin: 0;
    }

    &:focus {
      outline: none;
      border-color: rgba(231, 76, 60, 0.5);
      box-shadow: 0 0 0 2px rgba(231, 76, 60, 0.2);
    }

    @media (max-width: 768px) {
      font-size: 1.6rem;
      padding: 0.8rem 1.2rem;
    }
  }
`;

const TimePreview = styled.span`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: -0.2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;

const ApplyButton = styled(motion.button)`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem 2.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  background-color: #e74c3c;
  color: white;
  border-radius: 0.8rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  svg {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0.8rem 2rem;

    svg {
      font-size: 1.6rem;
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 1rem 0 2rem;
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const SourceCodeButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  gap: 0.8rem;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: 0.8rem;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  svg {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.8rem 1.5rem;

    svg {
      font-size: 1.6rem;
    }
  }
`;
