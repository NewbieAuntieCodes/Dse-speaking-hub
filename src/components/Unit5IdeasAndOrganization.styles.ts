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

export const HighlightedText = styled.span`
    background-color: #a0aec0;
    color: white;
    padding: 2px 4px;
    border-radius: 3px;
`;

export const CheckboxLabel = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #4a5568;
    text-align: center;
    font-weight: bold;
    margin-right: 8px;
    color: #4a5568;
    line-height: 18px;
`;

export const DialogueGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const DialogueBubble = styled.div`
    background-color: #e2e8f0;
    border-radius: 10px;
    padding: 15px;
    
    p {
        margin: 0;
    }
`;

export const NoteTakingTips = styled.div`
    background: #f0f9ff;
    border-left: 4px solid #60a5fa;
    padding: 15px;
    margin: 20px 0;
    border-radius: 4px;
    
    ul {
        list-style-type: '✓ ';
        padding-left: 20px;
    }
`;

export const PrepStructure = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
    flex-wrap: wrap;
`;

export const PrepStep = styled.div`
    background: #edf2f7;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    font-weight: bold;
    color: #2d3748;
    flex: 1;
    min-width: 120px;
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
`;

export const Notecard = styled.div`
    background-color: #fff;
    border: 1px solid #cbd5e0;
    padding: 20px;
    border-radius: 8px;
    background-image: repeating-linear-gradient(to bottom, transparent, transparent 24px, #e2e8f0 25px, #e2e8f0 25px);
    min-height: 200px;
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
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
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