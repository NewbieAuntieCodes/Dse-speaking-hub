/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { createGlobalStyle } from 'styled-components';

// Fix: The side-effect import for 'styled-components' is not necessary for module augmentation
// as this file is already a module due to other imports/exports. Removing the redundant import.
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