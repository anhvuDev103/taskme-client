import styled from 'styled-components';

const StyledHeaderWrapper = styled.div`
  width: 100%;
  height: 44px;
  background: ${({ theme }) => theme.color.primary};
  padding: 0 16px 0 18px;
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { StyledHeaderWrapper };
