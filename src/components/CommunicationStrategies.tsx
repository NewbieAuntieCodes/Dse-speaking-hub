/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {
    CommunicationContainer,
    BackButton,
    Section,
    StepDiagram,
    StepBox,
    Arrow,
    ConversationContainer,
    ConversationBubble,
    RememberBox,
    Table,
    Th,
    Td,
    Exercise,
    Instruction,
    WordGrid,
    WordBox,
    InstructionBox,
    ArticleBox,
    FillInTheBlankExercise,
    BlankBox
} from './CommunicationStrategies.styles';

interface CommunicationStrategiesProps {
    onBack: () => void;
}

const CommunicationStrategies: React.FC<CommunicationStrategiesProps> = ({ onBack }) => {
    return (
        <CommunicationContainer>
            <BackButton onClick={onBack}>← Back to Unit 1</BackButton>
            <h2>Communication strategies</h2>

            <Section>
                <h3>Starting the discussion</h3>
                <p>There are three parts to an initial speaking turn.</p>
                <StepDiagram>
                    <StepBox>1 Greeting others and starting the discussion</StepBox>
                    <Arrow>→</Arrow>
                    <StepBox>2 Introducing the topic/task</StepBox>
                    <Arrow>→</Arrow>
                    <StepBox>3 Inviting others for opinions</StepBox>
                </StepDiagram>
                <p>These students are discussing the pros and cons of attending tutorial classes. Look at how they organize their first speaking turns.</p>
                <ConversationContainer>
                    <ConversationBubble>
                        <p><strong>1</strong> Hello, everybody. It's good to be here. Let's get started. <strong>2</strong> Today, we are going to discuss the pros and cons of attending tutorial classes. <strong>3</strong> What's your opinion on tutorial classes? What advantages do they provide?</p>
                    </ConversationBubble>
                    <ConversationBubble>
                        <p><strong>1</strong> Good afternoon, nice to meet you all. Let's begin our discussion. <strong>2</strong> We have been asked to discuss the pros and cons of attending tutorial classes. <strong>3</strong> Would anyone like to start with the advantages?</p>
                    </ConversationBubble>
                </ConversationContainer>
                <RememberBox>
                    <h4>Remember</h4>
                    <ul>
                        <li>Be friendly. Greet the other group members with a smile.</li>
                        <li>If you and another group member try to talk at the same time, you can say <em>Sorry, please go ahead.</em></li>
                        <li>Don't get anxious if you don't know much about the discussion topic. Listen to <strong>what other group members have to say and try to respond to their ideas.</strong></li>
                    </ul>
                </RememberBox>
                <Exercise>
                    <Instruction><strong>C1</strong> Look at the sentences and phrases below. Sort them into the table.</Instruction>
                    <WordGrid>
                        <WordBox>Hello everyone. Shall we start our discussion?</WordBox>
                        <WordBox>We're here to talk about ...</WordBox>
                        <WordBox>Hello. Nice to meet you all. Let's start our discussion.</WordBox>
                        <WordBox>Does anyone have any suggestions?</WordBox>
                        <WordBox>Good afternoon. Are we ready to begin our discussion?</WordBox>
                        <WordBox>What do you think?</WordBox>
                        <WordBox>Does anyone want to start?</WordBox>
                        <WordBox>We've been asked to discuss ...</WordBox>
                    </WordGrid>
                    <Table>
                        <thead>
                            <tr>
                                <Th>Greeting others and starting the discussion</Th>
                                <Th>Introducing the topic/task</Th>
                                <Th>Inviting others for opinions</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Td>Hello everyone. Shall we start our discussion?</Td>
                                <Td></Td>
                                <Td></Td>
                            </tr>
                             <tr><Td></Td><Td></Td><Td></Td></tr>
                             <tr><Td></Td><Td></Td><Td></Td></tr>
                        </tbody>
                    </Table>
                </Exercise>
            </Section>

            <Section>
                <h3>Ending the discussion</h3>
                 <StepDiagram>
                    <StepBox>1 Summarizing the main points</StepBox>
                    <Arrow>→</Arrow>
                    <StepBox>2 Concluding the discussion</StepBox>
                    <Arrow>→</Arrow>
                    <StepBox>3 Thanking others</StepBox>
                </StepDiagram>
                <p>Look at how these students end a discussion on ways to balance study and play:</p>
                 <ConversationContainer>
                    <ConversationBubble>
                        <p><strong>1</strong> Let's sum up our discussion. It's important to find balance between study and play. You can do that by managing your time and planning your week carefully. <strong>2</strong> Does anyone have anything else to say? If not, shall we end this discussion? <strong>3</strong> Thank you all for your contributions.</p>
                    </ConversationBubble>
                    <ConversationBubble>
                        <p><strong>1</strong> In summary, there are different ways of balancing study and play. Some of us like to make weekly to-do lists, while others prefer to set a time limit for all their activities. <strong>2</strong> Since we have all come to an agreement that striking a balance between study and play is important, we shall stop here. <strong>3</strong> It's been a fruitful and interesting discussion. Thank you very much.</p>
                    </ConversationBubble>
                </ConversationContainer>
                <Table>
                    <thead>
                        <tr>
                            <Th>Situation</Th>
                            <Th>Expressions for concluding the discussion</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Td>If the question asks you to make suggestions or arguments</Td>
                            <Td>To sum up, we have suggested a number of ... For instance ...<br/>I believe we've contributed enough suggestions/arguments. Thank you very much.</Td>
                        </tr>
                        <tr>
                            <Td>If the question asks you to make a choice</Td>
                            <Td>So we've decided to choose ...<br/>To summarize, we all think that it is (not) a good idea to ...</Td>
                        </tr>
                        <tr>
                            <Td>If you have reached a consensus</Td>
                            <Td>In conclusion, all of us agreed that ...<br/>Summing up on what we have settled on ...</Td>
                        </tr>
                        <tr>
                            <Td>If you have not reached a consensus</Td>
                            <Td>To conclude, we have not settled on ... but thank you all for sharing your views.<br/>We have not agreed on ... but thank you everyone for your ideas.</Td>
                        </tr>
                         <tr>
                            <Td>If you have a few seconds left to conclude</Td>
                            <Td>I think it's time to finish our discussion. Thank you very much.<br/>I don't think we have time for the remaining issues today, but thank you for such an inspiring discussion.</Td>
                        </tr>
                    </tbody>
                </Table>
            </Section>

            <Section>
                <h3>Body language and eye contact</h3>
                <p>Using the appropriate body language and maintaining eye contact with other group members can improve communication.</p>
                 <ul className="do-dont-list do">
                    <li>look at the speaker when a group member is speaking.</li>
                    <li>nod your head to show that you are listening to what they are saying.</li>
                    <li>keep your facial expression relaxed and friendly.</li>
                    <li>sit upright to show you are confident.</li>
                    <li>use controlled hand gestures to support what you are saying.</li>
                </ul>
                 <ul className="do-dont-list dont">
                    <li>rest your head on your hand.</li>
                    <li>laugh at others or roll your eyes.</li>
                    <li>show signs of impatience like looking at your watch.</li>
                    <li>keep moving your body and show that you are nervous or bored.</li>
                    <li>use aggressive body language like pointing.</li>
                </ul>
            </Section>

            <Section>
                <h3>Example Group Interaction</h3>
                <InstructionBox>
                    <h4>GENERAL INSTRUCTIONS</h4>
                    <p>This paper consists of two parts: Part A, Group Interaction; and Part B, Individual Response. DO NOT write anything on this page.</p>
                    <h4>Part A Group Interaction</h4>
                    <p>You will be given 10 minutes to prepare. The time allowed for the group interaction is 8 minutes (or 6 minutes for a group of 3 candidates). You may make notes on the notecard provided and refer to your notes during the discussion.</p>
                </InstructionBox>
                <ArticleBox>
                    <p>This editorial appeared in a local newspaper:</p>
                    <hr/>
                    <h5>Parental involvement helps students succeed</h5>
                    <p>Developing strong study habits at an early age is the key to academic success. It is no secret that many parents in Hong Kong encourage their children to spend more time on homework and enrol in tutorial classes. As a result, many of these students perform well at school.</p>
                    <p>It is <strong>beneficial</strong> when parents play an active role in their children's studies. At home, parents can help their children with homework, or give them advice on understanding tricky concepts. Students who receive parental support may become more <strong>motivated</strong> to work through difficult assignments. In addition, they tend to be well behaved and able to concentrate on tasks for long periods of time.</p>
                    <p>The results of good learning habits instilled by parents can be seen in students' high scores. For children to succeed at school and in life, strong study habits should be promoted by parents from an early age.</p>
                </ArticleBox>
                 <p>Your class is writing a letter to the editor to express your views on academic parental involvement. Your group has been asked to discuss the issue. You may want to talk about:</p>
                 <ul>
                    <li>the advantages of parental involvement in students' education</li>
                    <li>the disadvantages of parental pressure</li>
                    <li>how to find a good balance</li>
                    <li>anything else you think is important</li>
                </ul>
                <Exercise>
                    <Instruction><strong>C7</strong> The following is a model Group Interaction for the exam question on page 10. Fill in the blanks with the correct words.</Instruction>
                    <FillInTheBlankExercise>
                        <p><strong>Starting the discussion</strong></p>
                        <p>A: Hello everybody, nice to meet you. Let's start our discussion. <BlankBox /> the others and starting the discussion</p>
                        <p>Today, we are going to discuss the advantages and disadvantages of parental involvement in students' education. <BlankBox /> the topic/task</p>
                        <p>Does anyone want to start? <BlankBox /> others for opinions</p>
                        <p>B: I think students benefit from guidance by their parents. If parents have a better idea of what their children study, they can offer more support. What do you think?</p>
                        <p>...</p>
                        <p><strong>Ending the discussion</strong></p>
                        <p>A: To sum up, we believe that parental involvement in education has its pros and cons. It can be beneficial for relationships between parents and children. However, too much parental pressure can lead to stress and low self-esteem. <BlankBox /> the main points</p>
                        <p>Since we have all come to an agreement, let's bring this discussion to a close. <BlankBox /> the discussion</p>
                        <p>Thank you all for an interesting discussion. <BlankBox /> the others</p>
                    </FillInTheBlankExercise>
                </Exercise>
            </Section>

        </CommunicationContainer>
    );
};

export default CommunicationStrategies;