/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { BackButton as OriginalBackButton, LessonTitle as OriginalLessonTitle } from '../Structures/SVOContent.styles';

// --- Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components ---
const Container = styled.div`
    animation: ${fadeIn} 0.5s ease-out;
`;

const BackButton = styled(OriginalBackButton)`
    margin-bottom: 15px;
`;

const LessonTitle = styled(OriginalLessonTitle)`
    font-size: 2.5em;
    padding-bottom: 20px;
    margin-bottom: 30px;
    
    @media (max-width: 768px) {
        font-size: 2.0em;
    }
`;

const Section = styled.section`
    background: #ffffff;
    border-radius: 20px;
    padding: 30px 40px;
    margin-bottom: 30px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
    border: 1px solid #e9ecef;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const SectionHeader = styled.h3`
    font-size: 1.7em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
`;

const SubHeader = styled.h4`
    font-size: 1.3em;
    font-weight: bold;
    color: #34495e;
    margin-top: 25px;
    margin-bottom: 15px;
`;

// Reading Material Styles
const ReadingMaterialContainer = styled.div`
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 25px;
`;

const GeneralInstructions = styled.div`
    h4 {
        font-size: 1.2em;
        font-weight: bold;
        color: #2d3748;
        margin-bottom: 8px;
    }
    p {
        font-size: 1.05em;
        color: #4a5568;
        line-height: 1.7;
        margin-bottom: 15px;
    }
`;

const OptionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 20px 0;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

const OptionCard = styled.div`
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.06);
`;

const OptionImagePlaceholder = styled.div`
    background-color: #e9ecef;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5em;
`;

const OptionContent = styled.div`
    padding: 20px;
`;

const OptionTitle = styled.h5`
    font-size: 1.3em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 10px;
`;

const OptionDescription = styled.p`
    font-size: 1em;
    color: #4a5568;
    line-height: 1.6;
`;

const TaskContainer = styled.div`
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #dee2e6;

    p {
        font-size: 1.05em;
        color: #4a5568;
        line-height: 1.7;
        margin-bottom: 15px;
    }
`;

const TaskList = styled.ul`
    list-style-type: disc;
    padding-left: 25px;
    font-size: 1.05em;
    color: #4a5568;
    line-height: 1.8;

    li {
        margin-bottom: 12px;
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

// Phrase Bank Styles
const PhraseBankContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`;

const PhrasePill = styled.div`
    background-color: #eaf5ff;
    color: #2f54eb;
    border: 1px solid #adc6ff;
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 1em;
    font-weight: 500;
    cursor: default;
`;

// Example Dialogue Styles
const DialogueContainer = styled.div`
    background-color: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
`;

const DialogueGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
`;

const DialogueCard = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #e9ecef;
`;

const DialogueText = styled.p`
    font-size: 1.05em;
    line-height: 1.7;
    color: #34495e;

    span {
        display: block;
        margin-bottom: 8px;
    }

    .choice {
        font-weight: bold;
        color: ${props => props.theme.mainColor};
    }
    .explanation {
        color: #4a5568;
    }
`;

// Practice Exercise Styles
const PracticeList = styled.ol`
    list-style: decimal;
    padding-left: 20px;
    font-size: 1.1em;
    line-height: 2.2;
`;

const PracticeItem = styled.li`
    margin-bottom: 12px;
    color: #4a5568;
`;

const AudioLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 280px;
    margin: 10px auto 20px auto;
    padding: 12px 25px;
    gap: 12px;
    background: linear-gradient(45deg, ${props => props.theme.mainColor}, ${props => props.theme.mainColor + 'd0'});
    color: white;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.05em;
    transition: all 0.3s ease;
    border: none;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);

    &:hover {
        transform: translateY(-3px) scale(1.03);
        box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    }

    span[role="img"] {
        font-size: 1.1em;
    }
`;

const BlankPlaceholder = styled.span`
    display: inline-block;
    border-bottom: 2px solid #ced4da;
    width: 150px;
    margin: 0 5px;
    vertical-align: bottom;
`;

const RevealedAnswer = styled.span`
    background-color: #e8f5e9;
    color: #2e7d32;
    padding: 2px 8px;
    border-radius: 5px;
    font-weight: bold;
    border: 1px solid #a5d6a7;
    margin: 0 5px;
`;

const ButtonContainer = styled.div`
    text-align: center;
    margin-top: 25px;
`;

const CheckButton = styled.button<{ themeColor: string }>`
    padding: 12px 35px;
    background-color: ${props => props.themeColor};
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1.05em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);

    &:hover {
        transform: translateY(-2px);
        filter: brightness(1.1);
    }
`;

// --- Data ---
const choicePhrases = [
    "I'd like to go...", "I prefer...", "I think ... would be the best option.",
    "My choice would be...", "I would opt for...", "I'll go for...", "I think we should choose..."
];

const exampleDialogues = [
    { choice: "I'd like to go hiking", explanation: "because it's nice to be outdoors and see different kinds of trees and birds." },
    { choice: "But rock climbing is the most exciting option.", explanation: "It's perfectly safe, and you'll feel such a thrill when you reach the top of the wall." },
    { choice: "Me too. If we go hiking,", explanation: "we can catch up and chat while we're exploring the trails." },
    { choice: "I really think we should go cycling.", explanation: "We'd see so much that way, and it's very good exercise." }
];

const practiceQuestions = [
    { q: "I think rock climbing ___ be the best option.", a: ["would"] },
    { q: "I ___ cycling in the countryside.", a: ["prefer"] },
    { q: "I ___ for rock climbing.", a: ["would pick / will go / would go"] },
    { q: "___ hiking.", a: ["I'll go for"] },
    { q: "My ___ would be cycling.", a: ["choice"] },
    { q: "Rock climbing is the best option ___ it's an adventurous way to get exercise.", a: ["because"] },
    { q: "I'm in favour of hiking, ___ it lets us exercise while enjoying some scenery.", a: ["as"] },
    { q: "I prefer cycling in the countryside ___ the fresh air.", a: ["because of"] }
];

// --- Component ---
interface MakingChoicesContentProps {
    onBack: () => void;
    themeColor: string;
}

export const MakingChoicesContent: React.FC<MakingChoicesContentProps> = ({ onBack, themeColor }) => {
    const [showAnswers, setShowAnswers] = useState(false);

    const toggleAnswers = () => {
        setShowAnswers(prev => !prev);
    };

    return (
        <ThemeProvider theme={{ mainColor: themeColor }}>
            <Container>
                <BackButton onClick={onBack} themeColor={themeColor}>← Back to 5 Major Question Types</BackButton>
                <LessonTitle>Making & Explaining Choices</LessonTitle>

                <Section>
                    <SectionHeader>选择方式 1: 直接选择 (Method 1: State a Direct Choice)</SectionHeader>
                    <ReadingMaterialContainer>
                        <GeneralInstructions>
                            <h4>GENERAL INSTRUCTIONS</h4>
                            <p>This paper consists of two parts: Part A, Group Interaction; and Part B, Individual Response. DO NOT write anything on this page.</p>
                            <h4>Part A Group Interaction</h4>
                            <p>You will be given 10 minutes to prepare. The time allowed for the group interaction is 8 minutes (or 6 minutes for a group of 3 candidates). You may make notes on the notecard provided and refer to your notes during the discussion.</p>
                            <p>These are three possible options for a class activity:</p>
                        </GeneralInstructions>
                        <OptionsGrid>
                            <OptionCard>
                                <OptionImagePlaceholder role="img" aria-label="Hiking">⛰️</OptionImagePlaceholder>
                                <OptionContent>
                                    <OptionTitle>Hiking</OptionTitle>
                                    <OptionDescription>Lace up your hiking shoes and hike in the hills of Sai Kung. It's a nature lover's paradise and you're sure to see some beautiful scenery.</OptionDescription>
                                </OptionContent>
                            </OptionCard>
                            <OptionCard>
                                <OptionImagePlaceholder role="img" aria-label="Cycling">🚲</OptionImagePlaceholder>
                                <OptionContent>
                                    <OptionTitle>Cycling</OptionTitle>
                                    <OptionDescription>Take to the trails on Lantau Island for some exhilarating mountain biking. Don't forget your helmet!</OptionDescription>
                                </OptionContent>
                            </OptionCard>
                            <OptionCard>
                                <OptionImagePlaceholder role="img" aria-label="Rock climbing">🧗</OptionImagePlaceholder>
                                <OptionContent>
                                    <OptionTitle>Rock climbing</OptionTitle>
                                    <OptionDescription>Aim for the top at King's Park Centenary Centre's 18-metre climbing wall. Whether you are an expert or a beginner, they've got a route that will suit you.</OptionDescription>
                                </OptionContent>
                            </OptionCard>
                        </OptionsGrid>
                        <TaskContainer>
                            <p>Your group is responsible for organizing a class activity. Discuss which of the three options above would be the best choice. You may want to talk about:</p>
                            <TaskList>
                                <li>which is the most suitable for your class</li>
                                <li>which is the most enjoyable</li>
                                <li>which is the healthiest</li>
                                <li>anything else you think is important</li>
                            </TaskList>
                        </TaskContainer>
                    </ReadingMaterialContainer>
                </Section>
                
                <Section>
                    <SectionHeader>🗣️ Indicating a choice</SectionHeader>
                    <PhraseBankContainer>
                        {choicePhrases.map(phrase => <PhrasePill key={phrase}>{phrase}</PhrasePill>)}
                    </PhraseBankContainer>
                </Section>

                <Section>
                    <SectionHeader>💬 Example Discussion</SectionHeader>
                    <SubHeader>These students are discussing the exam question on page 37. Look at how they indicate and explain their choices:</SubHeader>
                    <DialogueContainer>
                        <DialogueGrid>
                            {exampleDialogues.map((dialogue, index) => (
                                <DialogueCard key={index}>
                                    <DialogueText>
                                        <span className="choice">① {dialogue.choice}</span>
                                        <span className="explanation">② {dialogue.explanation}</span>
                                    </DialogueText>
                                </DialogueCard>
                            ))}
                        </DialogueGrid>
                    </DialogueContainer>
                </Section>
                
                <Section>
                    <SectionHeader>✍️ Practice Exercise</SectionHeader>
                    <SubHeader>Listen to the recording. Fill in the blanks with different expressions for indicating and explaining choices.</SubHeader>
                    <AudioLink 
                        href="https://players.brightcove.net/6144772950001/default_default/index.html?videoId=6268730379001" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <span role="img" aria-label="audio">🔈</span> Listen to the recording
                    </AudioLink>
                    <PracticeList>
                        {practiceQuestions.map((item, index) => {
                            const parts = item.q.split('___');
                            return (
                                <PracticeItem key={index}>
                                    {index + 1}. {parts[0]}
                                    {showAnswers ? (
                                        <RevealedAnswer>{item.a.join(' / ')}</RevealedAnswer>
                                    ) : (
                                        <BlankPlaceholder />
                                    )}
                                    {parts[1]}
                                </PracticeItem>
                            );
                        })}
                    </PracticeList>
                    <ButtonContainer>
                        <CheckButton onClick={toggleAnswers} themeColor={themeColor}>
                            {showAnswers ? 'Hide Answers' : 'Show Answers'}
                        </CheckButton>
                    </ButtonContainer>
                </Section>
            </Container>
        </ThemeProvider>
    );
};