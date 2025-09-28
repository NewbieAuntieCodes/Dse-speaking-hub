/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled from 'styled-components';

// Fix: Add styled component exports to resolve module import errors.
export const LessonList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 30px;

    @media (max-width: 768px) {
        gap: 20px;
    }
`;

export const LessonItem = styled.div<{ borderColor: string }>`
    background: white;
    border-radius: 15px;
    padding: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid #e9ecef;
    border-left: 5px solid ${props => props.borderColor};
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const LessonTitleChinese = styled.h3`
    font-size: 1.4em;
    font-weight: bold;
    color: #2d3748;
    margin-bottom: 8px;

    @media (max-width: 768px) {
        font-size: 1.2em;
    }
`;

export const LessonTitleEnglish = styled.p`
    font-size: 1em;
    color: #718096;
    font-style: italic;

    @media (max-width: 768px) {
        font-size: 0.9em;
    }
`;
