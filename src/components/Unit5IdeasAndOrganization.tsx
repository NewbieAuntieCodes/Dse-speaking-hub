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
    HighlightedText,
    CheckboxLabel,
    DialogueGrid,
    DialogueBubble,
    NoteTakingTips,
    PrepStructure,
    PrepStep,
    Exercise,
    Instruction,
    WordBank,
    Notecard,
    FlowChart,
    FlowChartStep,
    FlowChartArrow,
    IndividualResponseList,
} from './Unit5IdeasAndOrganization.styles';

interface Unit5IdeasAndOrganizationProps {
    onBack: () => void;
}

const Unit5IdeasAndOrganization: React.FC<Unit5IdeasAndOrganizationProps> = ({ onBack }) => {
    return (
        <IdeasContainer>
            <BackButton onClick={onBack}>← Back to Unit 5</BackButton>
            <h2>Ideas and organization</h2>

            <Section>
                <h3>Identifying arguments in the input text</h3>
                <p>In the speaking exam, you might be asked to discuss the arguments for and/or against an issue. Sometimes, understanding the different opinions and arguments presented in the input text can help you come up with ideas.</p>
                <p>Look at the Exam practice question below.</p>
                <InstructionBox>
                    <h4>GENERAL INSTRUCTIONS</h4>
                    <p>This paper consists of two parts: Part A, Group Interaction; and Part B, Individual Response. Part B will immediately follow Part A. DO NOT write anything on this page.</p>
                    <h4>Part A Group Interaction</h4>
                    <p>You will be given 10 minutes to prepare. The time allowed for the group interaction is 8 minutes (or 6 minutes for a group of 3 candidates). You may make notes on the notecard provided and refer to your notes during the discussion.</p>
                </InstructionBox>
                <ArticleBox>
                    <p>This article appeared in a local newspaper:</p>
                    <h4>Singing talents find fame on 'Hong Kong Idol'</h4>
                    <p>Good news for aspiring singers over the age of 16: you can now sign up for 'Hong Kong Idol' and have a shot at pop stardom.</p>
                    <p>Contestants in the talent show perform live on TV every week. They face a panel of tough and distinguished judges including experienced singers and well-known music producers. TV viewers will also vote for their favourite singer. One contestant gets eliminated in each episode.</p>
                    <p>For the contestants, 'Hong Kong Idol' is a once-in-a-lifetime opportunity. The winner gets an exclusive one-year record deal with a chance to work with some of the hottest names in showbiz. Meg Lee, who won last season's contest, has appeared on magazine covers everywhere and given interviews to a number of TV shows.</p>
                    <p>However, audience feedback has been mixed. 'The judges are so mean and critical,' says Mrs Wong, a 34-year-old viewer. 'They really destroy the confidence of some of the young singers.'</p>
                </ArticleBox>
                <p>Your classmate Jordan wants to join the 'Hong Kong Idol' contest. Your group has been asked to discuss whether this is a good idea. You may want to talk about:</p>
                <ul>
                    <li>how taking part in the contest could affect him</li>
                    <li>how winning the contest could influence him</li>
                    <li>what concerns his parents might have</li>
                    <li>anything else you think is important</li>
                </ul>
                <p>If the discussion question asks you to argue for or against a position, it is a good idea to identify different arguments in the input text first.</p>
                <ArticleBox>
                    <p><CheckboxLabel>✓</CheckboxLabel> great prizes, including a one-year record deal</p>
                    <p><CheckboxLabel>✗</CheckboxLabel> lot of pressure to perform well every week</p>
                    <p>For the contestants, 'Hong Kong Idol' is a once-in-a-lifetime opportunity. <HighlightedText>The winner gets an exclusive one-year record deal</HighlightedText> with a chance to work with some of the hottest names in showbiz. Meg Lee, who won last season's contest, has appeared on magazine covers everywhere and given interviews to a number of TV shows.</p>
                    <p>However, audience feedback has been mixed. <HighlightedText>The judges are so mean and critical</HighlightedText>,' says Mrs Wong, a 34-year-old viewer. '<HighlightedText>They really destroy the confidence of some of the young singers.</HighlightedText>'</p>
                    <p><CheckboxLabel>✓</CheckboxLabel> can be famous and receive lots of media attention</p>
                    <p><CheckboxLabel>✗</CheckboxLabel> judges may hurt your feelings because they are so harsh</p>
                </ArticleBox>
                <p>Identifying arguments in the input text can give you ideas for talking points.</p>
                 <DialogueGrid>
                    <DialogueBubble><p>I think this is a good opportunity for Jordan. If he wins, he will have a great start to his singing career. He'll get to sign a one-year record deal and also work with big names in the music industry.</p></DialogueBubble>
                    <DialogueBubble><p>I'm against Jordan joining this contest. The judges of this kind of TV show often make fun of contestants just to attract high audience ratings. Jordan may lose confidence in himself after participating in the show.</p></DialogueBubble>
                </DialogueGrid>
            </Section>

            <Section>
                <h3>Note-taking skills: organizing your arguments</h3>
                <p>When making notes for discussion questions which ask you to argue for and/or against a position, pay attention to the following:</p>
                <NoteTakingTips>
                    <ul>
                        <li><strong>Make notes on arguments both for and against the issue.</strong> In the exam, you might be asked to prepare arguments both for and against a debate motion.</li>
                        <li><strong>Mark your arguments clearly.</strong> Organize your notes clearly. Consider using: columns, tables, symbols and abbreviations (e.g., ✓/✗, +/-).</li>
                        <li><strong>PREP.</strong> When organizing your ideas and talking points, you can extend the PRE structure to PREP.</li>
                    </ul>
                </NoteTakingTips>
                <PrepStructure>
                    <PrepStep>① P = point</PrepStep>
                    <PrepStep>② R = reason</PrepStep>
                    <PrepStep>③ E = personal experience (or observation)</PrepStep>
                    <PrepStep>④ P = position</PrepStep>
                </PrepStructure>
                <p>Make sure your talking point supports your position for or against the issue. This should help keep your arguments relevant and on track.</p>
                 <Exercise>
                    <Instruction><strong>D1</strong> Complete the notecard below for the Exam practice question on page 75. You may find these words and phrases useful.</Instruction>
                    <WordBank>
                        <strong>taking part in the contest:</strong> to try one's best, stage fright, audience, feedback, to make fun of, to criticize, valuable experience
                        <br/>
                        <strong>winning the contest:</strong> prizes, fame, newspaper, to report, to be known, opportunity, encouragement, paparazzi, public attention
                        <br/>
                        <strong>parents' concerns:</strong> to care about, anxious, protective, supportive, to persuade, positive, negative, decision
                    </WordBank>
                    <Notecard />
                </Exercise>
            </Section>
            
            <Section>
                <h3>Individual Response: giving arguments for or against</h3>
                <p>In the Individual Response, you may be asked to give arguments for or against an issue. Such questions could come in the following forms:</p>
                <ul>
                    <li><strong>Is it a good idea for teenagers to become idols?</strong></li>
                    <li><strong>Do you think</strong> teenagers <strong>should</strong> be banned from participating in reality shows?</li>
                    <li><strong>Are</strong> celebrities a <strong>good or bad influence</strong> on young people?</li>
                    <li><strong>What are the problems of</strong> becoming a star at a young age?</li>
                    <li><strong>What are the advantages of</strong> working in the entertainment industry?</li>
                    <li><strong>Are there any disadvantages of</strong> participating in a reality show?</li>
                </ul>
                <FlowChart>
                    <FlowChartStep>
                        <p>State your position/Give a short introduction</p>
                        <ul>
                            <li>I think it's a good/bad idea ...</li>
                            <li>I can think of many problems ...</li>
                            <li>There are several advantages/disadvantages ...</li>
                        </ul>
                    </FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep>
                        <p>Offer two to three arguments in your main speech (use PRE if appropriate)</p>
                         <ul>
                            <li>First,/Second,/Third, ...</li>
                            <li>One of the positive/negative effects of ...</li>
                            <li>Also,/Moreover,/On top of that, ...</li>
                        </ul>
                        <p>Compare your position with the other side of the argument</p>
                         <ul>
                            <li>Some people may argue that ... However, ...</li>
                            <li>Others may think that ... but ...</li>
                        </ul>
                    </FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep>
                        <p>End your response</p>
                        <ul>
                            <li>This is why I believe ...</li>
                            <li>These are some advantages/disadvantages/problems I can think of.</li>
                        </ul>
                    </FlowChartStep>
                </FlowChart>
                 <Exercise>
                    <Instruction><strong>D2</strong> Work in pairs. Take turns to ask each other one of the Individual Response questions from the top of this page. You may use the flow chart above to help you structure your response.</Instruction>
                </Exercise>
            </Section>

            <Section>
                <h3>Paper 4 Exam practice</h3>
                <p>In groups of four, complete Part A of the Exam practice on page 75. Use your notes on page 78 and the notecard below to help you.</p>
                <Notecard>
                    <h4>Notecard</h4>
                    <p>Taking part in the contest</p>
                    <br/>
                    <p>Winning the contest</p>
                    <br/>
                    <p>Parents' concerns</p>
                </Notecard>
                <br/>
                <p>Follow your teacher's instructions and complete Part B.</p>
                <h4>Part B Individual Response</h4>
                <p>The examiner will ask you one or more questions based on Part A. You will have up to 1 minute to respond.</p>
                <IndividualResponseList>
                    <li>Do you think the growing popularity of talent shows is a positive trend?</li>
                    <li>Should celebrities be viewed as role models for young people?</li>
                    <li>Should celebrities comment on political or social situations?</li>
                    <li>What advice would you give to a friend who is participating in a singing contest for the first time?</li>
                    <li>Do you prefer to listen to music on your phone or watch a live performance?</li>
                    <li>Why do young people want to become YouTube stars?</li>
                    <li>How would you feel if you entered the entertainment industry at a young age?</li>
                    <li>Should social media influencers be required to say if a post is sponsored?</li>
                </IndividualResponseList>
            </Section>
        </IdeasContainer>
    );
};

export default Unit5IdeasAndOrganization;