import React from "react";
import styled from "styled-components";
import Tick from '../../Assets/tick.svg'
import SpecialitiesData from "./SpecialitiesData";
import Research from '../../Assets/medical-research.svg';
import Navbar from "../Navbar";
import Footer from "../Footer";


const AboutScreen = styled.div`
  padding: 80px 0;
`;

const AdvantagesContainer = styled.div``;

const AdvantagesSection = styled.div`
  max-width: ${(window.innerWidth - 1200) / 2 + 1200}px;
  margin-right: 0px;
  padding-right: 10px;
  margin: auto;

  @media screen and (min-width: 1200px) {
    max-width: ${(props) => props.maxWidth}px;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const FlexLeft = styled.div`
  text-align: center;
  margin-bottom: 20px; 

  @media screen and (max-width: 768px) {
    max-width: 500px; 
    text-align: center; 
  }
`;

const FlexRight = styled.div`
   @media screen and (max-width: 768px) {
    img {
      max-width: 100%; 
      display: block;
      margin-top: 20px; 
    }
    text-align: right;
  }
`;

const Title = styled.div`
  font-weight: 700;
  color: "#4F3928";
  font-size: 48px;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const Description = styled.div`
  color: "#7C4F35";
  font-size: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size:18px;
  }
`;

const UL = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 30px;
`;

const LI = styled.li`
  padding-left: 40px;
  min-height: 50px;
  display: flex;
  font-weight:700;
  align-items: center;
  background: url(${Tick}) left center no-repeat;
  color:"#7C4F35";
`;

const LearnMoreButton = styled.button`
  border-radius: 20px;
  outline: none;
  border: none;
  padding: 12px 20px;
  color: ${(props) =>
    props.outlined === true ? "#396F78" : "#ffffff"};
  border: 2px solid
    ${(props) => (props.outlined === true ? "#396F78" : "transparent")};
  cursor: pointer;
  background: ${(props) =>
    props.outlined === true ? "transparent" : "#396F78"};
  &:disabled {
    background:"#CEB699";
  }
  font-weight:500;
  font-size: 20px;
`;

const SpecialitiesContainer = styled.div`
padding-top:30px;
background: rgba(77, 173, 189, 0.1);
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 125px;
  align-content: flex-start;
  margin-bottom: 55px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const TopTitle = styled.div`
  font-size: 48px;
  font-weight: bold;
  color:"#4F3928";

  @media screen and (max-width: 600px){
    padding-bottom:20px;
    font-size: 38px;
  }
`;

const TopDescription = styled.div`
  font-weight: 500;
  color:"#7C4F35";
  font-size: 22px;

  @media screen and (max-width: 600px){
    font-size: 18px;
  }
`;

const Item = styled.div``;
const ItemTop = styled.div`
  margin-bottom: 10px;
`;
const ItemTitle = styled.div`
  font-weight:900;
  color: "#4F3928";
  font-size: 24px;
`;
const ItemImageContainer = styled.div``;
const ItemBottom = styled.div`
  color: "#7C4F35";
  font-weight:500;
  font-size: 20px;
`;

const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 70px;
  column-gap: 120px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 60px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    row-gap: 40px;
  }
`;

const About = () => {
  return (
    <>

   <Navbar/>
    <AboutScreen>

      <AdvantagesContainer>
        <AdvantagesSection>
          <Flex>
            <FlexLeft>
              <Title>Personalized care for your mind and body.</Title>
              <Description>
                From rashes to colds, stress management to diabetes management,
                individual treatment plans are created around you.
              </Description>
              <UL>
                <LI>Urgent Care</LI>
                <LI>Behavioural Health</LI>
                <LI>Preventive Health</LI>
                <LI>Chronic Care</LI>
              </UL>
              <LearnMoreButton>Get Started</LearnMoreButton>
            </FlexLeft>
            <FlexRight>
              <img src={Research} alt="Medical Research" />
            </FlexRight>
          </Flex>
        </AdvantagesSection>
      </AdvantagesContainer>
      <SpecialitiesContainer>
        <AdvantagesSection>
          <Top>
            <TopTitle>Quality Care For You and The Ones You Love</TopTitle>
            <TopDescription>
              With 24/7 access to doctors, psychiatrists, psychologists,
              therapists and other medical experts, care is always available,
              anytime and anywhere.
            </TopDescription>
          </Top>
          <Bottom>
            {SpecialitiesData.map((item) => (
              <Item key={item.id}>
                <ItemTop>
                  <ItemImageContainer>
                    <img src={item.imageUrl} alt={item.title} />
                  </ItemImageContainer>
                  <ItemTitle>{item.title}</ItemTitle>
                </ItemTop>
                <ItemBottom>{item.description}</ItemBottom>
              </Item>
            ))}
          </Bottom>
        </AdvantagesSection>
      </SpecialitiesContainer>
    </AboutScreen>
    <Footer/>
    </>
  );
};

export default About;