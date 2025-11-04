/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled from 'styled-components';

export const Unit2PronunciationContainer = styled.div`
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

export const SoundDiagramContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px 0;
`;

export const SoundDiagram = styled.div`
    text-align: center;
    max-width: 150px;

    img {
        width: 100%;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
    }

    p {
        margin-top: 5px;
        font-size: 0.9em;
        color: #4a5568;
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

export const WordList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const WordPair = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
`;

export const WordBox = styled.span`
    background-color: #e2e8f0;
    color: #2d3748;
    padding: 8px 15px;
    border-radius: 8px;
    font-size: 0.95em;
    text-align: center;
`;

export const QuoteList = styled.ol`
    list-style-type: decimal;
    padding-left: 20px;

    li {
        margin-bottom: 15px;
        color: #4a5568;
        line-height: 1.6;
    }
`;

export const PausedText = styled.p`
    font-size: 1.1em;
    line-height: 1.8;
`;
