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

    ul {
        list-style-type: disc;
        list-style-position: inside;
        padding-left: 5px;
        margin-bottom: 0;
    }
`;

export const TipBox = styled(RememberBox)`
    background: #f0f9ff;
    border-left-color: #60a5fa;
    
    h4 {
        color: #2563eb;
    }
`;

export const ArticleBox = styled.div`
    border: 1px solid #cbd5e0;
    padding: 20px;
    margin: 20px 0;
    border-radius: 5px;

    h4 {
        text-align: center;
        font-size: 1.2em;
        margin-bottom: 15px;
        color: #2d3748;
    }
`;

export const InstructionBox = styled.div`
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    padding: 15px;
    border-radius: 8px;
    margin: 20px 0;

    h4 {
        color: #2d3748;
        margin-bottom: 10px;
    }

    p, ul {
        color: #4a5568;
    }
`;

export const DialogueGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
`;

export const DialogueBubble = styled.div`
    background-color: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 15px;
`;

export const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
`;

export const PhotoCard = styled.div`
    text-align: center;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 15px;
    background: #fff;
    
    h4 {
        margin-bottom: 10px;
        color: #4a5568;
    }

    p {
        font-size: 0.9em;
        color: #718096;
    }
`;

export const StructureDiagram = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 20px 0;
    padding: 15px;
    background: #edf2f7;
    border-radius: 8px;
    flex-wrap: wrap;
`;

export const StructureBox = styled.span`
    font-weight: bold;
    color: #2d3748;
`;

export const PlusSign = styled.span`
    font-size: 1.5em;
    color: #a0aec0;
`;

export const AnnotationExercise = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export const AnnotationItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 15px;

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const SpeakerBubble = styled.div`
    background: #f0f9ff;
    border: 1px solid #bee3f8;
    border-radius: 8px;
    padding: 15px;
    flex: 1;

    strong {
        color: #2c5282;
    }
`;

export const AnnotationOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-basis: 250px;
`;

export const AnnotationOption = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const BlankBox = styled.span`
    display: inline-block;
    width: 200px;
    height: 25px;
    border: 1px dashed #a0aec0;
    background-color: #edf2f7;
    margin-right: 8px;
`;