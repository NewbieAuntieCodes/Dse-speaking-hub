/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { cardDataConfig } from '../../../data/definitions';
import { SkillsIcon } from '../../../data/icons';
import { ContentHeader, ContentIcon, ContentTitle, ContentSubtitle } from '../../../styles/shared';
import { LessonList, LessonItem, LessonTitleChinese, LessonTitleEnglish } from '../Structures/StructuresContent.styles';
import { ExamIntroductionContent } from './ExamIntroductionContent';
import { AnsweringSkillsContent } from './AnsweringSkillsContent';

type View = 'list' | 'introduction' | 'answering';

export const SpeakingSkillsContent: React.FC = () => {
    const [view, setView] = useState<View>('list');
    const themeColor = cardDataConfig.find(card => card.id === 'skills')?.color || '#4a90e2';

    if (view === 'introduction') {
        return <ExamIntroductionContent onBack={() => setView('list')} themeColor={themeColor} />;
    }

    if (view === 'answering') {
        return <AnsweringSkillsContent onBack={() => setView('list')} themeColor={themeColor} />;
    }

    return (
        <>
            <ContentHeader>
                <ContentIcon><SkillsIcon /></ContentIcon>
                <div>
                    <ContentTitle>DSE口语技巧</ContentTitle>
                    <ContentSubtitle>Skills & Strategies</ContentSubtitle>
                </div>
            </ContentHeader>
            <LessonList>
                <LessonItem borderColor={themeColor} onClick={() => setView('introduction')}>
                    <LessonTitleChinese>DSE口语考试简介</LessonTitleChinese>
                    <LessonTitleEnglish>Exam Introduction</LessonTitleEnglish>
                </LessonItem>
                <LessonItem borderColor={themeColor} onClick={() => setView('answering')}>
                    <LessonTitleChinese>DSE口语回答技巧</LessonTitleChinese>
                    <LessonTitleEnglish>Answering Skills</LessonTitleEnglish>
                </LessonItem>
            </LessonList>
        </>
    );
};