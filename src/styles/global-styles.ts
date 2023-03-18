import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
      ${reset}
      * {
        box-sizing: border-box;
        margin:auto;
        outline: none;
      }
      button{
        border:none;
        cursor: pointer;
      }
    `;
export default GlobalStyle;
