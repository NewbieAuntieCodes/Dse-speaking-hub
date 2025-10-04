/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { 
    Container, 
    BackButton,
    Section,
    SectionHeader,
    SubHeader,
    AudioLink,
    PracticeList,
    PracticeItem,
    BlankPlaceholder,
    RevealedAnswer,
    ButtonContainer,
    CheckButton,
    LessonTitle
} from './MakingChoicesContent.styles';

// --- Data ---
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
interface MakingChoicesPracticeContentProps {
    onBack: () => void;
    themeColor: string;
}

export const MakingChoicesPracticeContent: React.FC<MakingChoicesPracticeContentProps> = ({ onBack, themeColor }) => {
    const [showAnswers, setShowAnswers] = useState(false);

    const toggleAnswers = () => {
        setShowAnswers(prev => !prev);
    };

    return (
        <ThemeProvider theme={{ mainColor: themeColor }}>
            <Container>
                <BackButton onClick={onBack} themeColor={themeColor}>← Back to Making & Explaining Choices</BackButton>
                <LessonTitle>Practice Exercise</LessonTitle>

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
