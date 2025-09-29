/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import styled from 'styled-components';
import { cardDataConfig } from '../../../data/definitions';
import { ExamIntroductionContent } from './ExamIntroductionContent';
import { GroupInteractionContent } from './GroupInteractionContent';
import { IndividualResponseContent } from './IndividualResponseContent';

// --- New Styled Components for the Redesign ---
const SkillsPageContainer = styled.div`
    text-align: center;
    padding: 20px 0;
`;

const SkillsHeader = styled.header`
    margin-bottom: 50px;
`;

const IconWrapper = styled.div`
    font-size: 3.5em;
    margin-bottom: 15px;
`;

const MainTitle = styled.h1`
    color: #2d3748;
    font-size: 2.5em;
    font-weight: bold;
    margin-bottom: 8px;
`;

const SubTitle = styled.p`
    color: #718096;
    font-size: 1.2em;
`;

const SkillsCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
`;

const SkillCard = styled.div`
    background: #ffffff;
    border-radius: 16px;
    padding: 30px;
    text-align: left;
    box-shadow: 0 8px 25px rgba(0,0,0,0.07);
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid #f0f2f5;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 30px rgba(0,0,0,0.1);
    }
`;

const CardIcon = styled.div`
    font-size: 2.5em;
    margin-bottom: 20px;
`;

const CardTitle = styled.h3`
    font-size: 1.5em;
    font-weight: bold;
    color: #2d3748;
    margin-bottom: 5px;
`;

const CardSubtitle = styled.p`
    font-size: 1em;
    color: #718096;
`;

// --- Data for the cards ---
const skillsData = [
    {
        id: 'introduction' as const,
        icon: '📋',
        title: 'DSE口语考试简介',
        subtitle: 'Exam Introduction',
    },
    {
        id: 'group' as const,
        icon: '👥',
        title: '小组讨论技巧',
        subtitle: 'Group Interaction Skills',
    },
    {
        id: 'individual' as const,
        icon: '🎯',
        title: '个人回应技巧',
        subtitle: 'Individual Response Skills',
    }
];

type View = 'list' | 'introduction' | 'group' | 'individual';

export const SpeakingSkillsContent: React.FC = () => {
    const [view, setView] = useState<View>('list');
    const themeColor = cardDataConfig.find(card => card.id === 'skills')?.color || '#4a90e2';

    if (view === 'introduction') {
        return <ExamIntroductionContent onBack={() => setView('list')} onNext={() => setView('group')} themeColor={themeColor} />;
    }

    if (view === 'group') {
        return <GroupInteractionContent onBack={() => setView('list')} onNext={() => setView('individual')} themeColor={themeColor} />;
    }

    if (view === 'individual') {
        return <IndividualResponseContent onBack={() => setView('list')} onReturn={() => setView('list')} themeColor={themeColor} />;
    }

    // --- New 'list' view based on the provided image ---
    return (
        <SkillsPageContainer>
            <SkillsHeader>
                <IconWrapper>💡</IconWrapper>
                <MainTitle>DSE口语技巧</MainTitle>
                <SubTitle>Skills & Strategies</SubTitle>
            </SkillsHeader>

            <SkillsCardGrid>
                {skillsData.map(skill => (
                    <SkillCard key={skill.id} onClick={() => setView(skill.id)}>
                        <CardIcon>{skill.icon}</CardIcon>
                        <div>
                            <CardTitle>{skill.title}</CardTitle>
                            <CardSubtitle>{skill.subtitle}</CardSubtitle>
                        </div>
                    </SkillCard>
                ))}
            </SkillsCardGrid>
        </SkillsPageContainer>
    );
};