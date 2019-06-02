// import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import {
  space,
  display,
  height,
  width,
  flexDirection,
  justifyContent,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  alignItems,
  letterSpacing,
  color
} from "styled-system";

import superRetro from "./assets/fonts/superRetro.ttf";

// TYPOGRAPHY
// injectGlobal`
//     @import url(https://use.typekit.net/vhp0zxk.css);

//     @font-face {
//         font-family: 'Luminari';
//         font-style: normal;
//         font-weight: normal;
//         src: local('Luminari'), url('Luminari-Regular.woff') format('woff');
//     }
// `;

export const Style = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
  ${'' /* @import url('https://use.typekit.net/vhp0zxk.css');
  font-family: 'neue-haas-grotesk-display', sans-serif; */}
  
  @font-face {
    font-family: 'superRetro';
    src: url(${superRetro}) format('truetype');
  }
}

html, body { 
  margin: 0;
  height: 100%;
}

#root {
  height: 100%;
}
`;

export const Container = styled.div`
  ${height}
  ${space}
  ${fontFamily}
  ${fontSize}
  
  ${display}
  ${flexDirection}
  ${justifyContent}
  ${alignItems}
  ${letterSpacing}
`;

export const Text = styled.div`
  margin: 0;
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${alignItems}
  ${display}
  ${width}
  ${letterSpacing}
  ${color}
`;

// export const StyledNavLink = styled(NavLink)`
//   text-decoration: none;
//   color: black;
//   &:hover {
//     color: #fe5000;
//   }
//   ${fontWeight}
//   ${fontSize}
//   ${gridColumn}
//   ${alignItems}
// `;

// Inline styles
export const meta = `rel="noopener noreferrer" target='_blank'`;

export const styles = {
  textDecoration: "none",
  color: "black"
};
