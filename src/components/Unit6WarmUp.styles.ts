/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled from 'styled-components';

export const WarmUpContainer = styled.div`
    padding: 20px 30px;
    max-width: 900px;
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    h2 {
        text-align: center;
        margin-bottom: 25px;
        color: #2d3748;
    }

    @media (max-width: 768px) {
        padding: 15px;
    }
`;

export const BackButton = styled.button`
    background: transparent;
    border: none;
    color: #4299e1;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 20px;
    padding: 5px;
    display: flex;
    align-items: center;

    &:hover {
        text-decoration: underline;
    }
`;

export const Section = styled.section`
    margin-bottom: 40px;
    
    h3 {
        color: #4a5568;
        border-bottom: 2px solid #e2e8f0;
        padding-bottom: 8px;
        margin-bottom: 15px;
        font-size: 1.5em;
    }

    p {
        color: #718096;
        line-height: 1.6;
        margin-bottom: 10px;
    }

    ol {
        list-style-position: inside;
        padding-left: 10px;
        margin-bottom: 15px;
        color: #4a5568;
        line-height: 1.8;
    }
`;

export const Exercise = styled.div`
    margin-top: 25px;
    padding: 20px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    background-color: #f7fafc;
`;

export const Instruction = styled.p`
    color: #4a5568 !important;
    margin-bottom: 20px !important;
    font-weight: bold;
`;

export const QuestionList = styled.ol`
    list-style-type: decimal;
    padding-left: 20px;
    color: #4a5568;

    li {
        margin-bottom: 10px;
    }
`;

export const WordGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    background-color: #fff;
    border: 1px solid #e2e8f0;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
`;

export const WordBox = styled.span`
    background-color: #e2e8f0;
    color: #2d3748;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.95em;
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
`;

export const FillInTheBlankExercise = styled.div`
    p {
        margin-bottom: 15px;
        line-height: 2;
    }
`;

export const Blank = styled.span`
    display: inline-block;
    width: 150px;
    border-bottom: 1px solid #718096;
    margin: 0 5px;
    vertical-align: bottom;
`;