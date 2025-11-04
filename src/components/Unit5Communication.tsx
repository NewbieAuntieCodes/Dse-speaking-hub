/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {
    CommunicationContainer,
    BackButton,
    Section,
    Table,
    Th,
    Td,
    Exercise,
    Instruction,
    DialogueGrid,
    DialogueBubble,
    SentenceList,
    PracticePointsContainer,
    PracticePointCard,
    ForAgainstTable,
    ForAgainstColumn,
    MindMapContainer,
    MindMapCenter,
    MindMapNode,
    WordGrid,
    WordBox,
    RememberBox,
    InstructionBox,
    ArticleBox,
    DialogueCompletion,
    DialogueLine,
    DialogueText,
    DialogueBlank,
    DialogueAction
} from './Unit5Communication.styles';

interface Unit5CommunicationProps {
    onBack: () => void;
}

const Unit5Communication: React.FC<Unit5CommunicationProps> = ({ onBack }) => {
    return (
        <CommunicationContainer>
            <BackButton onClick={onBack}>← Back to Unit 5</BackButton>
            <h2>Communication strategies</h2>

            <Section>
                <h3>Stating your position</h3>
                <p>In the exam, you might be asked to argue either for or against a position. In this case, it is a good idea to state your position clearly during the discussion.</p>
                <Table>
                    <thead>
                        <tr>
                            <Th></Th>
                            <Th>When to do so</Th>
                            <Th>Expressions</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Td><strong>Stating your position</strong></Td>
                            <Td>During your first speaking turn</Td>
                            <Td>
                                <ul>
                                    <li>I'm for/against the suggestion that ...</li>
                                    <li>I support/oppose the idea ...</li>
                                    <li>I (do not) believe that ...</li>
                                    <li>I (do not) agree that ...</li>
                                    <li>I (do not) think that ...</li>
                                    <li>In my experience, ...</li>
                                </ul>
                            </Td>
                        </tr>
                        <tr>
                            <Td><strong>Restating your position</strong></Td>
                            <Td>
                                <ul>
                                    <li>When you want to strengthen your argument</li>
                                    <li>When you think others do not understand you</li>
                                </ul>
                            </Td>
                            <Td>
                                <ul>
                                    <li>As I said, ...</li>
                                    <li>Let me say that again.</li>
                                    <li>Once again, ...</li>
                                </ul>
                            </Td>
                        </tr>
                        <tr>
                            <Td><strong>Changing your position</strong></Td>
                            <Td>When your group members' arguments are better than your own</Td>
                            <Td>
                                <ul>
                                    <li>I guess you're right. Maybe we should ...</li>
                                    <li>I've changed my mind. I guess ...</li>
                                    <li>You've convinced me with some good arguments. I now believe ... (formal)</li>
                                </ul>
                            </Td>
                        </tr>
                    </tbody>
                </Table>

                <Exercise>
                    <Instruction><strong>C1</strong> These three students are discussing whether a law should be passed to protect the privacy of celebrities. Decide whether they are stating, restating or changing their positions.</Instruction>
                    <DialogueGrid>
                        <DialogueBubble><p>As I've mentioned before, this law is not a good idea as it will limit the freedom of the press.</p></DialogueBubble>
                        <DialogueBubble><p>I'm in favour of the proposal that a law be passed to protect the privacy of celebrities.</p></DialogueBubble>
                        <DialogueBubble><p>Let me rethink my earlier position. I now think that the government should not pass this law.</p></DialogueBubble>
                    </DialogueGrid>
                </Exercise>
                <Exercise>
                    <Instruction><strong>C2</strong> Read the arguments below and decide whether you are for or against them. In pairs, practise stating your position to each other using the provided points as reference.</Instruction>
                    <PracticePointsContainer>
                        <PracticePointCard isFor={true}>
                            <h4>🎵 1. Pop music should be taught in Music class. ✅</h4>
                            <p><strong>Point:</strong> "I agree that pop music should be taught in Music class."</p>
                            <p><strong>Reason:</strong> "Because pop music has a huge influence on young people. It can make students more interested in learning music and understand modern culture better."</p>
                            <p><strong>Example:</strong> "For example, teachers can use famous songs in class to teach music knowledge, which can make the lesson more enjoyable and fulfilling."</p>
                        </PracticePointCard>
                        <PracticePointCard isFor={false}>
                            <h4>🎬 2. Film Studies should be made available as a secondary school subject. ❌</h4>
                            <p><strong>Point:</strong> "I don’t think Film Studies should be made a school subject."</p>
                            <p><strong>Reason:</strong> "Because it is more suitable for students who want to study it professionally in the future. It would also take up too much time, and students might not have enough time for homework from other subjects."</p>
                            <p><strong>Example:</strong> "For example, secondary school students already have many subjects to study, so it’s better to focus on the main ones first."</p>
                        </PracticePointCard>
                        <PracticePointCard isFor={true}>
                            <h4>📺 3. There should be more English-language TV channels in Hong Kong. ✅</h4>
                            <p><strong>Point:</strong> "I agree that there should be more English-language TV channels in Hong Kong."</p>
                            <p><strong>Reason:</strong> "Because it gives people more chances to listen to English and improve their language skills naturally."</p>
                            <p><strong>Example:</strong> "For example, students can watch English movies or news at home and learn new words from them."</p>
                        </PracticePointCard>
                        <PracticePointCard isFor={false}>
                            <h4>📰 4. Music and film reviews should be included in the school magazine. ❌</h4>
                            <p><strong>Point:</strong> "I don’t think music and film reviews should be included in the school magazine."</p>
                            <p><strong>Reason:</strong> "Because students need to concentrate on academic and creative writing, rather than music or film reviews."</p>
                            <p><strong>Example:</strong> "For example, the magazine could include students’ short stories or articles about school life instead, which are more educational."</p>
                        </PracticePointCard>
                    </PracticePointsContainer>
                </Exercise>
                 <Exercise>
                    <Instruction><strong>C3</strong> Play 'Rock-paper-scissors' with your partner. The winner should restate his/her position for one of the suggestions, while the loser should change his/her position.</Instruction>
                </Exercise>
            </Section>

            <Section>
                <h3>Giving additional reasons</h3>
                <p>After stating your position, you should support it with reasons. If you have more than one reason, you can introduce the additional reason(s) using the following expressions:</p>
                <ul>
                    <li>In addition, news stories are more detailed and better researched.</li>
                    <li>Reading news articles vs using social media keeps you up to date with what is going on in the world. Moreover, it is a good way to improve your English.</li>
                </ul>
                <p>You can also give additional reasons to support what another candidate has said.</p>
                <h4>These students are discussing whether they prefer to read online news articles, or listen to podcasts. Look at how they give additional reasons to back up each others' arguments.</h4>
                <DialogueGrid>
                    <DialogueBubble>I prefer to listen to podcasts because I can do other things, like going for a walk or completing my chores, while I listen.</DialogueBubble>
                    <DialogueBubble>Besides, it feels more personal to listen to people talking than to read a news article.</DialogueBubble>
                    <DialogueBubble>Also, many podcast hosts recommend new podcasts, so there are more exciting things to discover after you've finished listening.</DialogueBubble>
                </DialogueGrid>

                <Exercise>
                    <Instruction><strong>C4</strong> You are discussing whether children should be allowed to work in the entertainment industry in Hong Kong. The following arguments for and against the topic have been brainstormed. In pairs, take turns to present and expand on these points.</Instruction>
                    <PracticePointsContainer>
                        <PracticePointCard isFor={true}>
                            <h4>✅ FOR 1 — Valuable Experience</h4>
                            <p><strong>Point:</strong> "I think working and performing can be a valuable experience for children."</p>
                            <p><strong>Reason:</strong> "Because it gives them a taste of the real world and helps them learn things that are as valuable as school education."</p>
                            <p><strong>Example:</strong> "For example, child actors can learn teamwork and confidence when they perform in front of people."</p>
                        </PracticePointCard>
                        <PracticePointCard isFor={true}>
                            <h4>✅ FOR 2 — Protected by Parents</h4>
                            <p><strong>Point:</strong> "I also think child stars are well protected and supervised by their parents."</p>
                            <p><strong>Reason:</strong> "Because there are laws in place, and they will not work as much as adults do."</p>
                            <p><strong>Example:</strong> "For example, parents can make sure their children have enough rest and do not miss their studies."</p>
                        </PracticePointCard>
                        <PracticePointCard isFor={false}>
                            <h4>❌ AGAINST 1 — Less Time at School</h4>
                            <p><strong>Point:</strong> "I think one problem is that children who work in the entertainment industry have less time for school."</p>
                            <p><strong>Reason:</strong> "Because they spend too much time filming or performing, so they may miss classes and friends."</p>
                            <p><strong>Example:</strong> "For example, a child actor might need to travel for shooting, which means missing lessons for weeks."</p>
                        </PracticePointCard>
                        <PracticePointCard isFor={false}>
                            <h4>❌ AGAINST 2 — Too Much Pressure</h4>
                            <p><strong>Point:</strong> "Another problem is that child stars face huge pressure from fame."</p>
                            <p><strong>Reason:</strong> "Because they are too young and cannot deal with stress properly."</p>
                            <p><strong>Example:</strong> "For example, some child stars may feel unhappy or tired because they always have to be perfect in front of others."</p>
                        </PracticePointCard>
                    </PracticePointsContainer>
                </Exercise>
                <Exercise>
                    <Instruction><strong>C5</strong> In the Group Interaction, you have been asked to discuss arguments against illegally streaming films or music. Complete the mind map below by adding your own ideas.</Instruction>
                    <MindMapContainer>
                        <MindMapNode className="top-left"><p>Illegal streaming is against copyright laws</p></MindMapNode>
                        <MindMapNode className="top-right"></MindMapNode>
                        <MindMapCenter>Illegally streaming films or music</MindMapCenter>
                        <MindMapNode className="bottom-left"></MindMapNode>
                        <MindMapNode className="bottom-right"></MindMapNode>
                    </MindMapContainer>
                </Exercise>
                <Exercise>
                    <Instruction><strong>C6</strong> Discuss your arguments in pairs. Take turns to support what each of you has said. Use the expressions below to help you.</Instruction>
                    <DialogueGrid>
                         <DialogueBubble><p>I oppose illegal streaming as it is against copyright laws.</p></DialogueBubble>
                         <DialogueBubble><p>Moreover, I would feel guilty if my favourite musicians found out I had illegally streamed their music.</p></DialogueBubble>
                         <DialogueBubble><p>In addition, artists should be paid for their work.</p></DialogueBubble>
                         <DialogueBubble><p>On top of that, when people are not paid properly for their work, it's bad for the economy.</p></DialogueBubble>
                    </DialogueGrid>
                </Exercise>
            </Section>

             <Section>
                <h3>Using persuasive language</h3>
                <p>During the discussion, you should try to persuade your group members to agree with your position. Look at the following examples.</p>
                <DialogueGrid>
                     <DialogueBubble><p>Alcohol ads should <strong>definitely</strong> be banned.</p></DialogueBubble>
                     <DialogueBubble><p>Advertising should <strong>obviously</strong> be regulated more strictly in Hong Kong.</p></DialogueBubble>
                </DialogueGrid>
                <Exercise>
                    <Instruction><strong>C7</strong> Read the following sentences. Try to make these sentences more persuasive by inserting adverbs from the box. Pay special attention to where you place your adverbs in the sentence. The first one has been done for you.</Instruction>
                    <WordGrid>
                        <WordBox>clearly</WordBox>
                        <WordBox>surely</WordBox>
                        <WordBox>undoubtedly</WordBox>
                        <WordBox>unquestionably</WordBox>
                    </WordGrid>
                    <SentenceList>
                        <li>Hip hop is, <strong>clearly</strong>, very popular with teens in Hong Kong right now.</li>
                        <li>Some forms of social media are more popular with teens than older people.</li>
                        <li>YouTube videos are an effective way for brands to connect with teens.</li>
                        <li>For some teens, it is easier to find friends online than at school.</li>
                    </SentenceList>
                </Exercise>
                 <Exercise>
                    <Instruction><strong>C8</strong> Read these sentences aloud in pairs. Remember you can give extra stress to your adverbs to emphasize the argument.</Instruction>
                </Exercise>
                <RememberBox>
                    <h4>Remember</h4>
                    <ul>
                        <li>Look confident and <strong>use appropriate hand gestures</strong>. This can help you appear more persuasive.</li>
                        <li>When you disagree with someone's opinions, do so <strong>respectfully</strong>. Never turn a discussion into an argument.</li>
                    </ul>
                </RememberBox>
            </Section>

            <Section>
                <h3>Example Group Interaction</h3>
                <InstructionBox>
                    <h4>GENERAL INSTRUCTIONS</h4>
                    <p>This paper consists of two parts: Part A, Group Interaction, and Part B, Individual Response. DO NOT write anything on this page.</p>
                    <h4>Part A Group Interaction</h4>
                    <p>You will be given 10 minutes to prepare. The time allowed for the group interaction is 8 minutes (or 6 minutes for a group of 3 candidates). You may make notes on the notecard provided and refer to your notes during the discussion.</p>
                </InstructionBox>
                <ArticleBox>
                    <p>This new music streaming app is 100% legal, offering high-quality streaming and the ability to save songs to playlists. Make your own playlists and share them with friends, or check out the giant and growing library of playlists made by other users.</p>
                    <p>The app's catalogue contains over 10 million songs by your favourite pop artists, as well as hundreds of up-and-coming musicians from around the globe.</p>
                    <p>The free version of the app is supported by advertising, so your songs will sometimes be interrupted by 'a message from our sponsors'. Upgrade to the professional version for a small monthly fee to enjoy ad-free access.</p>
                    <table>
                        <tbody>
                            <tr><td>No. of songs: ★★★☆☆</td><td>Price: ★★★★★</td></tr>
                            <tr><td>Song variety: ★★★★☆</td><td>Technical support: ☆☆☆☆☆</td></tr>
                            <tr><td>File quality: ★★★★★</td><td>User-friendliness: ★★★☆☆</td></tr>
                            <tr><td><strong>Overall: ★★★☆☆</strong></td><td></td></tr>
                        </tbody>
                    </table>
                </ArticleBox>
                <p>Your class is discussing the best way to listen to music on smartphones. Your group has been asked to discuss whether it is a good idea to replace downloaded music with streaming apps. You may want to talk about:</p>
                <ul>
                    <li>advantages of using streaming apps</li>
                    <li>disadvantages of using streaming apps</li>
                    <li>how streaming apps have impacted the music industry</li>
                    <li>anything else you think is important</li>
                </ul>

                <Exercise>
                    <Instruction><strong>C9</strong> Complete the Group Interaction dialogue below in groups of four. Then role-play the dialogue.</Instruction>
                    <DialogueCompletion>
                        <DialogueLine>
                            <DialogueText>
                                <p><strong>A:</strong> ... I support the idea of ...</p>
                                <DialogueBlank />
                            </DialogueText>
                            <DialogueAction><p>Stating your position: for the idea of replacing downloads with streaming apps</p></DialogueAction>
                        </DialogueLine>
                        <DialogueLine>
                            <DialogueText>
                                <p>It's _________________ more convenient because listeners can access a huge range of music without having to use up storage on their smartphones.</p>
                            </DialogueText>
                            <DialogueAction><p>Making your argument more persuasive</p></DialogueAction>
                        </DialogueLine>
                         <DialogueLine>
                            <DialogueText>
                                <p><strong>B:</strong> I understand what you mean, but ...</p>
                                <p>suggestion. I'd rather listen to my favourite music ad-free than have to listen to ads on streaming apps. Don't you find them annoying?</p>
                            </DialogueText>
                            <DialogueAction><p>Stating your position: against</p></DialogueAction>
                        </DialogueLine>
                         <DialogueLine>
                            <DialogueText>
                                <p><strong>C:</strong> I disagree. Even though I don't use streaming apps very often, the ads _________________ aren't that annoying, and the song variety is worth it.</p>
                            </DialogueText>
                            <DialogueAction><p>Making your argument more persuasive</p></DialogueAction>
                        </DialogueLine>
                        <DialogueLine>
                            <DialogueText>
                                <p>_________________ people can choose to pay a monthly fee to access the ad-free version of the app</p>
                            </DialogueText>
                            <DialogueAction><p>Giving an additional reason</p></DialogueAction>
                        </DialogueLine>
                         <DialogueLine>
                            <DialogueText>
                                <p><strong>D:</strong> I agree with you. _________________</p>
                                <p>_________________ WiFi is commonly available</p>
                            </DialogueText>
                            <DialogueAction><p>Giving an additional reason</p></DialogueAction>
                        </DialogueLine>
                         <DialogueLine>
                            <DialogueText>
                                <p><strong>B:</strong> _________________</p>
                            </DialogueText>
                            <DialogueAction><p>Changing your position from against to for the suggestion</p></DialogueAction>
                        </DialogueLine>
                    </DialogueCompletion>
                </Exercise>
                 <Exercise>
                    <Instruction><strong>C10</strong> Now listen to the suggested answers.</Instruction>
                </Exercise>
            </Section>
        </CommunicationContainer>
    );
};

export default Unit5Communication;