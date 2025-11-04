/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled from 'styled-components';

export const PronunciationContainer = styled.div`
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

    ul {
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

    strong {
        color: #2d3748;
        margin-right: 5px;
    }
`;

export const DialogueContainer = styled.div`
    background-color: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 20px;
    
    p {
        margin-bottom: 10px;
        line-height: 1.6;
    }

    strong {
        color: #2d3748;
    }
`;

export const ExampleBox = styled.div`
    background: #f0f9ff;
    border-left: 4px solid #60a5fa;
    padding: 15px;
    margin: 20px 0;
    border-radius: 4px;

    p {
        margin: 0 0 10px 0;
        line-height: 1.7;
        color: #4a5568;
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

export const SentenceList = styled.ol`
    list-style-type: decimal;
    padding-left: 25px;
    color: #4a5568;

    li {
        margin-bottom: 15px;
        padding-left: 5px;
    }
`;