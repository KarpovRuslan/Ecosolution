import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import icons from "../../utils/img/icons.svg";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import swiperData from "../helpers/swiperData.json";
import {
  Wrapper,
  GreenLine,
  GreenLineHorizontal,
  TitleCase,
  WrapperCase,
  CurrentCase,
  CurrentNumber,
  Total,
  CaseSlide,
  WrapperSwiper,
  SlideBlock,
  Image,
  DescriptionWrapper,
  DescriptionTitle,
  TitleText,
  ButtonBlock,
  ButtonBlockIcon,
  TextBlock,
  Text,
  WrapperData,
} from "./Cases.styled";
import Button from "./Button";

const Cases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);

  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const slidesPerView = isTablet ? 2 : 1;

  const handleSlideChange = (swiper) => setCurrentSlide(swiper.realIndex);

  useEffect(() => {
    const importImages = async () => {
      const importedImages = await Promise.all(
        swiperData.map(async (item) => {
          const imageModule = await import(`../../utils/img/${item.image}`);
          return imageModule.default;
        })
      );
      setImages(importedImages);
    };

    importImages();
  }, []);

  return (
    <Wrapper id="cases">
      <WrapperData>
        <TitleCase>Successful cases of our company</TitleCase>
        <GreenLineHorizontal />
        <WrapperCase>
          <CurrentCase className="current">
            <CurrentNumber>
              {`${(currentSlide + 1).toString().padStart(2, "0")}`}
            </CurrentNumber>
            <Total> /05</Total>
          </CurrentCase>
          <Button />
        </WrapperCase>
      </WrapperData>

      <WrapperSwiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".right",
          prevEl: ".left",
        }}
        pagination={{
          el: ".current",
          clickable: true,
          renderBullet: function (index, pagination) {
            return `<span class="${pagination}">${index + 1}</span>`;
          },
        }}
        loop={true}
        spaceBetween={24}
        slidesPerView={slidesPerView}
        onSlideChange={handleSlideChange}
      >
        {swiperData.map((item, index) => (
          <CaseSlide key={index}>
            <SlideBlock>
              <Image src={images[index]} alt={item.alt} loading="lazy" />
              <DescriptionWrapper>
                <DescriptionTitle>
                  <TitleText>{item.title}</TitleText>
                  <ButtonBlock type="button">
                    <ButtonBlockIcon>
                      <use href={`${icons}#icon-arrow-right`} />
                    </ButtonBlockIcon>
                  </ButtonBlock>
                </DescriptionTitle>
                <GreenLine />
                <TextBlock>
                  <Text>{item.description}</Text>
                  <Text>{item.date}</Text>
                </TextBlock>
              </DescriptionWrapper>
            </SlideBlock>
          </CaseSlide>
        ))}
      </WrapperSwiper>
    </Wrapper>
  );
};

export default Cases;
