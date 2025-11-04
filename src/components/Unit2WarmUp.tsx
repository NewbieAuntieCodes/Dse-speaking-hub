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
} from './Unit2WarmUp.styles';

interface Unit2WarmUpProps {
    onBack: () => void;
}

const Unit2WarmUp: React.FC<Unit2WarmUpProps> = ({ onBack }) => {
    return (
        <WarmUpContainer>
            <BackButton onClick={onBack}>← Back to Unit 2</BackButton>
            <h2>Warm-up</h2>

            <Section>
                <Exercise>
                    <Instruction>A1 In groups or with a partner, discuss the following questions:</Instruction>
                    <QuestionList>
                        <li>What are some of the problems faced by teenagers?</li>
                        <li>Do you ask your parents or your friends for advice? Why?</li>
                        <li>Have you ever given advice to a friend? What did you talk about?</li>
                        <li>One saying about friendship is, 'A real friend is someone who walks in when the rest of the world is walking out.' What do you think this means?</li>
                    </QuestionList>
                </Exercise>
            </Section>

            <Section>
                 <Exercise>
                    <Instruction>A2 Listen to the beginning of a Group Interaction and answer the following questions.</Instruction>
                    <p><strong>1</strong> What is the topic of the discussion? Tick (✓) the correct answer.</p>
                    <CheckboxGroup>
                        <label><input type="checkbox" /> Asking for advice</label>
                        <label><input type="checkbox" /> Meeting friends</label>
                        <label><input type="checkbox" /> Making friends online</label>
                        <label><input type="checkbox" /> The topic is not clearly stated</label>
                    </CheckboxGroup>
                    <br />
                    <p><strong>2</strong> Which expression did the first speaker use to start the discussion? Tick (✓) the correct phrase.</p>
                     <CheckboxGroup>
                        <label><input type="checkbox" /> I would like to start.</label>
                        <label><input type="checkbox" /> Let's start our discussion.</label>
                        <label><input type="checkbox" /> Let's get started with our discussion.</label>
                    </CheckboxGroup>
                    <br />
                    <p><strong>3</strong> Did the speakers pronounce all the words clearly? Circle the ones that are not clear.</p>
                    <WordGrid>
                        <WordBox>write</WordBox>
                        <WordBox>include</WordBox>
                        <WordBox>friend</WordBox>
                        <WordBox>read</WordBox>
                        <WordBox>I think</WordBox>
                        <WordBox>homework</WordBox>
                        <WordBox>agree</WordBox>
                    </WordGrid>
                </Exercise>
            </Section>
            
            <Section>
                <Exercise>
                    <Instruction>A3 In the speaking paper, you may be asked to give advice on different problems. In your group, think about the problem below and complete the sentences. You can use the prompts in the word box.</Instruction>
                    <p>I can't keep friends for a long time. How do I maintain friendships?</p>
                     <WordGrid>
                        <WordBox>appreciate</WordBox>
                        <WordBox>experiences</WordBox>
                        <WordBox>honest</WordBox>
                        <WordBox>social media</WordBox>
                        <WordBox>connected</WordBox>
                        <WordBox>hang out</WordBox>
                        <WordBox>listen</WordBox>
                        <WordBox>support</WordBox>
                    </WordGrid>
                    <FillInTheBlankExercise>
                        <p>• Stay <Blank /> with your friends through <Blank />.</p>
                        <p>• <Blank /> with them in person whenever possible.</p>
                        <p>• <Blank /> them and tell them you <Blank /> them.</p>
                        <p>• Always <Blank /> to your friends and be <Blank /> with them.</p>
                        <p>• Share <Blank /> with your friends.</p>
                    </FillInTheBlankExercise>
                </Exercise>
            </Section>
        </WarmUpContainer>
    );
};

export default Unit2WarmUp;
