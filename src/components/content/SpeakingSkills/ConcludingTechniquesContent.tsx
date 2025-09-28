/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BackButton, LessonTitle } from '../Structures/SVOContent.styles';

// --- Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components (reusing/adapting from other files) ---
const Container = styled.div`
    animation: ${fadeIn} 0.5s ease-out;
`;

const SectionWrapper = styled.section`
    background: white;
    border-radius: 15px;
    padding: 30px;
    margin-top: 25px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.07);
    border: 1px solid #f0f2f5;
`;

const SectionTitle = styled.h3<{ themeColor: string }>`
    font-size: 1.6em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 3px solid ${props => props.themeColor || '#f0f2f5'};
    display: flex;
    align-items: center;
    gap: 15px;

    .icon {
        font-size: 1.2em;
    }
`;

const StepFlowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin: 30px 0;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

const StepCard = styled.div<{ themeColor: string }>`
    background-color: #f8f9fa;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    flex: 1;
    border-top: 4px solid ${props => props.themeColor};
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.08);
    }
`;

const StepNumber = styled.div<{ themeColor: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.themeColor};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-weight: bold;
    margin: 0 auto 15px;
`;

const StepTitle = styled.h4`
    font-size: 1.1em;
    color: #34495e;
    font-weight: bold;
    margin-bottom: 8px;
`;

const StepDescription = styled.p`
    font-size: 0.9em;
    color: #7f8c8d;
    line-height: 1.5;
`;

const StepArrow = styled.div`
    font-size: 2.5em;
    color: #bdc3c7;
    font-weight: bold;
    @media (max-width: 900px) {
       transform: rotate(90deg);
       margin: -10px 0;
    }
`;

const ExampleAnalysisContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

const ExampleBubble = styled.div`
    background-color: #f8f9fa;
    border-radius: 15px;
    padding: 25px;
    border: 1px solid #e9ecef;
    position: relative;
`;

// Fix: Replaced inconsistent `theme` prop with a standard `highlightColor` prop to resolve TypeScript error and improve consistency.
const DialoguePoint = styled.div<{ highlightColor?: string }>`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 15px;
    color: #4a5568;
    line-height: 1.7;

    &:last-child {
        margin-bottom: 0;
    }

    u {
        text-decoration-color: ${props => props.highlightColor || '#4a90e2'};
        text-decoration-thickness: 2px;
        text-underline-offset: 3px;
    }
`;

const DialogueNumber = styled.span<{ themeColor: string }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${props => props.themeColor};
    color: white;
    font-weight: bold;
    font-size: 0.9em;
    flex-shrink: 0;
    margin-top: 4px;
`;

const InfoBox = styled.div`
    display: flex;
    gap: 15px;
    background: #e7f5ff;
    border-left: 5px solid #339af0;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0 30px 0;
`;

const InfoIcon = styled.div`
    font-size: 1.8em;
    flex-shrink: 0;
`;

const InfoText = styled.p`
    color: #1864ab;
    line-height: 1.6;

    strong {
        font-weight: bold;
        color: #1971c2;
    }
`;

const AudioIntroContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: #f8f9fa;
    padding: 15px 20px;
    border-radius: 12px;
    margin-bottom: 25px;
    color: #566573;
    line-height: 1.7;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
`;

const AudioButton = styled.a<{ themeColor: string }>`
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${props => props.themeColor || '#4a90e2'};
    color: white;
    padding: 10px 15px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.9em;
    transition: all 0.3s ease;
    flex-shrink: 0;
    cursor: not-allowed;
    opacity: 0.7;

    &:hover {
        transform: scale(1.05);
        filter: brightness(1.1);
    }
`;


// --- Component ---

interface ConcludingTechniquesContentProps {
    onBack: () => void;
    themeColor: string;
}

export const ConcludingTechniquesContent: React.FC<ConcludingTechniquesContentProps> = ({ onBack, themeColor }) => {
    return (
        <Container>
            <BackButton onClick={onBack} themeColor={themeColor}>← Back to Group Interaction Skills</BackButton>
            <LessonTitle>总结结尾技巧 (Concluding Techniques)</LessonTitle>

            <SectionWrapper>
                <SectionTitle themeColor={themeColor}>
                    <span className="icon">🏁</span>
                    The 3 Steps to a Strong Conclusion
                </SectionTitle>
                <p style={{ color: '#566573', lineHeight: 1.7 }}>
                    A good conclusion leaves a strong final impression. Pay attention to the following when ending a discussion:
                </p>
                <StepFlowContainer>
                    <StepCard themeColor={themeColor}>
                        <StepNumber themeColor={themeColor}>1</StepNumber>
                        <StepTitle>Summarizing the main points</StepTitle>
                    </StepCard>
                    <StepArrow>→</StepArrow>
                     <StepCard themeColor={themeColor}>
                        <StepNumber themeColor={themeColor}>2</StepNumber>
                        <StepTitle>Concluding the discussion</StepTitle>
                        <StepDescription>(checking if anyone wants to say anything else)</StepDescription>
                    </StepCard>
                    <StepArrow>→</StepArrow>
                     <StepCard themeColor={themeColor}>
                        <StepNumber themeColor={themeColor}>3</StepNumber>
                        <StepTitle>Thanking others</StepTitle>
                    </StepCard>
                </StepFlowContainer>
            </SectionWrapper>
            
            <SectionWrapper>
                <SectionTitle themeColor={themeColor}>
                    <span className="icon">🗣️</span>
                    范例分析 (Example Analysis)
                </SectionTitle>
                <AudioIntroContainer>
                    <span>Look at how these students end a discussion on ways to balance study and play:</span>
                    <AudioButton 
                        themeColor={themeColor}
                        onClick={(e) => e.preventDefault()}
                        title="Listening feature coming soon!"
                    >
                        <span role="img" aria-label="audio">🔊</span> Listen (Coming soon)
                    </AudioButton>
                </AudioIntroContainer>

                 <InfoBox>
                    <InfoIcon>🔍</InfoIcon>
                    <InfoText>
                        If a discussion is <strong>fruitful</strong>, it means it has produced many useful results.
                    </InfoText>
                </InfoBox>

                <ExampleAnalysisContainer>
                    <ExampleBubble>
                        <DialoguePoint highlightColor={themeColor}>
                            <DialogueNumber themeColor={themeColor}>1</DialogueNumber>
                            <span>Let's <u>sum up our discussion</u>. It's important to find balance between study and play. You can do that by <u>staying organized, managing your time and planning your week carefully</u>.</span>
                        </DialoguePoint>
                         <DialoguePoint>
                            <DialogueNumber themeColor={themeColor}>2</DialogueNumber>
                            <span>Does anyone have anything else to say? If not, I shall end this discussion here.</span>
                        </DialoguePoint>
                         <DialoguePoint>
                            <DialogueNumber themeColor={themeColor}>3</DialogueNumber>
                            <span>Thank you all for your contributions.</span>
                        </DialoguePoint>
                    </ExampleBubble>

                    <ExampleBubble>
                         <DialoguePoint highlightColor={themeColor}>
                            <DialogueNumber themeColor={themeColor}>1</DialogueNumber>
                            <span><u>In summary</u>, there are different ways of balancing study and play. Some of us like to <u>make weekly to-do lists</u>, while others prefer <u>setting time limits</u> for all their activities.</span>
                        </DialoguePoint>
                         <DialoguePoint highlightColor={themeColor}>
                            <DialogueNumber themeColor={themeColor}>2</DialogueNumber>
                            <span><u>Since we have all come to an agreement</u> that striking a balance between study and play is important, we shall stop here.</span>
                        </DialoguePoint>
                         <DialoguePoint>
                            <DialogueNumber themeColor={themeColor}>3</DialogueNumber>
                            <span>It's been a fruitful and interesting discussion. Thank you very much.</span>
                        </DialoguePoint>
                    </ExampleBubble>
                </ExampleAnalysisContainer>
            </SectionWrapper>
        </Container>
    );
};
