import React from "react";
import SearchBar from "./SearchBar";
import Database from "../../Database/Database";
import { IRecord } from "../../ComponentsTypes";
import styled from "styled-components";

const data:IRecord[]= Database() ;
function Search() {
  return (
    <Div>
     
      <SearchBar placeholder={"Search Customer..."} data={data} />
    </Div>
  );
}
const Div=styled.div`
 justify-content: center;
 align-items: center;
 float: right;
`


export default Search;
