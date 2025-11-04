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

// --- Styled Components for Redesign ---
const Container = styled.div`
    animation: ${fadeIn} 0.5s ease-out;
`;

const ContentWrapper = styled.div`
    background: white;
    padding: 30px 40px;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.07);

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const SectionHeading = styled.h3<{ themeColor: string }>`
    font-size: 1.2em;
    font-weight: bold;
    color: #4a5568;
    margin: 40px 0 15px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 10px;
    &:first-of-type {
        margin-top: 10px;
    }
    &::before {
        content: '';
        width: 4px;
        height: 18px;
        background-color: ${props => props.themeColor || '#4a90e2'};
        border-radius: 2px;
    }
`;

const SubHeading = styled.h4`
    font-size: 1.3em;
    font-weight: bold;
    color: #2c3e50;
    margin: 25px 0 15px 0;
`;

const BodyText = styled.p`
    color: #4a5568;
    line-height: 1.8;
    font-size: 1.05em;
    margin-bottom: 15px;
`;

const EditorialBox = styled.div`
    background: #fdfdfd;
    border: 1px solid #e1e8ed;
    padding: 35px 40px;
    margin: 25px 0;
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.06);
    font-family: 'Georgia', serif;

    @media (max-width: 768px) {
        padding: 25px;
    }
`;

const EditorialTitle = styled.h5`
    font-size: 1.8em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid #e1e8ed;
    color: #2c3e50;
`;

const EditorialBody = styled.div`
    font-size: 1.1em;
    line-height: 1.9;
    color: #34495e;

    p {
        margin-bottom: 1.2em;
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

const TaskList = styled.ul<{ themeColor: string }>`
    list-style-type: none;
    padding-left: 10px;
    margin-top: 20px;
    font-size: 1.05em;
    line-height: 1.8;

    li {
        margin-bottom: 12px;
        padding-left: 25px;
        position: relative;
        color: #34495e;
        &::before {
            content: '✓';
            color: ${props => props.themeColor || '#4a90e2'};
            position: absolute;
            left: 0;
            font-weight: bold;
        }
    }
`;


// --- Styled Components for Model Discussion (Refined) ---
const ModelDiscussionContainer = styled.div`
    background: #f8f9fa;
    border-radius: 15px;
    padding: 30px 40px;
    margin-top: 40px;
    border: 1px solid #e1e8ed;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const ModelDiscussionTitle = styled.h3`
    font-size: 1.8em;
    font-weight: bold;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    span[role="img"] {
        color: #9013fe;
    }
`;

const AudioLink = styled.a<{ themeColor: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background: linear-gradient(45deg, ${props => props.themeColor}, ${props => props.themeColor + 'd0'});
    color: white;
    padding: 12px 20px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.05em;
    transition: all 0.3s ease;
    border: none;
    margin: 0 auto 30px auto;
    max-width: 250px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);

    &:hover {
        transform: translateY(-3px) scale(1.03);
        box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    }

    span[role="img"] {
        font-size: 1.1em;
        transition: transform 0.3s ease;
    }
`;

const DiscussionPart = styled.div`
    margin-bottom: 40px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const DiscussionPartTitle = styled.h4`
    font-size: 1.3em;
    color: #34495e;
    padding-bottom: 10px;
    margin-bottom: 25px;
    border-bottom: 2px solid #ced4da;
    font-weight: bold;
`;

const TurnContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: flex-start;
    margin-bottom: 25px;
`;

const SpeakerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
`;

const Speaker = styled.div<{ speaker: 'A' | 'B' }>`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: ${props => props.speaker === 'A' ? '#3498db' : '#e67e22'};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-weight: bold;
`;

const DialogueAndAnnotation = styled.div`
    display: flex;
    gap: 30px;
    flex-grow: 1;
    align-items: flex-start;

    @media (max-width: 800px) {
        flex-direction: column;
        gap: 15px;
        align-items: stretch;
    }
`;

const Dialogue = styled.div`
    flex: 1.5;
    background: #ffffff;
    border-radius: 12px;
    padding: 25px;
    color: #4a5568;
    line-height: 1.8;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
    border: 1px solid #e9ecef;
    font-size: 1.05em;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 15px;
        left: -10px;
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid #ffffff;
    }

    p {
        margin-bottom: 12px;
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

const HighlightedPhrase = styled.span`
    background-color: #fff4d5;
    padding: 3px 8px;
    border-radius: 5px;
    font-weight: bold;
    color: #946500;
`;

const AnnotationWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-top: 5px;
`;

const Annotation = styled.div<{ speakerColor: string }>`
    background-color: #ffffff;
    border-left: 4px solid ${props => props.speakerColor};
    padding: 15px 20px;
    border-radius: 0 8px 8px 0;
    color: #495057;
    font-size: 1em;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;

    &::before {
        content: '📌';
        font-size: 1.2em;
        opacity: 0.8;
    }

    &:hover {
        transform: scale(1.03);
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }
    
    strong {
        font-weight: 900;
        color: ${props => props.speakerColor};
    }
`;


// --- Component ---
interface ExampleGroupInteractionContentProps {
    onBack: () => void;
    onNext: () => void;
    themeColor: string;
}

export const ExampleGroupInteractionContent: React.FC<ExampleGroupInteractionContentProps> = ({ onBack, onNext, themeColor }) => {
    const speakerAColor = '#3498db';
    const speakerBColor = '#e67e22';

    return (
        <Container>
            <BackButton onClick={onBack} themeColor={themeColor}>← Back to Group Interaction Skills</BackButton>
            <LessonTitle>Example Group Interaction</LessonTitle>
            
            <ContentWrapper>
                <BodyText>Let's look at how the communication strategies you have learnt can be applied in the real exam.</BodyText>

                <SectionHeading themeColor={themeColor}>GENERAL INSTRUCTIONS</SectionHeading>
                <BodyText>This paper consists of two parts: Part A, Group Interaction; and Part B, Individual Response. DO NOT write anything on this page.</BodyText>

                <SubHeading>Part A Group Interaction</SubHeading>
                <BodyText>You will be given 10 minutes to prepare. The time allowed for the group interaction is 8 minutes (or 6 minutes for a group of 3 candidates). You may make notes on the notecard provided and refer to your notes during the discussion.</BodyText>
                
                <BodyText>This editorial appeared in a local newspaper:</BodyText>

                <EditorialBox>
                    <EditorialTitle>Parental involvement helps students succeed</EditorialTitle>
                    <EditorialBody>
                        <p>Developing strong study habits at an early age is the key to academic success. It is no secret that many parents in Hong Kong encourage their children to spend more time on homework and enrol in tutorial classes. As a result, many of these students perform well at school.</p>
                        <p>It is beneficial when parents play an active role in their children's studies. At home, parents can help their children with homework or give them advice on understanding tricky concepts. Students who receive parental support may become more motivated to work through difficult assignments. In addition, they tend to be well behaved and able to concentrate on tasks for long periods of time.</p>
                        <p>The results of good learning habits instilled by parents can be seen in students' high scores. For children to succeed at school and in life, strong study habits should be promoted by parents from an early age.</p>
                    </EditorialBody>
                </EditorialBox>

                <BodyText>Your class is writing a letter to the editor to express your views on academic parental involvement. Your group has been asked to discuss the issue. You may want to talk about:</BodyText>

                <TaskList themeColor={themeColor}>
                    <li>the advantages of parental involvement in students' education</li>
                    <li>the disadvantages of parental pressure</li>
                    <li>how to find a good balance</li>
                    <li>anything else you think is important</li>
                </TaskList>
            </ContentWrapper>

            <ModelDiscussionContainer>
                <ModelDiscussionTitle>
                    <span role="img" aria-label="transcript">🗣️</span>
                    Model Discussion Transcript
                </ModelDiscussionTitle>

                <DiscussionPart>
                    <DiscussionPartTitle>Starting the discussion</DiscussionPartTitle>
                    
                    <TurnContainer>
                        <SpeakerWrapper>
                            <Speaker speaker="A">A</Speaker>
                        </SpeakerWrapper>
                        <DialogueAndAnnotation>
                            <Dialogue>
                                <p><HighlightedPhrase>Hello everybody, nice to meet you</HighlightedPhrase>. <HighlightedPhrase>Let's start our discussion.</HighlightedPhrase></p>
                                <p><HighlightedPhrase>Today, we are going to discuss</HighlightedPhrase> the advantages and disadvantages of parental involvement in students' education.</p>
                                <p><HighlightedPhrase>Does anyone want to start?</HighlightedPhrase></p>
                            </Dialogue>
                            <AnnotationWrapper>
                                <Annotation speakerColor={speakerAColor}><strong>greeting</strong> the others and starting the discussion</Annotation>
                                <Annotation speakerColor={speakerAColor}><strong>introducing</strong> the topic/task</Annotation>
                                <Annotation speakerColor={speakerAColor}><strong>asking</strong> others for opinions</Annotation>
                            </AnnotationWrapper>
                        </DialogueAndAnnotation>
                    </TurnContainer>

                    <TurnContainer>
                        <SpeakerWrapper>
                            <Speaker speaker="B">B</Speaker>
                        </SpeakerWrapper>
                        <DialogueAndAnnotation>
                            <Dialogue style={{ flex: 1 }}>
                                <p><HighlightedPhrase>I think</HighlightedPhrase> students benefit from guidance by their parents. If parents have a better idea of what their children study, they can offer more support. <HighlightedPhrase>What do you think?</HighlightedPhrase></p>
                                <p>...</p>
                            </Dialogue>
                        </DialogueAndAnnotation>
                    </TurnContainer>
                </DiscussionPart>

                <DiscussionPart>
                    <DiscussionPartTitle>Ending the discussion</DiscussionPartTitle>
                    <TurnContainer>
                        <SpeakerWrapper>
                            <Speaker speaker="A">A</Speaker>
                        </SpeakerWrapper>
                        <DialogueAndAnnotation>
                            <Dialogue>
                                <p><HighlightedPhrase>To sum up,</HighlightedPhrase> we believe that parental involvement in education has its pros and cons. It can build positive relationships between parents and children. However, too much parental pressure can lead to stress and low self-esteem.</p>
                                <p>Since we have all come to an agreement, <HighlightedPhrase>let's bring this discussion to a close.</HighlightedPhrase></p>
                                <p><HighlightedPhrase>Thank you all</HighlightedPhrase> for an interesting discussion.</p>
                            </Dialogue>
                            <AnnotationWrapper>
                                <Annotation speakerColor={speakerAColor}><strong>summarising</strong> the main points</Annotation>
                                <Annotation speakerColor={speakerAColor}><strong>ending</strong> the discussion</Annotation>
                                <Annotation speakerColor={speakerAColor}><strong>thanking</strong> the others</Annotation>
                            </AnnotationWrapper>
                        </DialogueAndAnnotation>
                    </TurnContainer>
                </DiscussionPart>
            </ModelDiscussionContainer>

            <NextButtonContainer>
                <NextButton onClick={onNext} themeColor={themeColor}>
                    <span>Next: 5 Major Question Types</span>
                    <span className="arrow">→</span>
                </NextButton>
            </NextButtonContainer>
        </Container>
    );
};