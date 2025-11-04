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
    }

    p {
        strong {
            color: #2d3748;
            font-weight: 600;
        }
    }
`;

export const ConversationBubble = styled.div`
    background-color: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 15px;
    margin-top: 20px;

    p {
        margin: 0;
        line-height: 1.5;
    }
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
        list-style-type: '- ';
        padding-left: 20px;
        margin: 0;
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

export const NoteGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
`;

export const EmptyNote = styled.div`
    border: 1px dashed #a0aec0;
    border-radius: 8px;
    padding: 15px;
    min-height: 150px;
    background-color: #fff;

    p {
        color: #4a5568;
        font-weight: bold;
    }
`;

export const AbbreviationList = styled.ul`
    list-style-type: none;
    padding-left: 0;
    column-count: 3;

    @media (max-width: 768px) {
        column-count: 2;
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

    ul {
        list-style-type: disc;
        list-style-position: inside;
        padding-left: 5px;
        margin-bottom: 0;
    }
`;

export const AIFeatureBox = styled.div`
    margin-top: 25px;
    padding: 20px;
    border: 1px dashed #4299e1;
    border-radius: 8px;
    background-color: #f0f9ff;
    text-align: center;

    h4 {
        color: #2d3748;
        margin-bottom: 8px;
    }

    p {
        margin-bottom: 15px;
    }
`;

export const GenerateButton = styled.button`
    background: linear-gradient(90deg, #4a90e2, #50e3c2);
    color: white;
    border: none;
    border-radius: 25px;
    padding: 12px 25px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;

    &:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const LoadingText = styled.p`
    color: #2d3748;
    font-style: italic;
`;

export const ErrorMessage = styled.p`
    color: #e53e3e;
    font-weight: bold;
`;

export const ResultsContainer = styled.div`
    margin-top: 20px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    text-align: left;

    h5 {
        color: #2d3748;
        margin-bottom: 15px;
        font-size: 1.1em;
        text-align: center;
    }

    ul {
        list-style-type: '💡';
        padding-left: 25px;
    }

    li {
        margin-bottom: 10px;
        padding-left: 10px;
    }
`;