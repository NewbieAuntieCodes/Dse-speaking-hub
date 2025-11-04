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
} from './Unit7WarmUp.styles';

interface Unit7WarmUpProps {
    onBack: () => void;
}

const Unit7WarmUp: React.FC<Unit7WarmUpProps> = ({ onBack }) => {
    return (
        <WarmUpContainer>
            <BackButton onClick={onBack}>← Back to Unit 7</BackButton>
            <h2>Warm-up</h2>

            <Section>
                <Exercise>
                    <Instruction>A1 In groups or with a partner, discuss the following questions:</Instruction>
                    <QuestionList>
                        <li>What skills can you learn by volunteering?</li>
                        <li>Why is charity work important?</li>
                        <li>Do you think it's a good idea for tourists to visit your country?</li>
                        <li>Is it a good idea for senior secondary students to work part-time?</li>
                        <li>Have you been to other countries?</li>
                    </QuestionList>
                </Exercise>
            </Section>

            <Section>
                 <Exercise>
                    <Instruction>A2 Listen to the beginning of an Individual Response and answer the following questions.</Instruction>
                    <QuestionList>
                        <li>What is the topic of the response?</li>
                        <li>Do you think the speaker agreed with the statement?</li>
                        <li>Write down any words that were not clear.</li>
                    </QuestionList>
                </Exercise>
            </Section>
            
            <Section>
                <Exercise>
                    <Instruction>A3 In the speaking paper, you may be asked to take a stand on an issue. In your group, complete the following notes on some possible topics. You can use the words and phrases in the word box.</Instruction>
                     <WordGrid>
                        <WordBox>enriching experience</WordBox>
                        <WordBox>environment</WordBox>
                        <WordBox>flying</WordBox>
                        <WordBox>new skill</WordBox>
                        <WordBox>planet</WordBox>
                        <WordBox>purpose</WordBox>
                        <WordBox>travel volunteering</WordBox>
                    </WordGrid>
                    <FillInTheBlankExercise>
                        <ol>
                            <li>Travel with a <Blank />.</li>
                            <li>Travelling is an <Blank />.</li>
                            <li>Combine <Blank /> and <Blank />.</li>
                            <li>Use holidays to learn a <Blank />.</li>
                            <li>Think about your impact on the <Blank />.</li>
                            <li><Blank /> is bad for the <Blank />.</li>
                        </ol>
                    </FillInTheBlankExercise>
                </Exercise>
            </Section>
        </WarmUpContainer>
    );
};

export default Unit7WarmUp;