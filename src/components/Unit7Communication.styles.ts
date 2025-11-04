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

export const StrategyList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
`;

export const StrategyItem = styled.div`
    background: #f7fafc;
    border-left: 4px solid #4299e1;
    padding: 15px;
    border-radius: 4px;

    h4 {
        color: #2c5282;
        margin-bottom: 10px;
        font-size: 1.1em;
    }

    p {
        font-style: italic;
        color: #4a5568;
        margin: 0;
    }
`;

export const DialogueCompletionExercise = styled.div`
    background-color: #fff;
    border: 1px solid #a0aec0;
    border-radius: 10px;
    padding: 40px 30px 20px 30px;
    margin-top: 20px;
    background-image: linear-gradient(#e2e8f0 1px, transparent 1px);
    background-size: 100% 2.5em;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 15px;
        left: 0;
        right: 0;
        height: 10px;
        background:
            radial-gradient(circle at 15% 5px, #a0aec0 3px, transparent 4px),
            radial-gradient(circle at 30% 5px, #a0aec0 3px, transparent 4px),
            radial-gradient(circle at 45% 5px, #a0aec0 3px, transparent 4px),
            radial-gradient(circle at 60% 5px, #a0aec0 3px, transparent 4px),
            radial-gradient(circle at 75% 5px, #a0aec0 3px, transparent 4px),
            radial-gradient(circle at 90% 5px, #a0aec0 3px, transparent 4px);
        background-repeat: no-repeat;
    }
`;

export const DialogueLine = styled.div`
    display: flex;
    align-items: flex-start;
    min-height: 7.5em; /* 3 lines */
    gap: 20px;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
        min-height: auto;
        margin-bottom: 1.5em;
    }
`;

export const SpeakerLabel = styled.strong`
    font-size: 1.2em;
    color: #2d3748;
    line-height: 2.5em;
    padding-right: 10px;
`;

export const DialogueContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 0.6em;
`;

export const DialogueText = styled.div`
    flex-grow: 1;
    min-height: 5em;
`;

export const DialogueHint = styled.div`
    background-color: #fffbef;
    border: 1px dashed #f6e05e;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 0.9em;
    color: #b7791f;
    margin-left: auto;
    align-self: center;
    width: fit-content;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

     @media (max-width: 768px) {
        position: static;
        transform: none;
        align-self: flex-start;
        margin-left: 2em;
        margin-top: 0.5em;
    }
`;

export const RolePlayDialogue = styled.div`
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    padding: 20px;
    border-radius: 8px;

    p {
        margin-bottom: 15px;
    }

    strong {
        color: #2d3748;
    }
`;

export const ConjunctionBox = styled.span`
    background: #e2e8f0;
    color: #2d3748;
    padding: 3px 8px;
    border-radius: 5px;
    font-weight: bold;
    font-family: 'Courier New', monospace;
`;