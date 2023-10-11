import styled from "styled-components";

export const Nav = styled.nav`
  background-color: lightpink;
  ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding 10px 0;
  }
  li {
    margin: 0 16px;
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
  margin: 0 auto;
  max-width: 1800px;
`;

export const Discount = styled.h3`
  text-transform: uppercase;
  transform: rotate(353deg);
  position: relative;
  top: -75px;
  text-align: center;
  background-color: red;
  color: white;
  padding: 10px;
  margin: 0 auto;
  width: 180px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 10px;
  padding: 40px;
  margin: 40px;
  margin-bottom: 0;
  max-width: 280px;
  filter: drop-shadow(0 0 0.75rem lightgrey);
  li {
    display: contents;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    object-fit: cover;
    max-height: 300px;
    max-width: 100%;
  }
`;

export const ProductContainer = styled(Container)`
  justify-content: space-between;
  flex: 0 0 auto;
`;

export const ReviewsContainer = styled(Container)`
  display: block;
  align-self: flex-start;
  flex: 1;
`;

export const CheckoutContainer = styled(Container)`
  justify-content: center;
  margin: 20px auto;
  min-height: 60vh;
  max-width: 600px;
  img {
    object-fit: cover;
    height: 60px;
    width: 60px;
  }
  li {
    border: 1px solid lightgrey;
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
  h1 {
    text-align: center;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin: 0 auto;
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
    margin-top: 10px;
    border: 1px solid black;
    width: 70vw;
    box-sizing: border-box;
    max-width: 600px;
  }
  p {
    color: darkred;
  }
  button {
    margin-top: 10px;
  }
`;

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
  form {
    width: 70vw;
    display: flex;
    padding: 20px 20px;
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

`;

export const Button = styled.button`
  border: 0;
  background-color: lightcoral;
  color: white;
  cursor: pointer;
  padding: 10px;
  width: 100%;
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
    background-color: lightpink;
  }
`;
