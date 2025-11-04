/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {
    IdeasContainer,
    BackButton,
    Section,
    InstructionBox,
    ArticleBox,
    Table,
    Th,
    Td,
    NoteCard,
    RememberBox,
    Exercise,
    Instruction,
    WordBank,
    Notecard,
    FlowChart,
    FlowChartStep,
    FlowChartArrow,
    IndividualResponseList,
} from './Unit6IdeasAndOrganization.styles';

interface Unit6IdeasAndOrganizationProps {
    onBack: () => void;
}

const Unit6IdeasAndOrganization: React.FC<Unit6IdeasAndOrganizationProps> = ({ onBack }) => {
    return (
        <IdeasContainer>
            <BackButton onClick={onBack}>← Back to Unit 6</BackButton>
            <h2>Ideas and organization</h2>
             
            <Section>
                <h3>Statistics and charts</h3>
                <p>In the speaking exam, you may be given an input text that contains information such as statistics, charts or tables. Look at the Exam practice question below.</p>
                <InstructionBox>
                    <h4>GENERAL INSTRUCTIONS</h4>
                    <p>This paper consists of two parts: Part A, Group Interaction; and Part B, Individual Response. Part B will immediately follow Part A. DO NOT write anything on this page.</p>
                    <h4>Part A Group Interaction</h4>
                    <p>You will be given 10 minutes to prepare. The time allowed for the group interaction is 8 minutes (or 6 minutes for a group of 3 candidates). You may make notes on the notecard provided and refer to your notes during the discussion.</p>
                </InstructionBox>
                <ArticleBox>
                    <p>This article appeared in an online magazine:</p>
                    <h4>Life online</h4>
                    <p>We interviewed 500 of our readers last month about how much time they spend online. It turns out that we're computer- and phone-obsessed! Here's how much time our readers spend online every day:</p>
                    <Table>
                        <thead>
                            <tr>
                                <Th>age</Th>
                                <Th>minutes</Th>
                                <Th>0–120</Th>
                                <Th>121–240</Th>
                                <Th>241–360</Th>
                                <Th>361 and over</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><Td>0–15</Td><Td>14%</Td><Td>33%</Td><Td>43%</Td><Td>10%</Td></tr>
                            <tr><Td>16–25</Td><Td>11%</Td><Td>20%</Td><Td>62%</Td><Td>7%</Td></tr>
                            <tr><Td>26–35</Td><Td>6%</Td><Td>16%</Td><Td>63%</Td><Td>15%</Td></tr>
                            <tr><Td>35+</Td><Td>10%</Td><Td>26%</Td><Td>55%</Td><Td>9%</Td></tr>
                        </tbody>
                    </Table>
                    <h4>Comments from our readers</h4>
                    <ul>
                        <li>I use social media to connect with my friends—those I know in real life, and those I've made on Twitter or Instagram, but never met in real life.</li>
                        <li>I think it would be hard for me to spend less time online. We rely on the Internet for work, play, commerce and socializing. I would feel disconnected from the world if I spent less time online.</li>
                    </ul>
                </ArticleBox>
                <p>Your school magazine features an online trends column that discusses how people use digital technology. Your group has been asked to discuss whether the magazine should keep the column. You may want to talk about:</p>
                <ul>
                    <li>why students like reading about online trends</li>
                    <li>the negative aspects of following the latest digital technologies</li>
                    <li>how the column could be improved</li>
                    <li>anything else you think is important</li>
                </ul>
            </Section>

            <Section>
                <h3>Note-taking skills: making notes for the Individual Response</h3>
                <p>You should spend around <strong>one minute</strong> of your preparation time in the speaking exam on notes for the Individual Response.</p>
                <h4>Here are what the notes for the Individual Response section for the 'Example Group Interaction' question on page 89 might look like:</h4>
                <NoteCard>
                    <h4>Topic: virtual community groups</h4>
                    <p><strong>Possible IR topics/questions:</strong></p>
                    <ul>
                        <li>Privacy and online safety
                            <ul>
                                <li>- good idea to share personal details online?</li>
                                <li>- how to ensure websites don't sell your personal information?</li>
                            </ul>
                        </li>
                        <li>becoming involved in the community
                             <ul>
                                <li>- what is the best way to connect with neighbours?</li>
                                <li>- what are some advantages of meeting people online before you meet them in person?</li>
                            </ul>
                        </li>
                    </ul>
                </NoteCard>
                <RememberBox>
                    <h4>Remember</h4>
                    <ul>
                        <li>Don't spend too much time on making notes for the Individual Response. Aim to write down <strong>two to three</strong> main points.</li>
                        <li>Pay attention and listen carefully during the Group Interaction. You may be able to use some of the ideas from the discussion in your Individual Response.</li>
                    </ul>
                </RememberBox>
            </Section>

            <Section>
                <Exercise>
                    <Instruction><strong>D1</strong> Complete the notecard below for the Exam practice question on page 91. Use the bottom section to make notes for the Individual Response. You may find the following words and phrases useful.</Instruction>
                    <WordBank>
                        <p><strong>reading about online trends:</strong> cutting-edge, beta-testing, early adopter, user interface, artificial intelligence, digital, gear, robots</p>
                        <p><strong>negative aspects:</strong> peer pressure, materialistic, data breach, waste of money, 'Big Brother', security, privacy</p>
                        <p><strong>society's views:</strong> up to date, trendy, online culture, right to forget, popular, outdated</p>
                    </WordBank>
                    <Notecard>
                        <p>Topic:</p>
                        <p>Position:</p>
                        <p>1 why students read about online trends</p>
                        <p>2 negative aspects</p>
                        <p>3 how the column could be improved</p>
                        <p>4 others</p>
                        <p>Possible IR topics/questions</p>
                    </Notecard>
                </Exercise>
            </Section>

            <Section>
                <h3>Individual Response: making predictions</h3>
                <p>In the Individual Response, you may be asked to talk about how you see things happen in the future, or about the consequences of an issue. These questions ask you to make <strong>predictions</strong>. The questions could come in the following forms:</p>
                <ul>
                    <li><strong>How would you feel if</strong> everybody joined the latest social media site?</li>
                    <li><strong>What would you do if</strong> all your friends started using digital AI assistants?</li>
                    <li><strong>What would happen if</strong> students brought expensive smartphones and gadgets to school?</li>
                    <li><strong>What do you think will be</strong> the next fad or trend in Hong Kong?</li>
                </ul>
                <FlowChart>
                    <FlowChartStep>
                        <p>Start with a short introductory statement</p>
                        <ul>
                            <li>If ... then ...</li>
                            <li>There are a number of things that could happen.</li>
                            <li>I think there will be a number of consequences.</li>
                        </ul>
                    </FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep>
                        <p>Make two to three predictions (you can use the PRE structure)</p>
                        <ul>
                            <li>① making a point/prediction (e.g. Everyone <strong>would</strong> wear the same things.)</li>
                            <li>② giving a reason (e.g. ... <strong>as/because/since</strong> they are all following the same fads and trends)</li>
                            <li>③ talking about your personal experiences/observations (My friends all buy the same smartphones ...)</li>
                        </ul>
                    </FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep>
                        <p>End your response</p>
                        <ul>
                           <li>These are some of the things I think would happen if ...</li>
                           <li>This is how I would feel/what I would do if ...</li>
                        </ul>
                    </FlowChartStep>
                </FlowChart>
                <Exercise>
                    <Instruction><strong>D2</strong> Work in pairs. Take turns to ask each other one of the Individual Response questions from the top of this page. You may use the flow chart above to help you structure your response.</Instruction>
                </Exercise>
            </Section>

            <Section>
                <h3>Paper 4 Exam practice</h3>
                <p>In groups of four, complete Part A of the Exam practice on page 94 and the notecard below to help you.</p>
                <Notecard style={{maxWidth: '500px', margin: '20px auto', background: '#f7fafc', borderColor: '#e2e8f0', backgroundImage: 'none'}}>
                    <h4 style={{textAlign: 'center', fontWeight: 'bold'}}>Notecard</h4>
                    <p style={{textAlign: 'center', marginBottom: '15px'}}>Reading about online trends</p>
                    <p style={{textAlign: 'center', marginBottom: '15px'}}>Negative aspects</p>
                    <p style={{textAlign: 'center', marginBottom: '15px'}}>Improvements to make</p>
                </Notecard>
                <p>Follow your teacher's instructions and complete Part B.</p>
                <h4>Part B Individual Response</h4>
                <p>The examiner will ask you one or more questions based on Part A. You will have up to 1 minute to respond.</p>
                <IndividualResponseList>
                    <li>Do you spend a lot of time online each day?</li>
                    <li>Do you think social media will continue to be popular in Hong Kong?</li>
                    <li>What advice would you give a friend who is spending too much time online?</li>
                    <li>If you were the editor of the school magazine, would you prefer to write about electronic gadgets or the environment?</li>
                    <li>Why are some people so invested in their social media profiles?</li>
                    <li>Should students be more careful about the information they share online?</li>
                    <li>Should everyone learn how to code in the future?</li>
                    <li>How can people learn more about new trends in technology in Hong Kong?</li>
                </IndividualResponseList>
            </Section>

        </IdeasContainer>
    );
};

export default Unit6IdeasAndOrganization;