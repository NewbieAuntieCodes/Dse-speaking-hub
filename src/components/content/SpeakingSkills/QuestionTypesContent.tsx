/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { BackButton, LessonTitle, NextButton, NextButtonContainer } from '../Structures/SVOContent.styles';
import { MakingSuggestionsContent } from './MakingSuggestionsContent';

// --- Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components ---
const Container = styled.div`
    animation: ${fadeIn} 0.5s ease-out;
`;

const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    margin-top: 30px;
`;

const TypeCard = styled.div<{ borderColor: string, isClickable: boolean }>`
    background-color: white;
    border-radius: 16px;
    padding: 25px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.07);
    border: 1px solid #f0f2f5;
    border-top: 5px solid ${props => props.borderColor};
    transition: all 0.3s ease;
    cursor: ${props => props.isClickable ? 'pointer' : 'default'};
    opacity: ${props => props.isClickable ? 1 : 0.6};

    &:hover {
        transform: ${props => props.isClickable ? 'translateY(-5px)' : 'none'};
        box-shadow: ${props => props.isClickable ? '0 12px 30px rgba(0,0,0,0.1)' : '0 8px 25px rgba(0,0,0,0.07)'};
    }
`;

const CardTitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
`;

const CardIcon = styled.span`
    font-size: 1.8em;
`;

const CardTitle = styled.h3`
    font-size: 1.3em;
    font-weight: bold;
    color: #2d3748;
`;

const KeywordList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const KeywordItem = styled.li`
    background-color: #f8f9fa;
    color: #4a5568;
    padding: 8px 15px;
    border-radius: 8px;
    font-size: 1em;
    border-left: 3px solid #ced4da;
    line-height: 1.5;
`;

// --- Data ---
const questionTypes = [
    {
        id: 'suggestions' as const,
        title: 'Making suggestions and giving advice',
        icon: '💡',
        borderColor: '#3498db',
        keywords: [
            'suggest', 'advise', 'propose', 'solve', 'recommend',
            'what he/she/you can do ...', 'how he/she/you can ...'
        ]
    },
    {
        id: 'choices' as const,
        title: 'Making and explaining choices',
        icon: '🤔',
        borderColor: '#2ecc71',
        keywords: [
            'choose', 'decide', 'pick',
            'which choice ...?', 'which option ...?', 'which one ...?'
        ]
    },
    {
        id: 'arguing' as const,
        title: 'Arguing for and/or against a position',
        icon: '⚖️',
        borderColor: '#e74c3c',
        keywords: [
            'argue', 'debate', 'come up with arguments',
            'for and/or against', 'whether you agree that ...', 'discuss whether ...'
        ]
    },
    {
        id: 'pros_cons' as const,
        title: 'Discussing the pros and cons of a proposal',
        icon: '🔄',
        borderColor: '#f39c12',
        keywords: [
            'what are the pros and cons ...?', 'whether is it a good idea to ...',
            'discuss the strengths and weaknesses', 'positives and negatives',
            'advantages and disadvantages', 'benefits and drawbacks'
        ]
    },
    {
        id: 'planning' as const,
        title: 'Planning and organizing',
        icon: '📅',
        borderColor: '#9b59b6',
        keywords: [
            'plan a project/magazine article ...', 'prepare a presentation ...',
            'organize a meeting/activity ...', 'how would you design/organize ...?'
        ]
    }
];

// --- Component ---
interface QuestionTypesContentProps {
    onBack: () => void;
    onNext: () => void;
    themeColor: string;
}

type View = 'list' | 'suggestions';

export const QuestionTypesContent: React.FC<QuestionTypesContentProps> = ({ onBack, onNext, themeColor }) => {
    const [view, setView] = useState<View>('list');

    const suggestionsCardData = questionTypes.find(type => type.id === 'suggestions');
    if (view === 'suggestions' && suggestionsCardData) {
        return <MakingSuggestionsContent 
            onBack={() => setView('list')} 
            themeColor={suggestionsCardData.borderColor} 
        />;
    }
    
    return (
        <Container>
            <BackButton onClick={onBack} themeColor={themeColor}>← Back to Group Interaction Skills</BackButton>
            <LessonTitle>5大题型 (5 Major Question Types)</LessonTitle>

            <ContentGrid>
                {questionTypes.map((type) => {
                    const isClickable = type.id === 'suggestions';
                    return (
                        <TypeCard 
                            key={type.title} 
                            borderColor={type.borderColor}
                            isClickable={isClickable}
                            onClick={isClickable ? () => setView('suggestions') : undefined}
                            aria-disabled={!isClickable}
                        >
                            <CardTitleContainer>
                                <CardIcon role="img" aria-label={`${type.title} icon`}>{type.icon}</CardIcon>
                                <CardTitle>{type.title}</CardTitle>
                            </CardTitleContainer>
                            <KeywordList>
                                {type.keywords.map(keyword => (
                                    <KeywordItem key={keyword}>{keyword}</KeywordItem>
                                ))}
                            </KeywordList>
                        </TypeCard>
                    );
                })}
            </ContentGrid>
            <NextButtonContainer>
                <NextButton onClick={onNext} themeColor={themeColor}>
                    <span>Next: Individual Response Skills</span>
                    <span className="arrow">→</span>
                </NextButton>
            </NextButtonContainer>
        </Container>
    );
};