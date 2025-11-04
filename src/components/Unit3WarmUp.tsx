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
} from './Unit3WarmUp.styles';

interface Unit3WarmUpProps {
    onBack: () => void;
}

const Unit3WarmUp: React.FC<Unit3WarmUpProps> = ({ onBack }) => {
    return (
        <WarmUpContainer>
            <BackButton onClick={onBack}>← Back to Unit 3</BackButton>
            <h2>Warm-up</h2>

            <Section>
                <Exercise>
                    <Instruction>A1 In groups or with a partner, discuss the following questions:</Instruction>
                    <QuestionList>
                        <li>Do you prefer watching sport or playing sport?</li>
                        <li>What are the main differences between team sports and individual sports?</li>
                        <li>Would you want to live the life of an Olympic athlete? Why or why not?</li>
                        <li>What do you do to keep fit?</li>
                        <li>Do you think it's important to be competitive? Why or why not?</li>
                    </QuestionList>
                </Exercise>
            </Section>

            <Section>
                 <Exercise>
                    <Instruction>A2 Listen to the beginning of an Individual Response and answer the following questions.</Instruction>
                    <p><strong>1</strong> What is the topic of the response? Tick (✓) the correct phrase.</p>
                    <CheckboxGroup>
                        <label><input type="radio" name="q1" /> Parents worry about the Internet</label>
                        <label><input type="radio" name="q1" /> Online activities that teenagers like</label>
                        <label><input type="radio" name="q1" /> Teenagers love to chat</label>
                    </CheckboxGroup>
                    <br />
                    <p><strong>2</strong> Which expression did he/she use to start the response? Tick (✓) the correct one.</p>
                     <CheckboxGroup>
                        <label><input type="radio" name="q2" /> I see</label>
                        <label><input type="radio" name="q2" /> I would like to</label>
                        <label><input type="radio" name="q2" /> It's nice to meet you.</label>
                    </CheckboxGroup>
                    <br />
                    <p><strong>3</strong> Did he/she pronounce all the words clearly? Circle the ones that are not clear.</p>
                    <WordGrid>
                        <WordBox>most</WordBox>
                        <WordBox>there are</WordBox>
                        <WordBox>engage</WordBox>
                        <WordBox>friends</WordBox>
                        <WordBox>do too</WordBox>
                        <WordBox>moderated</WordBox>
                    </WordGrid>
                </Exercise>
            </Section>
            
            <Section>
                <Exercise>
                    <Instruction>A3 In the speaking paper, you may be asked to organize an event. In your group, think about the planning steps and complete the suggested steps. You can use the prompts in the word box.</Instruction>
                     <WordGrid>
                        <WordBox>advertising</WordBox>
                        <WordBox>assign</WordBox>
                        <WordBox>decide</WordBox>
                        <WordBox>invitations</WordBox>
                        <WordBox>marketing</WordBox>
                        <WordBox>prepare</WordBox>
                        <WordBox>purpose</WordBox>
                        <WordBox>volunteers</WordBox>
                    </WordGrid>
                    <FillInTheBlankExercise>
                        <ol>
                            <li>Define the event's<Blank>purpose</Blank>.</li>
                            <li>Gather<Blank>volunteers</Blank>.</li>
                            <li><Blank>decide</Blank>on a time and place.</li>
                            <li><Blank>prepare</Blank>a budget.</li>
                            <li>Think about<Blank>advertising</Blank>and<Blank>marketing</Blank>.</li>
                            <li>Meet with your team and<Blank>assign</Blank>tasks.</li>
                            <li>Send<Blank>invitations</Blank>.</li>
                        </ol>
                    </FillInTheBlankExercise>
                </Exercise>
            </Section>
        </WarmUpContainer>
    );
};

export default Unit3WarmUp;