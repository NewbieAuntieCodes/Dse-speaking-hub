/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {
    CommunicationContainer,
    BackButton,
    Section,
    Instruction,
    Exercise,
    RememberBox,
    TipBox,
    ArticleBox,
    InstructionBox,
    DialogueGrid,
    DialogueBubble,
    PhotoGrid,
    PhotoCard,
    StructureDiagram,
    StructureBox,
    PlusSign,
    AnnotationExercise,
    AnnotationItem,
    SpeakerBubble,
    AnnotationOptions,
    AnnotationOption,
    BlankBox,
} from './Unit2Communication.styles';

interface Unit2CommunicationProps {
    onBack: () => void;
}

const Unit2Communication: React.FC<Unit2CommunicationProps> = ({ onBack }) => {
    return (
        <CommunicationContainer>
            <BackButton onClick={onBack}>← Back to Unit 2</BackButton>
            <h2>Communication strategies</h2>

            <Section>
                <h3>Making suggestions and giving advice</h3>
                <p>In the speaking exam, you may be asked to make suggestions or give advice on an issue. These students are discussing what their classmate Jack can do to stop being jealous of his sister, who is very popular at school and always gets good grades. Look at how they make suggestions on the topic.</p>
                <DialogueGrid>
                    <DialogueBubble>I think he should invite classmates to the cinema in order to make more friends.</DialogueBubble>
                    <DialogueBubble>It would be a good idea for him to join a club at school that matches his interests.</DialogueBubble>
                    <DialogueBubble>Why doesn't he ask his sister for study tips?</DialogueBubble>
                    <DialogueBubble>If I were him, I would try to accept that I was different from my sister.</DialogueBubble>
                </DialogueGrid>
                <TipBox>
                    <p>Modal verbs such as <strong>can, could, should, shall, would</strong> and <strong>will</strong> are very useful for making suggestions and giving advice.</p>
                </TipBox>
                <Exercise>
                    <Instruction><strong>C1</strong> In pairs, try expressing the suggestions made by the four students differently by using the expressions below. Then make a suggestion of your own on how Jack can stop being jealous of his sister.</Instruction>
                    <ul>
                        <li>How about if ...?</li>
                        <li>What about if ...?</li>
                        <li>Shall we ...?</li>
                        <li>Has he/she contemplated ...?</li>
                        <li>Perhaps he/she should ...</li>
                        <li>Let's ...</li>
                        <li>Maybe we can consider ...</li>
                        <li>He/she could think about ...</li>
                        <li>I suggest ...</li>
                        <li>I recommend ... (formal)</li>
                    </ul>
                </Exercise>
                <Exercise>
                    <Instruction><strong>C2</strong> You want to suggest places to go after school to hang out with friends. In pairs, practise making the suggestions using the photos. Then make a suggestion of your own.</Instruction>
                    <PhotoGrid>
                        <PhotoCard>
                            <h4>Coffee shops</h4>
                            <p>Coffee shops send hot and cold drinks and snacks. They are inexpensive and you can spend as much time there as you like.</p>
                        </PhotoCard>
                        <PhotoCard>
                            <h4>Libraries</h4>
                            <p>Libraries offer the public a quiet place to study and read books. There are also computers available for you to check your email or surf the Internet.</p>
                        </PhotoCard>
                        <PhotoCard>
                            <h4>Hong Kong Park</h4>
                            <p>Hong Kong Park is a spacious and beautiful park, and a free place to go. You can spend a few hours on a picnic on a sunny day.</p>
                        </PhotoCard>
                    </PhotoGrid>
                </Exercise>
            </Section>

            <Section>
                <h3>Supporting your point with the PRE structure</h3>
                <p>When you make suggestions or give advice, you should support what you are saying with reasons and personal experiences or observations. You can use the PRE structure to organize your ideas.</p>
                <StructureDiagram>
                    <StructureBox>① P = main point</StructureBox>
                    <PlusSign>+</PlusSign>
                    <StructureBox>② R = reason</StructureBox>
                    <PlusSign>+</PlusSign>
                    <StructureBox>③ E = personal experience (or observation)</StructureBox>
                </StructureDiagram>
                <p>These students are discussing how young people can deal with school pressure. Look at how they make use of the PRE structure to justify their suggestions.</p>
                <DialogueGrid>
                    <DialogueBubble>
                        <strong>①</strong> It would be a good idea for young people to speak to their teachers about school pressure. <strong>②</strong> They would feel better if they received study advice and feedback. <strong>③</strong> I had some problems once with studying for a Maths exam last year and my Maths teacher provided some helpful study tips.
                    </DialogueBubble>
                    <DialogueBubble>
                        <strong>①</strong> They can also think about scheduling study breaks. <strong>②</strong> Relaxing with friends or family helps relieve stress. <strong>③</strong> Taking a break from study to walk around Hong Kong Park for half an hour helped me recharge while studying for my Maths exam last year.
                    </DialogueBubble>
                </DialogueGrid>
                 <Exercise>
                    <Instruction><strong>C3</strong> These two students are also participating in the discussion above. In pairs, help them strengthen their ideas by adding a reason or personal experience/observation.</Instruction>
                    <DialogueGrid>
                        <DialogueBubble>Maybe students should study in groups. <strong>(add reason)</strong> I couldn't understand some topics in History class last year. Studying with other strong students in the class helped me a lot.</DialogueBubble>
                        <DialogueBubble>Secondary school students could try out relaxation or meditation techniques. This could help them cope with the stress. <strong>(add personal experience or observation)</strong></DialogueBubble>
                    </DialogueGrid>
                </Exercise>
            </Section>

            <Section>
                <h3>Inviting opinions (PREI)</h3>
                <p>To show that you are keen to interact with other candidates, you can invite other speakers to express opinions after expressing your own. The basic structure of your speaking turn can then be expanded to PREI.</p>
                <StructureDiagram>
                    <StructureBox>P = main point</StructureBox>
                    <PlusSign>+</PlusSign>
                    <StructureBox>R = reason</StructureBox>
                    <PlusSign>+</PlusSign>
                    <StructureBox>E = personal experience</StructureBox>
                     <PlusSign>+</PlusSign>
                    <StructureBox>I = invitation</StructureBox>
                </StructureDiagram>
                 <Exercise>
                    <Instruction><strong>C4</strong> Work in pairs. Follow these instructions:</Instruction>
                    <ol>
                        <li>Cut out four blank cards.</li>
                        <li>Read Emily's email below. Think of one piece of advice you can give her.</li>
                        <li>On the cards, write down your advice, a reason, a personal experience/observation and an invitation for others' opinions.</li>
                        <li>Shuffle your cards and hand them to your partner.</li>
                        <li>Put your partner's cards in order. Follow the PREI structure.</li>
                        <li>Check answers with your partner. Read the sentences aloud.</li>
                    </ol>
                    <ArticleBox>
                        <p><strong>To:</strong> Kelly Ho</p>
                        <p><strong>From:</strong> Emily Chan</p>
                        <p><strong>Subject:</strong> Advice needed</p>
                        <hr />
                        <p>Dear Kelly,</p>
                        <p>I'm feeling very lonely. I usually spend a lot of time after school talking with friends on social media, but my grades have not been so good as usual this year. My parents want me to focus on studying, so they took away my smartphone and tablet. I feel so alone in my room and it's hard for me to study when I miss my friends.</p>
                        <p>I understand why my parents took my phone and tablet away, but I want them back. What should I do?</p>
                        <p>Emily</p>
                    </ArticleBox>
                </Exercise>
                <RememberBox>
                    <h4>Remember</h4>
                    <ul>
                        <li>The PREI structure is only a basic organization for a speaking turn. In the real exam, you should also use other types of structures during the turn.</li>
                        <li>If you do not have any relevant personal experience to talk about, you can talk about an observation, e.g. <em>My brother plays badminton with his friends every Saturday.</em> Or use your imagination.</li>
                    </ul>
                </RememberBox>
            </Section>

            <Section>
                <h3>Example Group Interaction</h3>
                <p>Let's look at how the communication strategies you have learnt can be applied in the real exam.</p>
                <InstructionBox>
                    <h4>GENERAL INSTRUCTIONS</h4>
                    <p>This paper consists of two parts: Part A, Group Interaction; and Part B, Individual Response. DO NOT write anything on this page.</p>
                    <h4>Part A Group Interaction</h4>
                    <p>You will be given 10 minutes to prepare. The time allowed for the group interaction is 8 minutes (or 6 minutes for a group of 3 candidates). You may make notes on the notecard provided and refer to your notes during the discussion.</p>
                </InstructionBox>
                <ArticleBox>
                    <p>This email was sent by your classmate Lucas:</p>
                    <hr/>
                    <p>Dear all,</p>
                    <p>I can't believe we're graduating this year! It seems like only yesterday when we started our secondary school lives together. Most of us were strangers at the time, but through the years I feel that we've all grown into friends.</p>
                    <p>Of course, I'm excited about starting university next year. But I'd also like to stay in touch with all of you. Now that we are starting new chapters in our lives, it would be a good idea for us to support each other through them.</p>
                    <p>With that in mind, what do you think about starting a Class Reunion Committee? We could start a group on Facebook to schedule get-togethers where we can catch up on each other's lives. We could also have chat groups where we can exchange updates, advice and encouragement.</p>
                    <p>Would you be interested in helping me organize something? Let me know if you have other ideas as well!</p>
                    <p>Best,</p>
                    <p>Lucas</p>
                </ArticleBox>
                <p>Your group is meeting to discuss the idea of starting a Class Reunion Committee. You may want to talk about:</p>
                <ul>
                    <li>whether starting a class Facebook group could be helpful</li>
                    <li>what kind of meet-ups you would enjoy</li>
                    <li>why you might not want to start a Class Reunion Committee</li>
                    <li>anything else you think is important</li>
                </ul>
                <Exercise>
                    <Instruction><strong>C5</strong> Finish the annotations for the following dialogue by filling in the blanks.</Instruction>
                    <AnnotationExercise>
                        <AnnotationItem>
                            <SpeakerBubble><strong>S1:</strong> I suggest we schedule an annual trip to somewhere exciting. It'd be good to catch up every year. What do you think?</SpeakerBubble>
                            <AnnotationOptions>
                                <AnnotationOption><BlankBox /> suggesting a point</AnnotationOption>
                                <AnnotationOption><BlankBox /> supporting suggestion with a reason</AnnotationOption>
                                <AnnotationOption><BlankBox /> inviting others' opinions</AnnotationOption>
                            </AnnotationOptions>
                        </AnnotationItem>
                         <AnnotationItem>
                            <SpeakerBubble><strong>S2:</strong> That sounds great. But we might not all be able to travel away from school for a long period of time. Maybe we can have monthly coffee or dinner meet-ups instead. That way, we can regularly exchange news. It'd be interesting for me to hear how everyone's doing.</SpeakerBubble>
                            <AnnotationOptions>
                                <AnnotationOption><BlankBox /> suggesting a point</AnnotationOption>
                                <AnnotationOption><BlankBox /> supporting suggestion with a reason</AnnotationOption>
                                <AnnotationOption><BlankBox /> relating a personal experience/observation</AnnotationOption>
                            </AnnotationOptions>
                        </AnnotationItem>
                         <AnnotationItem>
                            <SpeakerBubble><strong>S3:</strong> I agree with you. Meeting monthly for smaller reunions would let us stay in touch more frequently. It's only 30-minutes away. So it would be OK because you'd have another chance the following month. We need to be flexible.</SpeakerBubble>
                            <AnnotationOptions>
                                <AnnotationOption><BlankBox /> suggesting a point</AnnotationOption>
                                <AnnotationOption><BlankBox /> supporting suggestion with a reason</AnnotationOption>
                                <AnnotationOption><BlankBox /> relating a personal experience/observation</AnnotationOption>
                            </AnnotationOptions>
                        </AnnotationItem>
                        <AnnotationItem>
                            <SpeakerBubble><strong>S4:</strong> That's a good idea! We could see how scheduling the monthly meet-ups goes on. This will help us decide if we want to schedule a day trip at the end of the year. It would be helpful to know of my schedule before committing to something big. Does this sound good to everyone?</SpeakerBubble>
                            <AnnotationOptions>
                                <AnnotationOption><BlankBox /> suggesting a point</AnnotationOption>
                                <AnnotationOption><BlankBox /> supporting suggestion with a reason</AnnotationOption>
                                <AnnotationOption><BlankBox /> relating a personal experience/observation</AnnotationOption>
                                <AnnotationOption><BlankBox /> inviting others' opinions</AnnotationOption>
                            </AnnotationOptions>
                        </AnnotationItem>
                    </AnnotationExercise>
                </Exercise>
                <Exercise>
                     <Instruction><strong>C6</strong> Now listen to and role-play the model Group Interaction in groups of four.</Instruction>
                </Exercise>
            </Section>
        </CommunicationContainer>
    );
};

export default Unit2Communication;