import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle, injectGlobal } from "styled-components";
import {
  space,
  display,
  height,
  flexDirection,
  justifyContent,
  gridTemplateColumns,
  gridColumn,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  gridGap
} from "styled-system";

// TYPOGRAPHY
injectGlobal`
    @import url(https://use.typekit.net/vhp0zxk.css);

    @font-face {
        font-family: 'Luminari';
        font-style: normal;
        font-weight: normal;
        src: local('Luminari'), url('Luminari-Regular.woff') format('woff');
    }

    
`;

export const Style = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
}

html, body { 
  margin: 0;
  height: 100%;
}

${
  "" /* a {
  color: black;
  text-decoration: none;
  font-size: 1.75rem;
  &:hover {
    color: #fe5000;
  }
} */
}

#root {
  height: 100%;
  font-family: Arial, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
`;

export const Container = styled.div`
  ${height}
  ${space}
  
  ${display}
  ${flexDirection}
  ${justifyContent}
  ${gridTemplateColumns}
  ${gridColumn}
  ${gridGap}
  ${textAlign}
`;

export const Text = styled.div`
  margin: 0;
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${gridColumn}
  ${textAlign}
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #fe5000;
  }
  ${fontWeight}
  ${fontSize}
  ${gridColumn}
  ${textAlign}
`;

// Inline styles
export const meta = `rel="noopener noreferrer" target='_blank'`;

export const styles = {
  textDecoration: "none",
  color: "black"
};
