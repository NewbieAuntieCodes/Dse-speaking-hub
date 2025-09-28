/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled, { keyframes, css } from 'styled-components';

// --- Helper function ---
const hexToRgb = (hex: string) => {
    let c: any = hex.substring(1).split('');
    if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',');
};


// --- Animations ---
const popIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const shake = keyframes`
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
`;


// --- Styled Components ---

export const ExerciseContainer = styled.div`
    padding: 20px;
    background-color: #f0f2f5;
    border-radius: 12px;
    font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
`;

export const Instruction = styled.p`
    text-align: center;
    font-size: 1.1em;
    color: #566573;
    margin-bottom: 20px;
`;

export const ItemBank = styled.div`
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 25px;
    min-height: 80px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);

    p {
        color: #6c757d;
        font-style: italic;
    }
`;

export const DropZoneContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const DropZone = styled.div<{ isOver: boolean; isIncorrect: boolean; themeColor: string }>`
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    min-height: 220px;
    border: 2px dashed #d0d0d0;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 10px;

    ${props => props.isOver && css`
        border-style: solid;
        border-color: ${props.themeColor};
        background-color: rgba(${hexToRgb(props.themeColor)}, 0.05);
        box-shadow: 0 0 15px rgba(${hexToRgb(props.themeColor)}, 0.2);
    `}

    ${props => props.isIncorrect && css`
        animation: ${shake} 0.5s ease;
        border-style: solid;
        border-color: #e53e3e;
        background-color: #fff5f5;
    `}
`;

export const DropZoneTitle = styled.h4`
    font-size: 1.1em;
    font-weight: bold;
    color: #495057;
    margin-bottom: 10px;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
`;

export const DraggableItem = styled.div<{ isDragging: boolean }>`
    background-color: #fff;
    color: #34495e;
    padding: 12px 18px;
    border-radius: 25px;
    cursor: grab;
    user-select: none;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: all 0.2s ease;
    font-weight: 500;
    animation: ${popIn} 0.3s ease-out;
    text-align: center;

    &:active {
        cursor: grabbing;
    }

    ${props => props.isDragging && css`
        opacity: 0.5;
        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        transform: scale(1.05);
    `}
`;

export const DroppedItem = styled.div<{ themeColor: string }>`
    background-color: ${props => `rgba(${hexToRgb(props.themeColor)}, 0.15)`};
    color: ${props => props.themeColor};
    border: 1px solid ${props => `rgba(${hexToRgb(props.themeColor)}, 0.3)`};
    padding: 12px 18px;
    border-radius: 8px;
    cursor: default;
    font-weight: 500;
    animation: ${popIn} 0.3s ease-out;
    display: flex;
    align-items: center;
    text-align: left;
    gap: 8px;

    &::before {
        content: '✓';
        color: ${props => props.themeColor};
        font-weight: bold;
    }
`;

export const CompletionMessage = styled.div`
    text-align: center;
    padding: 30px;
    background-color: #e8f5e9;
    border: 2px solid #4caf50;
    color: #2e7d32;
    border-radius: 10px;
    animation: ${popIn} 0.5s ease;

    h4 {
        font-size: 1.4em;
        margin-bottom: 10px;
    }

    p {
        font-size: 1em;
    }
`;