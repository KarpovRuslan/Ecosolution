import React,{ useState }  from 'react';
import icons from "../../utils/img/icons.svg";
import { Wrapper,Title, GreenLine,CardList,CardWrapper, CardQuestionTitle,CardWrapperUpper,CardQuestionAnswer,ButtonIcon,Show,UnShow } from './Faq.styled';

export const Faq = () => {
  const [add, setAdd] = useState([false, true, true, true, true]);

  const handleToggle = index => {
    setAdd(prevStates => {
      return prevStates.map((_, i) => (i === index ? !prevStates[i] : true));
    });
  };

//   const show = (<div>
//     <img src={icons + "#icon-add"} alt="add-icon" />
//   </div>);
//   const unShow = <use href={icons + "#icon-minus"} />;

  return (
    <Wrapper>
      <Title>Frequently Asked Questions</Title>
      <GreenLine/>
      <ul>
        <CardList>
          <CardWrapper>
            <CardWrapperUpper>
            <ButtonIcon onClick={() => handleToggle(0)}>
              {add[0] ? "+" : "-"}
            </ButtonIcon>
              <CardQuestionTitle>
                How do wind turbines and solar panels work together in a
                renewable energy system?
              </CardQuestionTitle>
            </CardWrapperUpper>
              {!add[0] && (
                <CardQuestionAnswer>
                  Wind turbines and solar panels generate electricity through
                  different mechanisms. Wind turbines harness the kinetic energy
                  of the wind to turn blades, which then drive a generator.
                  Solar panels convert sunlight into electricity through the
                  photovoltaic effect. When integrated into a renewable energy
                  system, these technologies complement each other by providing
                  a continuous and reliable power supply. Wind power is often
                  more abundant during certain times, while solar power is
                  consistent during daylight hours, resulting in a more stable
                  overall energy output.
                </CardQuestionAnswer>
              )}
          </CardWrapper>
        </CardList>
        <GreenLine/>
        <CardList>
          <CardWrapper >
          <CardWrapperUpper>
            <ButtonIcon  onClick={() => handleToggle(1)}>
              {add[1] ?  "+" : "-"}
            </ButtonIcon>
              <CardQuestionTitle>
                What sets EcoSolution's renewable energy solutions apart from
                others on the market?
              </CardQuestionTitle>
              </CardWrapperUpper>
              {!add[1] && <CardQuestionAnswer>Our renewable energy solutions stand out through a comprehensive approach covering solar, wind, and cutting-edge technologies. We prioritize customization to meet specific needs, uphold environmental stewardship, boast a seasoned team with a proven track record, and maintain a client-centric focus. Choosing EcoSolution means opting for innovative, tailored, and environmentally conscious energy solutions.</CardQuestionAnswer>}

          </CardWrapper>
        </CardList>
        <GreenLine/>
        <CardList>
          <CardWrapper >
          <CardWrapperUpper>
            <ButtonIcon  onClick={() => handleToggle(2)}>
              {add[2] ?  "+" : "-"}
            </ButtonIcon>
              <CardQuestionTitle>
                How can businesses and communities benefit from integrating
                renewable energy solutions from EcoSolution?
              </CardQuestionTitle>
              </CardWrapperUpper>
              {!add[2] && <CardQuestionAnswer>Businesses and communities gain sustainable advantages by integrating EcoSolution's renewable energy solutions. Our tailored approach ensures cost-effective, eco-friendly energy solutions, fostering environmental responsibility, reducing long-term operational costs, and promoting energy independence for a resilient future.</CardQuestionAnswer>}
            
          </CardWrapper>
        </CardList>
        <GreenLine/>
        <CardList>
          <CardWrapper >
          <CardWrapperUpper>
            <ButtonIcon  onClick={() => handleToggle(3)}>
              {add[3] ?  "+" : "-"}
            </ButtonIcon>
            
              <CardQuestionTitle>
                What measures does EcoSolution take to ensure the environmental
                sustainability of its products?
              </CardQuestionTitle>
              </CardWrapperUpper>
              {!add[3] && <CardQuestionAnswer >EcoSolution prioritizes environmental sustainability by employing eco-friendly materials in product manufacturing, minimizing carbon footprint in production processes, and ensuring energy-efficient designs. We are committed to responsible sourcing, recycling initiatives, and continuous improvement in green practices to mitigate environmental impact.</CardQuestionAnswer>}
            
          </CardWrapper>
        </CardList>
        <GreenLine/>
        <CardList>
          <CardWrapper>
          <CardWrapperUpper>
            <ButtonIcon  onClick={() => handleToggle(4)}>
              {add[4] ?  <Show/> : <UnShow/>}
            </ButtonIcon>
              <CardQuestionTitle>
                How does EcoSolution engage with local communities and support a
                just transition to renewable energy?
              </CardQuestionTitle>
              </CardWrapperUpper>
              {!add[4] && <CardQuestionAnswer >EcoSolution fosters community engagement by collaborating with local stakeholders, providing education on renewable energy benefits, and offering job opportunities. Our commitment to a just transition involves prioritizing social equity, supporting local economies, and ensuring that the shift to renewable energy is inclusive and beneficial for all.</CardQuestionAnswer>}
          </CardWrapper>
        </CardList>
      </ul>
      <p>
        Didn't find the answer to your question?
      </p>
    </Wrapper>
  );
};