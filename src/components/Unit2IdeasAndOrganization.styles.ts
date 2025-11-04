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
    
    h3, h4 {
        color: #4a5568;
        border-bottom: 2px solid #e2e8f0;
        padding-bottom: 8px;
        margin-bottom: 15px;
        font-size: 1.5em;
    }

    h4 {
        font-size: 1.3em;
        border-bottom: none;
        padding-bottom: 0;
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

export const MindMapGrid = styled.div`
    display: grid;
    grid-template-areas:
        "topleft . topright"
        ". center ."
        "bottomleft bottomcenter bottomright";
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 20px;
    align-items: center;
    justify-items: center;
    margin: 30px 0;

    @media (max-width: 900px) {
        grid-template-areas:
            "center"
            "topleft"
            "topright"
            "bottomleft"
            "bottomright"
            "bottomcenter";
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`;

export const MindMapCenter = styled.div`
    grid-area: center;
    background: #4a5568;
    color: white;
    padding: 20px;
    border-radius: 50%;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MindMapNode = styled.div`
    background: #edf2f7;
    border: 2px solid #cbd5e0;
    border-radius: 15px;
    padding: 15px;
    width: 220px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);

    h4 {
        color: #2d3748;
        font-size: 1.1em;
        margin-bottom: 10px;
        border-bottom: none;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        font-size: 0.9em;
        li {
            margin-bottom: 5px;
            color: #4a5568;
        }
    }

    @media (max-width: 900px) {
        width: 100%;
        max-width: 400px;
    }
`;

export const NodeTopLeft = styled(MindMapNode)` grid-area: topleft; justify-self: end; @media (max-width: 900px) { justify-self: center; }`;
export const NodeTopRight = styled(MindMapNode)` grid-area: topright; justify-self: start; @media (max-width: 900px) { justify-self: center; }`;
export const NodeBottomLeft = styled(MindMapNode)` grid-area: bottomleft; justify-self: end; @media (max-width: 900px) { justify-self: center; }`;
export const NodeBottomRight = styled(MindMapNode)` grid-area: bottomright; justify-self: start; @media (max-width: 900px) { justify-self: center; }`;
export const NodeBottomCenter = styled(MindMapNode)` grid-area: bottomcenter;`;

export const InstructionBox = styled.div`
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    padding: 15px;
    border-radius: 8px;
    margin: 20px 0;

    h4 {
        color: #2d3748;
        margin-bottom: 10px;
        border-bottom: none;
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
    background-color: #f7fafc;

    h4 {
        font-size: 1.2em;
        margin-bottom: 15px;
        color: #2d3748;
        text-align: center;
        border-bottom: none;
    }
`;

export const NoteCard = styled.div`
    background: #fffbef;
    border: 1px solid #f6e05e;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);

    h4 {
        color: #b7791f;
        margin-bottom: 15px;
        font-size: 1.1em;
        border-bottom: 1px solid #fef3c7;
        padding-bottom: 10px;
    }
    
    h5 {
        color: #4a5568;
        font-weight: bold;
        margin-top: 15px;
        margin-bottom: 5px;
    }

    p > strong {
        color: #4a5568;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin: 0;

        li {
            margin-bottom: 10px;
            padding-left: 20px;
            position: relative;
            
            &::before {
                content: attr(data-prefix);
                position: absolute;
                left: 0;
                font-weight: bold;
                color: #b7791f;
            }
        }
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

export const NoteGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
`;

export const EmptyNote = styled.div`
    border: 2px dashed #a0aec0;
    border-radius: 8px;
    padding: 15px;
    min-height: 200px;
    background-color: #fff;

    p {
        color: #4a5568;
        font-weight: bold;
        text-align: center;
        background: #f7fafc;
        padding: 5px;
        border-radius: 5px;
    }
`;

export const AnticipationMindMap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    padding: 20px;
    margin: 20px auto;
    max-width: 600px;
    position: relative;
`;

export const AnticipationNode = styled.div`
    background: #e2e8f0;
    color: #4a5568;
    padding: 12px 18px;
    border-radius: 25px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    font-size: 0.95em;
    text-align: center;
`;

export const ResponseFlowChart = styled.div`
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
    }

    em {
        color: #718096;
        font-size: 0.9em;
    }
`;

export const FlowChartArrow = styled.div`
    font-size: 1.8em;
    color: #a0aec0;
    font-weight: bold;
`;

export const TimeManagementContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 30px;
    flex-wrap: wrap;
`;

export const PieChart = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: conic-gradient(
        #4a5568 0% 70%,        /* 7-8 minutes */
        #a0aec0 70% 90%,     /* 1-2 minutes */
        #4299e1 90% 100%       /* 1 minute */
    );
`;

export const PieChartLabels = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
`;

export const PieChartLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9em;

    span:first-child {
        width: 15px;
        height: 15px;
        border-radius: 3px;
        display: inline-block;
    }
`;

export const ExamPracticeNotecard = styled(NoteCard)`
    background: #f7fafc;
    border-color: #e2e8f0;
    max-width: 500px;
    margin: 20px auto;

    h4 {
        color: #2d3748;
        border-bottom-color: #e2e8f0;
        text-align: center;
        font-weight: bold;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }

    p {
        text-align: center;
        color: #4a5568;
        margin-bottom: 15px;
        font-size: 1.1em;
        line-height: 1.4;
    }
`;

export const IndividualResponseList = styled.ol`
    list-style-type: decimal;
    padding-left: 20px;
    color: #4a5568;
    max-width: 650px;
    margin: 20px auto;

    li {
        margin-bottom: 10px;
        padding-left: 5px;
        line-height: 1.6;
    }
`;