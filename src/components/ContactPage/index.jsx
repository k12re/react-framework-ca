import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as Styled from "../../App.styles";

const schema = yup
  .object({
    fullName: yup
      .string()
      .required("Please enter name")
      .min(3, "Minimum 3 characters")
      .max(100, "Maximum 100 characters"),
    subject: yup
      .string()
      .required("Please enter subject")
      .min(3, "Minimum 3 characters")
      .max(100, "Maximum 100 characters"),
    email: yup
      .string()
      .required("Please enter email address")
      .email("Please enter a valid email address"),
    body: yup
      .string()
      .required("Please enter text")
      .min(3, "Minimum 3 characters")
      .max(100, "Maximum 100 characters"),
  })
  .required();

function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Styled.FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="full-name">Full name: </label>
        <input name="full-name" id="full-name" {...register("fullName")} />
        <p>{errors.fullName?.message}</p>
        <label htmlFor="subject">Subject: </label>
        <input name="subject" id="subject" {...register("subject")} />
        <p>{errors.subject?.message}</p>
        <label htmlFor="email">Email: </label>
        <input name="email" id="email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <label htmlFor="body">Body text: </label>
        <input name="body" id="body" {...register("body")} />
        <p>{errors.body?.message}</p>
        {/* <input type="submit" />
      <button type="submit">Submit button</button> */}
        <Styled.Button>Submit</Styled.Button>
      </form>
    </Styled.FormContainer>
  );
}

export default ContactPage;
