import styled, { createGlobalStyle } from "styled-components";
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
import { StateContext } from "../StateProvider";
import { useContext } from "react";
import PropTypes from "prop-types";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: scroll;
  }
`;

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

  return (
    <>
      <GlobalStyle />
      <ModalContainer>
        <ModalContent
          initial={{ y: "-100vh", scale: 0 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: "-100vh", scale: 0 }}
        >
          <ModalHeader>
            <ModalTitle>
              <FaCog fontSize="5rem" /> Settings
            </ModalTitle>
            <IconWrapper>
              <ModalCloseButton onClick={onClose}>
                <FaWindowClose fontSize="5rem" />
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
                setFocusTime(values.focus * 60);
                setShortBreakTime(values.short * 60);
                setLongBreakTime(values.long * 60);
                onClose();
              }}
            >
              <Form>
                <InputWrapper>
                  <FormControl>
                    <label htmlFor="focus">
                      <FaClock fontSize="1.5rem" /> Focus
                    </label>
                    <Field name="focus" min="1" max="60" />
                  </FormControl>
                  <FormControl>
                    <label htmlFor="short">
                      <FaCoffee fontSize="1.5rem" /> Short Break
                    </label>
                    <Field name="short" min="1" max="60" />
                  </FormControl>
                  <FormControl>
                    <label htmlFor="long">
                      <FaBed fontSize="1.5rem" /> Long Break
                    </label>
                    <Field name="long" min="1" max="60" />
                  </FormControl>
                </InputWrapper>
                <ButtonWrapper>
                  <ApplyButton type="submit">
                    <FaCheck fontSize="2rem" /> Apply
                  </ApplyButton>
                </ButtonWrapper>
              </Form>
            </Formik>
            <Description>
              This is an open-source project aimed at helping users manage their
              time effectively. Feel free to contribute and improve the project!
            </Description>
            <SourceCodeButton
              href="https://github.com/akosikhada/flow-zone.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub fontSize="2rem" /> Source Code
            </SourceCodeButton>
          </ModalBody>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

Container.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Container;

const ModalContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  z-index: 150;
`;

const ModalContent = styled(motion.div)`
  width: 60rem;
  height: 40rem;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const ModalHeader = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 5px solid #ffffff;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ModalTitle = styled.h1`
  font-size: 5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const ModalCloseButton = styled.button`
  all: unset;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  padding: 1rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FormControl = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  gap: 0.7rem;
  label {
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  input {
    width: 100%;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid #ffffff;
    color: #ffffff;
    background: ${(props) => props.theme.colors.primary};

    @media (max-width: 768px) {
      font-size: 1.5rem;
      padding: 0.5rem;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ApplyButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  gap: 1rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  background: ${(props) => props.theme.colors.primary};
  color: #ffffff;
  border-radius: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #4f4f4f;
    transform: scale(1.05);
  }

  &:active {
    background: #666666;
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
  }
`;

const Description = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: #ffffff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SourceCodeButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  gap: 1rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  background: ${(props) => props.theme.colors.primary};
  color: #ffffff;
  border-radius: 1rem;
  cursor: pointer;
  text-decoration: none;
  margin-top: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #4f4f4f;
    transform: scale(1.05);
  }

  &:active {
    background: #666666;
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
  }
`;
