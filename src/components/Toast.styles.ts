/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
`;

export const ToastContainer = styled.div<{ visible: boolean }>`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1002;
    background-color: #2d3748;
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    font-size: 1em;
    font-weight: 500;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    animation: ${props => props.visible
        ? css`${fadeIn} 0.3s ease-out forwards`
        : css`${fadeOut} 0.3s ease-in forwards`
    };
`;
