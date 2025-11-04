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

        &.do-dont-list {
            list-style-type: none;
            padding-left: 0;

            li {
                padding-left: 2em;
                position: relative;
                margin-bottom: 0.5em;

                &::before {
                    position: absolute;
                    left: 0;
                    font-size: 1.2em;
                }
            }

            &.do li::before {
                content: '✅';
            }

            &.dont li::before {
                content: '❌';
            }
        }
    }
`;

export const StepDiagram = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0;
    gap: 10px;
    flex-wrap: wrap;
`;

export const StepBox = styled.div`
    background: #edf2f7;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    color: #4a5568;
    flex: 1;
    min-width: 150px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

export const Arrow = styled.span`
    font-size: 2em;
    color: #a0aec0;
`;

export const ConversationContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
`;

export const ConversationBubble = styled.div`
    background-color: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 15px;
    flex: 1;
    min-width: 250px;

    p {
        margin: 0;
        line-height: 1.5;
    }
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

export const ArticleBox = styled.div`
    border: 1px solid #cbd5e0;
    padding: 20px;
    margin: 20px 0;
    border-radius: 5px;

    h5 {
        text-align: center;
        font-size: 1.2em;
        margin-bottom: 15px;
        color: #2d3748;
    }
`;

export const FillInTheBlankExercise = styled.div`
    background-color: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 20px;
`;

export const BlankBox = styled.span`
    display: inline-block;
    width: 200px;
    height: 30px;
    border: 1px dashed #a0aec0;
    background-color: #edf2f7;
    margin: 0 5px;
    vertical-align: middle;
`;