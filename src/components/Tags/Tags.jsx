import styled, { css } from "styled-components";
import { useContext } from "react";
import { FaClock, FaCoffee, FaBed } from "react-icons/fa";
import { StateContext } from "../StateProvider";

const Tags = () => {
  const { activeTag, setActiveTag } = useContext(StateContext);

  const handleTagClick = (index) => {
    setActiveTag(index);
  };

  return (
    <TagsContainer>
      {["Focus", "Short Break", "Long Break"].map((tag, index) => (
        <Tag
          onClick={() => handleTagClick(index)}
          activeTag={activeTag === index}
          key={index}
        >
          {index === 0 && <FaClock fontSize="1.5rem" />}
          {index === 1 && <FaCoffee fontSize="1.5rem" />}
          {index === 2 && <FaBed fontSize="1.5rem" />}
          {tag}
        </Tag>
      ))}
    </TagsContainer>
  );
};

export default Tags;

const TagsContainer = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  height: 5rem;
  width: 50rem;
  margin: 0 auto;
  border-radius: 5rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    width: 35rem;
  }
`;

const Tag = styled.button`
  all: unset;
  flex: 1;
  text-align: center;
  border-radius: 5rem;
  height: 4rem;
  font-size: 2rem;
  cursor: pointer;
  background: ${(props) => props.theme.colors.secondary};
  transition: background 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #4f4f4f;
    transform: scale(1.05);
  }

  ${({ activeTag }) =>
    activeTag &&
    css`
      background: ${(props) => props.theme.colors.primary};

      &:hover {
        background: #666666;
      }
    `}

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
