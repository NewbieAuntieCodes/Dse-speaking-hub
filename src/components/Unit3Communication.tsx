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
    InstructionBox,
    OptionsGrid,
    OptionCard,
    DialogueGrid,
    DialogueBubble,
    Table,
    Th,
    Td,
    FillInTheBlank,
    DialogueCompletionExercise,
    DialogueLine,
    AthleteCard
} from './Unit3Communication.styles';

interface Unit3CommunicationProps {
    onBack: () => void;
}

const Unit3Communication: React.FC<Unit3CommunicationProps> = ({ onBack }) => {
    return (
        <CommunicationContainer>
            <BackButton onClick={onBack}>← Back to Unit 3</BackButton>
            <h2>Communication strategies</h2>

            <Section>
                <h3>Making and explaining choices</h3>
                <p>In the speaking exam, you might have to make choices and explain why you made them. The question may ask you to choose one or more from a few given options.</p>
                <InstructionBox>
                    <h4>GENERAL INSTRUCTIONS</h4>
                    <p>This paper consists of two parts: Part A, Group Interaction; and Part B, Individual Response. DO NOT write anything on this page.</p>
                    <h4>Part A Group Interaction</h4>
                    <p>You will be given 10 minutes to prepare. The time allowed for the group interaction is 8 minutes (or 6 minutes for a group of 3 candidates). You may make notes on the notecard provided and refer to your notes during the discussion.</p>
                    <p>These are three possible options for a class activity:</p>
                    <OptionsGrid>
                         <OptionCard>
                            <h4>Hiking</h4>
                            <p>Lace up your hiking shoes and hike in the hills of Sai Kung. It's a nature lover's paradise and you're sure to see some beautiful scenery.</p>
                        </OptionCard>
                        <OptionCard>
                            <h4>Cycling</h4>
                            <p>Take to the trails on Lantau Island for some exhilarating mountain biking. Don't forget your helmet!</p>
                        </OptionCard>
                        <OptionCard>
                            <h4>Rock climbing</h4>
                            <p>Aim for the top at King's Park Centenary Centre's 18-metre climbing wall. Whether you are an expert or a beginner, they've got a route that will suit you.</p>
                        </OptionCard>
                    </OptionsGrid>
                     <p>Your group is responsible for organizing a class activity. Discuss which of the three options above would be the best choice. You may want to talk about:</p>
                    <ul>
                        <li>which is the most suitable for your class</li>
                        <li>which is the most enjoyable</li>
                        <li>which is the healthiest</li>
                        <li>anything else you think is important</li>
                    </ul>
                </InstructionBox>
                <br />
                <p>These students are discussing the exam question on page 37. Look at how they indicate and explain their choices.</p>
                <DialogueGrid>
                    <DialogueBubble>
                        <p><strong>Indicating a choice:</strong></p>
                        <p>① I'd like to go hiking ② because it's nice to be outdoors and see different kinds of trees and birds.</p>
                    </DialogueBubble>
                    <DialogueBubble>
                        <p><strong>Explaining the choice:</strong></p>
                        <p>① But rock climbing is the most exciting option. ② It's perfectly safe and you'll get such a thrill when you reach the top of the wall!</p>
                    </DialogueBubble>
                     <DialogueBubble>
                        <p>① Me too. If we go hiking, ② we can catch up and chat while we're exploring the trails.</p>
                    </DialogueBubble>
                    <DialogueBubble>
                        <p>① I really think we should go cycling. ② We'd see so much that way, and it's very good exercise.</p>
                    </DialogueBubble>
                </DialogueGrid>

                <Exercise>
                    <Instruction><strong>C1</strong> Listen to the recording. Fill in the blanks with different expressions for indicating and explaining choices.</Instruction>
                    <Table>
                        <thead>
                            <tr><Th>Indicating a choice</Th><Th>Explaining the choice</Th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Td>1. I think rock climbing would be <FillInTheBlank>the best option</FillInTheBlank>.</Td>
                                <Td>6. Rock climbing is the best option <FillInTheBlank>because</FillInTheBlank> it's an adventurous way to get exercise.</Td>
                            </tr>
                            <tr>
                                <Td>2. I prefer <FillInTheBlank>cycling in</FillInTheBlank> the countryside.</Td>
                                <Td>7. I'm in favour of hiking, <FillInTheBlank>as</FillInTheBlank> it lets us exercise while enjoying some scenery.</Td>
                            </tr>
                            <tr>
                                <Td>3. I <FillInTheBlank>would rather pick</FillInTheBlank> rock climbing.</Td>
                                <Td>8. I prefer cycling in the countryside <FillInTheBlank>because of</FillInTheBlank> the fresh air.</Td>
                            </tr>
                            <tr>
                                <Td>4. <FillInTheBlank>I will go for</FillInTheBlank> hiking.</Td>
                                <Td></Td>
                            </tr>
                             <tr>
                                <Td>5. <FillInTheBlank>My choice would be</FillInTheBlank> cycling.</Td>
                                <Td></Td>
                            </tr>
                        </tbody>
                    </Table>
                </Exercise>
            </Section>

            <Section>
                <h3>Comparing and contrasting choices</h3>
                <p>When you are justifying your choice, you can compare and contrast it with the others to show that yours is the best option.</p>
                <DialogueGrid>
                    <DialogueBubble>
                        <p>① I'd rather do outdoor sports than go to the gym. ② You get more fresh air when you run or train outside.</p>
                    </DialogueBubble>
                    <DialogueBubble>
                        <p>① Going to the gym is a better choice ② because it's more convenient for people who live in crowded cities far away from parks and trails.</p>
                    </DialogueBubble>
                     <DialogueBubble>
                        <p>① I think exercising outdoors is better than exercising in the gym ② because trees and flowers and changing seasons are more interesting than seeing the same things all the time.</p>
                    </DialogueBubble>
                    <DialogueBubble>
                        <p>① I would choose the gym over exercising outdoors ② because I don't like to be wet or cold. Going to the gym allows me to establish a regular exercise routine.</p>
                    </DialogueBubble>
                </DialogueGrid>
                 <Exercise>
                    <Instruction><strong>C4</strong> Work in groups of four. Explain why the sports star on your activity card is the best choice.</Instruction>
                    <p>You are writing an article on a famous athlete for the school magazine. Discuss with your group members which of the four athletes you should write about. You may want to talk about:</p>
                     <ul>
                        <li>who is the best known among young people in Hong Kong</li>
                        <li>who would be most popular with readers of the school magazine</li>
                        <li>who would be the best role model for young people</li>
                        <li>anything else you think is important</li>
                    </ul>
                    <OptionsGrid>
                        <AthleteCard><h4>Cristiano Ronaldo</h4></AthleteCard>
                        <AthleteCard><h4>LeBron James</h4></AthleteCard>
                        <AthleteCard><h4>Simone Biles</h4></AthleteCard>
                        <AthleteCard><h4>Naomi Osaka</h4></AthleteCard>
                    </OptionsGrid>
                </Exercise>
            </Section>

            <Section>
                <h3>Suggesting a compromise</h3>
                <p>During the exam, group members might not agree. In this case, you can propose to find a compromise.</p>
                <DialogueGrid>
                    <DialogueBubble><p>Should we find a compromise between volleyball and swimming?</p></DialogueBubble>
                    <DialogueBubble><p>Let's agree on a compromise.</p></DialogueBubble>
                    <DialogueBubble><p>I think it's time to find a compromise.</p></DialogueBubble>
                    <DialogueBubble><p>Which points can we all agree on?</p></DialogueBubble>
                </DialogueGrid>
                <br/>
                <p>After proposing to find a compromise, you can make a suggestion.</p>
                 <DialogueGrid>
                    <DialogueBubble>
                        <p>① I think it's time to find a compromise. ② What about hiking to a lookout point and having a picnic?</p>
                    </DialogueBubble>
                    <DialogueBubble>
                         <p>① Let's agree on a compromise. ② Maybe we could play a game of beach volleyball and go swimming afterwards?</p>
                    </DialogueBubble>
                </DialogueGrid>
                 <Exercise>
                    <Instruction><strong>C5</strong> In pairs, take turns to suggest a compromise for the discussion below.</Instruction>
                    <DialogueGrid>
                        <DialogueBubble><p>For Sports Week, we should organize a table tennis match!</p></DialogueBubble>
                        <DialogueBubble><p>No, I think badminton is a better choice.</p></DialogueBubble>
                    </DialogueGrid>
                </Exercise>
            </Section>

            <Section>
                <h3>Example Group Interaction</h3>
                <InstructionBox>
                    <h4>Part A Group Interaction</h4>
                    <p>This leaflet appeared on the noticeboard of your school:</p>
                    <p>Sport isn't just about football and basketball—there are plenty of fun alternatives. Here are some new sports clubs that are looking for members. Check them out and sign up today!</p>
                    <OptionsGrid>
                         <OptionCard>
                            <h4>Kung Fu Club</h4>
                            <p>Get a black belt in confidence! Kung fu is an excellent way to boost your self-esteem and self-discipline. Learn techniques that made Bruce Lee an international phenomenon. With enough commitment, anyone can become a master in martial arts.</p>
                        </OptionCard>
                        <OptionCard>
                            <h4>Ice Skating Club</h4>
                            <p>Be as cool as a cucumber! Speed, balance and grace: these are just some of the qualities associated with ice skating. Pull on your figure skates and join us to find out more. Stylish tricks await you! You'll learn spins, twirls and much more on the ice!</p>
                        </OptionCard>
                        <OptionCard>
                            <h4>Dance Club</h4>
                            <p>Get fit and flexible! Q: What is a good form of exercise that's social, involves music and trains coordination? A: Dancing! Q: What forms of dancing can I learn at the Dance Club? A: You can learn everything from modern dance (including hip hop) to classical ballroom dance.</p>
                        </OptionCard>
                    </OptionsGrid>
                     <p>You are planning to join a sports club. Discuss with your group which club you should join. You may want to talk about:</p>
                    <ul>
                        <li>the advantages of each sport</li>
                        <li>which sport is the most enjoyable</li>
                        <li>the outfit or uniform needed for each sport</li>
                        <li>anything else you think is important</li>
                    </ul>
                </InstructionBox>
                 <Exercise>
                    <Instruction><strong>C6</strong> Complete the Group Interaction below in groups of four. Then role-play the dialogue.</Instruction>
                    <DialogueCompletionExercise>
                        <DialogueLine>
                            <p><strong>A:</strong> Good afternoon, everybody. Let's start talking about our options. We need to choose one of these three sports clubs to join—either the Kung Fu Club, the Ice Skating Club or the Dance Club. I <FillInTheBlank>prefer</FillInTheBlank> Dance Club <FillInTheBlank>because</FillInTheBlank>...</p>
                            <div>
                                <p><strong>Indicate your choice:</strong> Dance Club</p>
                                <p><strong>Explain your choice:</strong> Advantage: dancing is good exercise; Reason: it's so fun you don't realize you're exercising.</p>
                            </div>
                        </DialogueLine>
                         <DialogueLine>
                            <p><strong>B:</strong> I can see your point, but <FillInTheBlank>I would choose</FillInTheBlank> Kung Fu Club <FillInTheBlank>as for</FillInTheBlank>...</p>
                            <div>
                                <p><strong>Indicate your choice:</strong> Kung Fu Club</p>
                                <p><strong>Explain your choice:</strong> Advantage: more exciting sport than dancing and ice skating; Reason: you get to spar with your partner to test your skills.</p>
                            </div>
                        </DialogueLine>
                         <DialogueLine>
                            <p><strong>C:</strong> Competing with people isn't the only way for a sport to be exciting. <FillInTheBlank>My choice</FillInTheBlank> is Ice Skating Club. <FillInTheBlank>I'd</FillInTheBlank>...</p>
                            <div>
                                <p><strong>Indicate your choice:</strong> Ice Skating Club</p>
                                <p><strong>Explain your choice:</strong> Advantage: feel excited doing this sport; Reason: many new skills to learn and master.</p>
                            </div>
                        </DialogueLine>
                         <DialogueLine>
                            <p><strong>D:</strong> I agree. <FillInTheBlank>I also like</FillInTheBlank> Ice Skating Club. <FillInTheBlank>It would be a good place</FillInTheBlank>...</p>
                            <div>
                                <p><strong>Indicate your choice:</strong> Ice Skating Club</p>
                                <p><strong>Explain your choice:</strong> Advantage: easy to find a place to practise; Reason: rinks in many popular shopping centres.</p>
                            </div>
                        </DialogueLine>
                    </DialogueCompletionExercise>
                </Exercise>
            </Section>

        </CommunicationContainer>
    );
};

export default Unit3Communication;