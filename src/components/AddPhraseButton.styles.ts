/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled from 'styled-components';

export const AddButton = styled.button`
    position: absolute;
    background: #2d3748;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 999;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: transform 0.1s ease-in-out;

    &:hover {
        background: #4a5568;
        transform: scale(1.05);
    }
`;
