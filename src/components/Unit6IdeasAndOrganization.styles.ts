/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled from 'styled-components';

export const IdeasContainer = styled.div`
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
        text-align: left;
    }

    ul {
        list-style-position: inside;
        padding-left: 10px;
        margin-bottom: 15px;
        color: #4a5568;
        line-height: 1.8;
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
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 0.9em;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
`;

export const Th = styled.th`
    background-color: #edf2f7;
    color: #2d3748;
    padding: 12px 15px;
    text-align: center;
    font-weight: 600;
`;

export const Td = styled.td`
    padding: 12px 15px;
    border: 1px solid #e2e8f0;
    color: #4a5568;
`;

export const NoteCard = styled.div`
    background: #fffbef;
    border-left: 4px solid #f6e05e;
    border-radius: 4px;
    padding: 20px;
    margin: 20px 0;

    h4 {
        color: #d69e2e;
        margin-bottom: 15px;
    }

    ul {
        list-style-type: none;
        padding-left: 0;
        margin: 0;
    }
    
    li {
        margin-bottom: 8px;
    }
`;

export const RememberBox = styled.div`
    margin-top: 20px;
    padding: 15px;
    background: #f0fdf4;
    border-left: 4px solid #34d399;
    border-radius: 4px;

    h4 {
        color: #047857;
        margin-bottom: 10px;
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

export const WordBank = styled.div`
    background: #e2e8f0;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    font-size: 0.9em;
    line-height: 1.7;
    
    p {
        margin-bottom: 5px !important;
    }
`;

export const Notecard = styled.div`
    background-color: #fff;
    border: 1px solid #cbd5e0;
    padding: 20px;
    border-radius: 8px;
    background-image: repeating-linear-gradient(to bottom, transparent, transparent 24px, #e2e8f0 25px, #e2e8f0 25px);
    min-height: 200px;
    
    p {
        font-weight: bold;
        background: #fff;
        padding-right: 10px;
        display: inline-block;
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
    max-width: 500px;
    text-align: center;

    p {
        margin-bottom: 5px !important;
        font-weight: bold;
        color: #2d3748;
        text-align: center;
    }

    ul {
       list-style: none;
       padding: 0;
       margin: 0;
       font-style: italic;
       color: #718096;
    }
`;

export const FlowChartArrow = styled.div`
    font-size: 1.8em;
    color: #a0aec0;
    font-weight: bold;
`;

export const IndividualResponseList = styled.ol`
    list-style-type: decimal;
    padding-left: 20px;
    color: #4a5568;

    li {
        margin-bottom: 10px;
        padding-left: 5px;
        line-height: 1.6;
    }
`;