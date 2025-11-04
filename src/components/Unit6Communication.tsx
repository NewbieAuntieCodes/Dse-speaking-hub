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
    InstructionBox,
    ArticleBox,
    TwoColumnGrid,
    OptionsGrid,
    OptionCard,
    SurveyBox,
    BarChartContainer,
    BarChart,
    BarWrapper,
    Bar,
    BarLabel,
    DialogueCompletionExercise,
    DialogueLine,
    DialogueText,
    DialogueBlank,
    DialogueAction
} from './Unit6Communication.styles';

interface Unit6CommunicationProps {
    onBack: () => void;
}

const Unit6Communication: React.FC<Unit6CommunicationProps> = ({ onBack }) => {
    return (
        <CommunicationContainer>
            <BackButton onClick={onBack}>← Back to Unit 6</BackButton>
            <h2>Communication strategies</h2>

            <Section>
                <h3>Stating the pros and cons of a proposal</h3>
                <p style={{textAlign: 'left'}}>In the exam, you may be asked to discuss the pros and cons of a proposal. This means that you should talk about both its good and bad points.</p>
                <DialogueGrid>
                    <DialogueBubble><p><strong>One clear advantage of this proposal is that</strong> we will be attracting more readers who are interested in knowing more about the latest electronic products.</p></DialogueBubble>
                    <DialogueBubble><p><strong>But one clear disadvantage is that</strong> this column is not related to any of our subjects at all. I think the school website should provide information that helps students with their schoolwork.</p></DialogueBubble>
                </DialogueGrid>
                
                <h4>Here are some more common expressions for stating the pros and cons of a proposal</h4>
                <TwoColumnGrid>
                    <Table>
                        <thead><tr><Th>Stating the pros</Th></tr></thead>
                        <tbody>
                            <tr><Td>One obvious benefit to ... is that ...</Td></tr>
                            <tr><Td>One of the strengths of this proposal is that ...</Td></tr>
                            <tr><Td>I think one of the strong points about this idea is that ...</Td></tr>
                        </tbody>
                    </Table>
                    <Table>
                        <thead><tr><Th>Stating the cons</Th></tr></thead>
                        <tbody>
                            <tr><Td>One flaw in ... is that ...</Td></tr>
                            <tr><Td>A drawback to this idea is that ...</Td></tr>
                            <tr><Td>One of the problems with this proposal is that ...</Td></tr>
                        </tbody>
                    </Table>
                </TwoColumnGrid>

                <h4>You can also present the pros or cons of a proposal one after another.</h4>
                <TwoColumnGrid>
                     <Table>
                        <thead><tr><Th>Stating the pros</Th></tr></thead>
                        <tbody>
                            <tr><Td>One good thing is that ... Another good thing is that ...</Td></tr>
                        </tbody>
                    </Table>
                    <Table>
                        <thead><tr><Th>Stating the cons</Th></tr></thead>
                        <tbody>
                            <tr><Td>For one thing, ... For another thing, ...</Td></tr>
                        </tbody>
                    </Table>
                </TwoColumnGrid>

                <Exercise>
                    <Instruction><strong>C1</strong> You are discussing the influence of fads and trends on children and young people in Hong Kong. In pairs, take turns to state one advantage and one disadvantage for each of the proposals.</Instruction>
                    <ol>
                        <li style={{marginBottom: '10px'}}>
                            <strong>Parents should not let their children play video games.</strong><br/>
                            (advantage: prevents them from getting addicted/disadvantage: some video games are educational)
                        </li>
                        <li>
                            <strong>Students should not be allowed to bring expensive designer bags to school.</strong><br/>
                            (advantage: discourages students from wasting money/disadvantage: designer bags may be better in quality)
                        </li>
                    </ol>
                </Exercise>
                <Exercise>
                    <Instruction><strong>C2</strong> Your group has been assigned to produce this year's school yearbook. You may want to talk about the pros and cons of digital vs. printed versions based on the survey below.</Instruction>
                    <SurveyBox>
                        <h4>Below are the results of a survey conducted among students in the school on last year's yearbook:</h4>
                        <p><strong>Were you happy with last year's digital yearbook?</strong></p>
                        <p>41% yes &nbsp;&nbsp;&nbsp; 59% no</p>
                        <p><strong>Students' comments on last year's digital yearbook:</strong></p>
                        <ul>
                            <li>interesting and well-written articles, but not enough photos of school clubs and activities</li>
                            <li>doesn't act as a long-term keepsake—will it be possible to share it with your kids or grandkids in the years to come?</li>
                        </ul>
                        <p><strong>Would you like an electronic or printed version of this year's yearbook?</strong></p>
                        <p>40% digital &nbsp;&nbsp;&nbsp; 43% printed &nbsp;&nbsp;&nbsp; 17% don't mind either</p>
                    </SurveyBox>
                    <p style={{textAlign: 'left', fontWeight: 'bold'}}>Discussion Points:</p>
                    <ul>
                        <li>the advantages and disadvantages of a digital yearbook</li>
                        <li>the advantages and disadvantages of a printed yearbook</li>
                        <li>what you will include in the yearbook</li>
                        <li>anything else you think is important</li>
                    </ul>
                </Exercise>
            </Section>

            <Section>
                <h3>Comparing the pros and cons of a proposal</h3>
                <p style={{textAlign: 'left'}}>When you present both the advantages and disadvantages of a proposal, you can structure your speech in a way that favours your position.</p>
                <DialogueGrid>
                    <DialogueBubble><p>① Although it's true that sustainable options like corn-based cutlery are more expensive, ② they biodegrade and are better for the environment.</p></DialogueBubble>
                    <DialogueBubble><p>① Restaurants have the freedom to pursue non-sustainable practices, ② but the government should provide incentives to encourage them to make better choices about food, takeaway boxes and utensils.</p></DialogueBubble>
                    <DialogueBubble><p>① While not everyone supports the way livestock are raised and butchered, ② the government has no right to enact new laws to enforce ethical farming practices.</p></DialogueBubble>
                     <DialogueBubble><p>① People should try to make more sustainable choices when it comes to food. ② However, sustainable food options may be too expensive for some people, and we should not judge them for not being able to afford sustainable food.</p></DialogueBubble>
                </DialogueGrid>
                <h4>Here are some more sentence structures for comparing the pros and cons of a proposal</h4>
                <p style={{textAlign: 'left', fontStyle: 'italic'}}><strong>On the one hand,</strong> ordering from food delivery services is very convenient. <strong>On the other hand,</strong> going out to eat is a more social experience.</p>
                <p style={{textAlign: 'left', fontStyle: 'italic'}}><strong>Despite the popularity of</strong> matcha drinks and desserts in coffee shops and restaurants, I think this trend will pass soon.</p>
            </Section>
            
            <Section>
                <h3>Presenting arguments by talking about conditions</h3>
                <p style={{textAlign: 'left'}}>You can make your argument more convincing by predicting what will happen if a proposal is adopted.</p>
                <DialogueGrid>
                    <DialogueBubble><p>Students will be able to get good jobs at tech companies if the school introduces coding as a subject.</p></DialogueBubble>
                    <DialogueBubble><p>If I were a teacher I would be worried about how much time it would take away from core subjects like Maths and Science to teach a new subject.</p></DialogueBubble>
                </DialogueGrid>
                <h4>Here are some more common expressions for talking about conditions:</h4>
                <p style={{textAlign: 'left', fontStyle: 'italic'}}><strong>Assuming that</strong> all students were taught computer programming, how would the school afford to hire new teachers to teach this subject?</p>
                <p style={{textAlign: 'left', fontStyle: 'italic'}}><strong>Suppose that</strong> this proposal were adopted, what would happen if the school district couldn't find enough new teachers to teach computer programming?</p>
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
                    <p style={{textAlign: 'left'}}>This article appeared in a local newspaper:</p>
                    <h4>Virtual community groups becoming popular worldwide</h4>
                    <p style={{textAlign: 'left'}}>While Facebook has been around since 2004, it is only in the last few years that 'community groups' have begun to appear.</p>
                    <p style={{textAlign: 'left'}}>Online community groups, formed either on Facebook, via a recently popular site called Nextdoor, or on community-specific hashtags on Twitter, have become very popular recently. While millennials and Generation Z increasingly live their lives online, it has become clear that they too want to feel close to their local neighbourhoods and communities. Virtual community groups allow these people to connect online in a way that feels locally grounded. They encourage young people to leave their online worlds to participate in real-world events like swapping items, community barbecues and community clean-ups.</p>
                    <p style={{textAlign: 'left'}}>We polled our readers to find out which community groups are most popular with them.</p>
                    <BarChartContainer>
                        <h4>Community group popularity:</h4>
                        <BarChart>
                            <BarWrapper><Bar height={100} color="#63b3ed">60</Bar><BarLabel>Nextdoor app</BarLabel></BarWrapper>
                            <BarWrapper><Bar height={87} color="#4299e1">52</Bar><BarLabel>Facebook group</BarLabel></BarWrapper>
                            <BarWrapper><Bar height={42} color="#90cdf4">25</Bar><BarLabel>Community hashtag</BarLabel></BarWrapper>
                            <BarWrapper><Bar height={30} color="#bce0f8">18</Bar><BarLabel>Twitter hashtag</BarLabel></BarWrapper>
                            <BarWrapper><Bar height={8} color="#ebf8ff">5</Bar><BarLabel>Others</BarLabel></BarWrapper>
                        </BarChart>
                    </BarChartContainer>
                </ArticleBox>
                <p style={{textAlign: 'left'}}>Your class is joining a local community group to become more involved in the neighbourhood. Your group is meeting to discuss which group your class should join: the Nextdoor app, a Facebook group or a Twitter hashtag. You may want to talk about:</p>
                <ul>
                    <li>the advantages and disadvantages of each group</li>
                    <li>which group you like the most</li>
                    <li>which group would be the most beneficial to your class</li>
                    <li>anything else you think is important</li>
                </ul>
                <Exercise>
                    <Instruction><strong>C7</strong> Complete the Group Interaction below in groups of four. Then role-play the dialogue.</Instruction>
                    <DialogueCompletionExercise>
                        <DialogueLine>
                            <DialogueText>
                                <p><strong>A:</strong> ... I support the idea of setting up a Facebook group. For one thing, most of our classmates already have Facebook profiles.</p>
                                <DialogueBlank>Complete the sentence...</DialogueBlank>
                            </DialogueText>
                            <DialogueAction><p>Stating another pro</p></DialogueAction>
                        </DialogueLine>
                        <DialogueLine>
                            <DialogueText>
                                <p><strong>B:</strong> I'm sorry, but I'll have to disagree here.</p>
                                <DialogueBlank>Complete the sentence...</DialogueBlank>
                            </DialogueText>
                            <DialogueAction><p>Stating a con</p></DialogueAction>
                        </DialogueLine>
                        <DialogueLine>
                            <DialogueText>
                                <p><strong>C:</strong> I completely agree with you. Also, one drawback to using Facebook is that there is very little privacy.</p>
                                <p>Won't you?</p>
                                <DialogueBlank>Complete the sentence...</DialogueBlank>
                            </DialogueText>
                            <DialogueAction><p>Supporting your argument with a condition</p></DialogueAction>
                        </DialogueLine>
                        <DialogueLine>
                            <DialogueText>
                                <p><strong>D:</strong> I'm not sure about that.</p>
                                <DialogueBlank>Complete the sentence...</DialogueBlank>
                                <p>Besides, we can always change our privacy settings on our Facebook account. What do you think?</p>
                            </DialogueText>
                            <DialogueAction><p>Comparing pros and cons, in favour of pro</p></DialogueAction>
                        </DialogueLine>
                    </DialogueCompletionExercise>
                </Exercise>
                 <Exercise>
                    <Instruction><strong>C8</strong> Now listen to the suggested answers.</Instruction>
                </Exercise>
            </Section>
        </CommunicationContainer>
    );
};

export default Unit6Communication;
