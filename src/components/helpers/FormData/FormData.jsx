import { useForm } from "react-hook-form";
import {
  FormStyle,
  Label,
  Input,
  ErrorMessageStyle,
  Btn,
  InnerText,
  InnerCircle,
  ArrowIcon,
  ButtonWrapper,
} from "./FormData.styled";
import icons from "../../../utils/img/icons.svg";

const FormData = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <FormStyle
      target="_blank"
      onSubmit={onSubmit}
      action="https://formsubmit.co/08ef7751867b3cfaf9a68f33deb03aef"
      method="POST"
    >
      <Label htmlFor="fullName">* Full name:</Label>
      <Input
        placeholder="John Rosie"
        id="fullName"
        name="fullName"
        hasError={!!errors.name}
        {...register("name", {
          required: true,
          maxLength: 50,
          pattern: /^\w+\s\w+$/gm,
        })}
      />
      {errors.name && (
        <ErrorMessageStyle>
          {errors.name.type === "required" && "This field is required"}
          {errors.name.type === "maxLength" && "Max length is 50 characters"}
          {errors.name.type === "pattern" && "Wrong Fullname"}
        </ErrorMessageStyle>
      )}

      <Label htmlFor="email">* E-mail:</Label>
      <Input
        id="email"
        name="email"
        required
        placeholder="johnrosie@gmail.com"
        hasError={!!errors.email}
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i,
        })}
      />
      {errors.email && (
        <ErrorMessageStyle name="email" component="div">
          {errors.email.type === "required" && "This field is required"}
          {errors.email.type === "pattern" && "Wrong Email"}
        </ErrorMessageStyle>
      )}

      <Label htmlFor="phone">* Phone:</Label>
      <Input
        placeholder="380961234567"
        id="phone"
        name="phone"
        type="phone"
        required
        hasError={!!errors.phone}
        {...register("phone", {
          required: true,
          pattern: /^\+?(38)?(\d{10,11})$/,
        })}
      />
      {errors.phone && (
        <ErrorMessageStyle>
          {errors.phone.type === "required" && "This field is required"}
          {errors.phone.type === "pattern" && "Wrong Phone"}
        </ErrorMessageStyle>
      )}

      <Label htmlFor="message">Message:</Label>
      <Input
        as="textarea"
        rows={5}
        cols={20}
        placeholder="Your message"
        {...register("message", {
          maxLength: 2000,
        })}
      />
      {errors.message && (
        <ErrorMessageStyle>
          {errors.message.type === "required" && "This field is required"}
          {errors.message.type === "maxLength" &&
            "Max length is 2000 characters"}
        </ErrorMessageStyle>
      )}

      <ButtonWrapper>
        <Btn type="submit" text="Send">
          <InnerText>Send</InnerText>
          <InnerCircle>
            <ArrowIcon>
              <use href={icons + "#icon-arrow-right"} />
            </ArrowIcon>
          </InnerCircle>
        </Btn>
      </ButtonWrapper>
    </FormStyle>
  );
};

export default FormData;
