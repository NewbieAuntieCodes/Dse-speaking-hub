/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled, { keyframes } from 'styled-components';
import { BackButton as OriginalBackButton, LessonTitle as OriginalLessonTitle } from '../Structures/SVOContent.styles';

// --- Animations ---
export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components ---
export const Container = styled.div`
    animation: ${fadeIn} 0.5s ease-out;
`;

export const BackButton = styled(OriginalBackButton)`
    margin-bottom: 15px;
`;

export const LessonTitle = styled(OriginalLessonTitle)`
    font-size: 2.5em;
    padding-bottom: 20px;
    margin-bottom: 30px;
    
    @media (max-width: 768px) {
        font-size: 2.0em;
    }
`;

export const Section = styled.section`
    background: #ffffff;
    border-radius: 20px;
    padding: 30px 40px;
    margin-bottom: 30px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
    border: 1px solid #e9ecef;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const SectionHeader = styled.h3`
    font-size: 1.7em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const SubHeader = styled.h4`
    font-size: 1.3em;
    font-weight: bold;
    color: #34495e;
    margin-top: 25px;
    margin-bottom: 15px;
`;

export const BodyText = styled.p`
    color: #4a5568;
    line-height: 1.8;
    font-size: 1.05em;
    margin-bottom: 15px;
`;

// Reading Material Styles
export const ReadingMaterialContainer = styled.div`
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 25px;
`;

export const GeneralInstructions = styled.div`
    h4 {
        font-size: 1.2em;
        font-weight: bold;
        color: #2d3748;
        margin-bottom: 8px;
    }
    p {
        font-size: 1.05em;
        color: #4a5568;
        line-height: 1.7;
        margin-bottom: 15px;
    }
`;

export const OptionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 20px 0;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const OptionCard = styled.div`
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.06);
`;

export const OptionImagePlaceholder = styled.div`
    background-color: #e9ecef;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5em;
`;

export const OptionContent = styled.div`
    padding: 20px;
`;

export const OptionTitle = styled.h5`
    font-size: 1.3em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 10px;
`;

export const OptionDescription = styled.p`
    font-size: 1em;
    color: #4a5568;
    line-height: 1.6;
`;

export const TaskContainer = styled.div`
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #dee2e6;

    p {
        font-size: 1.05em;
        color: #4a5568;
        line-height: 1.7;
        margin-bottom: 15px;
    }
`;

export const TaskList = styled.ul`
    list-style-type: disc;
    padding-left: 25px;
    font-size: 1.05em;
    color: #4a5568;
    line-height: 1.8;

    li {
        margin-bottom: 12px;
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

// Phrase Bank Styles
export const PhraseBankContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`;

export const PhrasePill = styled.div`
    background-color: #eaf5ff;
    color: #2f54eb;
    border: 1px solid #adc6ff;
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 1em;
    font-weight: 500;
    cursor: default;
`;

// Example Dialogue Styles
export const DialogueContainer = styled.div`
    background-color: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
`;

export const DialogueGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
`;

export const DialogueCard = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #e9ecef;
`;

export const DialogueText = styled.p`
    font-size: 1.05em;
    line-height: 1.7;
    color: #34495e;

    span {
        display: block;
        margin-bottom: 8px;
    }

    .choice {
        font-weight: bold;
        color: ${props => props.theme.mainColor};
    }
    .explanation {
        color: #4a5568;
    }
`;

export const TipBox = styled.div`
    background-color: #e6f7ff;
    border-left: 5px solid #1890ff;
    padding: 20px;
    margin: 25px 0;
    border-radius: 0 8px 8px 0;
    color: #0050b3;
    line-height: 1.7;
    font-size: 1.05em;

    p {
        margin: 0;
    }

    strong {
        font-weight: bold;
    }
`;

// Practice Exercise Styles
export const PracticeList = styled.ol`
    list-style: decimal;
    padding-left: 20px;
    font-size: 1.1em;
    line-height: 2.2;
`;

export const PracticeItem = styled.li`
    margin-bottom: 12px;
    color: #4a5568;
`;

export const AudioLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 280px;
    margin: 10px auto 20px auto;
    padding: 12px 25px;
    gap: 12px;
    background: linear-gradient(45deg, ${props => props.theme.mainColor}, ${props => props.theme.mainColor + 'd0'});
    color: white;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.05em;
    transition: all 0.3s ease;
    border: none;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);

    &:hover {
        transform: translateY(-3px) scale(1.03);
        box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    }

    span[role="img"] {
        font-size: 1.1em;
    }
`;

export const BlankPlaceholder = styled.span`
    display: inline-block;
    border-bottom: 2px solid #ced4da;
    width: 150px;
    margin: 0 5px;
    vertical-align: bottom;
`;

export const RevealedAnswer = styled.span`
    background-color: #e8f5e9;
    color: #2e7d32;
    padding: 2px 8px;
    border-radius: 5px;
    font-weight: bold;
    border: 1px solid #a5d6a7;
    margin: 0 5px;
`;

export const ButtonContainer = styled.div`
    text-align: center;
    margin-top: 25px;
`;

export const CheckButton = styled.button<{ themeColor: string }>`
    padding: 12px 35px;
    background-color: ${props => props.themeColor};
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1.05em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);

    &:hover {
        transform: translateY(-2px);
        filter: brightness(1.1);
    }
`;