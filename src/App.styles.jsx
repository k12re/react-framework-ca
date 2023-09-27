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
  justify-content: center;
  // margin: 0 auto;
  gap: 10px;
  padding: 40px;
  margin: 20px;
  margin-bottom: 0;
  // width: 400px;
  // height: 600px;
  background-color: white;
  filter: drop-shadow(0 0 0.75rem lightgrey);
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    width: 100%;
  }
  img {
    object-fit: cover;
    max-height: 400px;
    max-width: 100%;
  }
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 60vh;
  gap: 10px;
  padding: 40px;
  margin: 20px;
  background-color: white;
  filter: drop-shadow(0 0 0.75rem lightgrey);
  button {
    width: 100%;
  }
  img {
    object-fit: cover;
    height: 60px;
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
  flex-direction: row;
  justify-content: center;
  // padding: 40px;
  // margin: 20px;
  gap: 10px;
  form {
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
  }
  button {
    width: 100%;
  }
`;

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  // padding: 40px;
  // margin: 20px;
  gap: 10px;
  form {
    // width: 100vw;
    padding: 20px 20px;
    margin: 0 20px;
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
    width: 75vw;
  }
  button {
    width: 100%;
  }
`;

export const Button = styled.button`
  border: 0;
  background-color: lightpink;
  color: white;
  cursor: pointer;
  padding: 10px;
  min-width: 200px;
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
