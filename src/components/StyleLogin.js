import styled from 'styled-components';

export const DivComp1 = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap');
  display: flexbox;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

export const Title = styled.text`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 800;
  font-size: 40px;
  color: #1877F2;
  text-align: center;
  justify-content: center;
`;

export const Input = styled.input`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  padding: 0 20px;
  width: 270px;
  height: 52px;
  border: 1px solid #D9D9D9;
  margin: 10px 0;
  border-radius: 18px;
`;

export const Button = styled.button`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: 18px;
  width: 202px;
  height: 52px;
  color: #ffffff;
  background-color: #1877F2;
  padding: 10px 0;
  border-radius: 18px;
  border-width: 0px;
  margin: 0 auto;
`;

export const Link = styled.a`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #888787;
  margin: 15px;
`;