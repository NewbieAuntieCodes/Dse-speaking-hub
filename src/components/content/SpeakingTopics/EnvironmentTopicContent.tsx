/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { BackButton, LessonTitle } from '../Structures/SVOContent.styles';

// --- Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components ---
const Container = styled.div`
    animation: ${fadeIn} 0.5s ease-out;
`;

const Section = styled.section`
    background: white;
    padding: 30px 40px;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.07);
    margin-top: 30px;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const SectionHeader = styled.h3`
    font-size: 1.8em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f1f3f4;
`;

const EditorialBox = styled.div`
    background: #fdfdfd;
    border: 1px solid #e1e8ed;
    padding: 35px 40px;
    margin-top: 15px;
    margin-bottom: 25px;
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.06);
    font-family: 'Georgia', serif;

    @media (max-width: 768px) {
        padding: 25px;
    }
`;

const EditorialTitle = styled.h5`
    font-size: 1.8em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid #e1e8ed;
    color: #2c3e50;
`;

const EditorialBody = styled.div`
    font-size: 1.1em;
    line-height: 1.9;
    color: #34495e;

    p {
        margin-bottom: 1.2em;
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

const BodyText = styled.p`
    color: #4a5568;
    line-height: 1.8;
    font-size: 1.05em;
    margin-bottom: 15px;
`;

const TaskList = styled.ul<{ themeColor: string }>`
    list-style-type: none;
    padding-left: 10px;
    margin-top: 20px;
    font-size: 1.05em;
    line-height: 1.8;

    li {
        margin-bottom: 12px;
        padding-left: 25px;
        position: relative;
        color: #34495e;
        &::before {
            content: '•';
            color: ${props => props.themeColor || '#50e3c2'};
            position: absolute;
            left: 0;
            font-weight: bold;
            font-size: 1.2em;
        }
    }
`;

const PracticeQuestionTitle = styled.h4`
    font-size: 1.4em;
    font-weight: bold;
    color: #34495e;
    margin-top: 40px;
    margin-bottom: 20px;
    padding-left: 15px;
    border-left: 4px solid ${props => props.color || '#50e3c2'};
`;

const PreExampleContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
`;

const PreCard = styled.div`
    background-color: #f8f9fa;
    border-radius: 12px;
    padding: 25px;
    border: 1px solid #e9ecef;
`;

const PrePart = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 15px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const PreLabel = styled.div<{ color: string }>`
    background-color: ${props => props.color};
    color: white;
    font-weight: bold;
    font-size: 1.2em;
    min-width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

const PreText = styled.p`
    font-size: 1em;
    color: #4a5568;
    line-height: 1.6;
    padding-top: 5px;
`;

// --- New Styles for Example Group Interaction ---
const TopicCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
`;

const TopicCard = styled.div`
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.06);
    border: 1px solid #e9ecef;
    overflow: hidden;
`;

const CardIcon = styled.div`
    background-color: #f8f9fa;
    text-align: center;
    padding: 20px;
    font-size: 2.5em;
`;

const CardContent = styled.div`
    padding: 20px;
`;

const CardTitle = styled.h4`
    font-size: 1.3em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 10px;
`;

const CardDescription = styled.p`
    font-size: 0.95em;
    color: #566573;
    line-height: 1.6;
`;

const DialoguePracticeContainer = styled.div`
    background-color: #f8f9fa;
    border-radius: 15px;
    padding: 30px;
    margin-top: 25px;
    border: 1px solid #e9ecef;
`;

const DialogueHeader = styled.h4`
    font-size: 1.5em;
    font-weight: bold;
    color: #34495e;
    text-align: center;
    margin-bottom: 25px;
`;

const DialogueTurn = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 18px;
    align-items: flex-start;
`;

const SpeakerLabel = styled.div`
    font-weight: bold;
    font-size: 1.1em;
    color: #2d3748;
    min-width: 25px;
`;

const DialogueContent = styled.div`
    flex-grow: 1;
    font-size: 1.05em;
    color: #4a5568;
    line-height: 1.7;
`;

const Blank = styled.span`
    display: inline-block;
    border-bottom: 1.5px solid #bdc3c7;
    min-width: 200px;
    margin: 0 4px;
`;

const RevealedAnswer = styled.div`
    background-color: #fffbe6;
    border: 1px solid #ffe58f;
    color: #594b0d;
    padding: 10px 15px;
    border-radius: 8px;
    margin-top: 8px;
    font-style: italic;

    strong {
        font-weight: bold;
    }
`;

const ButtonContainer = styled.div`
    text-align: center;
    margin-top: 30px;
`;

const ActionButton = styled.button<{ themeColor: string }>`
    padding: 12px 30px;
    background-color: ${props => props.themeColor};
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);

    &:hover {
        transform: translateY(-2px);
        filter: brightness(1.1);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
`;

const AudioButton = styled.a<{ themeColor: string }>`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: ${props => props.themeColor || '#4a90e2'};
    color: white;
    padding: 10px 20px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1em;
    transition: all 0.3s ease;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin: 0 auto 25px;

    &:hover {
        transform: translateY(-2px);
        filter: brightness(1.1);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    span[role="img"] {
        font-size: 1.1em;
    }
`;


interface EnvironmentTopicContentProps {
    onBack: () => void;
    themeColor: string;
}

const practiceData = [
    {
        question: 'Ways to reduce waste production at home',
        examples: [
            { P: 'We can start by using reusable shopping bags instead of plastic ones.', R: 'This directly cuts down on single-use plastic, which is a major part of household waste.', E: 'I\'ve started keeping a few foldable bags in my backpack. Now, whenever I buy groceries, I don\'t need to take any plastic bags. It\'s a small change but it feels good.' },
            { P: 'Another good idea is to avoid buying bottled water and use a reusable water bottle.', R: 'Plastic bottles are bulky and contribute significantly to landfill. Refilling a bottle is cheaper and more environmentally friendly.', E: 'My school has water fountains. I just fill up my bottle throughout the day. I\'ve probably saved hundreds of plastic bottles from being thrown away this year alone.' }
        ]
    },
    {
        question: 'How to encourage Hongkongers to prioritize waste reduction',
        examples: [
            { P: 'The government could launch a large-scale public education campaign.', R: 'Many people are not fully aware of the severity of the waste problem or the simple steps they can take. A campaign using social media, TV, and MTR ads could be very effective in changing mindsets.', E: 'I remember the government\'s campaign about separating waste. After seeing the ads with the different colored bins everywhere, my family started sorting our trash for recycling. It shows that these campaigns can work.' },
            { P: 'I think introducing a "pay-as-you-throw" scheme for solid waste would be a powerful incentive.', R: 'If people have to pay for the amount of trash they produce, they will be financially motivated to reduce, reuse, and recycle more. It makes the cost of waste visible.', E: 'In places like Taipei, they use this system with official trash bags that you have to buy. I heard from a friend who lives there that everyone became much more conscious about recycling and composting to save money.' }
        ]
    },
    {
        question: 'Laws the government could enact to reduce waste production',
        examples: [
            { P: 'The government should expand the plastic bag levy to cover all retail shops, not just large supermarkets.', R: 'The current law has loopholes. Many smaller shops still give out plastic bags for free. A universal levy would create a consistent standard and further reduce plastic bag usage city-wide.', E: 'For example, when I buy a sandwich from a small bakery, they often give me a plastic bag for free. If they also had to charge for it, I\'d probably just put it in my own bag.' },
            { P: 'I think the government could enact a law that mandates businesses, like restaurants and cafes, to offer discounts for customers who bring their own reusable containers.', R: 'This would encourage a culture of reuse and reduce the huge amount of disposable takeaway containers and cups that are used every day. It\'s a positive reinforcement approach instead of just a penalty.', E: 'I know some coffee shops already do this voluntarily, and I always bring my own cup to get the discount. If it were a law, more places would do it, and more people would get into the habit.' }
        ]
    }
];

const podcastTopics = [
    { icon: '☀️', title: 'Renewable energy', description: "Burning fossil fuels releases harmful carbon emissions, which are largely responsible for our rising global temperatures. In Hong Kong, electricity makes up 70 per cent of the city's carbon emissions. If we're to put a stop to climate change, the development of renewable energy sources is vital." },
    { icon: '🗑️', title: 'Urban waste pollution', description: "Hong Kong's landfills are about to spill over. On average, we produce 1.53 kilogrammes of solid waste per day. We need to increase plastic recycling in the city. Some environmentalists have suggested instituting fees for waste disposal to encourage consumers to waste less." },
    { icon: '💨', title: 'Air pollution', description: "Air pollution is one of Hong Kong's most serious environmental problems. While high levels of smog are bad for everyone, they're particularly harmful to children, the elderly and those with respiratory or heart issues. Hongkongers should look towards moving to cleaner forms of transport, such as electric and hybrid vehicles, to make our air more breathable." },
    { icon: '🏞️', title: 'Conserving natural landscapes', description: "Although Hong Kong is one of the most densely populated cities in the world, three quarters of its land is actually countryside. Ranging from hills and woodlands to beaches, these natural landscapes are home to a variety of land and sea animals. Commercial and residential development need to be carefully balanced with maintaining these vibrant landscapes." }
];

const dialogueAnswers = {
    b1: "Giving a reason: scientists' projects would be interesting and students could learn more about pollution from scientists.",
    c1: "Disagreeing, giving a reason: renewable energy projects might only be interesting if explained in a simple way.",
    d1: "Disagreeing, giving a reason: natural landscape conservation is important, and everybody loves plants and animals.",
    b2: "Agreeing and expressing a further suggestion: tips to listeners on how to recycle and dispose of rubbish properly.",
    d2: "Asking for clarification: ask for an example.",
    d3: "Giving clarification: the 'pack in, pack out' principle.",
    a1: "Acknowledging opinion and asking for further information with a wh-question: how we can make the podcast more interesting.",
    c2: "Answering a wh-question: phone-in session where students can talk about their opinions on the issue."
};

export const EnvironmentTopicContent: React.FC<EnvironmentTopicContentProps> = ({ onBack, themeColor }) => {
    const [showDialogueAnswers, setShowDialogueAnswers] = useState(false);

    return (
        <Container>
            <BackButton onClick={onBack} themeColor={themeColor}>← Back to Topics</BackButton>
            <LessonTitle>Reduce, Reuse, Recycle</LessonTitle>

            {/* --- SECTION 1: Too Much Rubbish --- */}
            <Section>
                <BodyText>The following blog post was written by Ricky Leung, chairman of the Environmental Club at your school:</BodyText>
                <EditorialBox>
                    <EditorialTitle>Too much rubbish!</EditorialTitle>
                    <EditorialBody>
                        <p>If you spend your weekdays in an office and your weekends enjoying Kowloon Park, you might think of Hong Kong as a pristine city. Skyscrapers and lots of traffic, sure—but pretty rubbish-free, considering our high population.</p>
                        <p>Unfortunately, this is false. A survey reported that Hongkongers produced 5.8 million tonnes of solid waste in 2018. On average, each Hongkonger sent 1.53 kilogrammes of solid waste to landfill every day. This is the highest rubbish disposal rate per person in our city's recorded history.</p>
                        <p>Sadly, those numbers are only likely to go up in the future. Despite schemes to curb plastic usage such as the plastic bag levy, we are still using too much plastic. This is particularly concerning as it can take up to 1,000 years for plastic to biodegrade in a landfill.</p>
                        <p>Our city may be sparkly on the surface, but we're heading for a waste disposal crisis. We need to do something fast!</p>
                    </EditorialBody>
                </EditorialBox>
                
                <BodyText>Discuss with your group how to deal with Hong Kong's waste problem. You may want to talk about:</BodyText>
                <TaskList themeColor={themeColor}>
                    <li>ways to reduce waste production at home</li>
                    <li>how to encourage Hongkongers to prioritize waste reduction</li>
                    <li>laws the government could enact to reduce waste production</li>
                    <li>anything else you think is important</li>
                </TaskList>
            </Section>

            <Section>
                <SectionHeader>Practice Time: PRE Structure</SectionHeader>
                {practiceData.map((item, index) => (
                    <div key={index}>
                        <PracticeQuestionTitle color={themeColor}>{index + 1}. {item.question}</PracticeQuestionTitle>
                        <PreExampleContainer>
                            {item.examples.map((ex, exIndex) => (
                                <PreCard key={exIndex}>
                                    <PrePart>
                                        <PreLabel color="#f39c12">P</PreLabel>
                                        <PreText>{ex.P}</PreText>
                                    </PrePart>
                                    <PrePart>
                                        <PreLabel color="#3498db">R</PreLabel>
                                        <PreText>{ex.R}</PreText>
                                    </PrePart>
                                    <PrePart>
                                        <PreLabel color="#2ecc71">E</PreLabel>
                                        <PreText>{ex.E}</PreText>
                                    </PrePart>
                                </PreCard>
                            ))}
                        </PreExampleContainer>
                    </div>
                ))}
            </Section>

            {/* --- SECTION 2: Example Group Interaction --- */}
            <Section>
                <SectionHeader>Example Group Interaction: Environmental Podcast</SectionHeader>
                <BodyText>These are four possible topics for an environmental podcast:</BodyText>
                <TopicCardGrid>
                    {podcastTopics.map(topic => (
                        <TopicCard key={topic.title}>
                            <CardIcon role="img" aria-label={topic.title}>{topic.icon}</CardIcon>
                            <CardContent>
                                <CardTitle>{topic.title}</CardTitle>
                                <CardDescription>{topic.description}</CardDescription>
                            </CardContent>
                        </TopicCard>
                    ))}
                </TopicCardGrid>

                <BodyText>Your class is hosting <strong>Go Green!</strong>, a weekly environmental podcast. Discuss with your group which topic you should choose for next week's episode. You may want to talk about:</BodyText>
                <TaskList themeColor={themeColor}>
                    <li>which is the most interesting topic</li>
                    <li>which is the least interesting topic</li>
                    <li>how you can make the podcast more appealing to students</li>
                    <li>anything else you think is important</li>
                </TaskList>

                <DialoguePracticeContainer>
                    <DialogueHeader>Group Interaction Practice</DialogueHeader>
                    <div style={{textAlign: 'center'}}>
                        <AudioButton 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); alert('Audio playback feature coming soon!'); }}
                            themeColor={themeColor}
                        >
                            <span role="img" aria-label="audio">🔈</span> Listen to suggested answers
                        </AudioButton>
                    </div>
                    
                    <DialogueTurn>
                        <SpeakerLabel>A:</SpeakerLabel>
                        <DialogueContent>... I would choose to do a podcast episode on renewable energy. Don't you think so?</DialogueContent>
                    </DialogueTurn>
                    <DialogueTurn>
                        <SpeakerLabel>B:</SpeakerLabel>
                        <DialogueContent>
                            <Blank />
                            {showDialogueAnswers && <RevealedAnswer><strong>Hint:</strong> {dialogueAnswers.b1}</RevealedAnswer>}
                            <p style={{marginTop: '10px'}}>So I'd choose urban waste pollution. We can share lots of really shocking facts that will surely make the podcast fascinating.</p>
                        </DialogueContent>
                    </DialogueTurn>
                    <DialogueTurn>
                        <SpeakerLabel>C:</SpeakerLabel>
                        <DialogueContent>
                            <Blank />
                            {showDialogueAnswers && <RevealedAnswer><strong>Hint:</strong> {dialogueAnswers.c1}</RevealedAnswer>}
                        </DialogueContent>
                    </DialogueTurn>
                    <DialogueTurn>
                        <SpeakerLabel>D:</SpeakerLabel>
                        <DialogueContent>
                            What do you think? <Blank />
                            {showDialogueAnswers && <RevealedAnswer><strong>Hint:</strong> {dialogueAnswers.d1}</RevealedAnswer>}
                        </DialogueContent>
                    </DialogueTurn>
                     <DialogueTurn>
                        <SpeakerLabel>B:</SpeakerLabel>
                        <DialogueContent>
                            <Blank />
                            {showDialogueAnswers && <RevealedAnswer><strong>Hint:</strong> {dialogueAnswers.b2}</RevealedAnswer>}
                        </DialogueContent>
                    </DialogueTurn>
                     <DialogueTurn>
                        <SpeakerLabel>D:</SpeakerLabel>
                        <DialogueContent>
                            <Blank />
                            {showDialogueAnswers && <RevealedAnswer><strong>Hint:</strong> {dialogueAnswers.d2}</RevealedAnswer>}
                        </DialogueContent>
                    </DialogueTurn>
                    <DialogueTurn>
                        <SpeakerLabel>D:</SpeakerLabel>
                        <DialogueContent>
                            Well, we can tell our listeners <Blank />
                            {showDialogueAnswers && <RevealedAnswer><strong>Hint:</strong> {dialogueAnswers.d3}</RevealedAnswer>}
                        </DialogueContent>
                    </DialogueTurn>
                    <DialogueTurn>
                        <SpeakerLabel>A:</SpeakerLabel>
                        <DialogueContent>
                            <Blank />
                            {showDialogueAnswers && <RevealedAnswer><strong>Hint:</strong> {dialogueAnswers.a1}</RevealedAnswer>}
                        </DialogueContent>
                    </DialogueTurn>
                    <DialogueTurn>
                        <SpeakerLabel>C:</SpeakerLabel>
                        <DialogueContent>
                            <Blank />
                            {showDialogueAnswers && <RevealedAnswer><strong>Hint:</strong> {dialogueAnswers.c2}</RevealedAnswer>}
                        </DialogueContent>
                    </DialogueTurn>

                    <ButtonContainer>
                        <ActionButton themeColor={themeColor} onClick={() => setShowDialogueAnswers(!showDialogueAnswers)}>
                            {showDialogueAnswers ? 'Hide Answers' : 'Show Answers'}
                        </ActionButton>
                    </ButtonContainer>
                </DialoguePracticeContainer>
            </Section>
        </Container>
    );
};