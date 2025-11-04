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
    OptionsGrid,
    OptionCard,
    NoteTakingExample,
    Exercise,
    Instruction,
    WordGrid,
    WordBox,
    Notecard,
    ResponseFlowChart,
    FlowChartStep,
    FlowChartArrow,
    IndividualResponseList,
    SpeakingPromptsContainer,
    PromptSection,
    PromptSectionTitle,
    PromptGrid,
    PromptCard
} from './Unit3IdeasAndOrganization.styles';

interface Unit3IdeasAndOrganizationProps {
    onBack: () => void;
}

const Unit3IdeasAndOrganization: React.FC<Unit3IdeasAndOrganizationProps> = ({ onBack }) => {
    return (
        <IdeasContainer>
            <BackButton onClick={onBack}>← Back to Unit 3</BackButton>
            <h2>Ideas and organization</h2>

            <Section>
                <h3>Visual prompts</h3>
                <p>Sometimes the input text contains photos or illustrations. These visual prompts aim to help you understand the question and the input text better. Look at the Exam practice question below.</p>
                <InstructionBox>
                    <h4>GENERAL INSTRUCTIONS</h4>
                    <p>This paper consists of two parts: Part A, Group Interaction; and Part B, Individual Response. DO NOT write anything on this page.</p>
                    <h4>Part A Group Interaction</h4>
                    <p>You will be given 10 minutes to prepare. The time allowed for the group interaction is 8 minutes (or 6 minutes for a group of 3 candidates). You may make notes on the notecard provided and refer to your notes during the discussion.</p>
                </InstructionBox>
                <ArticleBox>
                    <p>This newsletter article was sent out by your local community centre:</p>
                    <h4>New sports event coming to town</h4>
                    <p>In the technological age, it is easy to forget about the importance of regular exercise. This summer, the Community Centre is launching a new event to promote exercise and a healthy lifestyle to young people. We have come up with four ideas and want YOU to help us choose the right one:</p>
                    <OptionsGrid>
                        <OptionCard>
                            <h5>Q&A session with a professional athlete</h5>
                        </OptionCard>
                        <OptionCard>
                            <h5>5 km charity run</h5>
                        </OptionCard>
                        <OptionCard>
                            <h5>Spartan race</h5>
                        </OptionCard>
                        <OptionCard>
                            <h5>Free yoga lesson</h5>
                        </OptionCard>
                    </OptionsGrid>
                    <p>Complete our online survey to let us know what you think!</p>
                </ArticleBox>
                <p>Your class teacher has asked you to discuss the four options in the article. Discuss with your group which event the community centre should choose. You may want to talk about:</p>
                <ul>
                    <li>which event would be the most popular</li>
                    <li>which event is most accessible</li>
                    <li>which event would be most effective in encouraging young people to exercise</li>
                    <li>anything else you think is important</li>
                </ul>
                <SpeakingPromptsContainer>
                    <PromptSection type="advantage">
                        <PromptSectionTitle type="advantage">✅ Advantages (优点)</PromptSectionTitle>
                        <PromptGrid>
                            <PromptCard type="advantage">
                                <h5>🏅 1. Q&A Session with a Professional Athlete</h5>
                                <p><strong>Point:</strong> "I think the Q&A session with a professional athlete would be a good idea."</p>
                                <p><strong>Reason:</strong> "Because athletes have a strong influence. They can encourage students to do more exercise."</p>
                                <p><strong>Example:</strong> "For example, if a famous basketball player comes, many students will be inspired to stay healthy."</p>
                            </PromptCard>
                            <PromptCard type="advantage">
                                <h5>🏃 2. 5 km Charity Run</h5>
                                <p><strong>Point:</strong> "I think the 5 km charity run would be a great idea."</p>
                                <p><strong>Reason:</strong> "Because we can both do exercise and help people in need at the same time."</p>
                                <p><strong>Example:</strong> "For example, students can raise money for charity while running, so it’s meaningful and healthy."</p>
                            </PromptCard>
                            <PromptCard type="advantage">
                                <h5>💪 3. Spartan Race</h5>
                                <p><strong>Point:</strong> "The Spartan race sounds like a fun and exciting choice."</p>
                                <p><strong>Reason:</strong> "Because it helps students build up their strength and teamwork through different challenges."</p>
                                <p><strong>Example:</strong> "For example, we can climb, crawl, and jump over obstacles together — it’s a good way to stay fit."</p>
                            </PromptCard>
                            <PromptCard type="advantage">
                                <h5>🧘 4. Free Yoga Lesson</h5>
                                <p><strong>Point:</strong> "I think the free yoga lesson would be a nice and relaxing option."</p>
                                <p><strong>Reason:</strong> "Because yoga is comfortable and easy to learn, and it can help students relax after school."</p>
                                <p><strong>Example:</strong> "For example, we can stretch, improve our posture, and reduce stress in a calm environment."</p>
                            </PromptCard>
                        </PromptGrid>
                    </PromptSection>

                    <PromptSection type="disadvantage">
                        <PromptSectionTitle type="disadvantage">❌ Disadvantages (缺点)</PromptSectionTitle>
                        <PromptGrid>
                            <PromptCard type="disadvantage">
                                <h5>🏅 Q&A Session with a Professional Athlete — Disadvantage</h5>
                                <p><strong>Point:</strong> "One problem with the Q&A session is that students may not really exercise."</p>
                                <p><strong>Reason:</strong> "Because they only listen to the talk instead of taking part in sports themselves."</p>
                                <p><strong>Example:</strong> "For example, some students might just enjoy meeting the athlete but not change their lifestyle afterwards."</p>
                            </PromptCard>
                            <PromptCard type="disadvantage">
                                <h5>🏃 5 km Charity Run — Disadvantage</h5>
                                <p><strong>Point:</strong> "A drawback of the charity run is that it might be too tiring for some students."</p>
                                <p><strong>Reason:</strong> "Because not everyone is used to running a long distance, and it needs good physical strength."</p>
                                <p><strong>Example:</strong> "For example, some students may feel exhausted or even give up halfway."</p>
                            </PromptCard>
                            <PromptCard type="disadvantage">
                                <h5>💪 Spartan Race — Disadvantage</h5>
                                <p><strong>Point:</strong> "One disadvantage of the Spartan race is that it’s too difficult for many students."</p>
                                <p><strong>Reason:</strong> "Because it involves climbing and other hard activities that need a lot of energy and training."</p>
                                <p><strong>Example:</strong> "For example, some students may find it too tiring or even get hurt during the race."</p>
                            </PromptCard>
                            <PromptCard type="disadvantage">
                                <h5>🧘 Free Yoga Lesson — Disadvantage</h5>
                                <p><strong>Point:</strong> "A disadvantage of the yoga lesson is that some students may find it boring."</p>
                                <p><strong>Reason:</strong> "Because it’s slow and quiet, so it doesn’t feel exciting compared to other sports."</p>
                                <p><strong>Example:</strong> "For example, students who like fast or team sports may not enjoy yoga very much."</p>
                            </PromptCard>
                        </PromptGrid>
                    </PromptSection>

                    <PromptSection type="accessibility">
                        <PromptSectionTitle type="accessibility">🚶 Accessibility (便利性)</PromptSectionTitle>
                        <PromptGrid>
                            <PromptCard type="accessibility">
                                <h5>🧘 Free Yoga Lesson — Most Accessible</h5>
                                <p><strong>Point:</strong> "I think the free yoga lesson is the most accessible event."</p>
                                <p><strong>Reason:</strong> "Because yoga is simple and easy for everyone. We don’t need any special skills or equipment."</p>
                                <p><strong>Example:</strong> "For example, students of all ages can join and follow the teacher’s moves indoors comfortably."</p>
                            </PromptCard>
                            <PromptCard type="accessibility">
                                <h5>🏅 Q&A Session with a Professional Athlete — Least Accessible</h5>
                                <p><strong>Point:</strong> "I think the Q&A session with a professional athlete is the least accessible one."</p>
                                <p><strong>Reason:</strong> "Because it may be hard to invite a famous athlete, and not everyone will have a chance to talk to them."</p>
                                <p><strong>Example:</strong> "For example, only a few students may be chosen to ask questions, while others just sit and listen."</p>
                            </PromptCard>
                        </PromptGrid>
                    </PromptSection>

                </SpeakingPromptsContainer>
            </Section>

            <Section>
                <h3>Note-taking skills: 'making and explaining choices' questions</h3>
                <p>When making notes for 'making and explaining choices' questions, you should include the given choices on the notecard. For questions that ask you to pick only one choice, list the three suggested talking points for your choice. You can also use your options as the headings. Look at the following example:</p>
                <NoteTakingExample>
                    <p><strong>Discussion topic:</strong> Sports Event for Community Centre</p>
                    <p><strong>Given choices:</strong> Q&A session, charity run, Spartan race, yoga lesson</p>
                    <hr />
                    <div>
                        <h5>Advantages of the first option regarding the three suggested talking points</h5>
                        <p><strong>Q&A session</strong></p>
                        <ul>
                            <li>not as active as other options, but could be inspirational</li>
                            <li>famous athlete → have a big influence on young people</li>
                            <li>younger brother impressed by Rio Olympics gold medallist who visited school → interested in diving</li>
                        </ul>
                    </div>
                     <div>
                        <h5>Advantages of the second option regarding the three suggested talking points</h5>
                        <p><strong>charity run</strong></p>
                        <ul>
                            <li>more active than the Q&A session and yoga lesson, but not as difficult as the Spartan race</li>
                            <li>will help a good cause</li>
                        </ul>
                    </div>
                     <div>
                        <h5>Advantages of the third option regarding the three suggested talking points</h5>
                        <p><strong>Spartan race</strong></p>
                        <ul>
                            <li>most fun; it is new and trendy and likely to capture students' attention</li>
                            <li>a tough event—can help students learn how to set and achieve goals</li>
                        </ul>
                    </div>
                     <div>
                        <h5>Advantages of the fourth option regarding the three suggested talking points</h5>
                        <p><strong>yoga lesson</strong></p>
                        <ul>
                            <li>good exercise for both the body and the mind</li>
                            <li>will help young people who are dealing with stress from schoolwork</li>
                        </ul>
                    </div>
                </NoteTakingExample>
            </Section>

            <Section>
                 <Exercise>
                    <Instruction><strong>D1</strong> Complete the notecard below for the Exam practice question on page 44. You can find the following words and phrases useful.</Instruction>
                    <WordGrid>
                        <WordBox>Popularity: cool, fun, exciting, interesting, trendy, engaging, active, inspirational, educational</WordBox>
                        <WordBox>Accessibility: easy/difficult, convenient, approachable, helpful, useful, safe/risky, welcoming, intimidating</WordBox>
                        <WordBox>Encouraging young people to do more exercise: to develop an interest, to raise awareness, to stay healthy, award scheme, medal, to promote, posters, leaflets</WordBox>
                    </WordGrid>
                    <Notecard>
                        <h4>Events to choose from</h4>
                        <p>• Q&A session, charity run, Spartan race, yoga lesson</p>
                        <p><strong>Option 1:</strong></p>
                        <div className="blank-space"></div>
                        <p><strong>Option 2:</strong></p>
                         <div className="blank-space"></div>
                        <p><strong>Option 3:</strong></p>
                         <div className="blank-space"></div>
                        <p><strong>Option 4:</strong></p>
                         <div className="blank-space"></div>
                    </Notecard>
                </Exercise>
            </Section>

            <Section>
                <h3>Individual Response: making and explaining choices</h3>
                <p>In the Individual Response section, you may also be asked to make and explain choices. Such questions could come in the following forms:</p>
                <ul>
                    <li><strong>Do you prefer</strong> to hike in the mountains or walk around the city?</li>
                    <li><strong>If you were a star athlete,</strong> would you choose to delay going to university so that you could have full-time training for your sport?</li>
                    <li><strong>When it comes to exercise, is it more important</strong> to challenge yourself or have fun?</li>
                    <li><strong>Is it better</strong> to be a famous athlete or enjoy sports as a hobby?</li>
                </ul>
                <p>Here's one way of responding to questions that ask you to make and explain a choice:</p>
                 <ResponseFlowChart>
                    <FlowChartStep>
                        <h4>Make a choice</h4>
                        <ul>
                            <li>I prefer ...</li>
                            <li>I think ... is a better choice.</li>
                            <li>I would choose ...</li>
                            <li>I'm in favour of ...</li>
                            <li>I'd like to ...</li>
                            <li>I would definitely ...</li>
                        </ul>
                    </FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                     <FlowChartStep>
                        <h4>Explain your choice using PRE</h4>
                        <ul>
                            <li>My reason is that ...</li>
                            <li>... because/since/as ...</li>
                            <li>I have always felt that ...</li>
                        </ul>
                    </FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep>
                        <h4>Compare with other choices</h4>
                        <ul>
                            <li>... is better than ...</li>
                            <li>It is more enjoyable/effective ...</li>
                            <li>... whereas/while ...</li>
                            <li>On one hand, ...</li>
                            <li>On the other hand, ...</li>
                        </ul>
                    </FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                     <FlowChartStep>
                        <h4>End your response</h4>
                        <ul>
                            <li>These are some reasons why ...</li>
                            <li>So, this is why ...</li>
                            <li>Given all that, I would ...</li>
                            <li>All in all ...</li>
                            <li>After weighing the pros and cons, ...</li>
                        </ul>
                    </FlowChartStep>
                </ResponseFlowChart>
                 <Exercise>
                    <Instruction><strong>D2</strong> Work in pairs. Take turns to ask each other one of the Individual Response questions from the coloured box at the top of this page. You may use the flow chart above to help you structure your response.</Instruction>
                </Exercise>
            </Section>

            <Section>
                <h3>Paper 4 Exam practice</h3>
                <p>In groups of four, complete Part A of the Exam practice on page 44. You can use the notecard to help you.</p>
                <Notecard style={{maxWidth: '600px', margin: '20px auto'}}>
                    <h4>Notecard</h4>
                    <p><strong>Most popular event</strong></p>
                    <div className="blank-space small"></div>
                     <p><strong>Most accessible event</strong></p>
                    <div className="blank-space small"></div>
                     <p><strong>Most effective event</strong></p>
                    <div className="blank-space small"></div>
                </Notecard>
                <p>Follow your teacher's instructions and complete Part B.</p>
                <br />
                <h4>Part B Individual Response</h4>
                <p>The examiner will ask you one or more questions based on Part A. You will have up to 1 minute to respond.</p>
                <IndividualResponseList>
                    <li>Do you enjoy exercising?</li>
                    <li>What exercise would you recommend to a friend who dislikes exercise?</li>
                    <li>Have you used exercise to relieve stress?</li>
                    <li>Why is it important for students to lead balanced lives that include exercise?</li>
                    <li>What advice would you give to a busy friend who would like to get more exercise?</li>
                    <li>Is physical education as important as other school subjects?</li>
                    <li>If you were a famous athlete, what would you do to promote exercise to young people?</li>
                    <li>What would make it easier for Hongkongers to exercise more in the city?</li>
                </IndividualResponseList>
            </section>
        </IdeasContainer>
    );
};

export default Unit3IdeasAndOrganization;