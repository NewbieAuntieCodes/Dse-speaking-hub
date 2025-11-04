/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// Fix: Removed the redundant side-effect import for 'styled-components'.
// The file is already treated as a module due to other imports and exports,
// and this import was causing a module resolution error for the augmentation.
import { createGlobalStyle } from 'styled-components';

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