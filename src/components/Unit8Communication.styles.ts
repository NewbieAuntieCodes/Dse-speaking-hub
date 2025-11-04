/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled from 'styled-components';

export const CommunicationContainer = styled.div`
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

    h4 {
        color: #4a5568;
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 1.2em;
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
    font-weight: bold;
`;

export const DialogueGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 20px;
`;

export const DialogueBubble = styled.div`
    background-color: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 15px;
    position: relative;

    p {
        margin: 0;
    }
    
    strong {
        color: #2d3748;
    }
`;

export const NoteCard = styled.div`
    background: #fff;
    border: 1px solid #a0aec0;
    padding: 20px;
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);

    h4 {
        color: #4a5568;
        margin-bottom: 15px;
        text-align: center;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 10px;
    }

    ul {
        list-style-type: '○ ';
        padding-left: 20px;
        margin: 0;
    }
`;


export const FlowChart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin: 30px 0;
`;

export const FlowChartStep = styled.div`
    background: #edf2f7;
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    padding: 15px 20px;
    width: 80%;
    max-width: 600px;
    text-align: left;

    p {
        margin-bottom: 5px !important;
        font-weight: bold;
        color: #2d3748;
    }

    ul {
        list-style: '• ';
        padding-left: 20px;
        margin: 0;
    }
`;

export const FlowChartArrow = styled.div`
    font-size: 1.8em;
    color: #a0aec0;
    font-weight: bold;
`;


export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 0.9em;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    border-radius: 8px;
    overflow: hidden;
`;

export const Th = styled.th`
    background-color: #edf2f7;
    color: #2d3748;
    padding: 12px 15px;
    text-align: left;
    font-weight: 600;
`;

export const Td = styled.td`
    padding: 12px 15px;
    border-bottom: 1px solid #e2e8f0;
    color: #4a5568;
    vertical-align: top;
`;

export const QuestionTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background-color: #e2e8f0;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    overflow: hidden;
    margin-top: 20px;

    div {
        background-color: #fff;
        padding: 15px;
        min-height: 150px;
    }
    
    h4 {
        margin: 0 0 10px 0;
        font-size: 1.1em;
        color: #2d3748;
        text-align: center;
    }
`;