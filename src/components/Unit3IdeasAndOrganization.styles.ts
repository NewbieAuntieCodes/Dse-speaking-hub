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

export const OptionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 20px 0;
`;

export const OptionCard = styled.div`
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    padding: 15px;
    background: #fff;
    min-height: 120px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e2e8f0;

    h5 {
        font-size: 1.1em;
        color: #2d3748;
        margin: 0;
    }
`;

export const NoteTakingExample = styled.div`
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;

    p {
        font-size: 1.05em;
    }

    hr {
        border: none;
        border-top: 1px solid #e2e8f0;
        margin: 15px 0;
    }

    div {
        margin-bottom: 20px;
        padding-left: 15px;
        border-left: 3px solid #cbd5e0;

        &:last-child {
            margin-bottom: 0;
        }
    }

    h5 {
        color: #4a5568;
        font-weight: normal;
        margin-bottom: 10px;
    }
    
    p strong {
         color: #2d3748;
    }

    ul {
        list-style-type: '• ';
        padding-left: 20px;
        margin-bottom: 0;

        li {
            padding-left: 5px;
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
    background-color: #e2e8f0;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
`;

export const WordBox = styled.span`
    display: inline-block;
    background-color: #fff;
    color: #2d3748;
    padding: 5px 12px;
    margin: 4px;
    border-radius: 15px;
    font-size: 0.9em;
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
`;

export const Notecard = styled.div`
    background: #fff;
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    padding: 25px;
    margin-top: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    background-image: repeating-linear-gradient(to bottom, transparent, transparent 24px, #e2e8f0 25px, #e2e8f0 25px);

    h4 {
        text-align: center;
        margin-bottom: 20px;
        background: #fff;
        display: inline-block;
        padding-right: 10px;
    }

    p {
        font-weight: bold;
        background: #fff;
        display: inline-block;
        padding-right: 10px;
    }

    .blank-space {
        min-height: 80px;
        &.small {
            min-height: 50px;
        }
    }
`;

export const ResponseFlowChart = styled.div`
    margin: 30px auto;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: start;
    justify-items: center;
    gap: 15px;
    max-width: 800px;
    position: relative;

    /* Zig-zag pattern logic */
    & > *:nth-child(4n-3) { grid-column: 1; justify-self: end; } /* Step 1, 5, etc. */
    & > *:nth-child(4n-2) { grid-column: 2; } /* Arrow after step 1 */
    & > *:nth-child(4n-1) { grid-column: 3; justify-self: start; } /* Step 2, 6, etc. */
    & > *:nth-child(4n)   { grid-column: 2; } /* Arrow after step 2 */
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 10px;
        
        & > * {
            grid-column: 1 !important;
            justify-self: center !important;
            width: 100%;
        }

        & > div:nth-child(2n) { /* Selects arrows */
            transform: rotate(90deg);
        }
    }
`;

export const FlowChartStep = styled.div`
    background: #edf2f7;
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    padding: 20px;
    text-align: left;
    width: 100%;
    max-width: 300px;
    
    h4 {
        color: #2d3748;
        margin-bottom: 10px;
        border-bottom: 1px solid #cbd5e0;
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        li {
            font-size: 0.95em;
            margin-bottom: 5px;
        }
    }
`;

export const FlowChartArrow = styled.div`
    font-size: 2em;
    color: #a0aec0;
    font-weight: bold;
    align-self: center;
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

export const SpeakingPromptsContainer = styled.div`
    margin-top: 40px;
`;

type PromptType = 'advantage' | 'disadvantage' | 'accessibility';

const getPromptColors = (type: PromptType) => {
    switch (type) {
        case 'advantage':
            return {
                sectionBorder: '#a7f3d0',
                sectionBg: '#f0fdf4',
                titleColor: '#047857',
                cardBorder: '#34d399',
            };
        case 'disadvantage':
            return {
                sectionBorder: '#fecaca',
                sectionBg: '#fff5f5',
                titleColor: '#b91c1c',
                cardBorder: '#f87171',
            };
        case 'accessibility':
            return {
                sectionBorder: '#bee3f8',
                sectionBg: '#f0f9ff',
                titleColor: '#2c5282',
                cardBorder: '#4299e1',
            };
    }
};

export const PromptSection = styled.div<{ type: PromptType }>`
    padding: 20px;
    border-radius: 8px;
    border: 1px solid ${(props) => getPromptColors(props.type).sectionBorder};
    background-color: ${(props) => getPromptColors(props.type).sectionBg};
    margin-bottom: 30px;
`;

export const PromptSectionTitle = styled.h3<{ type: PromptType }>`
    font-size: 1.4em !important;
    color: ${(props) => getPromptColors(props.type).titleColor};
    text-align: center;
    margin-bottom: 20px !important;
    border-bottom: 2px solid ${(props) => getPromptColors(props.type).sectionBorder} !important;
    padding-bottom: 10px !important;
`;

export const PromptGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
`;

export const PromptCard = styled.div<{ type: PromptType }>`
    background: #fff;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.08);
    border-left: 5px solid;
    border-left-color: ${(props) => getPromptColors(props.type).cardBorder};

    h5 {
        font-size: 1.1em;
        color: #2d3748;
        margin-bottom: 15px;
    }

    p {
        margin-bottom: 10px !important;
        font-size: 0.95em;
        line-height: 1.5 !important;
        color: #4a5568 !important;

        strong {
            font-weight: 600;
            color: #2d3748;
        }
    }
`;