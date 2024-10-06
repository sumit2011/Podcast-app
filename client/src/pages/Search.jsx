import React from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from "@mui/icons-material/SearchOffOutlined"

const SearchMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px){
  padding: 20px 9px;
  }
`;
const SearchBar = styled.div`
  max-width: 700px;
  display: flex;
  width: 100%;
  border: 1px solid ${({theme}) => theme.text_secondary};
  border-radius: 30px;
  cursor: pointer;
  padding: 12px 16px;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  color: ${({theme}) => theme.text_secondary};

`;
// const SearchOutlinedIcon = styled.div``;


const search = () => {
  return (
    <SearchMain>
      <div style={{
        display: "flex", justifyContent: "center", width: "100%",
      }}>
        <SearchBar>
            <SearchOutlinedIcon  sx={{color: "inherit"}} />
            <input 
            type= "text"
            placeholder='search podcasts'
            style={{
              border:"none",
              outline: "none",
              width: "100%",
              background: "inherit",
              color: "inherit",
            }}
            />
        </SearchBar>
      </div>
        
    </SearchMain>
  )
}

export default search