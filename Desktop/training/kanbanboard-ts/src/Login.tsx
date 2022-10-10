import React from 'react'
import styled from 'styled-components';

function Login() {
  return (
    <Div>
        <LoginDiv>
            <label>user name:</label>
            <input type={'text'}/>
            <label>user name:</label>
            <input type={'text'}/>
        </LoginDiv>
    </Div>
  )
}

export default Login

const LoginDiv = styled.div`
  padding: 7px;
  width: 200px;
  border-radius: 8px;
  box-shadow: 5px 5px gray;
`;

const Div=styled.div`
    align-content: center;
  justify-content: center;
  display: grid;

`