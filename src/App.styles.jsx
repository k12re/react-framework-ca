import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  background-color: lightpink;
  justify-content: center;
  li {
    display: inline-flex;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    height: 400px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
    width: 95%;
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
  a {
    text-decoration: none;
    color: inherit;
  }
  :hover {
    background-color: lightcoral;
  }
`;
