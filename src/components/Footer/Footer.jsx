import styled from "styled-components";

const Footer = () => {
  const newDate = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterText>&copy; {newDate} akosikhada. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
`;

const FooterText = styled.p`
  font-size: 2rem;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
