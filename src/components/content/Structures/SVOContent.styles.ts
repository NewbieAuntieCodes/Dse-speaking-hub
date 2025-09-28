/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled from 'styled-components';

// Fix: Add styled component exports to resolve module import errors.
export const BackButton = styled.button<{ themeColor: string }>`
    background: none;
    border: none;
    color: ${props => props.themeColor || '#4a90e2'};
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 25px;
    display: inline-flex;
    align-items: center;
    transition: opacity 0.2s ease-in-out;

    &:hover {
        opacity: 0.7;
    }
`;

export const LessonTitle = styled.h2`
    font-size: 2.5em;
    font-weight: bold;
    color: #2d3748;
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 3px solid #f1f3f4;

    @media (max-width: 768px) {
        font-size: 2em;
    }
`;
