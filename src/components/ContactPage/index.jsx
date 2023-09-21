import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as Styled from "../../App.styles";

const schema = yup
  .object({
    fullName: yup.string().min(3).max(100).required(),
    subject: yup.string().min(3).max(100).required(),
    email: yup.string().email().required(),
    body: yup.string().min(3).max(100).required(),
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
        <input name="full-name" {...register("fullName")} />
        <p>{errors.fullName?.message}</p>
        <label htmlFor="subject">Subject: </label>
        <input name="subject" {...register("subject")} />
        <p>{errors.subject?.message}</p>
        <label htmlFor="email">Email: </label>
        <input name="email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <label htmlFor="body">Body text: </label>
        <input name="body" {...register("body")} />
        <p>{errors.body?.message}</p>
        {/* <input type="submit" />
      <button type="submit">Submit button</button> */}
        <Styled.Button>Submit</Styled.Button>
      </form>
    </Styled.FormContainer>
  );
}

export default ContactPage;
