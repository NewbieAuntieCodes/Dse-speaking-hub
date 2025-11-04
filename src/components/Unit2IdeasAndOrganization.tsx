/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {
    IdeasContainer,
    BackButton,
    Section,
    MindMapGrid,
    MindMapCenter,
    NodeTopLeft,
    NodeTopRight,
    NodeBottomLeft,
    NodeBottomRight,
    NodeBottomCenter,
    InstructionBox,
    ArticleBox,
    NoteCard,
    Exercise,
    Instruction,
    WordGrid,
    WordBox,
    NoteGrid,
    EmptyNote,
    AnticipationMindMap,
    AnticipationNode,
    ResponseFlowChart,
    FlowChartStep,
    FlowChartArrow,
    TimeManagementContainer,
    PieChart,
    PieChartLabels,
    PieChartLabel,
    ExamPracticeNotecard,
    IndividualResponseList,
} from './Unit2IdeasAndOrganization.styles';

interface Unit2IdeasAndOrganizationProps {
    onBack: () => void;
}

const Unit2IdeasAndOrganization: React.FC<Unit2IdeasAndOrganizationProps> = ({ onBack }) => {
    return (
        <IdeasContainer>
            <BackButton onClick={onBack}>← Back to Unit 2</BackButton>
            <h2>Ideas and organization</h2>

            <Section>
                <h3>Key question words</h3>
                <p>The mind map below outlines the different question types found in the speaking exam. Looking out for key question words and phrases will help you understand the exam question better.</p>
                <MindMapGrid>
                    <NodeTopLeft>
                        <h4>Making suggestions and giving advice</h4>
                        <ul>
                            <li>suggest</li>
                            <li>advise</li>
                            <li>propose</li>
                            <li>solve</li>
                            <li>recommend</li>
                            <li>what he/she/you can do ...</li>
                            <li>how he/she/you can ...</li>
                        </ul>
                    </NodeTopLeft>
                    <NodeTopRight>
                        <h4>Making and explaining choices</h4>
                        <ul>
                            <li>choose</li>
                            <li>decide</li>
                            <li>pick</li>
                            <li>which choice ...?</li>
                            <li>which option ...?</li>
                            <li>which one ...?</li>
                        </ul>
                    </NodeTopRight>
                    <MindMapCenter>Speaking exam question types</MindMapCenter>
                    <NodeBottomLeft>
                        <h4>Arguing for and/or against a position</h4>
                        <ul>
                            <li>argue</li>
                            <li>debate</li>
                            <li>come up with arguments for and/or against ...</li>
                            <li>whether you agree that ...</li>
                            <li>discuss whether ...</li>
                        </ul>
                    </NodeBottomLeft>
                    <NodeBottomRight>
                        <h4>Discussing the pros and cons of a proposal</h4>
                        <ul>
                            <li>what are the pros and cons ...?</li>
                            <li>whether it is a good idea to ...</li>
                            <li>discuss the strengths and weaknesses</li>
                            <li>positives and negatives</li>
                            <li>advantages and disadvantages</li>
                            <li>benefits and drawbacks</li>
                        </ul>
                    </NodeBottomRight>
                    <NodeBottomCenter>
                         <h4>Planning and organizing</h4>
                        <ul>
                            <li>plan a project/magazine article ...</li>
                            <li>prepare a presentation ...</li>
                            <li>organize a meeting/activity ...</li>
                            <li>how would you design/organize ...?</li>
                        </ul>
                    </NodeBottomCenter>
                </MindMapGrid>
            </Section>

            <Section>
                <h3>Exam practice question</h3>
                 <InstructionBox>
                    <h4>GENERAL INSTRUCTIONS</h4>
                    <p>This paper consists of two parts: Part A, Group Interaction; and Part B, Individual Response. DO NOT write anything on this page.</p>
                    <h4>Part A Group Interaction</h4>
                    <p>You will be given 10 minutes to prepare. The time allowed for the group interaction is 8 minutes (or 6 minutes for a group of 3 candidates). You may make notes on the notecard provided and refer to your notes during the discussion.</p>
                </InstructionBox>
                <ArticleBox>
                    <p>This post appeared in a personal blog:</p>
                    <h4>New school blues</h4>
                    <p>I joined my new school two weeks ago, and I haven't been adjusting very well. Everyone seems to already have their own groups of friends, and I don't know how to fit in. I often feel anxious and shy, to the point that it's difficult for me to say hi to my classmates.</p>
                    <p>The other day, I felt sick after lunch, but I couldn't remember where the nurse's office was. I ended up crying in the toilets because I was too embarrassed to ask anyone for directions.</p>
                    <p>I'm also struggling in my Biology class, but I've been afraid to ask for help. Last week, I simply skipped a couple of classes. Then I was caught skipping and got disciplined with detention. Now, I'm worried that I've made a bad first impression on my classmates. What if everyone thinks I'm a problem student?</p>
                    <p>I used to be an outgoing person, but these days I spend most of my time alone. I miss my old school desperately—I wish I could just go back.</p>
                </ArticleBox>
                 <p>Your group is discussing problems that new students may experience at school. Your group has been asked to give suggestions on how to make friends in a new school environment. You may want to talk about:</p>
                 <ul>
                    <li>why making friends can be difficult</li>
                    <li>how to make a good first impression</li>
                    <li>tips for overcoming shyness</li>
                    <li>anything else you think is important</li>
                </ul>
            </Section>

            <Section>
                <h3>Note-taking skills: using the PRE structure</h3>
                <p>You can use the PRE structure to organize your notes. Let's look at the sample notecard below:</p>
                <NoteCard>
                    <h4>Discussion topic: How to make friends in a new school environment</h4>
                    <h5>Ideas for suggested taking points</h5>
                    <p><strong>Why making friends can be difficult</strong></p>
                    <ul>
                        <li data-prefix="P">unfamiliar with new environment</li>
                        <li data-prefix="R">people may feel lost and insecure as they are surrounded by strangers</li>
                        <li data-prefix="E">it was difficult for me to make friends when I started secondary school because I didn't know anyone</li>
                    </ul>
                     <p><strong>How to make a good first impression</strong></p>
                    <ul>
                        <li data-prefix="P">invite new classmates for lunch</li>
                        <li data-prefix="R">get to know each other better</li>
                        <li data-prefix="E">I made new friends at lunch in my first week of school</li>
                    </ul>
                     <p><strong>Tips for overcoming shyness</strong></p>
                    <ul>
                        <li data-prefix="P">speak with a school counsellor</li>
                        <li data-prefix="R">could learn strategies for dealing with anxiety and avoidant behaviours</li>
                        <li data-prefix="E">asking for help is the first step in overcoming any problem</li>
                    </ul>

                     <h5>Ideas for additional taking points</h5>
                      <p><strong>Activities students can join to meet new friends</strong></p>
                    <ul>
                        <li data-prefix="P">join a school club</li>
                        <li data-prefix="R">meet people with similar interests → easier to make friends with them</li>
                        <li data-prefix="E">I joined the Drama Club → now good friends with many members</li>
                    </ul>
                </NoteCard>
            </Section>

            <Section>
                 <h3>Note-taking practice</h3>
                 <Exercise>
                    <Instruction><strong>D2</strong> Now make your own notes in the spaces below using the PRE structure. Try not to repeat the points from the sample notecard on page 28, but you may use the following discussion input to help you.</Instruction>
                    <WordGrid>
                        <WordBox>insecurity</WordBox><WordBox>social anxiety</WordBox>
                        <WordBox>unfamiliarity with new environment</WordBox><WordBox>avoidance</WordBox>
                        <WordBox>to acknowledge</WordBox><WordBox>to reach out</WordBox>
                        <WordBox>to seek advice</WordBox><WordBox>to open up</WordBox>
                        <WordBox>connecting with people</WordBox><WordBox>adapting to new environment</WordBox>
                        <WordBox>to cope with stress</WordBox><WordBox>to socialize</WordBox>
                        <WordBox>study buddy</WordBox><WordBox>extra-curricular activities</WordBox>
                        <WordBox>emotional stability</WordBox><WordBox>self-care</WordBox>
                    </WordGrid>
                    <h4>How to make friends in a new school environment</h4>
                    <NoteGrid>
                        <EmptyNote><p>why making friends can be difficult</p></EmptyNote>
                        <EmptyNote><p>making a good first impression</p></EmptyNote>
                        <EmptyNote><p>tips for overcoming shyness</p></EmptyNote>
                        <EmptyNote><p>anything else</p></EmptyNote>
                    </NoteGrid>
                </Exercise>
            </Section>
            
            <Section>
                <h3>Individual Response: anticipating questions</h3>
                <p>Although you are not shown the Individual Response questions during the preparation time, you can anticipate them. They are generally based on the Group Interaction topic and the input text.</p>
                <p>The Individual Response questions may ask you to:</p>
                <AnticipationMindMap>
                    <AnticipationNode>give suggestions or advice</AnticipationNode>
                    <AnticipationNode>make and explain choices</AnticipationNode>
                    <AnticipationNode>give reasons</AnticipationNode>
                    <AnticipationNode>give arguments for or against</AnticipationNode>
                    <AnticipationNode>make predictions</AnticipationNode>
                    <AnticipationNode>explain processes</AnticipationNode>
                    <AnticipationNode>talk about your personal experiences or opinions</AnticipationNode>
                </AnticipationMindMap>
                 <Exercise>
                    <Instruction><strong>D3</strong> Work in pairs. Look at the Exam practice question on page 27. Try to anticipate what Individual Response questions might follow the Group Interaction, based on the question types listed above. Then take turns to ask each other these questions.</Instruction>
                </Exercise>
            </Section>

            <Section>
                <h3>Individual Response: giving suggestions and advice</h3>
                <p>In the Individual Response, you may be asked to give suggestions or advice about an issue related to the Group Interaction question. The questions could come in the following forms:</p>
                <ul>
                    <li><strong>How should</strong> students deal with overwhelming emotions?</li>
                    <li><strong>How can</strong> secondary school students make new friends?</li>
                    <li><strong>What could be done</strong> to help students better deal with school-related anxiety?</li>
                    <li><strong>What can</strong> teachers do to help students who skip classes or stop paying attention?</li>
                    <li><strong>What advice would you give to</strong> a friend who is having emotional troubles?</li>
                </ul>
                <p>Here's one way of responding to questions that ask you to give suggestions or advice:</p>
                 <ResponseFlowChart>
                    <FlowChartStep>
                        <p>Give a short introduction</p>
                        <em>There are many ways to ...</em><br/>
                        <em>I think there are several things students can do ...</em><br/>
                        <em>I can think of a few solutions to this problem.</em>
                    </FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep>
                        <p>Give two or three suggestions/pieces of advice</p>
                        <em>It may be a good idea to ...</em><br/>
                        <em>Perhaps teachers can consider ...</em><br/>
                        <em>For example,</em><br/>
                        <em>Firstly/Secondly/Thirdly, ...</em><br/>
                        <em>(Don't forget to use the PRE structure!)</em>
                    </FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep>
                        <p>End your response</p>
                        <em>So, to conclude, ...</em><br/>
                        <em>These are some suggestions for ...</em>
                    </FlowChartStep>
                </ResponseFlowChart>
                <Exercise>
                    <Instruction><strong>D4</strong> Work in pairs. Take turns to ask each other one of the Individual Response questions on page 30. You may use the flow chart above to help you structure your response.</Instruction>
                </Exercise>
            </Section>

            <Section>
                <h3>Time management: preparing your notes in ten minutes</h3>
                <p>You are given only ten minutes for preparing your notes for the speaking exam, so it is very important to make the most of the time you have.</p>
                <p>You are advised to spend:</p>
                 <TimeManagementContainer>
                    <PieChart />
                    <PieChartLabels>
                        <PieChartLabel><span style={{ backgroundColor: '#4a5568' }} /> 7-8 minutes preparing notes on the suggested talking points</PieChartLabel>
                        <PieChartLabel><span style={{ backgroundColor: '#a0aec0' }} /> 1-2 minutes practising your points in your head</PieChartLabel>
                        <PieChartLabel><span style={{ backgroundColor: '#4299e1' }} /> 1 minute thinking about the Individual Response</PieChartLabel>
                    </PieChartLabels>
                </TimeManagementContainer>
                <Exercise>
                    <Instruction><strong>D5</strong> Look back at the Exam practice question on page 27 and your notecard. Spend one minute thinking about what Individual Response you may be asked, and another minute practising your points in your head.</Instruction>
                </Exercise>
            </Section>

            <Section>
                <h3>Paper 4 Exam practice</h3>
                <p>In groups of four, complete Part A of the Exam practice on page 27. Use your notes on page 29 and the notecard below to help you.</p>
                <ExamPracticeNotecard>
                    <h4>Notecard</h4>
                    <p>Why making friends can be difficult</p>
                    <p>How to make a good first impression</p>
                    <p>Tips for overcoming shyness</p>
                </ExamPracticeNotecard>
                <p>Follow your teacher's instructions and complete Part B.</p>
                <br />
                <h4>Part B Individual Response</h4>
                <p>The examiner will ask you one or more questions based on Part A. You will have up to 1 minute to respond.</p>
                <IndividualResponseList>
                    <li>How did you make new friends at secondary school?</li>
                    <li>Do you think first impressions are important?</li>
                    <li>How do you cope with negative feelings?</li>
                    <li>How can parents help their children develop emotional maturity?</li>
                    <li>Why is it important for students to develop healthy coping techniques?</li>
                    <li>What would you do if your friend started skipping school?</li>
                    <li>How can you make a friend feel comfortable about sharing their problems with you?</li>
                    <li>What would you do if your friend refused to listen to your advice?</li>
                </IndividualResponseList>
            </Section>

        </IdeasContainer>
    );
};

export default Unit2IdeasAndOrganization;