import { Formik } from "formik";
import * as Yup from "yup";
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

const schema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Wrong Fullname"),
  email: Yup.string().email("Invalid email").required("Wrong Email"),
  phone: Yup.string().required("Wrong Phone"),
  message: Yup.string(),
});

const FormData = () => {
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={schema}
      onSubmit={async (values) => {
        await new Promise((res) => setTimeout(res, 400));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(formProps) => (
        <FormStyle>
          <Label htmlFor="fullName">* Full name:</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="John Rosie"
            required
            $hasError={
              Object.keys(formProps.errors)[0] && formProps.touched.fullName
            }
          />
          <ErrorMessageStyle name="fullName" component="div" />

          <Label htmlFor="email">* E-mail:</Label>
          <Input
            id="email"
            name="email"
            placeholder="johnrosie@gmail.com"
            type="email"
            required
            $hasError={
              Object.keys(formProps.errors)[1] && formProps.touched.email
            }
          />
          <ErrorMessageStyle name="email" component="div" />

          <Label htmlFor="phone">* Phone:</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="380961234567"
            type="phone"
            required
            $hasError={
              Object.keys(formProps.errors)[2] && formProps.touched.phone
            }
          />
          <ErrorMessageStyle name="phone" component="div" />

          <Label htmlFor="message">Message:</Label>
          <Input
            as="textarea"
            name="message"
            id="message"
            cols="20"
            rows="5"
            placeholder="Your message"
          />
          <ErrorMessageStyle name="message" component="div" />

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
      )}
    </Formik>
  );
};

export default FormData;
