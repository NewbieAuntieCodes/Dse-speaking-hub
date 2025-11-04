/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {
    WarmUpContainer,
    BackButton,
    Section,
    Exercise,
    Instruction,
    QuestionList,
    DebateBox
} from './Unit8WarmUp.styles';

interface Unit8WarmUpProps {
    onBack: () => void;
}

const Unit8WarmUp: React.FC<Unit8WarmUpProps> = ({ onBack }) => {
    return (
        <WarmUpContainer>
            <BackButton onClick={onBack}>← Back to Unit 8</BackButton>
            <h2>Warm-up</h2>

            <Section>
                <Exercise>
                    <Instruction>A1 In groups or with a partner, discuss the following questions:</Instruction>
                    <QuestionList>
                        <li>Do you pay attention to the news? What is the most discussed news item right now?</li>
                        <li>What is an important social issue faced by many countries?</li>
                        <li>Why is it important to give voice to different people in society?</li>
                        <li>What would help younger and older generations in Hong Kong understand each other better?</li>
                        <li>Can you think of an opinion you held about a social issue that changed after you had learnt more about the topic?</li>
                    </QuestionList>
                </Exercise>
            </Section>

            <Section>
                 <Exercise>
                    <Instruction>A2 Listen to the beginning of a Group Interaction and answer the following questions.</Instruction>
                    <QuestionList>
                        <li>What is the topic of the discussion?</li>
                        <li>What expression did the speakers use to start the discussion?</li>
                        <li>Write down any words that were not clear.</li>
                    </QuestionList>
                </Exercise>
            </Section>
            
            <Section>
                <Exercise>
                    <Instruction>A3 Work in pairs. Follow these instructions:</Instruction>
                    <ul>
                        <li>Cut out the activity cards from page A19 in the 'Speaking resource bank'.</li>
                        <li>Discuss the following questions. Use as many of the words on your cards as possible.</li>
                        <li>After you have used a word, put your card in the middle of the desk.</li>
                        <li>The player who has used the most words wins.</li>
                    </ul>
                    <DebateBox>
                        <p>You are members of the school debating club. You have been given the motion 'We should welcome more immigrants from Mainland China to live in Hong Kong'. Discuss arguments for and against the motion.</p>
                    </DebateBox>
                    <DebateBox>
                        <p>The government plans to knock down an old building near your school to make space for a luxury shopping mall. You are writing an article about this issue in the school newspaper. Discuss the pros and cons of the government's proposal.</p>
                    </DebateBox>
                </Exercise>
            </Section>
        </WarmUpContainer>
    );
};

export default Unit8WarmUp;