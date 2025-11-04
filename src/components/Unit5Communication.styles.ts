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

    h4 {
        color: #4a5568;
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 1.2em;
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

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 0.9em;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    border-radius: 8px;
    overflow: hidden;

    ul {
        padding-left: 15px;
        margin: 5px 0;
    }
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
`;

export const SentenceList = styled.ol`
    list-style-type: decimal;
    padding-left: 25px;
    color: #4a5568;

    li {
        margin-bottom: 15px;
        padding-left: 5px;
        border: 1px solid #e2e8f0;
        padding: 10px;
        border-radius: 5px;
        background: #fff;
    }
`;

export const PracticePointsContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const PracticePointCard = styled.div<{ isFor: boolean }>`
    background: #fff;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.08);
    border-left: 5px solid;
    border-left-color: ${props => props.isFor ? '#34d399' : '#f87171'};

    h4 {
        font-size: 1.1em;
        color: #2d3748;
        margin-bottom: 15px;
    }

    p {
        margin-bottom: 10px !important;
        font-size: 0.95em;
        line-height: 1.5 !important;
        color: #4a5568 !important;

        strong {
            font-weight: 600;
            color: #2d3748;
        }
    }
`;


export const ForAgainstTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const ForAgainstColumn = styled.div`
    h4 {
        text-align: center;
        background-color: ${(props: { color?: string }) => props.color || '#edf2f7'};
        color: #2d3748;
        padding: 8px;
        border-radius: 5px;
    }
    ol {
        list-style: none;
        padding: 0;
    }
    li {
        background: #fff;
        border: 1px solid #e2e8f0;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
    }
`;

export const MindMapContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 200px 1fr;
    grid-template-rows: auto auto;
    gap: 20px;
    align-items: center;
    margin: 30px auto;
    position: relative;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`;

export const MindMapCenter = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    background: #4a5568;
    color: white;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    
    @media (max-width: 768px) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        margin-bottom: 20px;
    }
`;

export const MindMapNode = styled.div`
    border: 2px dashed #a0aec0;
    border-radius: 8px;
    padding: 15px;
    min-height: 100px;
    background-color: #fff;
    
    &.top-left { grid-column: 1/2; grid-row: 1/2; justify-self: end; }
    &.top-right { grid-column: 3/4; grid-row: 1/2; justify-self: start; }
    &.bottom-left { grid-column: 1/2; grid-row: 2/3; justify-self: end; }
    &.bottom-right { grid-column: 3/4; grid-row: 2/3; justify-self: start; }

    @media (max-width: 768px) {
        grid-column: 1 / 2 !important;
        justify-self: stretch !important;
        grid-row: auto !important;
    }
`;

export const WordGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    background-color: #e2e8f0;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
`;

export const WordBox = styled.span`
    background-color: #fff;
    color: #2d3748;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.95em;
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
`;

export const RememberBox = styled.div`
    margin-top: 20px;
    padding: 15px;
    background: #fffbef;
    border-left: 4px solid #f6e05e;
    border-radius: 4px;

    h4 {
        color: #d69e2e;
        margin-bottom: 10px;
    }
`;

export const InstructionBox = styled.div`
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;

    h4 {
        color: #2d3748;
        margin-bottom: 15px;
        font-size: 1.1em;
        font-weight: bold;
    }
`;

export const ArticleBox = styled.div`
    border: 1px solid #cbd5e0;
    padding: 20px;
    margin: 20px 0;
    border-radius: 5px;
    background-color: #f7fafc;

    h4 {
        font-size: 1.2em;
        margin-bottom: 15px;
        color: #2d3748;
        text-align: center;
    }
    
    table {
        width: 100%;
        text-align: center;
        font-size: 1.2em;
        margin-top: 15px;
        color: #4a5568;
        
        td {
            padding: 10px;
        }
    }
`;

export const DialogueCompletion = styled.div`
    margin-top: 20px;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 20px;
`;

export const DialogueLine = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    align-items: flex-start;

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const DialogueText = styled.div`
    flex: 2;
    p {
        margin-bottom: 5px;
    }
    strong {
        color: #2d3748;
    }
`;

export const DialogueBlank = styled.div`
    border: 1px dashed #a0aec0;
    min-height: 50px;
    border-radius: 5px;
    background-color: #f7fafc;
    margin-top: 5px;
`;

export const DialogueAction = styled.div`
    flex: 1;
    background-color: #edf2f7;
    border: 1px solid #e2e8f0;
    padding: 10px;
    border-radius: 5px;
    font-size: 0.9em;
    color: #4a5568;
    
    p {
        margin: 0;
        font-weight: bold;
    }
`;