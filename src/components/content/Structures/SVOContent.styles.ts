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

export const NextButtonContainer = styled.div`
    text-align: center;
    margin-top: 60px;
    padding-top: 30px;
    border-top: 1px solid #e9ecef;
`;

export const NextButton = styled.button<{ themeColor: string }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 15px 35px;
    background: linear-gradient(45deg, ${props => props.themeColor}, ${props => props.themeColor + 'd0'});
    color: white;
    font-size: 1.1em;
    font-weight: bold;
    text-decoration: none;
    border-radius: 50px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 4px 15px rgba(0,0,0,0.12);
    border: none;
    cursor: pointer;

    &:hover {
        transform: translateY(-4px) scale(1.02);
        box-shadow: 0 8px 25px rgba(0,0,0,0.18);
    }

    .arrow {
        transition: transform 0.3s ease;
        font-weight: bold;
    }

    &:hover .arrow {
        transform: translateX(6px);
    }
`;