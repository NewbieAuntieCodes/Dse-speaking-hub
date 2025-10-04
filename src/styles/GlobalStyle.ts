/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { createGlobalStyle } from 'styled-components';
// Fix: Add styled-components module declaration to include theme types.
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainColor: string;
  }
}

// --- Global Styles ---
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Arial', sans-serif;
        background: #f0f2f5;
        min-height: 100vh;
        color: #333;
        overflow-x: hidden;
    }
`;
