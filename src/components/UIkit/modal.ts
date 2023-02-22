import styled from 'styled-components';

export const StyledModal = styled.div`
  width: 550px;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.radius.large};
  padding: ${({ theme }) => theme.radius.large};
  box-shadow: 0 15px 50px 0 rgb(0 0 0 / 35%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;
