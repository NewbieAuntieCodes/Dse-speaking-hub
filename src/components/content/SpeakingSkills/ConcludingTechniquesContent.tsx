/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BackButton, LessonTitle, NextButton, NextButtonContainer } from '../Structures/SVOContent.styles';

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

const ExampleHeader = styled.h5`
    font-size: 1.2em;
    font-weight: bold;
    color: #2d3748;
    margin-bottom: 20px;
`;

const ExamplePart = styled.div<{ color: string }>`
    margin-bottom: 15px;
    padding-left: 20px;
    border-left: 3px solid ${props => props.color};
    
    &:last-child {
        margin-bottom: 0;
    }

    .part-title {
        font-weight: bold;
        color: ${props => props.color};
        display: block;
        margin-bottom: 5px;
        font-size: 0.9em;
    }

    .part-content {
        color: #566573;
        line-height: 1.6;
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
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: ${props => props.themeColor || '#4a90e2'};
    color: white;
    padding: 10px 20px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1em;
    transition: all 0.3s ease;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);

    &:hover {
        transform: translateY(-2px);
        filter: brightness(1.1);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    span[role="img"] {
        font-size: 1.1em;
    }
`;


// --- Component ---

interface ConcludingTechniquesContentProps {
    onBack: () => void;
    onNext: () => void;
    themeColor: string;
}

export const ConcludingTechniquesContent: React.FC<ConcludingTechniquesContentProps> = ({ onBack, onNext, themeColor }) => {
    return (
        <Container>
            <BackButton onClick={onBack} themeColor={themeColor}>← Back to Group Interaction Skills</BackButton>
            <LessonTitle>总结结尾技巧 (Concluding Techniques)</LessonTitle>

            <SectionWrapper>
                <SectionTitle themeColor={themeColor}>
                    <span className="icon">🏁</span>
                    总结结尾三步法 (The 3 Steps to a Strong Conclusion)
                </SectionTitle>
                <p style={{ color: '#566573', lineHeight: 1.7 }}>
                    一个好的结尾能给人留下深刻的最终印象。在结束讨论时，请注意以下几点：
                </p>
                <StepFlowContainer>
                    <StepCard themeColor={themeColor}>
                        <StepNumber themeColor={themeColor}>1</StepNumber>
                        <StepTitle>总结要点</StepTitle>
                        <StepDescription>Summarizing the main points</StepDescription>
                    </StepCard>
                    <StepArrow>→</StepArrow>
                     <StepCard themeColor={themeColor}>
                        <StepNumber themeColor={themeColor}>2</StepNumber>
                        <StepTitle>结束讨论</StepTitle>
                        <StepDescription>Concluding the discussion</StepDescription>
                    </StepCard>
                    <StepArrow>→</StepArrow>
                     <StepCard themeColor={themeColor}>
                        <StepNumber themeColor={themeColor}>3</StepNumber>
                        <StepTitle>感谢组员</StepTitle>
                        <StepDescription>Thanking others</StepDescription>
                    </StepCard>
                </StepFlowContainer>
            </SectionWrapper>
            
            <SectionWrapper>
                <SectionTitle themeColor={themeColor}>
                    <span className="icon" style={{color: '#9013fe'}}>🗣️</span>
                    范例分析 (Example Analysis)
                </SectionTitle>
                <AudioIntroContainer>
                    <span>Look at how these students end a discussion on ways to balance study and play:</span>
                    <AudioButton 
                        href="https://players.brightcove.net/6144772950001/default_default/index.html?videoId=6268728665001"
                        target="_blank"
                        rel="noopener noreferrer"
                        themeColor={themeColor}
                    >
                        <span role="img" aria-label="audio">🔈</span> Listen
                    </AudioButton>
                </AudioIntroContainer>

                <ExampleAnalysisContainer>
                    <ExampleBubble>
                        <ExampleHeader>考生示范 1 (Student Example 1)</ExampleHeader>
                        <ExamplePart color="#3498db">
                            <span className="part-title">① 总结要点 (Summarizing the main points)</span>
                            <span className="part-content">Let's sum up our discussion. It's important to find balance between study and play. You can do that by staying organized, managing your time and planning your week carefully.</span>
                        </ExamplePart>
                        <ExamplePart color="#2ecc71">
                            <span className="part-title">② 结束讨论 (Concluding the discussion)</span>
                            <span className="part-content">Does anyone have anything else to say? If not, I shall end this discussion here.</span>
                        </ExamplePart>
                        <ExamplePart color="#e67e22">
                            <span className="part-title">③ 感谢组员 (Thanking others)</span>
                            <span className="part-content">Thank you all for your contributions.</span>
                        </ExamplePart>
                    </ExampleBubble>

                    <ExampleBubble>
                        <ExampleHeader>考生示范 2 (Student Example 2)</ExampleHeader>
                        <ExamplePart color="#3498db">
                            <span className="part-title">① 总结要点 (Summarizing the main points)</span>
                            <span className="part-content">In summary, there are different ways of balancing study and play. Some of us like to make weekly to-do lists, while others prefer setting time limits for all their activities.</span>
                        </ExamplePart>
                        <ExamplePart color="#2ecc71">
                            <span className="part-title">② 结束讨论 (Concluding the discussion)</span>
                            <span className="part-content">Since we have all come to an agreement that striking a balance between study and play is important, we shall stop here.</span>
                        </ExamplePart>
                        <ExamplePart color="#e67e22">
                            <span className="part-title">③ 感谢组员 (Thanking others)</span>
                            <span className="part-content">It's been a fruitful and interesting discussion. Thank you very much.</span>
                        </ExamplePart>
                    </ExampleBubble>
                </ExampleAnalysisContainer>
            </SectionWrapper>
            <NextButtonContainer>
                <NextButton onClick={onNext} themeColor={themeColor}>
                    <span>Next: Example Group Interaction</span>
                    <span className="arrow">→</span>
                </NextButton>
            </NextButtonContainer>
        </Container>
    );
};