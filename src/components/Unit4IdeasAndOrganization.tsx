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
    AdGrid,
    AdCard,
    VisualDesignMindMap,
    CenterNode,
    MindMapBubble,
    Exercise,
    Instruction,
    NoteTakingMindMap,
    MindMapQuadrant,
    MindMapCenterLabel,
    WordBank,
    FlowChart,
    FlowChartStep,
    FlowChartArrow,
    RememberBox,
    Notecard,
    IndividualResponseList,
} from './Unit4IdeasAndOrganization.styles';

interface Unit4IdeasAndOrganizationProps {
    onBack: () => void;
}

const Unit4IdeasAndOrganization: React.FC<Unit4IdeasAndOrganizationProps> = ({ onBack }) => {
    return (
        <IdeasContainer>
            <BackButton onClick={onBack}>← Back to Unit 4</BackButton>
            <h2>Ideas and organization</h2>

            <Section>
                <h3>Responding to visual prompts</h3>
                <p>In the speaking exam, you may be asked to respond to and comment on the visual elements in an input text. Look at the Exam practice question below.</p>
                <InstructionBox>
                    <h4>GENERAL INSTRUCTIONS</h4>
                    <p>This paper consists of two parts: Part A, Group Interaction; and Part B, Individual Response. DO NOT write anything on this page.</p>
                    <h4>Part A Group Interaction</h4>
                    <p>You will be given 10 minutes to prepare. The time allowed for the group interaction is 8 minutes (or 6 minutes for a group of 3 candidates). You may make notes on the notecard provided and refer to your notes during the discussion.</p>
                </InstructionBox>
                <AdGrid>
                    <p>This advertisement for eco-volunteering holidays appeared on a website:</p>
                    <AdCard>
                        <img src="https://images.unsplash.com/photo-1574717024633-596a72aa1b47?q=80&w=200" alt="Jungle in Peru" />
                        <div>
                            <h4>Jungle conservation in Peru</h4>
                            <p>Work alongside local staff to help protect endangered animals in the Amazon, the world's largest rainforest. Tasks include checking camera traps, collecting data on wild animals and caring for injured animals at rescue centres.</p>
                        </div>
                    </AdCard>
                    <AdCard>
                        <img src="https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=200" alt="Coastline in Thailand" />
                        <div>
                            <h4>Coastline conservation in Thailand</h4>
                            <p>Enjoy beautiful views while participating in beach clean-ups, mangrove planting and bird watches. You will stay in a private room in a beachfront villa, and you can enjoy activities such as beach volleyball and windsurfing in your downtime.</p>
                        </div>
                    </AdCard>
                    <AdCard>
                        <img src="https://images.unsplash.com/photo-1549488344-cbb6c144e207?q=80&w=200" alt="Farming in Nepal" />
                        <div>
                            <h4>Sustainable farming in Nepal</h4>
                            <p>Immerse yourself in the rugged landscape of rural Nepal, where you will assist local farmers with developing environmentally friendly agriculture techniques. Learn to harvest crops and feed livestock. If you are an energetic person who loves the nature, this is the trip for you!</p>
                        </div>
                    </AdCard>
                </AdGrid>
                <p>Your class is planning to go on an eco-volunteering holiday for a class trip. Your group has been asked to discuss which holiday to choose based on the advertisement above. You may want to talk about:</p>
                <ul>
                    <li>which trip seems the most interesting</li>
                    <li>which trip would be the most helpful to the environment</li>
                    <li>negative aspects of each trip</li>
                    <li>anything else you think is important</li>
                </ul>
            </Section>

            <Section>
                 <h3>When discussing the visual and graphic elements of an input text, you may consider the following:</h3>
                <VisualDesignMindMap>
                    <MindMapBubble className="elements">
                        <h4>Elements of graphic design:</h4>
                        <ul>
                            <li>illustration, photo, image, cartoon, clip art, icon, logo, graphics</li>
                        </ul>
                    </MindMapBubble>
                    <MindMapBubble className="styles">
                        <h4>Styles:</h4>
                        <ul>
                            <li>formal/informal, youthful, mature, realistic</li>
                            <li><strong>Positive:</strong> attractive, amusing, striking, cool, elegant</li>
                            <li><strong>Negative:</strong> boring, unimaginative, uninteresting, inappropriate</li>
                        </ul>
                    </MindMapBubble>
                    <CenterNode>Discussing visual design</CenterNode>
                    <MindMapBubble className="effects">
                        <h4>Effects:</h4>
                        <ul>
                            <li>to convey/highlight/emphasize a message, to appeal to children/young people/adults</li>
                            <li><strong>Positive:</strong> to grab attention, eye-catching, to make an impact</li>
                            <li><strong>Negative:</strong> shocking, to fall flat</li>
                        </ul>
                    </MindMapBubble>
                    <MindMapBubble className="text">
                        <h4>Text:</h4>
                        <ul>
                            <li><strong>bold</strong>, <em>italics</em>, <u>underlined</u>, CAPITAL LETTERS, font style, font size, heading, slogan, body text</li>
                        </ul>
                    </MindMapBubble>
                </VisualDesignMindMap>
                 <Exercise>
                    <Instruction><strong>D1</strong> In pairs, concentrate on the first suggested talking point on page 60. Using the vocabulary above, describe and discuss the visual design of the advertisement in the Exam practice question. Try to come up with at least three comments.</Instruction>
                </Exercise>
            </Section>

            <Section>
                <h3>Note-taking skills: using mind maps</h3>
                <p>Mind maps are a visual way of brainstorming and organizing your ideas. During the speaking exam, it may be a good idea to note down your speaking points in the form of a mind map.</p>
                 <Exercise>
                    <Instruction><strong>D2</strong> Complete the mind map below for the Exam practice question on page 60. You may find the words and phrases at the bottom of the page useful.</Instruction>
                    <NoteTakingMindMap>
                        <MindMapQuadrant><p>most interesting trip</p></MindMapQuadrant>
                        <MindMapQuadrant><p>most helpful to the environment</p></MindMapQuadrant>
                        <MindMapCenterLabel>Eco-friendly volunteering holidays</MindMapCenterLabel>
                        <MindMapQuadrant><p>negative aspects of each trip</p></MindMapQuadrant>
                        <MindMapQuadrant><p>others</p></MindMapQuadrant>
                    </NoteTakingMindMap>
                    <WordBank>
                        <p><strong>most interesting:</strong> scenic, enjoyable, exciting, eye-opening, educational, fun</p>
                        <p><strong>environment:</strong> biodegradable, climate change, deforestation, eco-friendly, endangered species, global warming, green, natural resources, sustainable, waste</p>
                        <p><strong>other:</strong> affordability, cost, immunization, rewarding, risk, schedule</p>
                    </WordBank>
                </Exercise>
            </Section>

            <Section>
                <h3>Individual Response: giving reasons</h3>
                <p>During the Individual Response, you may be asked to give reasons for why certain events happen or why an action takes place. Questions of this type could come in the following forms:</p>
                <ul>
                    <li>Why do you think people recycle?</li>
                    <li>Why is it important for young people to take part in environmental campaigns?</li>
                    <li>Why do some people dislike using too many plastic bags?</li>
                    <li>Why is it difficult for the government to reduce pollution in Hong Kong?</li>
                </ul>
                <p>To answer this type of question, you need to think about the <strong>causes and influences</strong> behind the events and situations introduced in the Group Interaction question.</p>
                <FlowChart>
                    <FlowChartStep><h4>Give a short introduction</h4><p><em>I can think of several reasons why ...</em><br/><em>There are many explanations why ...</em></p></FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep><h4>Give your first reason (use PRE if appropriate)</h4><p><em>First of all, ...</em><br/><em>One explanation is that ...</em><br/><em>... because/since/as ...</em></p></FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep><h4>Add reason(s)</h4><p><em>Also, ...</em><br/><em>What's more, ...</em><br/><em>In addition, ...</em><br/><em>Another reason is that ...</em></p></FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep><h4>End your response</h4><p><em>These are some reasons why ...</em><br/><em>So, this is why ...</em></p></FlowChartStep>
                </FlowChart>
                <RememberBox>
                    <h4>Remember</h4>
                    <ul>
                        <li>During the speaking exam, you may need to improvise quickly in order to avoid an uncomfortable pause. Improvising involves acting or speaking with little or no preparation.</li>
                        <li>If you get stuck for ideas during the exam, one good strategy is to ask yourself wh-questions about the discussion topic, e.g. <em>Why? What? Where? When? Who? How (many/often/long)?</em></li>
                    </ul>
                </RememberBox>
                 <Exercise>
                    <Instruction><strong>D3</strong> Work in pairs. Take turns to ask each other one of the Individual Response questions from the coloured box at the top of this page. You may use the flow chart above to help you structure your response.</Instruction>
                </Exercise>
            </Section>

            <Section>
                <h3>Paper 4 Exam practice</h3>
                <p>In groups of four, complete Part A of the Exam practice on page 60. Use your notes on page 62 and the notecard below to help you.</p>
                <Notecard>
                    <h4>Notecard</h4>
                    <p>Which trip caught your eye?</p>
                    <div className="blank-space"></div>
                    <p>Which trip could do the most to stop climate change?</p>
                    <div className="blank-space"></div>
                    <p>Most interesting trip</p>
                    <div className="blank-space"></div>
                    <p>Most helpful to the environment</p>
                    <div className="blank-space"></div>
                    <p>Negative aspects</p>
                    <div className="blank-space"></div>
                </Notecard>
                <p>Follow your teacher's instructions and complete Part B.</p>
                <h4>Part B Individual Response</h4>
                <p>The examiner will ask you one or more questions based on Part A. You will have up to 1 minute to respond.</p>
                <IndividualResponseList>
                    <li>Would you like to go on an eco-friendly volunteering holiday?</li>
                    <li>Does your family consider the environment when they plan family trips?</li>
                    <li>What could you learn from volunteering directly with injured or ill animals?</li>
                    <li>Can eco-volunteering holidays do more harm than good?</li>
                    <li>If you were a sea turtle, how would you feel about the plastic in the sea?</li>
                    <li>What kinds of ecotourism holidays could be offered to tourists in Hong Kong?</li>
                    <li>Is it better to donate time or money to an environmental effort?</li>
                    <li>Is it ironic that tourists need to burn fossil fuels to travel to an ecotourism location?</li>
                </IndividualResponseList>
            </Section>
        </IdeasContainer>
    );
};

export default Unit4IdeasAndOrganization;