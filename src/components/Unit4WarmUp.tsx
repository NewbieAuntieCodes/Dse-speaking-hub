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
} from './Unit4WarmUp.styles';

interface Unit4WarmUpProps {
    onBack: () => void;
}

const Unit4WarmUp: React.FC<Unit4WarmUpProps> = ({ onBack }) => {
    return (
        <WarmUpContainer>
            <BackButton onClick={onBack}>← Back to Unit 4</BackButton>
            <h2>Warm-up</h2>

            <Section>
                <Exercise>
                    <Instruction>A1 In groups or with a partner, discuss the following questions:</Instruction>
                    <QuestionList>
                        <li>What are some types of pollution?</li>
                        <li>What do you think are the most important environmental issues in Hong Kong?</li>
                        <li>What do you do at home to reduce waste and consumption?</li>
                        <li>What are the benefits of recycling?</li>
                        <li>Have you ever participated in any environmental campaigns, such as a beach clean-up or a fundraising event for an environmental organization?</li>
                    </QuestionList>
                </Exercise>
            </Section>

            <Section>
                 <Exercise>
                    <Instruction>A2 Listen to the beginning of an Individual Response and answer the following questions:</Instruction>
                    <p><strong>1</strong> What is the topic of the response?</p>
                    <CheckboxGroup>
                        <label><input type="checkbox" /> recycling programmes in Hong Kong</label>
                        <label><input type="checkbox" /> pollution in the city</label>
                        <label><input type="checkbox" /> environmental problems in Hong Kong</label>
                    </CheckboxGroup>
                    <br />
                    <p><strong>2</strong> How did the speaker start the response?</p>
                     <CheckboxGroup>
                        <label><input type="checkbox" /> by repeating the question</label>
                        <label><input type="checkbox" /> by paraphrasing and then answering the question</label>
                        <label><input type="checkbox" /> by greeting the examiner</label>
                    </CheckboxGroup>
                    <br />
                    <p><strong>3</strong> Did the speaker use appropriate sentence stress and intonation?</p>
                </Exercise>
            </Section>
            
            <Section>
                <Exercise>
                    <Instruction>A3 In the speaking paper, you may be asked to solve a problem. In your group, think about the best way to approach a problem and complete the notes. You can use the prompts in the word box.</Instruction>
                     <WordGrid>
                        <WordBox>best solution</WordBox>
                        <WordBox>confident</WordBox>
                        <WordBox>optimistic</WordBox>
                        <WordBox>problem</WordBox>
                        <WordBox>brainstorm</WordBox>
                        <WordBox>different directions</WordBox>
                        <WordBox>positive language</WordBox>
                    </WordGrid>
                    <FillInTheBlankExercise>
                        <p>1 Define the <Blank />.</p>
                        <p>2 <Blank /> different solutions.</p>
                        <p>3 Be <Blank /> and <Blank />.</p>
                        <p>4 Use <Blank />.</p>
                        <p>5 Approach the problem from <Blank />.</p>
                        <p>6 Pick the <Blank />.</p>
                    </FillInTheBlankExercise>
                </Exercise>
            </Section>
        </WarmUpContainer>
    );
};

export default Unit4WarmUp;