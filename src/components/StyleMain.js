import styled from 'styled-components';

export const DivComp1 = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: left;
  padding-left: 20px; 
`;

export const Brand = styled.h3`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 800;
  font-size: 25px;
  color: #1877F2;
  text-align: center;
  justify-content: center;
`;

export const Label = styled.p`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  height: 18px;
  color: #888787;
  margin-left: 0px;
`;

export const InputContainer = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  width: 320px; 
  height: 400px;
  border-radius: 18px;
  display: flex;
  flex-direction: column-reverse;
`;

export const Input = styled.input`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  height: 18px;
  color: #888787;
  border-width: 0px;
`;

export const Container = styled.div`
  padding: 10px;
  width: 320px; 
  height: 215px;
  border-radius: 18px;
  margin: 0px;
  border: 1px solid #ddd;
  

`;

export const HintContainer = styled.div`
  padding: 10px;
  width: 320px; 
  height: 215px;
  border-radius: 18px;
  margin: 0px;
  background-color: #D9D9D9;

  h3{
    font-family: 'Fira Sans', sans-serif;
    font-weight: 800;
    color: 464141;
  }

  p{
    font-family: 'Fira Sans', sans-serif;
    font-weight: 300;
    
  }

`;

