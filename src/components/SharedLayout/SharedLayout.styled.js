import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 100px;
  display: flex;
  justify-content: center;
  height: 50px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: white;
`;

export const StyledContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #010101;
  padding-top: 100px;
`;
