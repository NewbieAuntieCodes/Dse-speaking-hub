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
    CheckboxGroup,
    WordGrid,
    WordBox,
    FillInTheBlankExercise,
    Blank
} from './Unit1WarmUp.styles';

interface Unit1WarmUpProps {
    onBack: () => void;
}

const Unit1WarmUp: React.FC<Unit1WarmUpProps> = ({ onBack }) => {
    return (
        <WarmUpContainer>
            <BackButton onClick={onBack}>← Back to Unit 1</BackButton>
            <h2>Warm-up</h2>

            <Section>
                <Exercise>
                    <Instruction>A1 In groups or with a partner, discuss the following questions:</Instruction>
                    <QuestionList>
                        <li>What are the challenges that you face when studying English?</li>
                        <li>How can teachers make learning more fun and interesting?</li>
                        <li>What is the best way to prepare for speaking exams?</li>
                        <li>Do you know what brainstorming means? How should we brainstorm for creative ideas?</li>
                    </QuestionList>
                </Exercise>
            </Section>

            <Section>
                 <Exercise>
                    <Instruction>A2 Listen to the beginning of a group discussion and answer the following questions:</Instruction>
                    <p><strong>1</strong> What is the topic of the discussion? Tick (✓) the correct phrase.</p>
                    <CheckboxGroup>
                        <label><input type="checkbox" /> The advantages of saving paper</label>
                        <label><input type="checkbox" /> Helping the rainforests</label>
                        <label><input type="checkbox" /> How to respond to a message on a forum</label>
                    </CheckboxGroup>
                    <br />
                    <p><strong>2</strong> Which expression did they use to start the discussion? Tick (✓) the correct one.</p>
                     <CheckboxGroup>
                        <label><input type="checkbox" /> Good day. Let's start our discussion</label>
                        <label><input type="checkbox" /> Morning everybody. Nice to meet you all.</label>
                        <label><input type="checkbox" /> Good morning. It's nice to meet you all.</label>
                    </CheckboxGroup>
                    <br />
                    <p><strong>3</strong> Did they pronounce all the words clearly? Circle the ones that were not clear.</p>
                    <WordGrid>
                        <WordBox>it's</WordBox>
                        <WordBox>discuss</WordBox>
                        <WordBox>include</WordBox>
                        <WordBox>school</WordBox>
                        <WordBox>this</WordBox>
                        <WordBox>handbooks</WordBox>
                    </WordGrid>
                </Exercise>
            </Section>
            
            <Section>
                <Exercise>
                    <Instruction>A3 Discussion topics in the speaking paper often include social phenomena. In your group, think about the points below and complete the definitions. You can use the prompts in the word box.</Instruction>
                     <WordGrid>
                        <WordBox>addiction</WordBox>
                        <WordBox>influence</WordBox>
                        <WordBox>negative</WordBox>
                        <WordBox>smartphone</WordBox>
                        <WordBox>society</WordBox>
                    </WordGrid>
                    <FillInTheBlankExercise>
                        <p><strong>1</strong> What is the meaning of social phenomena?</p>
                        <p>the positive and <Blank /> ways in which events <Blank /> people's behaviour and <Blank />.</p>
                        <br/>
                        <p><strong>2</strong> Here are two examples of social phenomena:</p>
                        <p>social media <Blank /></p>
                        <p><Blank /> dependency</p>
                    </FillInTheBlankExercise>
                </Exercise>
            </Section>
        </WarmUpContainer>
    );
};

export default Unit1WarmUp;