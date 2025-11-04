/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
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

const BodyText = styled.p`
    font-size: 1.1em;
    color: #4a5568;
    line-height: 1.8;
    margin-bottom: 25px;
`;

const QuestionListUL = styled.ul`
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
            color: ${props => props.theme.mainColor || '#f39c12'};
            font-weight: bold;
        }
    }
`;

const FlowchartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 30px 0;
`;

const StepCard = styled.div`
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 25px;
    width: 100%;
    max-width: 650px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
`;

const StepTitle = styled.h4`
    font-size: 1.3em;
    font-weight: bold;
    color: #34495e;
    margin-bottom: 15px;
`;

const PhraseList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const PhraseItem = styled.li`
    font-size: 1.05em;
    color: #4a5568;
    line-height: 1.7;
    margin-bottom: 8px;
    font-style: italic;
    position: relative;
    padding-left: 20px;

    &::before {
        content: '›';
        position: absolute;
        left: 0;
        top: 0;
        font-weight: bold;
        color: #7f8c8d;
    }
`;

const Arrow = styled.div`
    font-size: 2.5em;
    color: #bdc3c7;
    font-weight: bold;
`;

const RememberBox = styled.div`
    background-color: #fffbe6;
    border: 1px solid #ffe58f;
    border-left: 5px solid #fadb14;
    padding: 25px;
    margin: 30px 0;
    border-radius: 8px;
    line-height: 1.7;
    font-size: 1.05em;

    h4 {
        font-size: 1.2em;
        font-weight: bold;
        color: #d46b08;
        margin-bottom: 10px;
    }

    p {
        color: #594b0d;
        margin: 0 0 10px 0;
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

const PracticeBox = styled.div`
    background-color: #f0f2f5;
    border: 1px solid #dee2e6;
    padding: 20px;
    margin: 30px 0;
    border-radius: 12px;
    font-size: 1.05em;
    color: #495057;
    line-height: 1.7;

    strong {
        font-weight: bold;
        color: #2c3e50;
    }
`;

const Notecard = styled.div`
    background: #ffffff;
    border: 1px solid #ced4da;
    border-radius: 8px;
    padding: 25px;
    margin: 25px auto;
    max-width: 600px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);

    h5 {
        font-size: 1.2em;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
        color: #34495e;
    }
`;

const NotecardLine = styled.div`
    color: #4a5568;
    padding: 15px 0;
    border-bottom: 1px solid #e9ecef;
    font-size: 1.05em;

    &:last-child {
        border-bottom: none;
    }
`;

const FinalQuestionList = styled.ol`
    list-style: decimal;
    padding-left: 25px;
    font-size: 1.1em;
    line-height: 1.9;
    color: #34495e;
`;

const FinalQuestionItem = styled.li`
    margin-bottom: 15px;
    padding-left: 10px;

    &::marker {
        font-weight: bold;
        color: ${props => props.theme.mainColor || '#f39c12'};
    }
`;

interface GivingReasonsContentProps {
    onBack: () => void;
    onReturn: () => void;
    themeColor: string;
}

export const GivingReasonsContent: React.FC<GivingReasonsContentProps> = ({ onBack, onReturn, themeColor }) => {
    return (
        <ThemeProvider theme={{ mainColor: themeColor }}>
            <Container>
                <BackButton onClick={onBack} themeColor={themeColor}>← Back to Individual Response Skills</BackButton>
                <LessonTitle>Individual Response: giving reasons</LessonTitle>
                
                <Section>
                    <BodyText>
                        During the Individual Response, you may be asked to give reasons for why certain events happen or why an action takes place. Questions of this type could come in the following forms:
                    </BodyText>
                    <QuestionListUL>
                        <li>Why do you think people recycle?</li>
                        <li>Why is it important for young people to take part in environmental campaigns?</li>
                        <li>Why do some people dislike using too many plastic bags?</li>
                        <li>Why is it difficult for the government to reduce pollution in Hong Kong?</li>
                    </QuestionListUL>
                    <BodyText>
                        To answer this type of question, you need to think about the causes and influences behind the events and situations introduced in the Group Interaction question.
                    </BodyText>
                </Section>
                
                <Section>
                    <FlowchartContainer>
                        <StepCard>
                            <StepTitle>Give a short introduction</StepTitle>
                            <PhraseList>
                                <PhraseItem>I can think of several reasons why ...</PhraseItem>
                                <PhraseItem>There are many explanations why ...</PhraseItem>
                            </PhraseList>
                        </StepCard>
                        <Arrow>↓</Arrow>
                        <StepCard>
                            <StepTitle>Give your first reason (use PRE if appropriate)</StepTitle>
                             <PhraseList>
                                <PhraseItem>First of all, ...</PhraseItem>
                                <PhraseItem>One explanation is that ...</PhraseItem>
                                <PhraseItem>... because/since/as ...</PhraseItem>
                            </PhraseList>
                        </StepCard>
                        <Arrow>↓</Arrow>
                        <StepCard>
                            <StepTitle>Add reason(s)</StepTitle>
                             <PhraseList>
                                <PhraseItem>Also, ...</PhraseItem>
                                <PhraseItem>What's more, ...</PhraseItem>
                                <PhraseItem>In addition, ...</PhraseItem>
                                <PhraseItem>Another reason is that ...</PhraseItem>
                            </PhraseList>
                        </StepCard>
                        <Arrow>↓</Arrow>
                        <StepCard>
                            <StepTitle>End your response</StepTitle>
                             <PhraseList>
                                <PhraseItem>These are some reasons why ...</PhraseItem>
                                <PhraseItem>So, this is why ...</PhraseItem>
                            </PhraseList>
                        </StepCard>
                    </FlowchartContainer>
                </Section>
                
                <Section>
                    <RememberBox>
                        <h4>Remember</h4>
                        <p>During the speaking exam, you may need to improvise quickly in order to avoid an uncomfortable pause. Improvising involves acting or speaking with little or no preparation.</p>
                        <p>If you get stuck for ideas during the exam, one good strategy is to ask yourself wh-questions about the discussion topic, e.g. Why? What? Where? When? Who? How (many/often/long)?</p>
                    </RememberBox>
                    <PracticeBox>
                        <strong>D3 Work in pairs.</strong> Take turns to ask each other one of the Individual Response questions from the coloured box at the top of this page. You may use the flow chart above to help you structure your response.
                    </PracticeBox>
                </Section>
                
                <Section>
                    <LessonTitle style={{fontSize: '2em', borderBottom: 'none', paddingBottom: 0, marginBottom: 10}}>Paper 4 Exam practice</LessonTitle>
                    <BodyText>
                        In groups of four, complete Part A of the Exam practice on page 60. Use your notes on page 62 and the notecard below to help you.
                    </BodyText>
                    <Notecard>
                        <h5>Notecard</h5>
                        <NotecardLine>Which trip caught your eye?</NotecardLine>
                        <NotecardLine>Which trip could do the most to stop climate change?</NotecardLine>
                        <NotecardLine>Most interesting trip</NotecardLine>
                        <NotecardLine>Most helpful to the environment</NotecardLine>
                        <NotecardLine>Negative aspects</NotecardLine>
                    </Notecard>
                    <BodyText>
                        Follow your teacher's instructions and complete Part B.
                    </BodyText>
                    <StepTitle style={{fontSize: '1.5em'}}>Part B Individual Response</StepTitle>
                    <BodyText>
                        The examiner will ask you one or more questions based on Part A. You will have up to 1 minute to respond.
                    </BodyText>
                    <FinalQuestionList>
                        <FinalQuestionItem>Would you like to go on an eco-friendly volunteering holiday?</FinalQuestionItem>
                        <FinalQuestionItem>Does your family consider the environment when they plan family trips?</FinalQuestionItem>
                        <FinalQuestionItem>What could you learn from volunteering directly with injured or ill animals?</FinalQuestionItem>
                        <FinalQuestionItem>Can eco-volunteering holidays do more harm than good?</FinalQuestionItem>
                        <FinalQuestionItem>If you were a sea turtle, how would you feel about the plastic in the sea?</FinalQuestionItem>
                        <FinalQuestionItem>What kinds of ecotourism holidays could be offered to tourists in Hong Kong?</FinalQuestionItem>
                        <FinalQuestionItem>Is it better to donate time or money to an environmental effort?</FinalQuestionItem>
                        <FinalQuestionItem>Is it ironic that tourists need to burn fossil fuels to travel to an ecotourism location?</FinalQuestionItem>
                    </FinalQuestionList>
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