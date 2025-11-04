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
    Table,
    Th,
    Td,
    DialogueGrid,
    DialogueBubble,
    InstructionBox,
    ArticleBox,
    StrategyList,
    StrategyItem,
    RolePlayDialogue,
    ConjunctionBox,
    DialogueCompletionExercise,
    DialogueLine,
    SpeakerLabel,
    DialogueContent,
    DialogueText,
    DialogueHint,
} from './Unit7Communication.styles';

interface Unit7CommunicationProps {
    onBack: () => void;
}

const Unit7Communication: React.FC<Unit7CommunicationProps> = ({ onBack }) => {
    return (
        <CommunicationContainer>
            <BackButton onClick={onBack}>← Back to Unit 7</BackButton>
            <h2>Communication strategies</h2>

            <Section>
                <h3>Expanding on others' ideas</h3>
                <p>During the Group Interaction, you do not need to include a new idea in each of your speaking turns. Instead, you can expand on the points your group members have suggested.</p>
                <DialogueBubble>
                    <p><strong>Student:</strong> I think it's a good idea for students to volunteer at soup kitchens because they'll be able to help underprivileged communities.</p>
                </DialogueBubble>
                <h4>Here are some of the ways her group members can expand on what she has said:</h4>
                <StrategyList>
                    <StrategyItem>
                        <h4>Giving an additional reason</h4>
                        <p>"You're right. On top of that, they will learn how to prepare food."</p>
                    </StrategyItem>
                    <StrategyItem>
                        <h4>Relating a personal experience/observation</h4>
                        <p>"That's true. I prepared meal baskets for needy families once, and it made me realize how much work goes into planning meals..."</p>
                    </StrategyItem>
                    <StrategyItem>
                        <h4>Giving examples</h4>
                        <p>"Yes. It's particularly important during holidays such as Christmas, when celebrations revolve around eating meals together."</p>
                    </StrategyItem>
                    <StrategyItem>
                        <h4>Suggesting an alternative</h4>
                        <p>"Or students could volunteer to deliver the baskets if they don't like preparing food."</p>
                    </StrategyItem>
                </StrategyList>
                 <Exercise>
                    <Instruction><strong>C2</strong> Your group members have made the following points in the Group Interaction. In pairs, take turns to expand on their ideas.</Instruction>
                    <DialogueGrid>
                        <DialogueBubble><p>I think volunteering at an animal shelter would be a great idea for me because I am thinking of becoming a veterinarian.</p></DialogueBubble>
                        <DialogueBubble><p>I would like to talk to my family about taking cooking classes together. We often order food from restaurants and it might be a good idea to learn how to cook new foods.</p></DialogueBubble>
                        <DialogueBubble><p>We could volunteer for charity organizations such as the SPCA and Hong Kong Dog Rescue.</p></DialogueBubble>
                    </DialogueGrid>
                </Exercise>
            </Section>

            <Section>
                <h3>Changing the pace of the discussion</h3>
                <p>You will be given three suggested talking points in the Group Interaction question. Make sure you do not spend too much time or too little time on any one of them. Here are some useful expressions for situations where you may wish to change the pace of the discussion.</p>
                <Table>
                    <thead>
                        <tr>
                            <Th>Situation</Th>
                            <Th>Communication strategy</Th>
                            <Th>Expressions</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Td>Too much time has been spent on a talking point, or your group has nothing more to say about that point.</Td>
                            <Td>Moving on to another talking point</Td>
                            <Td>
                                <ul>
                                    <li>I think we've talked enough about this point. Maybe we could move on to ...</li>
                                    <li>I think we've exhausted this aspect. Let's talk about ...</li>
                                    <li>I don't think there is much more to say about ... Why don't we move on to ...?</li>
                                </ul>
                            </Td>
                        </tr>
                        <tr>
                            <Td>A group member wants to move on to the next talking point, but you think there is still more to be discussed.</Td>
                            <Td>Slowing down the discussion</Td>
                            <Td>
                                <ul>
                                    <li>Sorry, may I add something before we move on?</li>
                                    <li>Sorry, shall we talk a bit more about ... before we move on?</li>
                                    <li>Don't you think we need to hear from everyone before we move on?</li>
                                </ul>
                            </Td>
                        </tr>
                        <tr>
                            <Td>There is some time left before the end of the discussion, and none of your group members seem to have any more to say.</Td>
                            <Td>Going back to a previous talking point</Td>
                            <Td>
                                <ul>
                                    <li>Before concluding our discussion, let's talk some more about ...</li>
                                    <li>As we still have some time, I would like to add a point about ...</li>
                                    <li>There is one more thing I want to say about ... before we end this discussion.</li>
                                </ul>
                            </Td>
                        </tr>
                        <tr>
                            <Td>The discussion seems to be going off topic.</Td>
                            <Td>Getting the discussion back on track</Td>
                            <Td>
                                <ul>
                                    <li>Sorry, but I don't think this is what we should be talking about. Let's move back to ...</li>
                                    <li>I think we're going off track. Let's go back to ...</li>
                                    <li>This is an interesting discussion, but I think we need to get back to talking about ...</li>
                                </ul>
                            </Td>
                        </tr>
                    </tbody>
                </Table>
            </Section>

             <Section>
                <h3>Going on or going back to a talking point</h3>
                 <Exercise>
                    <Instruction><strong>C7</strong> Look at the expressions for moving on or going back to a talking point in the table below. Identify the conjunctions used in the expressions, and write them down in the 'Conjunctions' column.</Instruction>
                    <Table>
                        <thead>
                            <tr><Th>Expressions</Th><Th>Conjunctions</Th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Moving on to another talking point</strong></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Let's move on <ConjunctionBox>because</ConjunctionBox> we've only got a few minutes left.</td>
                                <td><ConjunctionBox>because</ConjunctionBox></td>
                            </tr>
                            <tr>
                                <td>There is much more to say, <ConjunctionBox>but</ConjunctionBox> let's move on.</td>
                                <td><ConjunctionBox>but</ConjunctionBox></td>
                            </tr>
                            <tr>
                                <td>We've talked a lot about this aspect, <ConjunctionBox>so</ConjunctionBox> let's move on.</td>
                                <td><ConjunctionBox>so</ConjunctionBox></td>
                            </tr>
                            <tr>
                                <td><strong>Going back to a talking point</strong></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Shall we talk some more about charity work <ConjunctionBox>before</ConjunctionBox> we come to a conclusion?</td>
                                <td><ConjunctionBox>before</ConjunctionBox></td>
                            </tr>
                            <tr>
                                <td>We didn't come to an agreement <ConjunctionBox>when</ConjunctionBox> we spoke about government social benefits.</td>
                                <td><ConjunctionBox>when</ConjunctionBox></td>
                            </tr>
                        </tbody>
                    </Table>
                </Exercise>
                 <Exercise>
                    <Instruction><strong>C8</strong> In pairs, role-play the following dialogue. Use a conjunction from the table above when suggesting to move on or go back to a talking point.</Instruction>
                    <RolePlayDialogue>
                        <p><strong>A:</strong> ... I agree with you. The government should run a promotional campaign about the benefits of students taking on part-time jobs in Hong Kong.</p>
                        <p><strong>B:</strong> (wants to move on to the talking point about balancing part-time work and education)</p>
                        <p><strong>B:</strong> So, we all agree that it's important to make sure students can balance homework with after-school part-time jobs. Does anyone have any more thoughts?</p>
                        <p><strong>A:</strong> (wants to go back to the talking point about saving money for university)</p>
                    </RolePlayDialogue>
                </Exercise>
            </Section>
            
            <Section>
                <h3>Confirming understanding</h3>
                <p>Some group members may find it difficult to present their own ideas. You can try to help them by stating what you think they mean. Then you can ask for their confirmation.</p>
                <h4>You can also use the following expressions to confirm your understanding:</h4>
                <ul>
                    <li>Are you saying students should make sure they start their job search early?</li>
                    <li>I think you mean students should make sure they start their job search early. Am I right?</li>
                </ul>
                <h4>You can use the following expressions to confirm others' understanding:</h4>
                <ul>
                    <li>Do you know what I mean?</li>
                    <li>Do you see my point?</li>
                    <li>Does that make sense?</li>
                </ul>
                <h4>You can also use question tags to confirm understanding:</h4>
                <ul>
                    <li>You understand what I mean, don't you?</li>
                </ul>
            </Section>

            <Section>
                <h3>Example Group Interaction</h3>
                <InstructionBox>
                    <h4>GENERAL INSTRUCTIONS</h4>
                    <p>This paper consists of two parts: Part A, Group Interaction; and Part B, Individual Response. Part B will immediately follow Part A. DO NOT write anything on this page.</p>
                    <h4>Part A Group Interaction</h4>
                    <p>You will be given 10 minutes to prepare. The time allowed for the group interaction is 8 minutes (or 6 minutes for a group of 3 candidates). You may make notes on the notecard provided and refer to your notes during the discussion.</p>
                </InstructionBox>
                <ArticleBox>
                    <p>Education officials are proposing a summer job programme for Hong Kong students to gain experience working abroad. Your group has been asked to discuss the advantages and disadvantages of the proposal. You may want to talk about:</p>
                    <ul>
                        <li>why students would enjoy participating in the summer job programme</li>
                        <li>the benefits of the summer job programme</li>
                        <li>whether there are better ways to gain work experience</li>
                        <li>anything else you think is important</li>
                    </ul>
                </ArticleBox>
                <Exercise>
                    <Instruction><strong>C10</strong> Complete the Group Interaction dialogue in groups of four. Then role-play the dialogue.</Instruction>
                    <DialogueCompletionExercise>
                        <div className="notepad-rings"></div>
                        <DialogueLine>
                            <SpeakerLabel>A:</SpeakerLabel>
                            <DialogueContent>
                                <DialogueText>I think students might be better served gaining work experience in Hong Kong.</DialogueText>
                                <DialogueHint>Moving the discussion forward: better ways to gain work experience</DialogueHint>
                            </DialogueContent>
                        </DialogueLine>
                         <DialogueLine>
                            <SpeakerLabel>B:</SpeakerLabel>
                            <DialogueContent>
                                <DialogueText>Do you agree?</DialogueText>
                                <DialogueHint>Expanding on others' idea</DialogueHint>
                            </DialogueContent>
                        </DialogueLine>
                         <DialogueLine>
                            <SpeakerLabel>C:</SpeakerLabel>
                             <DialogueContent>
                                <DialogueText>Yes ... but um ... I think ... also good ... um Asia's city ... Hong Kong is known ... world city ...</DialogueText>
                                <DialogueHint>Confirming others' understanding</DialogueHint>
                            </DialogueContent>
                        </DialogueLine>
                         <DialogueLine>
                            <SpeakerLabel>D:</SpeakerLabel>
                             <DialogueContent>
                                <DialogueText />
                                <DialogueHint>Confirming your understanding</DialogueHint>
                            </DialogueContent>
                        </DialogueLine>
                    </DialogueCompletionExercise>
                </Exercise>
            </Section>

        </CommunicationContainer>
    );
};

export default Unit7Communication;
