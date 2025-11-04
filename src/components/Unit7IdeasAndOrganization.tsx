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
    JobGrid,
    JobCard,
    NoteCard,
    StructureDiagram,
    StructureBox,
    Arrow,
    RememberBox,
    Exercise,
    Instruction,
    WordBank,
    NotecardExercise,
    FlowChart,
    FlowChartStep,
    FlowChartArrow,
    ExamPracticeNotecard,
    IndividualResponseList,
} from './Unit7IdeasAndOrganization.styles';

interface Unit7IdeasAndOrganizationProps {
    onBack: () => void;
}

const Unit7IdeasAndOrganization: React.FC<Unit7IdeasAndOrganizationProps> = ({ onBack }) => {
    return (
        <IdeasContainer>
            <BackButton onClick={onBack}>← Back to Unit 7</BackButton>
            <h2>Ideas and organization</h2>

            <Section>
                <h3>Expanding on your ideas</h3>
                <p>To do well in the speaking exam, you need to present detailed and well-developed ideas. Look at the Exam practice question below.</p>
                <InstructionBox>
                    <h4>GENERAL INSTRUCTIONS</h4>
                    <p>This paper consists of two parts: Part A, Group Interaction; and Part B, Individual Response. Part B will immediately follow Part A. DO NOT write anything on this page.</p>
                    <h4>Part A Group Interaction</h4>
                    <p>You will be given 10 minutes to prepare. The time allowed for the group interaction is 8 minutes (or 6 minutes for a group of 3 candidates). You may make notes on the notecard provided and refer to your notes during the discussion.</p>
                </InstructionBox>
                <ArticleBox>
                    <p>This advertisement appeared on the noticeboard of your school:</p>
                    <h4>Summer Job Exchange Programme</h4>
                    <p>Immerse yourself in a foreign culture for seven weeks! Summer Job Exchange Programme recruits volunteers from all parts of the globe. Making your way to your placement country independently, you will receive accommodation and a small stipend to cover your living expenses.</p>
                    <JobGrid>
                        <JobCard>
                            <img src="https://images.unsplash.com/photo-1596700125814-72a382a57864?q=80&w=200" alt="Sheep in a field" />
                            <div>
                                <h4>Herd sheep in Scotland?</h4>
                                <p>Working with locals and other summer students, you can practise your English while learning all there is to know about sheep tending.</p>
                            </div>
                        </JobCard>
                        <JobCard>
                            <img src="https://images.unsplash.com/photo-1605281317010-fe5b1338a536?q=80&w=200" alt="Sailboat on the water" />
                            <div>
                                <h4>Set sail in Australia</h4>
                                <p>Ever dreamt about spending your summer on a boat? Join our yacht care team! Yes, you'll be scrubbing down the decks—but you'll also get to see the sunset on the open sea.</p>
                            </div>
                        </JobCard>
                        <JobCard>
                            <img src="https://images.unsplash.com/photo-1566492323456-4252a573f52b?q=80&w=200" alt="Children at a summer camp" />
                            <div>
                                <h4>Be a summer camp leader in Japan</h4>
                                <p>Love working with kids? Then this super-fun, English-language summer camp is for you.</p>
                                <p>Applicants should fill in the attached form and submit two references. Suitable candidates will be shortlisted for an interview.</p>
                                <p>Send your application to applications@studentsummerjobs.com now!</p>
                            </div>
                        </JobCard>
                    </JobGrid>
                    <p>Your friend Sam wants to apply for the Summer Job Exchange Programme. Your group has been asked to discuss whether this is a good idea. You may want to talk about:</p>
                    <ul>
                        <li>the advantages of taking part in the programme</li>
                        <li>the disadvantages of taking part in the programme</li>
                        <li>what other summer jobs he could consider</li>
                        <li>anything else you think is important</li>
                    </ul>
                </ArticleBox>
            </Section>

            <Section>
                <p>In Unit 2, you learnt how to use the PRE structure to organize your notes. You can try to develop your points based on this structure:</p>
                <StructureDiagram>
                    <StructureBox>
                        <p>① Point</p>
                        <p>② Reason</p>
                        <p>③ Experience (or observation)</p>
                    </StructureBox>
                    <Arrow>→</Arrow>
                    <StructureBox>
                        <p>additional points or alternatives?</p>
                        <p>additional reasons?</p>
                        <p>additional experiences, observations or examples?</p>
                    </StructureBox>
                </StructureDiagram>
                <p>The following is an excerpt from a notecard based on the 'Example Group Interaction' question on page 106. Look at how the student expands on his/her talking point:</p>
                <NoteCard>
                    <h4>3 better ways to gain work experience</h4>
                    <ul>
                        <li data-prefix="P">get a part-time job in Hong Kong</li>
                        <li data-prefix="R">it is good to have work experience in Hong Kong to list on your CV</li>
                        <li data-prefix="E">I work at a bubble tea shop where I meet lots of locals as well as international tourists</li>
                        <li data-prefix="+">examples of jobs: babysitting, tutor jobs, restaurant jobs, summer camp counselling and tourism jobs</li>
                    </ul>
                </NoteCard>
                <RememberBox>
                    <h4>Remember</h4>
                    <p>While it is important to develop and explain your ideas in detail, be careful not to spend too much time on a single point in your notes. <strong>Keep them as brief as possible.</strong></p>
                </RememberBox>
            </Section>

            <Section>
                 <Exercise>
                    <Instruction><strong>D1</strong> Complete the notecard below for the Exam practice question on page 108. Remember to expand on your ideas, and to make notes for both the Group Interaction and the Individual Response. You may find these words and phrases useful.</Instruction>
                    <WordBank>
                        <p><strong>advantages of summer job programme:</strong> accommodation, allowance, meaningful, to broaden one's horizons, cultural exchange, independence, cultural experiences, experience farming, sailing or a summer camp</p>
                        <p><strong>disadvantages:</strong> homesick, restricted, culture shock, safety</p>
                        <p><strong>other summer jobs:</strong> private tutor, volunteer, internship, wage, salary, labour, work hours</p>
                    </WordBank>
                    <NotecardExercise>
                        <h4><strong>Topic:</strong></h4>
                        <p>Position: against</p>
                        <p>1 advantages</p>
                        <div className="blank-space"></div>
                        <p>2 disadvantages</p>
                        <div className="blank-space"></div>
                        <p>3 other summer jobs</p>
                        <div className="blank-space"></div>
                        <p>4 other advice</p>
                        <div className="blank-space"></div>
                    </NotecardExercise>
                </Exercise>
            </Section>

            <Section>
                <h3>Individual Response: explaining processes</h3>
                <p>Some of the questions in the Individual Response may ask you to explain processes. To answer these questions, you need to explain what actions to take in a certain situation related to the Group Interaction question. The questions could come in the following forms:</p>
                <ul>
                    <li>How can you prepare for a cultural exchange programme abroad?</li>
                    <li>How can you go to gain work experience?</li>
                    <li>What would you do to spend the money you earn from a summer job?</li>
                    <li>What would you do to make the best use of your holidays?</li>
                </ul>
                <FlowChart>
                    <FlowChartStep>
                        <p>Start with a short introductory statement</p>
                        <ul>
                            <li>To prepare for a cultural exchange programme abroad, I would ...</li>
                            <li>There are a couple of things one could do to gain work experience.</li>
                            <li>I would use the money I earn from a summer job to ...</li>
                        </ul>
                    </FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep>
                        <p>Make two to three main points</p>
                         <ul>
                            <li>I would firstly ...</li>
                            <li>Another way to make good use of the holidays is to ...</li>
                            <li>A good way of gaining work experience is to ...</li>
                            <li>Finally, people should ...</li>
                        </ul>
                    </FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep>
                        <p>End your response</p>
                        <ul>
                            <li>So, these are some of the ways I would spend the money.</li>
                            <li>This is how I would make use of my holidays.</li>
                            <li>These are some of the benefits of going on a summer job programme.</li>
                        </ul>
                    </FlowChartStep>
                </FlowChart>
                <Exercise>
                    <Instruction><strong>D2</strong> Work in pairs. Take turns to ask each other one of the Individual Response questions from the top of this page. You may use the flow chart above to help you structure your response.</Instruction>
                </Exercise>
            </Section>
            
            <Section>
                <h3>Paper 4 Exam practice</h3>
                <p>In groups of four, complete Part A of the Exam practice on page 108. Use your notes on page 110 and the notecard below to help you.</p>
                <ExamPracticeNotecard>
                    <p>Advantages</p>
                    <p>Disadvantages</p>
                    <p>Other summer jobs</p>
                </ExamPracticeNotecard>
                <p>Follow your teacher's instructions and complete Part B.</p>
                <h4>Part B Individual Response</h4>
                <p>The examiner will ask you one or more questions based on Part A. You will have up to 1 minute to respond.</p>
                <IndividualResponseList>
                    <li>Have you ever had a summer job?</li>
                    <li>How can students spend their summer holidays in a meaningful way?</li>
                    <li>How can you prepare for a summer job interview?</li>
                    <li>Which country would you want to go to on a summer job exchange programme?</li>
                    <li>What are some things young people can do in their summer holidays?</li>
                    <li>Are there any advantages to not having a summer job?</li>
                    <li>What advice would you give to a homesick friend who is travelling in another country?</li>
                    <li>What is the most important thing to gain by doing a summer job?</li>
                </IndividualResponseList>
            </Section>
        </IdeasContainer>
    );
};

export default Unit7IdeasAndOrganization;