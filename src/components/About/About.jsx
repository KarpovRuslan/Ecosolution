import OpennessIcon from "../../utils/img/maximize-circle.svg";
import ResponsibilityIcon from "../../utils/img/global-edit.svg";
import InnovationsIcon from "../../utils/img/cpu-charge.svg";
import QualityIcon from "../../utils/img/ranking.svg";
import ValueImage1 from '../../utils/img/wind-farms-fields.png';
import ValueImage2 from '../../utils/img/man-worker-firld-by-solar-panels.png';
import { Wrapper,TitleAbout,Text,TextWrapper,GreenLine,ValueWrapper,ValueCard,ValueTitle, ValueTitleIcon, ValueTitleWrapper,ValueText,ValueImage } from './About.styled';

const About = () => {
    const valuesData = [
        { icon: OpennessIcon, title: 'Openness', text: 'to the world, people, new ideas and projects' },
        { icon: ResponsibilityIcon, title: 'Responsibility', text: 'we are aware that the results of our work have an impact on our lives and the lives of future generations' },
        { icon: InnovationsIcon, title: 'Innovation', text: 'we use the latest technology to implement non-standard solutions' },
        { icon: QualityIcon, title: 'Quality', text: 'we do not strive to be the first among others, but we want to be the best in our business' },
      ];

  return (
    <Wrapper>
        <TextWrapper>
            <TitleAbout>Main values of our company</TitleAbout>
            <GreenLine/>
            <Text>
                EcoSolution envisions a world where sustainable energy solutions power a brighter
                and cleaner future for all. We aspire to be at the forefront of the global shift 
                towards renewable energy, leading the way in innovative technologies that harness 
                the power of nature to meet the world's energy needs.
            </Text>
        </TextWrapper>
        
        <ValueWrapper>
        {valuesData.slice(0,2).map((value, index) => (
          <ValueCard key={index}>
            <ValueTitleWrapper>
              <ValueTitleIcon src={value.icon} alt={value.title}/>
              <ValueTitle>{value.title}</ValueTitle>
            </ValueTitleWrapper>
            <ValueText>{value.text}</ValueText>
          </ValueCard>
        ))}
        <>
            <ValueImage src={ValueImage1} alt="Wind farms fields" area="image1" />
            <ValueImage src={ValueImage2} alt="Man worker field by solar panels" area="image2"/>
        </>
        
        {valuesData.slice(2,4).map((value, index) => (
          <ValueCard key={index}>
            <ValueTitleWrapper>
              <ValueTitleIcon src={value.icon} alt={value.title} />
              <ValueTitle>{value.title}</ValueTitle>
            </ValueTitleWrapper>
            <ValueText>{value.text}</ValueText>
          </ValueCard>
        ))}
        </ValueWrapper>
 
    </Wrapper>
     )
}

export default About;

