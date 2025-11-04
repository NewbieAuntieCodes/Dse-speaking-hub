/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { createGlobalStyle } from 'styled-components';

// Fix: Removed the unused 'styled-components' module augmentation which was causing a 'module not found' error.
// The DefaultTheme was not used anywhere in the application.

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