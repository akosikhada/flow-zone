import styled from "styled-components";
import { useState } from "react";
import Clock from "./Clock";

const Progress = () => {
  const [progress, setProgress] = useState(55);
  return (
    <OuterCircle progress={progress}>
      <InnerCircle>
        <Clock />
      </InnerCircle>
    </OuterCircle>
  );
};

export default Progress;

const OuterCircle = styled.div`
  width: 35rem;
  height: 35rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(
    ${(props) => props.theme.colors.primary} ${({ progress }) => progress}%,
    transparent ${({ progress }) => progress}%
  );
`;
const InnerCircle = styled.div`
  width: 33rem;
  height: 33rem;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 50%;
  display: grid;
  place-items: center;
`;
