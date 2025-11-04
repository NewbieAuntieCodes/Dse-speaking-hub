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
    WordGrid,
    WordBox,
    FillInTheBlankExercise,
    Blank
} from './Unit6WarmUp.styles';

interface Unit6WarmUpProps {
    onBack: () => void;
}

const Unit6WarmUp: React.FC<Unit6WarmUpProps> = ({ onBack }) => {
    return (
        <WarmUpContainer>
            <BackButton onClick={onBack}>← Back to Unit 6</BackButton>
            <h2>Warm-up</h2>

            <Section>
                <Exercise>
                    <Instruction>A1 In groups or with a partner, discuss the following questions:</Instruction>
                    <QuestionList>
                        <li>What is a fad? Do you pay attention to fads and trends?</li>
                        <li>Are you interested in the latest electronic gadgets?</li>
                        <li>Do you have a favourite item of clothing?</li>
                        <li>What does it mean to have a personal style?</li>
                        <li>Do you think young people should follow the latest trends?</li>
                    </QuestionList>
                </Exercise>
            </Section>

            <Section>
                 <Exercise>
                    <Instruction>A2 Listen to the beginning of an Individual Response and answer the following questions.</Instruction>
                    <QuestionList>
                        <li>What question do you think the examiner asked?</li>
                        <li>What was the student asked to do?</li>
                        <li>Write down any compound words and phrases you heard.</li>
                    </QuestionList>
                </Exercise>
            </Section>
            
            <Section>
                <Exercise>
                    <Instruction>A3 Complete what the salesperson says. Use the words and phrases in the box to help you.</Instruction>
                     <WordGrid>
                        <WordBox>gadget</WordBox>
                        <WordBox>tablet computer</WordBox>
                        <WordBox>revolutionary</WordBox>
                        <WordBox>virtual</WordBox>
                        <WordBox>social networking</WordBox>
                        <WordBox>wireless</WordBox>
                    </WordGrid>
                    <FillInTheBlankExercise>
                        <p>
                            This (1)<Blank /> is the latest model from Banana Electronics. It is a completely (2)<Blank /> design that allows you to use (3)<Blank /> Internet, so you can connect to the (4)<Blank /> world and visit (5)<Blank /> websites wherever you want. It is a must-buy (6)<Blank />.
                        </p>
                    </FillInTheBlankExercise>
                </Exercise>
            </Section>
        </WarmUpContainer>
    );
};

export default Unit6WarmUp;