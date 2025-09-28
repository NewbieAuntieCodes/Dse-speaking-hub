/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { GlobalStyle } from '../../styles/GlobalStyle';
import { cardDataConfig } from '../../data/definitions';
import { SkillsIcon, TopicsIcon, PapersIcon } from '../../data/icons';
import { FloatingCard } from '../FloatingCard';
import { ExpandedContent } from '../ExpandedContent';
import { AppContainer, Header, CardsContainer } from './App.styles';
import { SpeakingSkillsContent } from '../content/SpeakingSkills/SpeakingSkillsContent';
import { SpeakingTopicsContent } from '../content/SpeakingTopics/SpeakingTopicsContent';
import { PastPapersContent } from '../content/PastPapers/PastPapersContent';

// --- Icon Map ---
const iconMap: { [key: string]: React.ReactNode } = {
    skills: <SkillsIcon />,
    topics: <TopicsIcon />,
    papers: <PapersIcon />,
};

// --- Augment cardData with component icons ---
const cardData = cardDataConfig.map(card => ({
    ...card,
    icon: iconMap[card.id],
}));

// --- Content Component Map ---
const contentComponents: { [key: string]: React.ReactNode } = {
    skills: <SpeakingSkillsContent />,
    topics: <SpeakingTopicsContent />,
    papers: <PastPapersContent />,
};

// --- Main App Component ---
const DseApp = () => {
    const [activeContent, setActiveContent] = useState<string | null>(null);

    const openContent = (contentId: string) => setActiveContent(contentId);
    const closeContent = () => setActiveContent(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') closeContent();
        };

        if (activeContent) {
            window.scrollTo(0, 0); // Scroll to top on content change
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeContent]);

    const activeCard = activeContent ? cardData.find(card => card.id === activeContent) : null;

    return (
        <AppContainer>
            {!activeCard ? (
                <>
                    <Header>
                        <h1>🗣️ DSE Speaking Hub</h1>
                    </Header>
                    <CardsContainer>
                        {cardData.map((card, index) => (
                            <FloatingCard
                                key={card.id}
                                id={card.id}
                                icon={card.icon}
                                title={card.title}
                                subtitle={card.subtitle}
                                color={card.color}
                                animationDelay={`-${index * 1.5}s`}
                                onClick={openContent}
                            />
                        ))}
                    </CardsContainer>
                </>
            ) : (
                <ExpandedContent
                    key={activeCard.id}
                    id={activeCard.id}
                    activeContent={activeContent}
                    onClose={closeContent}
                    color={activeCard.color}
                >
                    {contentComponents[activeCard.id]}
                </ExpandedContent>
            )}
        </AppContainer>
    );
};

// --- Encapsulating Wrapper Component for Integration ---
const DseSpeakingHubApp = () => {
    return (
        <>
            <GlobalStyle />
            <DseApp />
        </>
    );
};

export default DseSpeakingHubApp;