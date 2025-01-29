import styled from "styled-components";

const About = () => {
  return (
    <AboutContainer>
      <ContentWrapper>
        <AboutTitle>
          <Highlight>What</Highlight> is Pomodoro Technique?
        </AboutTitle>
        <AboutText>
          The Pomodoro Technique is created by Francesco Cirillo for a more
          productive way to work and study. The technique uses a timer to break
          down work into intervals, traditionally 25 minutes in length,
          separated by short breaks. Each interval is known as a pomodoro, from
          the Italian word for &apos;tomato&apos;, after the tomato-shaped
          kitchen timer that Cirillo used as a university student.
        </AboutText>
        <AboutTitle>
          <Highlight>What</Highlight> is Flow Zone?
        </AboutTitle>
        <AboutText>
          Flow Zone is a small clone project inspired by{" "}
          <Link href="https://pomofocus.io">pomofocus.io</Link>. This
          application is built with React and styled with Styled Components. It
          employs the Pomodoro Technique, helping users break down their work
          into focused intervals interspersed with short breaks. This approach
          enhances concentration, minimizes distractions, and ultimately boosts
          overall productivity.
        </AboutText>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  width: 100%;
  margin: 8rem auto;
`;

const ContentWrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
`;

const AboutTitle = styled.h1`
  font-size: 4rem;
  margin-top: 1.25rem;
`;

const Highlight = styled.span`
  border-bottom: 4px solid #ffffff;
`;

const AboutText = styled.p`
  margin-top: 1.25rem;
  letter-spacing: 0.05em;
  opacity: 0.7;
  font-size: 2rem;
  word-break: break-word;
`;

const Link = styled.a`
  text-decoration: underline;
  color: #e74c3c;
  font-size: 1.75rem;
  font-weight: 600;
  text-transform: uppercase;
`;

