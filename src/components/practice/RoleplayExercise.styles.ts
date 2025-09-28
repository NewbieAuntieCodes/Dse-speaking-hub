/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled, { keyframes } from 'styled-components';

// --- Practice Navigator Styles ---
export const NavigatorContainer = styled.div`
    background-color: #f0f2f5;
    border-radius: 50px;
    padding: 6px;
    display: inline-flex;
    margin-bottom: 25px;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.06);
    overflow-x: auto;
`;

export const NavigatorTab = styled.button<{ isActive: boolean; themeColor: string }>`
    padding: 12px 30px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    font-weight: bold;
    font-size: 1em;
    border: none;
    background: ${props => props.isActive ? props.themeColor : 'transparent'};
    color: ${props => props.isActive ? 'white' : '#566573'};
    box-shadow: ${props => props.isActive ? `0 4px 12px rgba(0,0,0,0.15)` : 'none'};
    white-space: nowrap;
    flex-shrink: 0;

    &:hover {
        ${props => !props.isActive && `background-color: #e2e8f0;`}
    }
`;


// --- Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components ---

export const ExerciseContainer = styled.div`
    animation: ${fadeIn} 0.5s ease-out;
    padding: 20px;
    background-color: #f0f2f5;
    border-radius: 12px;
    text-align: center;
`;

export const Instruction = styled.div`
    text-align: left;
    font-size: 1.1em;
    color: #566573;
    margin-bottom: 30px;
    line-height: 1.8;
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);

    p {
        margin-bottom: 15px;
    }

    p:last-child {
        margin-bottom: 0;
    }

    strong {
        font-weight: bold;
        color: #2c3e50;
    }

    code {
        background-color: #e9ecef;
        padding: 2px 6px;
        border-radius: 4px;
        font-family: 'Courier New', Courier, monospace;
    }
`;

export const PracticeButton = styled.a<{ themeColor: string }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 15px 35px;
    background: linear-gradient(45deg, ${props => props.themeColor}, ${props => props.themeColor + 'd0'});
    color: white;
    font-size: 1.15em;
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

    span[role="img"] {
        transition: transform 0.3s ease;
        font-size: 1.2em;
    }

    &:hover span[role="img"] {
        transform: translateX(6px);
    }
`;

// --- New Styles for Conversion Exercise ---

export const ConversionExerciseContainer = styled.div`
    margin-top: 40px;
    padding: 25px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    text-align: left;
`;

export const ExerciseTitle = styled.h4`
    font-size: 1.4em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 20px;
    text-align: center;
`;

export const QuestionList = styled.ul`
    list-style: decimal;
    padding-left: 25px;
    margin-top: 20px;
`;

export const QuestionItem = styled.li<{ themeColor: string }>`
    font-size: 1.1em;
    color: #4a5568;
    margin-bottom: 20px;
    line-height: 1.6;

    &::marker {
        font-weight: bold;
        color: ${props => props.themeColor || '#4a90e2'};
    }
`;

const answerFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Answer = styled.div`
    background-color: #e8f5e9;
    color: #2e7d32;
    border-left: 4px solid #4caf50;
    padding: 12px 15px;
    margin-top: 10px;
    border-radius: 0 8px 8px 0;
    font-size: 1em;
    font-weight: 500;
    animation: ${answerFadeIn} 0.4s ease-out;

    &::before {
        content: '💡 Ans: ';
        font-weight: bold;
    }
`;

export const ButtonContainer = styled.div`
    text-align: center;
    margin-top: 25px;
`;

export const CheckButton = styled.button<{ themeColor: string }>`
    padding: 12px 30px;
    background-color: ${props => props.themeColor};
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);

    &:hover {
        transform: translateY(-2px);
        filter: brightness(1.1);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
`;

export const AudioLink = styled.a<{ themeColor: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: #f8f9fa;
    color: #566573;
    padding: 10px 15px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.95em;
    transition: all 0.3s ease;
    border: 1px solid #e9ecef;
    margin-bottom: 20px;

    &:hover {
        border-color: ${props => props.themeColor};
        color: ${props => props.themeColor};
    }

    span[role="img"] {
        color: ${props => props.themeColor};
    }
`;