/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { BackButton, LessonTitle, NextButton, NextButtonContainer } from '../Structures/SVOContent.styles';

// --- Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components ---
const Container = styled.div`
    animation: ${fadeIn} 0.5s ease-out;
`;

const Section = styled.section`
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

const SectionHeader = styled.h3`
    font-size: 1.8em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f1f3f4;
    display: flex;
    align-items: center;
    gap: 12px;
`;

const BodyText = styled.p`
    font-size: 1.1em;
    color: #4a5568;
    line-height: 1.8;
    margin-bottom: 25px;
`;

const ExampleQuestionList = styled.ul`
    list-style: none;
    padding-left: 10px;
    margin: 20px 0;
    
    li {
        background-color: #f8f9fa;
        padding: 12px 20px;
        border-radius: 8px;
        margin-bottom: 10px;
        position: relative;
        padding-left: 30px;
        color: #4a5568;
        font-size: 1.05em;

        &::before {
            content: '•';
            position: absolute;
            left: 12px;
            top: 13px;
            color: ${props => props.theme.mainColor || '#9b59b6'};
            font-weight: bold;
        }
    }
`;

// --- Flowchart Styles ---
const FlowchartDiagram = styled.div`
    margin: 30px 0;
`;

const FlowchartStep = styled.div`
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 20px;
    border-left: 5px solid ${props => props.theme.mainColor || '#9b59b6'};
`;

const StepTitle = styled.h4`
    font-size: 1.4em;
    font-weight: bold;
    color: #34495e;
    margin-bottom: 15px;
`;

const PhraseList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
`;

const PhraseItem = styled.li`
    font-size: 1.05em;
    color: #4a5568;
    line-height: 1.7;
    background-color: #fff;
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #dee2e6;
`;

const FlowchartComplexStep = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

const FlowchartSubStep = styled(FlowchartStep)`
    margin-bottom: 0;
    border-left-color: #ced4da;
`;

const ArrowContainer = styled.div`
    text-align: center;
    font-size: 2.5em;
    color: #bdc3c7;
    font-weight: bold;
    margin: -5px 0;
`;

// --- Practice Questions Styles ---
const QuestionList = styled.ol`
    list-style: decimal;
    padding-left: 25px;
    font-size: 1.1em;
    line-height: 1.9;
    color: #34495e;
`;

const QuestionItem = styled.li`
    margin-bottom: 15px;
    padding-left: 10px;

    &::marker {
        font-weight: bold;
        color: ${props => props.theme.mainColor || '#9b59b6'};
    }
`;

// --- Data ---
const exampleQuestions = [
    "Do you prefer to hike in the mountains or walk around the city?",
    "If you were a star athlete, would you want to delay going to university so that you could pursue full-time training for your sport?",
    "When it comes to exercise, is it more important to challenge yourself or have fun?",
    "Is it better to be a famous athlete or enjoy sports as a hobby?",
];

const practiceQuestions = [
    "Do you enjoy exercising?",
    "What exercise would you recommend to a friend who dislikes exercise?",
    "Have you used exercise to relieve stress?",
    "Why is it important for students to lead balanced lives that include exercise?",
    "What advice would you give to a busy friend who would like to get more exercise?",
    "Is physical education as important as other school subjects?",
    "If you were a famous athlete, what would you do to promote exercise to young people?",
    "What would make it easier for Hongkongers to exercise more in the city?",
];

// --- Component ---
interface MakingChoicesIndividualContentProps {
    onBack: () => void;
    onReturn: () => void;
    themeColor: string;
}

export const MakingChoicesIndividualContent: React.FC<MakingChoicesIndividualContentProps> = ({ onBack, onReturn, themeColor }) => {
    return (
        <ThemeProvider theme={{ mainColor: themeColor }}>
            <Container>
                <BackButton onClick={onBack} themeColor={themeColor}>← Back to Individual Response Skills</BackButton>
                <LessonTitle>Making and Explaining Choices</LessonTitle>

                <Section>
                    <SectionHeader>
                        <span role="img" aria-label="thinking face">🤔</span>
                        Introduction
                    </SectionHeader>
                    <BodyText>
                        In the Individual Response, you may also be asked to make and explain choices. Such questions could come in the following forms:
                    </BodyText>
                    <ExampleQuestionList>
                        {exampleQuestions.map((q, index) => <li key={index}>{q}</li>)}
                    </ExampleQuestionList>
                </Section>

                <Section>
                    <SectionHeader>
                        <span role="img" aria-label="flowchart">🗺️</span>
                        How to Structure Your Response
                    </SectionHeader>
                    <BodyText>Here's one way of responding to questions that ask you to make and explain a choice:</BodyText>
                    <FlowchartDiagram>
                        <FlowchartStep>
                            <StepTitle>1. Make a choice</StepTitle>
                            <PhraseList>
                                {[ "I prefer ...", "I think ... is a better choice.", "I would choose ...", "I'm in favour of ...", "I'd like to ...", "I would definitely ..." ].map(phrase => <PhraseItem key={phrase}>{phrase}</PhraseItem>)}
                            </PhraseList>
                        </FlowchartStep>
                        
                        <ArrowContainer>↓</ArrowContainer>
                        
                        <FlowchartComplexStep>
                            <FlowchartSubStep>
                                <StepTitle>2a. Explain your choice using PRE</StepTitle>
                                <PhraseList>
                                    {[ "My reason is that ...", "... because/since/as ...", "I have always felt that ..." ].map(phrase => <PhraseItem key={phrase}>{phrase}</PhraseItem>)}
                                </PhraseList>
                            </FlowchartSubStep>
                            <FlowchartSubStep>
                                <StepTitle>2b. Compare with other choices</StepTitle>
                                <PhraseList>
                                    {[ "... is better than ...", "It is more enjoyable/effective ...", "... whereas/while ...", "On the other hand, ..." ].map(phrase => <PhraseItem key={phrase}>{phrase}</PhraseItem>)}
                                </PhraseList>
                            </FlowchartSubStep>
                        </FlowchartComplexStep>

                        <ArrowContainer>↓</ArrowContainer>

                        <FlowchartStep>
                            <StepTitle>3. End your response</StepTitle>
                            <PhraseList>
                                {[ "These are some reasons why ...", "So, this is why ...", "Given all that, I would ...", "All in all ...", "After weighing the pros and cons, ..." ].map(phrase => <PhraseItem key={phrase}>{phrase}</PhraseItem>)}
                            </PhraseList>
                        </FlowchartStep>
                    </FlowchartDiagram>
                    <BodyText style={{ marginTop: '30px', fontStyle: 'italic', color: '#566573' }}>
                        <strong>D2 Practice:</strong> Work in pairs. Take turns to ask each other one of the Individual Response questions from the coloured box at the top of this page. You may use the flow chart above to help you structure your response.
                    </BodyText>
                </Section>

                <Section>
                    <SectionHeader>
                        <span role="img" aria-label="practice target">🎯</span>
                        Part B: Practice Questions
                    </SectionHeader>
                    <BodyText>
                        The examiner will ask you one or more questions based on Part A. You will have up to 1 minute to respond.
                    </BodyText>
                    <QuestionList>
                        {practiceQuestions.map((q, index) => (
                            <QuestionItem key={index}>{q}</QuestionItem>
                        ))}
                    </QuestionList>
                </Section>

                <NextButtonContainer>
                    <NextButton onClick={onReturn} themeColor={themeColor}>
                        <span>Return to Skills Menu</span>
                        <span className="arrow">↩</span>
                    </NextButton>
                </NextButtonContainer>
            </Container>
        </ThemeProvider>
    );
};
