import React from 'react';
import styled from 'styled-components';
// import Label from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f2f2f2;
  height: 100vh;
`;

// const Header = styled.h2`
//   font-size: 2rem;
//   font-weight: 700;
//   color: #333;
//   margin-bottom: 20px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   max-width: 500px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px 20px;
//   margin: 8px 0;
//   box-sizing: border-box;
//   border: 2px solid #ccc;
//   border-radius: 4px;
//   font-size: 1rem;
//   font-weight: 400;
//   color: #333;
//   outline: none;
// `;

const Checkbox = styled.input`
  margin: 8px 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  background-color: #44014c;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #330033;
  }
`;

const Companies = () => {
  return (
    <Container>
      <header>Join the largest community connecting insurance agents with the markets they need to place business.</header>
      <form>
        <input type="text" placeholder="Enter your name" required />
        <input type="email" placeholder="Enter your email" required />
        <Checkbox type="Checkbox" name="saveListings" id="saveListings" />
        <label htmlFor="saveListings">
          Save your favorite listings and companies with a single click!
        </label>
        <Checkbox type="Checkbox" name="inquireListings" id="inquireListings" />
        <label htmlFor="inquireListings">
          Inquire about multiple listings in a single message!
        </label>
        <Checkbox type="Checkbox" name="marketRequest" id="marketRequest" />
        
        <Button type="submit">Join Now</Button>
      </form>
    </Container>
  );
};

export default Companies;