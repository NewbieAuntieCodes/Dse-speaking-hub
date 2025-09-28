/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { BackButton, LessonTitle } from '../Structures/SVOContent.styles';
import { LessonList, LessonItem, LessonTitleChinese, LessonTitleEnglish } from '../Structures/StructuresContent.styles';
import { GroupInteractionContent } from './GroupInteractionContent';
import { IndividualResponseContent } from './IndividualResponseContent';

interface AnsweringSkillsContentProps {
    onBack: () => void;
    themeColor: string;
}

type View = 'list' | 'group' | 'individual';

export const AnsweringSkillsContent: React.FC<AnsweringSkillsContentProps> = ({ onBack, themeColor }) => {
    const [view, setView] = useState<View>('list');

    if (view === 'group') {
        return <GroupInteractionContent onBack={() => setView('list')} themeColor={themeColor} />;
    }

    if (view === 'individual') {
        return <IndividualResponseContent onBack={() => setView('list')} themeColor={themeColor} />;
    }

    return (
        <>
            <BackButton onClick={onBack} themeColor={themeColor}>← Back to Skills Menu</BackButton>
            <LessonTitle>🤝 DSE 回答技巧</LessonTitle>
            <LessonList>
                <LessonItem borderColor={themeColor} onClick={() => setView('group')}>
                    <LessonTitleChinese>小组讨论技巧</LessonTitleChinese>
                    <LessonTitleEnglish>Group Interaction Skills</LessonTitleEnglish>
                </LessonItem>
                <LessonItem borderColor={themeColor} onClick={() => setView('individual')}>
                    <LessonTitleChinese>个人回应技巧</LessonTitleChinese>
                    <LessonTitleEnglish>Individual Response Skills</LessonTitleEnglish>
                </LessonItem>
            </LessonList>
        </>
    );
};
