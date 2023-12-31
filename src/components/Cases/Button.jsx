import { CustomButton, IconLeft, IconRight, Wrapper } from "./Button.styled";
import icons from "../../utils/img/icons.svg";

const Button = () => {
  return (
    <Wrapper>
      <CustomButton type="button" className="left">
        <IconLeft>
          <use href={icons + "#icon-arrow-right"} />
        </IconLeft>
      </CustomButton>
      <CustomButton type="button" className="right">
        <IconRight>
          <use href={icons + "#icon-arrow-right"} />
        </IconRight>
      </CustomButton>
    </Wrapper>
  );
};

export default Button;
