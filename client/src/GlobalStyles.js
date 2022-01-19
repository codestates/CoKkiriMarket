import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  main {
    margin-top: 50px;
    margin-bottom: 60px;
  }
  
`;

export default GlobalStyles;
