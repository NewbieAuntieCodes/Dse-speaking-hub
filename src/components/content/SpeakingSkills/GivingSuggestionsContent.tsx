/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { BackButton, LessonTitle, NextButtonContainer, NextButton } from '../Structures/SVOContent.styles';

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

const IntroText = styled.p`
    font-size: 1.1em;
    color: #4a5568;
    line-height: 1.8;
    margin-bottom: 30px;
`;

const TipBox = styled.div`
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    padding: 20px;
    margin: 30px 0;
    border-radius: 12px;
    display: flex;
    align-items: flex-start;
    gap: 15px;
    font-size: 1.05em;
    color: #495057;
    line-height: 1.7;

    &::before {
        content: '✓';
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #e9ecef;
        color: #868e96;
        font-weight: bold;
        font-size: 1.2em;
        flex-shrink: 0;
        margin-top: 4px;
    }
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

const FlowchartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const StepCard = styled.div`
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 16px;
    padding: 25px;
    width: 100%;
    max-width: 650px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    position: relative;
    border-left: 5px solid ${props => props.theme.mainColor || '#9b59b6'};
`;

const StepHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
`;

const StepNumber = styled.div`
    background-color: ${props => props.theme.mainColor || '#9b59b6'};
    color: white;
    font-weight: bold;
    font-size: 1.5em;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

const StepTitle = styled.h4`
    font-size: 1.4em;
    font-weight: bold;
    color: #34495e;
`;

const PhraseList = styled.ul`
    list-style-type: none;
    padding-left: 10px;
`;

const PhraseItem = styled.li`
    font-size: 1.05em;
    color: #4a5568;
    line-height: 1.7;
    margin-bottom: 8px;
    position: relative;
    padding-left: 20px;

    &::before {
        content: '✓';
        color: ${props => props.theme.mainColor || '#9b59b6'};
        position: absolute;
        left: 0;
        top: 4px;
        font-weight: bold;
    }
`;

const Tip = styled.p`
    background-color: #fffbe6;
    border-left: 4px solid #fcc419;
    padding: 10px 15px;
    margin-top: 15px;
    border-radius: 0 8px 8px 0;
    color: #594b0d;
    font-size: 1em;
    font-style: italic;
`;

const Arrow = styled.div`
    font-size: 2.5em;
    color: #bdc3c7;
    font-weight: bold;
`;

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

const questions = [
    "How did you make new friends at secondary school?",
    "Do you think first impressions are important?",
    "How do you cope with negative feelings?",
    "How can parents help their children develop emotional maturity?",
    "Why is it important for students to develop healthy coping techniques?",
    "What would you do if your friend started skipping school?",
    "How can you make a friend feel comfortable about sharing their problems with you?",
    "What would you do if your friend refused to listen to your advice?"
];

const exampleQuestions = [
    "How should students deal with overwhelming emotions?",
    "How can secondary school students make new friends?",
    "What could be done to help students better deal with school-related anxiety?",
    "What can teachers do to help students who skip classes or stop paying attention?",
    "What advice would you give to a friend who is having emotional troubles?",
];


interface GivingSuggestionsContentProps {
    onBack: () => void;
    onReturn: () => void;
    themeColor: string;
}

export const GivingSuggestionsContent: React.FC<GivingSuggestionsContentProps> = ({ onBack, onReturn, themeColor }) => {
    const individualResponseTheme = { mainColor: themeColor };

    return (
        <ThemeProvider theme={individualResponseTheme}>
            <Container>
                <BackButton onClick={onBack} themeColor={themeColor}>← Back to Individual Response Skills</BackButton>
                <LessonTitle>Giving Suggestions and Advice</LessonTitle>

                <Section>
                     <SectionHeader>
                        <span role="img" aria-label="chat bubble">💬</span>
                        Giving suggestions and advice
                    </SectionHeader>
                    <IntroText>
                        In the Individual Response, you may be asked to give suggestions or advice about an issue related to the Group Interaction question. The questions could come in the following forms:
                    </IntroText>
                    <ExampleQuestionList>
                        {exampleQuestions.map((q, index) => <li key={index}>{q}</li>)}
                    </ExampleQuestionList>
                    <TipBox>
                        If you did not hear the question clearly, you could ask the examiner to repeat it, e.g. <em>I'm sorry, could you please repeat the question?</em>
                    </TipBox>
                    <IntroText style={{marginBottom: 0}}>
                        During the Individual Response, each candidate has to speak for about one minute. Try to make two or three main points in your one-minute speech.
                    </IntroText>
                </Section>

                <Section>
                    <SectionHeader>
                        <span role="img" aria-label="flowchart">🗺️</span>
                        How to Structure Your Response
                    </SectionHeader>
                    <IntroText>
                        Here's one way of responding to questions that ask you to give suggestions or advice:
                    </IntroText>
                    <FlowchartContainer>
                        <StepCard>
                            <StepHeader>
                                <StepNumber>1</StepNumber>
                                <StepTitle>Give a short introduction</StepTitle>
                            </StepHeader>
                            <PhraseList>
                                <PhraseItem>There are many ways to ...</PhraseItem>
                                <PhraseItem>I think there are several things students can do ...</PhraseItem>
                                <PhraseItem>I can think of a few solutions to this problem.</PhraseItem>
                            </PhraseList>
                        </StepCard>
                        
                        <Arrow>↓</Arrow>
                        
                        <StepCard>
                            <StepHeader>
                                <StepNumber>2</StepNumber>
                                <StepTitle>Give two or three suggestions/pieces of advice</StepTitle>
                            </StepHeader>
                            <PhraseList>
                                <PhraseItem>It may be a good idea to ...</PhraseItem>
                                <PhraseItem>Perhaps teachers can consider ...</PhraseItem>
                                <PhraseItem>For example, ...</PhraseItem>
                                <PhraseItem>Firstly/Secondly/Thirdly, ...</PhraseItem>
                            </PhraseList>
                            <Tip>(Don't forget to use the PRE structure!)</Tip>
                        </StepCard>

                        <Arrow>↓</Arrow>

                        <StepCard>
                            <StepHeader>
                                <StepNumber>3</StepNumber>
                                <StepTitle>End your response</StepTitle>
                            </StepHeader>
                            <PhraseList>
                                <PhraseItem>So, to conclude, ...</PhraseItem>
                                <PhraseItem>These are some suggestions for ...</PhraseItem>
                            </PhraseList>
                        </StepCard>
                    </FlowchartContainer>
                </Section>
                
                <Section>
                    <SectionHeader>
                        <span role="img" aria-label="practice target">🎯</span>
                        Part B: Individual Response Practice Questions
                    </SectionHeader>
                     <IntroText>
                        The examiner will ask you one or more questions based on Part A. You will have up to 1 minute to respond. Work in pairs. Take turns to ask each other one of the Individual Response questions below. You may use the flow chart above to help you structure your response.
                    </IntroText>
                    <QuestionList>
                        {questions.map((q, index) => (
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
