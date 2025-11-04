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

export const Instruction = styled.p`
    color: #4a5568 !important;
    margin-bottom: 20px !important;

    strong {
        color: #2d3748;
        margin-right: 5px;
    }
`;

export const Exercise = styled.div`
    margin-top: 25px;
    padding: 20px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    background-color: #f7fafc;
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

    h4 {
        font-size: 1.1em;
        color: #2d3748;
        margin-bottom: 10px;
    }
`;

export const AthleteCard = styled(OptionCard)`
    text-align: center;
    background: #e2e8f0;
`;

export const DialogueGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
`;

export const DialogueBubble = styled.div`
    background-color: #f0f9ff;
    border: 1px solid #bee3f8;
    border-radius: 10px;
    padding: 15px;
    
    p {
        margin: 0;
    }
`;

export const FillInTheBlank = styled.span`
    display: inline-block;
    border-bottom: 1px solid #718096;
    padding: 0 5px;
    min-width: 80px;
    text-align: center;
    font-weight: bold;
    color: #2c5282;
`;

export const DialogueCompletionExercise = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
`;

export const DialogueLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    padding-bottom: 15px;
    border-bottom: 1px dashed #cbd5e0;

    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
    
    p {
        margin: 0;
        flex: 2;
    }

    div {
        flex: 1;
        background: #edf2f7;
        padding: 10px;
        border-radius: 5px;
        font-size: 0.85em;

        p {
            margin-bottom: 5px !important;
        }

        strong {
            color: #2d3748;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;