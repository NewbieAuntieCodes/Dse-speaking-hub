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

export const TwoColumnGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const OptionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin: 20px 0;
`;

export const OptionCard = styled.div`
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    padding: 15px;
    background: #fff;
    text-align: center;

    h4 {
        font-size: 1.1em;
        color: #2d3748;
        margin-bottom: 10px;
    }
    
    p {
        text-align: left;
    }
`;

export const SurveyBox = styled.div`
    border: 1px solid #cbd5e0;
    padding: 20px;
    margin: 20px 0;
    border-radius: 5px;
    background-color: #edf2f7;

    h4 {
        font-size: 1.2em;
        margin-bottom: 15px;
        color: #2d3748;
        text-align: center;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 10px;
    }
    
    p {
        text-align: left;
    }

    ul {
        list-style-type: '• ';
        padding-left: 20px;
        margin-top: 10px;
    }
`;

export const BarChartContainer = styled.div`
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    background: #fff;
    max-width: 600px;
    
    h4 {
        text-align: center;
        margin-bottom: 25px;
        color: #2d3748;
    }
`;

export const BarChart = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 200px;
    border-left: 2px solid #a0aec0;
    border-bottom: 2px solid #a0aec0;
    position: relative;
    padding-left: 10px;
`;

export const Bar = styled.div<{ height: number; color: string }>`
    width: 40px;
    background-color: ${props => props.color};
    height: ${props => props.height}%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 0.9em;
    padding-top: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border-radius: 4px 4px 0 0;
    transition: height 0.5s ease-in-out;
`;

export const BarLabel = styled.span`
    margin-top: 8px;
    font-size: 0.85em;
    color: #4a5568;
    text-align: center;
    width: 80px;
`;

export const BarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
`;


export const DialogueCompletionExercise = styled.div`
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
    padding-bottom: 20px;
    border-bottom: 1px dashed #cbd5e0;

    &:last-child {
        margin-bottom: 0;
        border-bottom: none;
        padding-bottom: 0;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const DialogueText = styled.div`
    flex: 2;
    p {
        margin-bottom: 5px;
        text-align: left;
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
    padding: 10px;
    color: #718096;
    font-style: italic;
`;

export const DialogueAction = styled.div`
    flex: 1;
    background-color: #edf2f7;
    border: 1px solid #e2e8f0;
    padding: 10px;
    border-radius: 5px;
    font-size: 0.9em;
    color: #4a5568;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    p {
        margin: 0;
        font-weight: bold;
        text-align: center;
    }
`;