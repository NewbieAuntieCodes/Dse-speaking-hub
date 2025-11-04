/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BackButton, LessonTitle, NextButton, NextButtonContainer } from '../Structures/SVOContent.styles';
import { LessonList, LessonItem, LessonTitleChinese, LessonTitleEnglish } from '../Structures/StructuresContent.styles';
import { GivingSuggestionsContent } from './GivingSuggestionsContent';
import { MakingChoicesIndividualContent } from './MakingChoicesIndividualContent';
import { GivingReasonsContent } from './GivingReasonsContent';

const Container = styled.div``;

interface IndividualResponseContentProps {
    onBack: () => void;
    onReturn: () => void;
    themeColor: string;
}

type View = 'list' | 'suggestions' | 'choices' | 'reasons';

export const IndividualResponseContent: React.FC<IndividualResponseContentProps> = ({ onBack, onReturn, themeColor }) => {
    const [view, setView] = useState<View>('list');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view]);

    if (view === 'suggestions') {
        return <GivingSuggestionsContent onBack={() => setView('list')} onReturn={onReturn} themeColor={themeColor} />;
    }

    if (view === 'choices') {
        return <MakingChoicesIndividualContent onBack={() => setView('list')} onReturn={onReturn} themeColor={themeColor} />;
    }

    if (view === 'reasons') {
        return <GivingReasonsContent onBack={() => setView('list')} onReturn={onReturn} themeColor="#f39c12" />;
    }

    return (
        <Container>
            <BackButton onClick={onBack} themeColor={themeColor}>← Back to Skills Menu</BackButton>
            <LessonTitle>个人回应技巧 (Individual Response)</LessonTitle>
            <LessonList>
                <LessonItem borderColor={themeColor} onClick={() => setView('suggestions')}>
                    <LessonTitleChinese>Giving suggestions and advice</LessonTitleChinese>
                    <LessonTitleEnglish>提供建议和意见</LessonTitleEnglish>
                </LessonItem>
                <LessonItem borderColor={themeColor} onClick={() => setView('choices')}>
                    <LessonTitleChinese>Making and explaining choices</LessonTitleChinese>
                    <LessonTitleEnglish>做出和解释选择</LessonTitleEnglish>
                </LessonItem>
                <LessonItem borderColor={themeColor} onClick={() => setView('reasons')}>
                    <LessonTitleChinese>Giving reasons</LessonTitleChinese>
                    <LessonTitleEnglish>陈述理由</LessonTitleEnglish>
                </LessonItem>
            </LessonList>
            <NextButtonContainer>
                <NextButton onClick={onReturn} themeColor={themeColor}>
                    <span>Return to Skills Menu</span>
                    <span className="arrow">↩</span>
                </NextButton>
            </NextButtonContainer>
        </Container>
    );
};