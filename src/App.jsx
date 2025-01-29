import styled from "styled-components";
import Tags from "./components/Tags/Tags";
import Timer from "./components/Timer/Timer";
import logo from "/logo-white.png";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import { FaCog } from "react-icons/fa";
import About from "./components/About/About";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} />
      <Header>
        <Logo src={logo} alt="Flow Zone Logo" />
        <Title>Flow Zone</Title>
      </Header>
      <Tags />
      <Timer />
      <Icon onClick={onOpen}>
        <FaCog />
      </Icon>
      <About />
    </>
  );
}

export default App;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const Logo = styled.img`
  width: 5rem;
  height: auto;
  margin-right: 1rem;
`;

const Title = styled.h1`
  font-size: 6rem;
  text-align: center;
`;

const Icon = styled.div`
  display: flex;
  width: fit-content;
  margin: 0 auto;
  justify-content: center;
  font-size: 4rem;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
