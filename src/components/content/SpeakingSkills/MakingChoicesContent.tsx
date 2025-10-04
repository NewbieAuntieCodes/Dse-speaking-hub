/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { NextButton, NextButtonContainer } from '../Structures/SVOContent.styles';
import {
    Container,
    BackButton,
    LessonTitle,
    Section,
    SectionHeader,
    SubHeader,
    BodyText,
    ReadingMaterialContainer,
    GeneralInstructions,
    OptionsGrid,
    OptionCard,
    OptionImagePlaceholder,
    OptionContent,
    OptionTitle,
    OptionDescription,
    TaskContainer,
    TaskList,
    PhraseBankContainer,
    PhrasePill,
    DialogueContainer,
    DialogueGrid,
    DialogueCard,
    DialogueText,
    TipBox,
    AudioLink,
    PracticeList,
    PracticeItem,
    BlankPlaceholder,
    RevealedAnswer,
    ButtonContainer,
    CheckButton
} from './MakingChoicesContent.styles';


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

const comparisonPhrases = [
    "I'd rather... than...",
    "...is better than...",
    "...is a better choice because...",
    "I would choose... over...",
    "I prefer... to...",
    "Comparing... and..., I think..."
];

const comparisonDialogues = [
    { choice: "I'd rather do outdoor sports than go to the gym.", explanation: "You get more fresh air when you run or train outside." },
    { choice: "Going to the gym is a better choice", explanation: "because it's more convenient for people who live in crowded cities far away from parks and trails." },
    { choice: "I think exercising outdoors is better than exercising in the gym", explanation: "because trees and flowers, and changing seasons are more interesting than seeing the same things all the time." },
    { choice: "I would choose the gym over exercising outdoors", explanation: "because I don't like to be wet or cold. Going to the gym allows me to establish a regular exercise routine." }
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
    const [page, setPage] = useState<'method1' | 'method2'>('method1');
    const [showAnswers, setShowAnswers] = useState(false);

    const toggleAnswers = () => setShowAnswers(prev => !prev);

    const Method1AndPracticePage = () => (
        <>
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
            
            <NextButtonContainer>
                <NextButton onClick={() => setPage('method2')} themeColor={themeColor}>
                    <span>Next: Comparing & Contrasting Choices</span>
                    <span className="arrow">→</span>
                </NextButton>
            </NextButtonContainer>
        </>
    );

    const Method2Page = () => (
        <>
            <BackButton onClick={() => setPage('method1')} themeColor={themeColor}>← Back to Method 1 & Practice</BackButton>
            <LessonTitle>Comparing & Contrasting Choices</LessonTitle>
            
            <Section>
                <SectionHeader>选择方式 2: 对比选择 (Method 2: Comparing & Contrasting Choices)</SectionHeader>
                <BodyText>
                    When you are justifying your choice, you can compare and contrast it with the others to show that yours is the best option.
                </BodyText>

                <SubHeader>🗣️ Useful Expressions for Comparing</SubHeader>
                <PhraseBankContainer>
                    {comparisonPhrases.map(phrase => <PhrasePill key={phrase}>{phrase}</PhrasePill>)}
                </PhraseBankContainer>

                <TipBox>
                    <p><strong>Pro Tip:</strong> When comparing choices, you can also use the <strong>comparative</strong> (e.g., <i>better</i>, <i>more convenient</i>) or <strong>superlative</strong> (e.g., <i>the best</i>, <i>the most exciting</i>) form of adjectives.</p>
                </TipBox>

                <SubHeader>💬 Example Discussion</SubHeader>
                <BodyText>
                    These students are discussing their preferred way to stay fit: exercising outdoors or signing up for a gym. Look at how they compare the two options:
                </BodyText>
                <DialogueContainer>
                    <DialogueGrid>
                        {comparisonDialogues.map((dialogue, index) => (
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
        </>
    );

    return (
        <ThemeProvider theme={{ mainColor: themeColor }}>
            <Container>
                {page === 'method1' ? <Method1AndPracticePage /> : <Method2Page />}
            </Container>
        </ThemeProvider>
    );
};