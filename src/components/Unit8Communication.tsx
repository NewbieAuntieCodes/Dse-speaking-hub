/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {
    CommunicationContainer,
    BackButton,
    Section,
    Exercise,
    Instruction,
    DialogueGrid,
    DialogueBubble,
    NoteCard,
    FlowChart,
    FlowChartStep,
    FlowChartArrow,
    Table,
    Th,
    Td,
    QuestionTable
} from './Unit8Communication.styles';

interface Unit8CommunicationProps {
    onBack: () => void;
}

const Unit8Communication: React.FC<Unit8CommunicationProps> = ({ onBack }) => {
    return (
        <CommunicationContainer>
            <BackButton onClick={onBack}>← Back to Unit 8</BackButton>
            <h2>Communication strategies</h2>

            <Section>
                <h3>Self-correcting and asking for the right expression</h3>
                <p>You may encounter some challenging situations during the speaking exam. Handling these situations well shows the examiners that you are a confident and skilful speaker.</p>
                <p>For example, you might realize that you have made a mistake in a previous turn. You should stay calm and show that you have the ability to correct it.</p>
                <DialogueGrid>
                    <DialogueBubble><p>More and more people are living below the <strong>property</strong> ... the poverty line in Hong Kong.</p></DialogueBubble>
                    <DialogueBubble><p>The infection, <strong>I mean</strong>, the inflation is affecting everyone.</p></DialogueBubble>
                    <DialogueBubble><p>Sorry, when I said private housing, <strong>I meant</strong> public housing.</p></DialogueBubble>
                    <DialogueBubble><p>Oops, <strong>I meant to say that</strong> we should raise the minimum wage, not lower it.</p></DialogueBubble>
                </DialogueGrid>

                <Exercise>
                    <Instruction><strong>C1</strong> These students are discussing the problem of housing and high property prices in Hong Kong. In pairs, take turns to role-play these students and correct any mistakes.</Instruction>
                     <DialogueGrid style={{ gridTemplateColumns: '1fr 1fr' }}>
                        <DialogueBubble><p><strong>Student A:</strong> The root of the problem is that Hong Kong has such high population <strong>dense</strong> ...</p></DialogueBubble>
                        <DialogueBubble><p><strong>Student B:</strong> Yes, but I think the property developers are also to <strong>blame</strong> ...</p></DialogueBubble>
                    </DialogueGrid>
                </Exercise>
                
                <Exercise>
                    <Instruction><strong>C2</strong> During the Group Interaction, you have expressed yourself incorrectly. Working in pairs, take turns to correct what you have said. Use the notecard to help you.</Instruction>
                    <NoteCard>
                        <ul>
                            <li>more public housing programmes</li>
                            <li>cheaper flats for people who are less well off</li>
                        </ul>
                    </NoteCard>
                     <DialogueBubble style={{marginTop: '20px'}}><p>The government should introduce more public housing programmes so people in Hong Kong can buy more <strong>expensive</strong> flats ...</p></DialogueBubble>
                </Exercise>

                <h4>Sometimes you may have an idea in mind, but cannot think of the right expression for it. Try to explain it to your group members, and ask them to help you.</h4>
                <DialogueGrid>
                    <DialogueBubble><p><strong>Student A:</strong> I mean when one group of people in society is treated worse than another group. Do you know the word?</p><p><strong>Student B:</strong> I think you're thinking of the word 'discrimination'.</p></DialogueBubble>
                    <DialogueBubble><p><strong>Student A:</strong> I'm not sure how to say this in English. I mean the word for people who have to leave their country very quickly because of war or other political reasons.</p><p><strong>Student B:</strong> Do you mean 'refugee'?</p></DialogueBubble>
                </DialogueGrid>

                 <Exercise>
                    <Instruction><strong>C3</strong> Using the vocabulary definitions on page 109 of the Exam Skills Booster, take turns in pairs to ask each other for the right word or expression.</Instruction>
                     <DialogueBubble><p><strong>Student A:</strong> Do you know the term for the belief and aim that women should have the same rights and opportunities as men?</p><p><strong>Student B:</strong> Do you mean 'feminism'?</p></DialogueBubble>
                </Exercise>
            </Section>

            <Section>
                <h3>Responding to candidates slipping into their native language</h3>
                <p>You can use the following expressions to respond to candidates slipping into their native language:</p>
                <DialogueBubble>
                    <p>Sorry, do you mind repeating what you just said in English?</p>
                    <p>Let's try to continue our discussion in English.</p>
                </DialogueBubble>
                <p>If you understand what the candidate has said, you can repeat it in English. Then ask to confirm whether you have understood him/her correctly.</p>
            </Section>

            <Section>
                <h3>Interacting with quiet group members</h3>
                <p>Some of your group members might be shy and quiet. You may encourage them to speak by asking them questions.</p>
                <FlowChart>
                    <FlowChartStep>
                        <p>Start with a Yes/No question</p>
                        <ul>
                            <li>Do you agree that gender discrimination is wrong?</li>
                            <li>Do you think racial discrimination is a serious issue in Hong Kong?</li>
                            <li>Is there any discrimination against minority groups in your school?</li>
                        </ul>
                    </FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                     <FlowChartStep><p>If your group members respond to your Yes/No question ...</p></FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep>
                        <p>Ask a more specific wh-question</p>
                        <ul>
                            <li>So what do you think can be done to stop discrimination?</li>
                            <li>What is your reason for thinking discrimination is not wrong?</li>
                            <li>Which do you think is more common in Hong Kong: gender discrimination or racial discrimination?</li>
                            <li>What is the most serious social issue Hong Kong faces today?</li>
                            <li>Why do you think there is discrimination against some minority groups in Hong Kong?</li>
                        </ul>
                    </FlowChartStep>
                </FlowChart>
                <p>These students are discussing the difficulties ethnic minority students face in Hong Kong. Look at how the boy encourages the girl to express her opinion on the topic.</p>
                 <DialogueGrid style={{ gridTemplateColumns: '1fr 1fr' }}>
                    <DialogueBubble>
                        <p><strong>Boy:</strong> Do you think our school does enough to support ethnic minority groups?</p>
                        <p><strong>Girl:</strong> No, I don't.</p>
                    </DialogueBubble>
                    <DialogueBubble>
                        <p><strong>Boy:</strong> What kind of support could our school offer?</p>
                    </DialogueBubble>
                </DialogueGrid>
                <p>Some candidates might stay silent even if you have asked them a question. In that case, you should move on to another candidate. The examiners will have noted your effort in trying to get others to talk.</p>
                <Exercise>
                    <Instruction><strong>C4</strong> You are discussing the problem of childhood obesity in Hong Kong. One of your group members has been very quiet. In the table below, write down two Yes/No questions and two wh-questions you can ask him/her.</Instruction>
                    <QuestionTable>
                        <div><h4>Yes/No questions</h4></div>
                        <div><h4>Wh-questions</h4></div>
                    </QuestionTable>
                </Exercise>
                 <Exercise>
                    <Instruction><strong>C5</strong> Do a role-play in pairs. One of you should play the role of the quiet member. The other should encourage this member to speak by asking him/her questions in the table.</Instruction>
                </Exercise>
            </Section>

             <Section>
                <h3>Interacting with aggressive group members</h3>
                <p>While some candidates can be very quiet, others might be too aggressive. You should try to stop those speakers from dominating the discussion or making too many negative comments. Here are some expressions you can use when interacting with aggressive group members.</p>
                <Table>
                    <thead><tr><Th>Situation</Th><Th>Expressions</Th></tr></thead>
                    <tbody>
                        <tr>
                            <Td>A group member has been speaking for too long, and is dominating the discussion.</Td>
                            <Td>
                                <ul>
                                    <li>Sorry to interrupt. May I add something here?</li>
                                    <li>Excuse me. Perhaps we can also hear/find out what others have to say on the subject.</li>
                                    <li>Yes. Maybe we can see what others think.</li>
                                    <li>Thanks, but we haven't heard from everyone in the group.</li>
                                </ul>
                            </Td>
                        </tr>
                         <tr>
                            <Td>A group member has made a rude or negative comment about you.</Td>
                            <Td>
                                <ul>
                                    <li>Maybe you could explain why you don't like this idea?</li>
                                    <li>Would you mind telling us why you think that was a bad idea?</li>
                                    <li>I wonder why you think so. Perhaps you can tell us more about why you disagree with me?</li>
                                    <li>It's important that we keep this discussion polite. I don't think it's fair to make personal comments about anyone in our group.</li>
                                </ul>
                            </Td>
                        </tr>
                         <tr>
                            <Td>Two or more of your group members disagree with each other, and the discussion is getting heated.</Td>
                            <Td>
                                <ul>
                                    <li>Let's stay calm and continue our discussion.</li>
                                    <li>Let's agree to disagree and return to our discussion.</li>
                                    <li>Let's stop quarrelling and focus on our discussion.</li>
                                    <li>Why don't we discuss this later? Let's move on to the next point.</li>
                                </ul>
                            </Td>
                        </tr>
                    </tbody>
                </Table>
            </Section>

            <Section>
                <h3>Expressions to show politeness</h3>
                <p>Remember to stay calm and polite when responding to negative comments. You should aim to show the examiners that you are trying to contribute to the discussion, instead of starting an argument.</p>
                 <Exercise>
                    <Instruction><strong>C6</strong> You are discussing the issue of job opportunities for people over the age of 50 in Hong Kong. The following comments have been made by other group members. In pairs, take turns to respond to these aggressive comments politely. You may use the expressions in the box below to help you.</Instruction>
                    <DialogueGrid>
                        <DialogueBubble>
                            <p><strong>1.</strong> I was reading the newspaper the other day, and there was an article about how difficult it is for people over 50 to find jobs in Hong Kong. I believe this is a big problem. First of all, Hong Kong's Basic Law states that all people are equal before the law, but we don't have any anti-discrimination laws to support that. As a result, older people in the workforce. Older people have lots of wisdom and knowledge to offer, but they might know less about things like social media, technology and trends. So, I think that the government could develop some rules or programmes to encourage employers to hire people over 50 ...</p>
                        </DialogueBubble>
                        <DialogueBubble>
                            <p><strong>2.</strong> You must be crazy to think that the government should make people hire the elderly. That's so pointless!</p>
                        </DialogueBubble>
                        <DialogueBubble>
                            <p><strong>3.</strong> Your idea is totally impractical!</p>
                            <p>And I think your ideas are silly too!</p>
                        </DialogueBubble>
                        <DialogueBubble>
                             <p>... could/would/should</p>
                             <p>I wonder ...</p>
                             <p>Please ...</p>
                             <p>Would you mind ...</p>
                        </DialogueBubble>
                    </DialogueGrid>
                </Exercise>
            </Section>

        </CommunicationContainer>
    );
};

export default Unit8Communication;