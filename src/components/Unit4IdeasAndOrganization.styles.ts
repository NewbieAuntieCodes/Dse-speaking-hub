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

export const AdGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 20px 0;
    border: 1px solid #cbd5e0;
    padding: 20px;
    border-radius: 8px;
    background: #fff;
`;

export const AdCard = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    img {
        width: 150px;
        height: 100px;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    div {
        flex: 1;
    }

    h4 {
        color: #2d3748;
        margin-bottom: 5px;
        font-size: 1.2em;
    }

    p {
        margin: 0;
        font-size: 0.95em;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const VisualDesignMindMap = styled.div`
    display: grid;
    grid-template-areas:
        "elements . styles"
        ". center ."
        "effects . text";
    grid-template-columns: 1fr auto 1fr;
    gap: 20px;
    align-items: center;
    margin: 30px 0;
    
    @media (max-width: 768px) {
        grid-template-areas:
            "center"
            "elements"
            "styles"
            "effects"
            "text";
        grid-template-columns: 1fr;
    }
`;

export const CenterNode = styled.div`
    grid-area: center;
    background: #4a5568;
    color: white;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
`;

export const MindMapBubble = styled.div`
    background: #edf2f7;
    border-radius: 10px;
    padding: 15px;
    
    h4 {
        font-size: 1.1em;
        color: #2d3748;
        margin-bottom: 10px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: 0.9em;
        li {
            margin-bottom: 5px;
        }
    }
    
    &.elements { grid-area: elements; justify-self: end; }
    &.styles { grid-area: styles; justify-self: start; }
    &.effects { grid-area: effects; justify-self: end; }
    &.text { grid-area: text; justify-self: start; }

    @media (max-width: 768px) {
        justify-self: stretch !important;
    }
`;

export const NoteTakingMindMap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 15px;
    position: relative;
    padding: 30px 0;

    &::before, &::after {
        content: '';
        position: absolute;
        background: #cbd5e0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &::before { /* horizontal line */
        width: 100%;
        height: 2px;
    }
    &::after { /* vertical line */
        height: 100%;
        width: 2px;
    }
`;

export const MindMapQuadrant = styled.div`
    border: 2px dashed #a0aec0;
    border-radius: 8px;
    padding: 15px;
    min-height: 150px;
    background-color: #fff;
    z-index: 1;

    p {
        color: #4a5568;
        font-weight: bold;
        text-align: center;
    }
`;

export const MindMapCenterLabel = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #4a5568;
    color: white;
    padding: 10px 15px;
    border-radius: 8px;
    z-index: 2;
    font-weight: bold;
`;

export const WordBank = styled.div`
    background: #e2e8f0;
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
    font-size: 0.9em;

    p {
        margin: 0;
        line-height: 1.8;
    }

    strong {
        color: #2d3748;
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
    width: 100%;
    max-width: 600px;
    text-align: center;

    h4 {
        margin-bottom: 10px;
        color: #2d3748;
    }
    
    p {
        margin: 0;
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
        list-style-type: '• ';
        padding-left: 15px;
        margin-bottom: 0;
    }
`;

export const Notecard = styled.div`
    background: #fff;
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    padding: 25px;
    margin: 20px auto;
    max-width: 500px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);

    h4 {
        text-align: center;
        margin-bottom: 20px;
    }

    p {
        font-weight: bold;
        margin-bottom: 10px;
    }

    .blank-space {
        min-height: 60px;
        border-bottom: 1px solid #e2e8f0;
        margin-bottom: 20px;
    }
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