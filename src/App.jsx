import styled from "styled-components";
import Tags from "./components/Tags";
import Timer from "./components/Timer";
import logo from "/logo-white.png";

function App() {
  return (
    <>
      <Header>
        <Logo src={logo} alt="Flow Zone Logo" />
        <Title>Flow Zone</Title>
      </Header>
      <Tags />
      <Timer />
      {/* Settings Icons */}
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
