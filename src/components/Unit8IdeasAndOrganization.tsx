/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {
    IdeasContainer,
    BackButton,
    Section,
    ResponseFlowChart,
    FlowChartStep,
    FlowChartArrow,
    RememberBox,
    Exercise,
    Instruction,
    InstructionBox,
    ArticleBox,
    DoNotTakeAway,
    Notecard,
    ExamPracticeContainer,
    Sidebar,
    MainContent,
    ExamPracticeNotecard,
    IndividualResponseList,
} from './Unit8IdeasAndOrganization.styles';

interface Unit8IdeasAndOrganizationProps {
    onBack: () => void;
}

const Unit8IdeasAndOrganization: React.FC<Unit8IdeasAndOrganizationProps> = ({ onBack }) => {
    return (
        <IdeasContainer>
            <BackButton onClick={onBack}>← Back to Unit 8</BackButton>
            <h2>Ideas and organization</h2>

            <Section>
                <h3>Individual Response: talking about personal experiences and opinions</h3>
                <p>In the Individual Response section of the exam, you may be asked to talk about your <strong>personal experiences and opinions</strong>.</p>
                <p>The questions could come in the following forms:</p>
                <ul>
                    <li><strong>Do you think</strong> discrimination against immigrants is a problem in Hong Kong?</li>
                    <li><strong>How do you feel about</strong> the number of immigrants Hong Kong accepts every year?</li>
                    <li><strong>Do you think</strong> international food fairs would help local Hongkongers and immigrants learn about each other?</li>
                    <li><strong>What programmes for immigrants would you volunteer for?</strong></li>
                </ul>
                <RememberBox>
                    <p>Remember to use the Point-Reason-Experience/Observation structure when making notes for the Group Interaction. If you are asked to talk about your personal experiences and opinions during the Individual Response, you may be able to refer to the experiences and observations you have noted down previously.</p>
                </RememberBox>
                <ResponseFlowChart>
                    <FlowChartStep>
                        <p><strong>Give a quick answer to the question</strong></p>
                        <p><strong>Yes</strong>, I <strong>do</strong> think that racial discrimination against immigrants is a problem in Hong Kong.</p>
                        <p>I <strong>don't</strong> think that Hong Kong accepts enough immigrants.</p>
                        <p><strong>It depends.</strong></p>
                        <p>I <strong>think that</strong> I would like to volunteer to read books to immigrant children at the library.</p>
                    </FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep>
                        <p><strong>Expand your answer</strong></p>
                        <p><strong>Sometimes</strong>, I think that Hong Kong is an accepting and open international city. <strong>Other times</strong>, I see things that remind me how discriminatory some Hongkongers can be.</p>
                        <p><strong>This is because I think</strong>, as a wealthy city, we should accept more people who are fleeing violent or very poor areas to come here.</p>
                        <p>International food fairs <strong>could provide a way</strong> for people to share their culture with each other.</p>
                        <p><strong>I usually like to</strong> spend time with children, so this would be a fun activity for me.</p>
                    </FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep>
                        <p><strong>End your response</strong></p>
                        <p><strong>All in all, I think</strong> we need to accept that discrimination is a big problem.</p>
                        <p><strong>Overall</strong>, I would prefer to welcome more people to become Hong Kong citizens.</p>
                        <p><strong>In other words</strong>, people could learn about each other's cultures just by eating different cuisines, but this would only gain a surface understanding.</p>
                        <p><strong>In conclusion</strong>, this type of volunteering would be good for my personal development.</p>
                    </FlowChartStep>
                </ResponseFlowChart>
                <Exercise>
                    <Instruction><strong>D1</strong> Work in pairs. Take turns to ask each other one of the Individual Response questions from the top of this page. You may use the flow chart above to help you structure your response.</Instruction>
                </Exercise>
            </Section>

            <Section>
                <h3>Exam practice</h3>
                <p>Let's apply what you have learnt from all the 'Ideas and organization' sections in this book to the real exam. Look at the Exam practice question below.</p>
                <InstructionBox>
                    <h4>GENERAL INSTRUCTIONS</h4>
                    <p>This paper consists of two parts: Part A, Group Interaction; and Part B, Individual Response. Part B will immediately follow Part A. DO NOT write anything on this page.</p>
                    <h4>Part A Group Interaction</h4>
                    <p>You will be given 10 minutes to prepare. The time allowed for the group interaction is 8 minutes (or 6 minutes for a group of 3 candidates). You may make notes on the notecard provided and refer to your notes during the discussion.</p>
                </InstructionBox>
                <ArticleBox>
                    <p>This interview was given by Dr Bill Cheung, professor of Social Sciences:</p>
                    <hr />
                    <p><strong>Professor Cheung, I understand you recently conducted research into the business and workplace culture in Hong Kong.</strong></p>
                    <p>Yes, that's right. I think it comes as no surprise to anyone that Hong Kong people are some of the most hard-working in the world. Not only do we tend to work longer hours and suffer from more work pressure than people from most developed countries, we also have fewer statutory holidays and rest days.</p>
                    <p><strong>Can you please explain that to us?</strong></p>
                    <p>Hong Kong employees are entitled to between seven and 14 days of paid leave every year, depending on their length of service. If you've worked with an employer for one year, you receive seven days; nine years or more, you receive 14 days. That's a very small number compared to most other countries. For instance, UK employees are entitled to 28 days of leave, and in France, five weeks.</p>
                    <p><strong>Do you think that the laws in Hong Kong should be changed?</strong></p>
                    <p>Absolutely. Some countries are experimenting with four-day work weeks or 30-hour work weeks. They find that their employees are just as productive as when they worked five-day or 40-hour work weeks. Hong Kong has three choices. First, immediately increase the level of required paid leave to at least 14 days. Second, the government should subsidize a pilot project to test out a four-day work week at several large companies. Third, Hong Kong could increase the number of statutory holidays from 12 to 18 in order to ensure employees receive more paid leave.</p>
                    <DoNotTakeAway>DO NOT TAKE AWAY</DoNotTakeAway>
                </ArticleBox>
                <p>Your class is discussing the topic of reducing working hours in Hong Kong. Your group has been asked to discuss the three choices suggested by Professor Cheung. You may want to talk about:</p>
                <ul>
                    <li>which option employees would prefer</li>
                    <li>which option employers would prefer</li>
                    <li>the business and workplace culture in Hong Kong</li>
                    <li>anything else you think is important</li>
                </ul>
                <Exercise>
                    <Instruction><strong>D2</strong> Complete the notecard below for the Exam practice question on page 126. Use the different skills and strategies you have learnt in the previous units. Try to</Instruction>
                    <Notecard />
                </Exercise>
            </Section>
            
            <Section>
                <h3>Paper 4 Exam practice</h3>
                <p>In groups of four, complete Part A of the Exam practice on page 126. Use your notes on page 127 and the notecard below to help you.</p>
                <ExamPracticeContainer>
                    <Sidebar>
                        <div>Which will contribute most to a good work-life balance?</div>
                        <div>Which will have the greatest long-term benefits?</div>
                        <div>Which will have least effect on productivity?</div>
                        <div>What problems might there be when employees take more time off?</div>
                        <div>Are Hongkongers workaholics?</div>
                        <div>What are the effects on people's health and social life?</div>
                    </Sidebar>
                    <MainContent>
                        <ExamPracticeNotecard>
                            <p>Employees' preference</p>
                            <p>Employers' preference</p>
                            <p>HK's business and workplace culture</p>
                        </ExamPracticeNotecard>
                    </MainContent>
                </ExamPracticeContainer>

                <p>Follow your teacher's instructions and complete Part B.</p>
                <h4>Part B Individual Response</h4>
                <p>The examiner will ask you one or more questions based on Part A. You will have up to 1 minute to respond.</p>
                <IndividualResponseList>
                    <li>Do you think Hong Kong is a good place to live in?</li>
                    <li>Do you believe in the saying 'work hard, play hard'?</li>
                    <li>Should Hong Kong increase the number of paid leave days?</li>
                    <li>What are the benefits of reducing the number of working hours for people in Hong Kong?</li>
                    <li>Why do you think people in Hong Kong work such long hours?</li>
                    <li>How should people in Hong Kong improve their work-life balance?</li>
                    <li>What can people do to reduce stress at work?</li>
                    <li>What would happen if Hong Kong companies participated in a four-day work week pilot project?</li>
                </IndividualResponseList>
            </Section>

        </IdeasContainer>
    );
};

export default Unit8IdeasAndOrganization;