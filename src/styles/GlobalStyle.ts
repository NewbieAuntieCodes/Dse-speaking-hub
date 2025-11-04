/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// Fix: Add a side-effect import to ensure this file is treated as a module, allowing
// TypeScript to correctly apply the module augmentation for 'styled-components'.
import 'styled-components';
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