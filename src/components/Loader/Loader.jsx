import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderContainer>
      <img src="/loading-2.gif" alt="Loading..." width={"300px"} />
    </LoaderContainer>
  );
};

export default Loader;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
