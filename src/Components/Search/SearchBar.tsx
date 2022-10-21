/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";
import styled from "styled-components";
import { IRecord } from "../../ComponentsTypes";

// const array:IRecord=[{
//     name:'',
//     phone:0,
//     total:0,
//     history:[{date:'',amount:0,type:'credit'}]
// }]

function SearchBar({
  placeholder,
  data,
}: {
  placeholder: string;
  data: IRecord[];
}) {

  const [searchText, setSearchText] = useState("");
  const [searchTextMatch, setSearchTextMatch] = useState<
    IRecord[] | undefined
  >();

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    if (text) {
      setSearchText(text);
      const newFilter = data.filter((value) => {
        return value.name.toLowerCase().startsWith(text.toLowerCase());
      });
      setSearchTextMatch(newFilter);
    } else {
      setSearchTextMatch(undefined);
      setSearchText("");
    }
  };

  const handleOnclick = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    console.log((event.target as HTMLElement).innerText);
  };

  const clearInput = () => {
    setSearchText("");
    setSearchTextMatch(undefined);
  };

  return (
    <SearchDiv>
      <SearchBarInput>
        <Input
          value={searchText}
          placeholder={placeholder}
          onChange={(e) => handleFilter(e)}
        />
        {searchTextMatch?.length === 1 ? (
          <ClearBtn value="search">Search</ClearBtn>
        ) : (
          <ClearBtn value="clear" onClick={clearInput}>
            Clear
          </ClearBtn>
        )}
        {/* <button onClick={handleOnclickSeach}>search</button> */}
      </SearchBarInput>
      <div>
        {searchTextMatch?.map((value, key) => {
          return (
            <EqulesToSearchText onClick={(e) => handleOnclick(e)}>
              {value.name}
            </EqulesToSearchText>
          );
        })}
      </div>
    </SearchDiv>
  );
}

export default SearchBar;

type StyledProps = {
  value: string;
};
const ClearBtn = styled.p<StyledProps>`
  border-radius: 5px;
  color: ${(props) => (props.value === "clear" ? "red" : "black")};
  margin: 0px;
  &:hover {
    background-color: lightgray;
    font-weight: ${(props) => (props.value === "clear" ? "bolder" : "none")};
    cursor: pointer;
  }
`;

const EqulesToSearchText = styled.p`
  align-items: center;
  display: flex;
  margin: 8px 0px;
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;

const SearchDiv = styled.div`
  height: 150px;
  border-radius: 10px;
  border: none;
  width: 400px;
  float: right;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const SearchBarInput = styled.div`
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  display: inline-flex;
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
`;
