import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  padding: 0 10px 10px;
  flex-direction: column;
  width: 300px;
  position: absolute;
  z-index: 999;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid gray;
`;

export const SaveBtn = styled.button`
  width: 100%;
  margin-top: 10px;
`;
