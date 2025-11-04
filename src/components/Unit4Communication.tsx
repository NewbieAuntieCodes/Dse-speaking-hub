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
    OptionsGrid,
    OptionCard,
    DialogueCompletionExercise,
    DialogueLine,
    TwoColumnGrid,
} from './Unit4Communication.styles';

interface Unit4CommunicationProps {
    onBack: () => void;
}

const Unit4Communication: React.FC<Unit4CommunicationProps> = ({ onBack }) => {
    return (
        <CommunicationContainer>
            <BackButton onClick={onBack}>← Back to Unit 4</BackButton>
            <h2>Communication strategies</h2>

            <Section>
                <h3>Agreeing and disagreeing</h3>
                <p>During the exam, you should show that you have listened to and evaluated what your group members have said. One way of doing so is to <strong>agree or disagree with others' opinions</strong>. These students are discussing the problem of air pollution in Hong Kong. Look at how they support their opinions with a reason.</p>
                <DialogueGrid>
                    <DialogueBubble>
                        <p><strong>Agreeing/Disagreeing:</strong> I think the Hong Kong government should do more to address the problem of air pollution.</p>
                    </DialogueBubble>
                    <DialogueBubble>
                        <p><strong>Giving Reasons:</strong> In order to improve air quality, the government should encourage people to switch to electric vehicles by offering them subsidies. This will discourage people from buying petrol vehicles by implementing heavy taxes on petrol.</p>
                    </DialogueBubble>
                    <DialogueBubble>
                        <p>① I agree. ② Bad air quality is a serious health risk for everyone living in Hong Kong.</p>
                    </DialogueBubble>
                    <DialogueBubble>
                        <p>① I don't think that's a good idea. ② Even with government subsidies, electric vehicles can still be too expensive for many people. Also, there are not enough electric charging stations in the city so this idea may not be practical.</p>
                    </DialogueBubble>
                </DialogueGrid>
                <p>Here are some more common expressions for agreeing and disagreeing:</p>
                <TwoColumnGrid>
                    <Table>
                        <thead><tr><Th>Strong agreement</Th></tr></thead>
                        <tbody>
                            <tr><Td>I agree with you.</Td></tr>
                            <tr><Td>This is a great idea.</Td></tr>
                            <tr><Td>Great point.</Td></tr>
                            <tr><Td>Yes, that's right.</Td></tr>
                            <tr><Td>That's true.</Td></tr>
                            <tr><Td>I like your idea.</Td></tr>
                            <tr><Td>I think so too.</Td></tr>
                            <tr><Td>I feel the same way.</Td></tr>
                        </tbody>
                    </Table>
                    <Table>
                        <thead><tr><Th>Strong disagreement</Th></tr></thead>
                        <tbody>
                            <tr><Td>I disagree.</Td></tr>
                            <tr><Td>I don't think so.</Td></tr>
                            <tr><Td>I don't think that's a good idea.</Td></tr>
                            <tr><Td>I'm sorry, but I disagree.</Td></tr>
                        </tbody>
                    </Table>
                    <Table>
                        <thead><tr><Th>Weak agreement</Th></tr></thead>
                        <tbody>
                            <tr><Td>I feel similarly.</Td></tr>
                            <tr><Td>I think you're mostly right.</Td></tr>
                            <tr><Td>Yes, but can I make a suggestion?</Td></tr>
                        </tbody>
                    </Table>
                    <Table>
                        <thead><tr><Th>Weak disagreement</Th></tr></thead>
                        <tbody>
                            <tr><Td>I'm not sure about that.</Td></tr>
                            <tr><Td>I'm not sure whether that's right.</Td></tr>
                            <tr><Td>Yes, but ...</Td></tr>
                            <tr><Td>I see your point, but ...</Td></tr>
                            <tr><Td>I understand, but ...</Td></tr>
                            <tr><Td>I think you're right about ..., but ...</Td></tr>
                        </tbody>
                    </Table>
                </TwoColumnGrid>
                <Exercise>
                    <Instruction><strong>C2</strong> Work in groups of four. Follow these instructions:</Instruction>
                    <ul>
                        <li>Cut out the activity cards from page A13 in the 'Speaking resource bank'.</li>
                        <li>Shuffle them and place them face down on your desk.</li>
                        <li>Discuss the question below. Draw a card from the pile before it is your turn to speak.</li>
                        <li>Depending on the card you draw, you may need to agree or disagree with the point made by the previous speaker.</li>
                    </ul>
                    <ArticleBox>
                        <h4>Too much rubbish!</h4>
                        <p>The following blog post was written by Ricky Leung, chairman of the Environmental Club at your school:</p>
                        <p>If you spend your weekdays in an office and your weekends enjoying Kowloon Park, you might think of Hong Kong as a pristine city. Skyscrapers and lots of traffic, sure—but pretty rubbish-free, considering our high population.</p>
                        <p>Unfortunately, this is false. A survey reported that Hongkongers produced 5.8 million tonnes of solid waste in 2018. On average, each Hongkonger sent 1.53 kilogrammes of solid waste to landfill every day. This is the highest rubbish disposal rate per person in our city's recorded history.</p>
                        <p>Sadly, those numbers are only likely to go up in the future. Despite schemes to curb plastic usage such as the plastic bag levy, we are still using too much plastic. This is particularly concerning as it can take up to 1,000 years for plastic to biodegrade in a landfill.</p>
                        <p>Our city may be sparkly on the surface, but we're heading for a waste disposal crisis. We need to do something fast!</p>
                    </ArticleBox>
                    <p>Discuss with your group how to deal with Hong Kong's waste problem. You may want to talk about:</p>
                    <ul>
                        <li>ways to reduce waste production at home</li>
                        <li>how to encourage Hongkongers to prioritize waste reduction</li>
                        <li>laws the government could enact to reduce waste production</li>
                        <li>anything else you think is important</li>
                    </ul>
                </Exercise>
            </Section>

            <Section>
                <h3>Acknowledging others' opinions</h3>
                <p>During the Group Interaction, if you are not sure whether to agree or disagree with other students, you can <strong>acknowledge others' opinions</strong> before expressing your own. These students are discussing how to organize a beach clean-up day at Tap Mun.</p>
                <DialogueGrid>
                     <DialogueBubble>
                        <p><strong>Acknowledging other speakers' point:</strong> Our environmental club is organizing a beach clean-up day at Tap Mun. We'll need to stock up on bin bags and plastic gloves, and the school will help us organize transport. I think we should make this event mandatory for students. Everyone will learn from it and we'll clean the beach up faster.</p>
                    </DialogueBubble>
                     <DialogueBubble>
                        <p><strong>Expressing a further opinion:</strong> You have a point there. ① Students who don't usually care about the environment will see how big the problem is.</p>
                    </DialogueBubble>
                     <DialogueBubble>
                        <p>① I hear what you're saying, ② but I'm not sure if forcing students to participate is a good idea. They might resent it, and students with allergies or disabilities could feel left out.</p>
                    </DialogueBubble>
                     <DialogueBubble>
                        <p>① I see what you mean. ② I think it would be OK if the beach clean-up was optional, though. It's a day off school, so lots of students should be interested in joining us.</p>
                    </DialogueBubble>
                </DialogueGrid>
                <Exercise>
                    <Instruction><strong>C3</strong> The following suggestion was also made in the discussion above. In pairs, take turns to acknowledge what is said and express a further opinion. You may like to use the expressions in the word box.</Instruction>
                    <p><em>Let's do a documentary programme on ocean waste and the effect of plastics on the ocean. It will be informative, and it might also be a wake-up call for students who don't realize how big the problem is.</em></p>
                    <Table>
                        <tbody>
                            <tr><Td>I see your point.</Td></tr>
                            <tr><Td>I understand your point.</Td></tr>
                            <tr><Td>I take your point.</Td></tr>
                        </tbody>
                    </Table>
                </Exercise>
            </Section>

            <Section>
                <h3>Asking for further information</h3>
                <p>Follow-up questions make a discussion more interesting. In order to create more interaction, you can ask for further information based on what others have said. There are different types of questions you can ask your group members during the speaking exam.</p>
                <TwoColumnGrid>
                    <Table>
                        <thead><tr><Th>Closed questions</Th></tr></thead>
                        <tbody>
                            <tr><Td>
                                <p>answered with a yes or no</p>
                                <ul>
                                    <li>Do you recycle regularly?</li>
                                    <li>Are you a member of an environmental organization?</li>
                                    <li>Do you think it is a good idea to raise the plastic bag levy?</li>
                                    <li>Have you tried to reduce your e-waste?</li>
                                    <li>Should we also invite a guest speaker?</li>
                                </ul>
                            </Td></tr>
                        </tbody>
                    </Table>
                     <Table>
                        <thead><tr><Th>Open questions</Th></tr></thead>
                        <tbody>
                            <tr><Td>
                                <p>leave more space for opinions and further explanation</p>
                                <ul>
                                    <li>Could you tell us more about your idea of the beach clean-up?</li>
                                    <li>I wonder if you could say more about your ideas for the documentary on beach waste.</li>
                                    <li>I'd like to know more about your ideas for the beach clean-up. Could you elaborate on that for us?</li>
                                    <li>I'm really interested in your suggestions for encouraging students to participate in the beach clean-up. Could you tell us a little more?</li>
                                </ul>
                            </Td></tr>
                        </tbody>
                    </Table>
                </TwoColumnGrid>
                 <Exercise>
                    <Instruction><strong>C4</strong> You are discussing how the government can reduce pollution in Hong Kong. Your group members made the following suggestions. In pairs, ask for further information on the underlined phrases.</Instruction>
                    <ol>
                        <li>I think we should invest more into <u>renewable energy sources</u>.</li>
                        <li>Maybe the government can consider <u>reviewing the Air Quality Health Index</u>.</li>
                        <li>The government should <u>encourage people to use energy-saving light bulbs</u>.</li>
                    </ol>
                </Exercise>
            </Section>

             <Section>
                <h3>Asking for and giving clarification</h3>
                <p>It's important to ask your group members for clarification if you do not understand what they are saying. You can also be prepared to give clarification if your group members have problems understanding what you said. Here are some useful expressions for asking for and giving clarification:</p>
                <Table>
                    <thead><tr><Th>Situation</Th><Th>Asking for clarification</Th><Th>Giving clarification</Th></tr></thead>
                    <tbody>
                        <tr>
                            <td>You did not hear a statement clearly.</td>
                            <td>- I'm sorry, could you say that again?<br/>- Sorry, would you mind repeating that?</td>
                            <td>- I was saying that ...<br/>- What I said was that ...</td>
                        </tr>
                        <tr>
                            <td>A group member is speaking too softly or quickly.</td>
                            <td>- I'm sorry, could you speak up a bit?<br/>- Sorry, I can't quite follow you. Could you please slow down a bit?</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>You do not understand one of the words a group member has used.</td>
                            <td>- Could you tell us what 'ecological' means?</td>
                            <td>- It means ...<br/>- 'ecological' refers to ...</td>
                        </tr>
                        <tr>
                            <td>You would like a group member to explain his/her ideas more clearly to you.</td>
                            <td>- Could you explain that?<br/>- What do you mean by that?</td>
                            <td>- What I mean is that ...<br/>- Let me put it another way.</td>
                        </tr>
                        <tr>
                            <td>You would like a group member to give an example to clarify his/her meaning.</td>
                            <td>- Could you give us an example/some examples?<br/>- Fundraising activities such as?</td>
                            <td>- Sure, for example ...<br/>- For instance ...</td>
                        </tr>
                    </tbody>
                </Table>
            </Section>

             <Section>
                <h3>Example Group Interaction</h3>
                <p>Let's look at how the communication strategies you have learnt can be applied in the real exam.</p>
                <InstructionBox>
                    <h4>GENERAL INSTRUCTIONS</h4>
                    <p>This paper consists of two parts: Part A, Group Interaction; and Part B, Individual Response. DO NOT write anything on this page.</p>
                    <h4>Part A Group Interaction</h4>
                    <p>You will be given 10 minutes to prepare. The time allowed for the group interaction is 8 minutes (or 6 minutes for a group of 3 candidates). You may make notes on the notecard provided and refer to your notes during the discussion.</p>
                    <p>These are four possible topics for an environmental podcast:</p>
                    <OptionsGrid>
                        <OptionCard><h4>Renewable energy</h4><p>Burning fossil fuels releases a lot of carbon emissions, which are primarily responsible for our rising global temperatures. In Hong Kong, electricity makes up 67 per cent of the city's carbon emissions. In order to put a stop to climate change, the development of renewable energy sources is vital.</p></OptionCard>
                        <OptionCard><h4>Urban waste pollution</h4><p>Hong Kong's landfills are about to spill over. On average, we produce 1.53 kilogrammes of solid waste per day! We need to increase plastic recycling in the city. Environmentalists have suggested instituting fees for waste disposal to encourage consumers to waste less.</p></OptionCard>
                        <OptionCard><h4>Air pollution</h4><p>Air pollution is one of Hong Kong's most serious environmental problems. While high levels of smog are bad for everyone, they are particularly harmful to children, the elderly and those with respiratory or heart issues. Hongkongers should look towards moving to cleaner forms of transport, such as electric and hybrid vehicles, to make our air more breathable.</p></OptionCard>
                        <OptionCard><h4>Conserving natural landscapes</h4><p>Although Hong Kong is one of the most densely populated cities in the world, three quarters of its land is actually countryside. Ranging from hills and woodlands to beaches, these varied landscapes are home to a variety of land and sea animals. Commercial and residential development need to be carefully balanced with maintaining these vibrant landscapes.</p></OptionCard>
                    </OptionsGrid>
                    <p>Your class is hosting <strong>Go Green!</strong>, a weekly environmental podcast. Discuss with your group which topic you should choose for next week's episode. You may want to talk about:</p>
                     <ul>
                        <li>which is the most interesting topic</li>
                        <li>which is the least interesting topic</li>
                        <li>how you can make the podcast more appealing to students</li>
                        <li>anything else you think is important</li>
                    </ul>
                </InstructionBox>
                <Exercise>
                    <Instruction><strong>C7</strong> Complete the Group Interaction below in groups of four. Then role-play the dialogue.</Instruction>
                    <DialogueCompletionExercise>
                        <DialogueLine>
                            <div className="dialogue-text"><p><strong>A:</strong> ... I would choose to do a podcast episode on renewable energy.</p></div>
                            <div className="reason-box"><p><strong>Giving a reason:</strong> scientists' projects would be interesting and students could learn about air pollution from scientists</p></div>
                        </DialogueLine>
                         <DialogueLine>
                            <div className="dialogue-text"><p>Don't you think so?</p><p><strong>B:</strong></p></div>
                            <div className="reason-box"><p><strong>Disagreeing, giving a reason:</strong> renewable energy projects are boring for students even if explained in a simple way</p></div>
                        </DialogueLine>
                         <DialogueLine>
                            <div className="dialogue-text"><p>So I'd choose urban waste pollution. We can share lots of really shocking facts that will surely make the podcast fascinating.</p></div>
                        </DialogueLine>
                        <DialogueLine>
                            <div className="dialogue-text"><p><strong>C:</strong></p></div>
                            <div className="reason-box"><p><strong>Disagreeing, giving a reason:</strong> natural landscape conservation is important; killing animals, loves plants and animals</p></div>
                        </DialogueLine>
                        <DialogueLine>
                            <div className="dialogue-text"><p>What do you think?</p><p><strong>D:</strong></p></div>
                            <div className="reason-box"><p><strong>Agreeing and suggesting a further suggestion:</strong> tips to listeners on how to recycle and dispose of rubbish properly</p></div>
                        </DialogueLine>
                        <DialogueLine>
                            <div className="dialogue-text"><p><strong>B:</strong></p></div>
                            <div className="reason-box"><p><strong>Asking for clarification:</strong> ask for an example</p></div>
                        </DialogueLine>
                        <DialogueLine>
                            <div className="dialogue-text"><p><strong>D:</strong> Well, we can tell our listeners</p></div>
                            <div className="reason-box"><p><strong>Giving clarification:</strong> the 'pack in, pack out' principle</p></div>
                        </DialogueLine>
                         <DialogueLine>
                            <div className="dialogue-text"><p><strong>A:</strong></p></div>
                            <div className="reason-box"><p><strong>Acknowledging opinion and asking for further information with a wh-question:</strong> how we can make the podcast more interesting</p></div>
                        </DialogueLine>
                        <DialogueLine>
                            <div className="dialogue-text"><p><strong>C:</strong></p></div>
                            <div className="reason-box"><p><strong>Answering a wh-question:</strong> phone-in session where students can talk about their opinions on the issue</p></div>
                        </DialogueLine>
                    </DialogueCompletionExercise>
                </Exercise>
            </Section>
        </CommunicationContainer>
    );
};

export default Unit4Communication;