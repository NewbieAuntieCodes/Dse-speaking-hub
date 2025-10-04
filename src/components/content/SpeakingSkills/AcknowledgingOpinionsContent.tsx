/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BackButton, LessonTitle } from '../Structures/SVOContent.styles';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

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

const BodyText = styled.p`
    color: #4a5568;
    line-height: 1.8;
    font-size: 1.05em;
    margin-bottom: 15px;
`;

const DiscussionFlow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 30px;
`;

const StepLabel = styled.div<{ themeColor: string }>`
    background-color: #f0f2f5;
    color: #4a5568;
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: bold;
    display: inline-block;
    border: 2px solid ${props => props.themeColor}33;
    margin-bottom: 15px;
`;

const SpeechBubble = styled.div`
    background: #e9ecef;
    border-radius: 20px;
    padding: 20px 25px;
    position: relative;
    max-width: 600px;
    width: 100%;
    line-height: 1.7;
    font-size: 1.05em;
    color: #34495e;

    &::before {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 30px;
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 20px solid #e9ecef;
    }
    
    strong {
        font-weight: bold;
        background-color: #fffbe6;
        padding: 2px 5px;
        border-radius: 4px;
        border-bottom: 2px solid #ffe58f;
    }
`;

const ExampleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
`;

const ExampleCard = styled.div`
    background-color: #f8f9fa;
    border-radius: 15px;
    padding: 25px;
    border: 1px solid #e9ecef;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const DialoguePart = styled.div<{ themeColor: string }>`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    line-height: 1.7;
    color: #34495e;

    .number {
        background-color: ${props => props.themeColor};
        color: white;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 0.9em;
    }

    .text {
        flex: 1;
    }
`;

const VocabBox = styled.div`
    background-color: #fff;
    border: 1px solid #e9ecef;
    padding: 15px;
    margin-top: 10px;
    border-radius: 8px;
    line-height: 1.6;
    color: #4a5568;
    display: flex;
    gap: 10px;
    align-items: flex-start;

    &::before {
        content: '🔎';
        font-size: 1.2em;
        margin-top: 2px;
    }

    strong {
        font-weight: bold;
        color: #2c3e50;
    }
`;

const WordBox = styled.div`
    margin-top: 30px;
    border-top: 2px dashed #ced4da;
    padding-top: 25px;
    text-align: center;

    h4 {
        font-size: 1.2em;
        color: #34495e;
        margin-bottom: 15px;
    }

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
    }

    li {
        background-color: #eaf5ff;
        color: #2f54eb;
        border: 1px solid #adc6ff;
        padding: 8px 18px;
        border-radius: 20px;
        font-weight: 500;
    }
`;


// --- Component ---
interface AcknowledgingOpinionsContentProps {
    onBack: () => void;
    themeColor: string;
}

export const AcknowledgingOpinionsContent: React.FC<AcknowledgingOpinionsContentProps> = ({ onBack, themeColor }) => {
    return (
        <Container>
            <BackButton onClick={onBack} themeColor={themeColor}>← Back to 5 Major Question Types</BackButton>
            <LessonTitle>Acknowledging Others' Opinions</LessonTitle>
            
            <SectionWrapper>
                <SectionTitle themeColor={themeColor}>
                    <span className="icon">👂</span> Why Acknowledge?
                </SectionTitle>
                <BodyText>
                    During the Group Interaction, if you are not sure whether to agree or disagree with other students, you can acknowledge others' opinions before expressing your own. This shows you are an active listener and helps the conversation flow smoothly.
                </BodyText>
            </SectionWrapper>
            
            <SectionWrapper>
                <SectionTitle themeColor={themeColor}>
                    <span className="icon">💬</span> Example Discussion: Beach Clean-up
                </SectionTitle>
                <BodyText>These students are discussing how to organize a beach clean-up day at Tap Mun.</BodyText>
                
                <DiscussionFlow>
                    <div>
                        <StepLabel themeColor={themeColor}>① Acknowledging other speakers' point</StepLabel>
                        <SpeechBubble>
                            Our environmental club is organizing a beach clean-up day at Tap Mun. We'll need to stock up on bin bags and plastic gloves, and the school will help organize transport. The school should make this event mandatory for students. Everyone will learn from it and we'll clean the beach up faster.
                        </SpeechBubble>
                    </div>
                    <div>
                        <StepLabel themeColor={themeColor}>② Expressing a further opinion</StepLabel>
                        <SpeechBubble>
                            <strong>You have a point there.</strong> Students who don't usually care about the environment will see how big the problem is.
                        </SpeechBubble>
                    </div>
                </DiscussionFlow>
            </SectionWrapper>

            <SectionWrapper>
                <SectionTitle themeColor={themeColor}>
                    <span className="icon">🔎</span> Deeper Analysis
                </SectionTitle>
                <ExampleGrid>
                    <ExampleCard>
                        <DialoguePart themeColor={themeColor}>
                            <span className="number">1</span>
                            <span className="text">I hear what you're saying,</span>
                        </DialoguePart>
                        <DialoguePart themeColor={themeColor}>
                            <span className="number">2</span>
                            <span className="text">but I'm not sure if forcing students to participate is a good idea. They might <strong>resent</strong> it, and students with allergies or disabilities could feel left out.</span>
                        </DialoguePart>
                        <VocabBox>
                            <div><strong>resent</strong> = to feel bitter or angry about something, especially because you feel it is unfair</div>
                        </VocabBox>
                    </ExampleCard>

                    <ExampleCard>
                        <DialoguePart themeColor={themeColor}>
                            <span className="number">1</span>
                            <span className="text">I see what you mean.</span>
                        </DialoguePart>
                        <DialoguePart themeColor={themeColor}>
                            <span className="number">2</span>
                            <span className="text">I think it would be OK if the beach clean-up was optional, though. It's a day off school, so lots of students should be interested in joining us.</span>
                        </DialoguePart>
                    </ExampleCard>
                </ExampleGrid>
            </SectionWrapper>
            
            <SectionWrapper>
                <SectionTitle themeColor={themeColor}>
                    <span className="icon">🎯</span> Practice Time
                </SectionTitle>
                <BodyText>The following suggestion was also made in the discussion above. Take turns to acknowledge what is said and express a further opinion. You may like to use the expressions in the word box.</BodyText>
                <SpeechBubble>
                    Let's do a documentary programme on beach waste and the effect of plastics on the ocean. It will be <strong>informative</strong>, and it might also be a <strong>wake-up call</strong> for students who don't realize how big the problem is.
                </SpeechBubble>
                <VocabBox>
                    <div><strong>wake-up call</strong> = an event that makes people realize that there is a problem that they need to do something about</div>
                </VocabBox>
                <WordBox>
                    <h4>Expressions Word Box</h4>
                    <ul>
                        <li>I see your point.</li>
                        <li>I understand your point.</li>
                        <li>I take your point.</li>
                    </ul>
                </WordBox>
            </SectionWrapper>
        </Container>
    );
};