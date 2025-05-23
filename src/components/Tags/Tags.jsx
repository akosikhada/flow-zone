import styled from "styled-components";
import { useContext } from "react";
import { FaClock, FaCoffee, FaBed } from "react-icons/fa";
import { StateContext } from "../../context/GlobalContext";
import { motion } from "framer-motion";

const Tags = () => {
  const { activeTag, setActiveTag } = useContext(StateContext);

  const handleTagClick = (index) => {
    setActiveTag(index);
  };

  return (
    <TagsContainer>
      <TagsSlider $activeTag={activeTag} />
      {["Focus", "Short Break", "Long Break"].map((tag, index) => (
        <Tag
          as={motion.button}
          onClick={() => handleTagClick(index)}
          $active={activeTag === index}
          whileHover={{ scale: activeTag !== index ? 1.05 : 1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          key={index}
          aria-pressed={activeTag === index}
        >
          <TagIcon $active={activeTag === index}>
            {index === 0 && <FaClock />}
            {index === 1 && <FaCoffee />}
            {index === 2 && <FaBed />}
          </TagIcon>
          <TagText $active={activeTag === index}>{tag}</TagText>
        </Tag>
      ))}
    </TagsContainer>
  );
};

export default Tags;

const TagsContainer = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  height: 6rem;
  width: 55rem;
  margin: 0 auto;
  border-radius: 3rem;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    width: 95%;
    max-width: 40rem;
    height: 5rem;
  }
`;

const TagsSlider = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: calc(100% / 3);
  height: 100%;
  background: linear-gradient(to right, #e74c3c, #ff6b6b);
  border-radius: 3rem;
  z-index: 0;
  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: translateX(${(props) => props.$activeTag * 100}%);
  padding: 0;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 3rem;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    border-radius: 2.5rem;

    &:after {
      border-radius: 2.5rem;
    }
  }
`;

const Tag = styled.button`
  position: relative;
  flex: 1;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 2.5rem;
  transition: all 0.3s ease;
  color: ${(props) => (props.$active ? "white" : "rgba(255, 255, 255, 0.7)")};
  text-shadow: ${(props) =>
    props.$active ? "0 1px 2px rgba(0, 0, 0, 0.1)" : "none"};
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    padding: 0.3rem;
  }
`;

const TagIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => (props.$active ? "1.8rem" : "1.6rem")};
  margin-bottom: 0.3rem;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.$active ? 1 : 0.8)};

  @media (max-width: 768px) {
    font-size: ${(props) => (props.$active ? "1.5rem" : "1.4rem")};
    margin-bottom: 0.1rem;
  }
`;

const TagText = styled.span`
  font-size: 1.6rem;
  font-weight: ${(props) => (props.$active ? 600 : 500)};
  transition: all 0.3s ease;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
