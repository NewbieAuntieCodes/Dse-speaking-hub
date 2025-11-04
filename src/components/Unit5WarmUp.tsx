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
} from './Unit5WarmUp.styles';

interface Unit5WarmUpProps {
    onBack: () => void;
}

const Unit5WarmUp: React.FC<Unit5WarmUpProps> = ({ onBack }) => {
    return (
        <WarmUpContainer>
            <BackButton onClick={onBack}>← Back to Unit 5</BackButton>
            <h2>Warm-up</h2>

            <Section>
                <Exercise>
                    <Instruction>A1 In groups or with a partner, discuss the following questions:</Instruction>
                    <QuestionList>
                        <li>Which do you think is the most popular in Hong Kong: television, YouTube or Facebook?</li>
                        <li>Are you a fan of any pop stars or movie stars?</li>
                        <li>Is social media a poor influence on young people?</li>
                        <li>Do you think working in the entertainment industry, such as being a singer or an actor, is a good idea?</li>
                        <li>Do you want to become a YouTube star?</li>
                    </QuestionList>
                </Exercise>
            </Section>

            <Section>
                 <Exercise>
                    <Instruction>A2 Listen to the beginning of a Group Interaction and answer the following questions.</Instruction>
                    <QuestionList>
                        <li>What is the topic of the discussion?</li>
                        <li>Which expression did the speakers use to start the discussion?</li>
                        <li>Did the speakers use weak forms of words correctly? Write down any words that were stressed too much.</li>
                    </QuestionList>
                </Exercise>
            </Section>
            
            <Section>
                <Exercise>
                    <Instruction>A3 In the speaking paper, you may be asked to argue for or against a position. In your group, complete the argument topics. You can use the prompts below.</Instruction>
                     <WordGrid>
                        <WordBox>beauty contests</WordBox>
                        <WordBox>celebrities and payment</WordBox>
                        <WordBox>shopping and entertainment</WordBox>
                        <WordBox>social media and relationships</WordBox>
                        <WordBox>violent video games and teens</WordBox>
                        <WordBox>watching films—cinema or home</WordBox>
                    </WordGrid>
                    <FillInTheBlankExercise>
                        <ol>
                            <li><Blank /> should be banned.</li>
                            <li><Blank /> harms <Blank />.</li>
                            <li><Blank /> is better than watching them at <Blank />.</li>
                            <li><Blank /> deserve to get paid a lot of money.</li>
                            <li><Blank /> should not be allowed to play <Blank />.</li>
                            <li><Blank /> is a form of <Blank />.</li>
                        </ol>
                    </FillInTheBlankExercise>
                </Exercise>
            </Section>
        </WarmUpContainer>
    );
};

export default Unit5WarmUp;