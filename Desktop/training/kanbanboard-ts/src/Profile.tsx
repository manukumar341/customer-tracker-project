import React from "react";
import styled from "styled-components";

function Profile() {
  return (
    <ProfileDiv>
      <StyledLable htmlFor="fname">Name:{"Manjunath"}</StyledLable>
<br/>
      <StyledLable htmlFor="lname">UserId:{"KB123"}</StyledLable>
      <br/>
      <br/>
      <StyledLogout>logout</StyledLogout>
    </ProfileDiv>
  );
}

export default Profile;

const ProfileDiv=styled.div`
padding: 7px;
    float: right;
    border-radius: 8px;
    box-shadow: 5px 5px gray;
    display: flex;
  gap: 1rem;
  padding: 1rem;
  width: 325px;
  flex-wrap: wrap;
  position: fixed;
  right: 0;
  animation-duration: 4s;
  z-index: 2;
  justify-content: flex-start;
  border-radius: 5px;
  border: solid 1px #555;
  background-color: #eed;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  -o-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`

const StyledLable=styled.label`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    
`
const StyledLogout=styled.button`
      background-color: #5771c5;
  color: white;
  border:none;
  border-radius: 5px;
  padding: 2px;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-size: medium;
`