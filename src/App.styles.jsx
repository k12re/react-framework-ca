import styled from "styled-components";

export const Nav = styled.nav`
  // display: flex;
  background-color: lightpink;
  // justify-content: center;
  ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding 10px 0;
  }
  li {
    margin: 0 16px;
    // display: inline-flex;
    // justify-content: end;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProductListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 0;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 100vh;
  flex: 0 0 auto;

  // margin: 0 auto;
  gap: 10px;
  padding: 40px;
  margin: 40px;
  margin-bottom: 0;
  max-width: 280px;
  // max-height: 100%;
  background-color: white;
  filter: drop-shadow(0 0 0.75rem lightgrey);
  li {
    display: contents;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    width: 100%;
  }
  img {
    object-fit: cover;
    max-height: 300px;
    max-width: 100%;
  }
`;

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  flex: 1;
  // justify-content: space-between;
  // max-height: 50%;
  // margin: 0 auto;
  gap: 10px;
  padding: 40px;
  margin: 40px;
  margin-bottom: 0;
  max-width: 280px;
  // max-height: 100%;
  background-color: white;
  filter: drop-shadow(0 0 0.75rem lightgrey);
  li {
    display: contents;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    width: 100%;
  }
  img {
    object-fit: cover;
    max-height: 300px;
    max-width: 100%;
  }
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  min-height: 60vh;
  max-width: 600px;
  gap: 10px;
  padding: 40px;
  // margin: 20px;
  background-color: white;
  filter: drop-shadow(0 0 0.75rem lightgrey);
  button {
    width: 100%;
  }
  img {
    object-fit: cover;
    height: 60px;
    width: 60px;
  }
  li {
    border: 1px solid lightgrey;
    background-color: #fff;
    display: flex;
    font-weight: bold;
    margin: 5px 0;
  }
  p {
    padding-left: 10px;
    text-align: end;
    font-weight: bold;
  }
  h1 {
    text-align: center;
  }
  h2 {
    text-align: end;
  }
`;

export const CheckoutSuccess = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  gap: 10px;
  padding: 40px;
  margin: 20px;
  background-color: white;
  // filter: drop-shadow(0 0 0.75rem lightgrey);
  h1 {
    text-align: center;
  }
  button {
    width: 100%;
  }
  img {
    object-fit: cover;
    height: 60px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  // flex-direction: row;
  // justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 10px;
  form {
    max-width: 600px;
    padding: 40px;
    margin: 20px;
    background-color: white;
    filter: drop-shadow(0 0 0.75rem lightgrey);
  }
  label {
    font-size: 1.5rem
    justify-content: space-between;
  }
  input {
    display: block;
    padding: 6px;
    border: 1px solid black;
    width: 70vw;
    max-width: 40vw;
  }
  button {
    width: 100%;
  }
  p {
    color: darkred;
  }
`;

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  // padding: 40px;
  // margin: 20px;
  
  form {
    width: 75vw;
    display: flex;
    padding: 20px 20px;
    // margin: 0 20px;
    background-color: white;
    filter: drop-shadow(0 0 0.75rem lightgrey);
  }
  label {
    font-size: 1.5rem
    justify-content: space-between;
  }
  input {
    display: block;
    padding: 6px;
    border: 1px solid black;
    flex-grow: 3;

  }
  button {
    // width: 100%;
  }
`;

export const Button = styled.button`
  border: 0;
  background-color: lightpink;
  color: white;
  cursor: pointer;
  padding: 10px;
  min-width: 200px;
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: bold;

  a {
    text-decoration: none;
    font-weight: bold;
    color: inherit;
  }
  :hover {
    background-color: lightcoral;
  }
`;

export const ButtonSmall = styled.button`
  border: 0;
  background-color: lightpink;
  color: white;
  cursor: pointer;
  padding: 10px;
  min-width: 100px;
  font-size: 1rem;
  font-weight: bold;
  a {
    text-decoration: none;
    font-weight: bold;
    color: inherit;
  }
  :hover {
    background-color: lightcoral;
  }
`;
