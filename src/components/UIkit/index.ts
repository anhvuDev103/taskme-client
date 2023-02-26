import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  ColorProps,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  BorderProps,
  FlexboxProps,
  GridProps,
  color,
  space,
  typography,
  layout,
  border,
  flexbox,
  grid,
  variant,
} from 'styled-system';

//TYPES
interface StyleProps
  extends ColorProps,
    SpaceProps,
    TypographyProps,
    LayoutProps,
    BorderProps,
    FlexboxProps,
    GridProps {}

interface StyleButton extends StyleProps {
  variant?: string;
  hoverColor?: string;
  fullWidth?: boolean;
  transparentBg?: boolean;
}

//BUTTON
// const buttonVariant = ({ theme }: any) =>
//   variant({
//     variants: {
//       outline: {
//         border: '1px solid #dddddd',
//       },
//       primary: {
//         backgroundColor: theme.color.primary,
//         color: '#fff',

//         '&:hover': {
//           backgroundColor: '#b03d32',
//         },
//       },
//       circle: {
//         width: '17px',
//         height: '17px',
//         borderRadius: theme.radius.full,
//       },
//     },
//   });

// export const StyledButton = styled('button')<StyleButton>`
//   width: ${({ fullWidth }) => (fullWidth ? 'fit-content' : '28px')};
//   height: 28px;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;

//   font-size: 12px;
//   padding: 0;
//   color: ${({ theme }) => theme.color.gray};
//   border-radius: ${({ theme }) => theme.radius.tiny};
//   background-color: ${({ transparentBg }) => (transparentBg ? 'transparent' : '#e5e5e5')};
//   border: none;
//   outline: none;
//   cursor: pointer;

//   &:hover {
//     background-color: ${({ theme, hoverColor }) => hoverColor || theme.color.mediumGray};
//   }

//   ${color}
//   ${space}
//   ${typography}
//   ${layout}
//   ${flexbox}
//   ${buttonVariant}
// `;

//LAYOUTS
export const Box = styled.div<StyleProps>`
  ${color}
  ${space}
  ${typography}
  ${layout}
  ${border}
  ${flexbox}
  ${grid}
`;

export const Flex = styled(Box)<StyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//TYPOGRAPHY
export const Text = styled.div<StyleProps>`
  margin: 0;
  ${color}
  ${space}
  ${typography}
  ${layout}
  ${flexbox}
`;

export const Input = styled.input<StyleProps>`
  ${color}
  ${space}
  ${typography}
  ${layout}
  ${flexbox}
`;

//COMPONENTS
export const PageLayout = styled.div`
  width: 100%;
  max-width: 800px;
  /* padding: 35px 55px; */
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.text};
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  width: 100%;
`;

export const Keycap = styled.span`
  width: 16px;
  height: 16px;
  margin: 0 3px;
  font-size: 12px;
  line-height: 16px;
  background-color: #666;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
