/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { cardDataConfig } from '../../../data/definitions';
import { TopicsIcon } from '../../../data/icons';
import { ContentHeader, ContentIcon, ContentTitle, ContentSubtitle } from '../../../styles/shared';
import { LessonList, LessonItem, LessonTitleChinese, LessonTitleEnglish } from '../Structures/StructuresContent.styles';

const topics = [
    { title: 'School Life', subtitle: '校园生活' },
    { title: 'Technology', subtitle: '科技' },
    { title: 'Environment', subtitle: '环境' },
    { title: 'Health & Lifestyle', subtitle: '健康与生活方式' },
    { title: 'Social Issues', subtitle: '社会议题' },
    { title: 'Arts & Culture', subtitle: '艺术与文化' },
];

export const SpeakingTopicsContent: React.FC = () => {
    const themeColor = cardDataConfig.find(card => card.id === 'topics')?.color || '#50e3c2';

    const handleTopicClick = (title: string) => {
        alert(`Showing practice materials for ${title}. Interactive practice coming soon!`);
    };

    return (
        <>
            <ContentHeader>
                <ContentIcon><TopicsIcon /></ContentIcon>
                <div>
                    <ContentTitle>DSE口语话题</ContentTitle>
                    <ContentSubtitle>Topic Exploration</ContentSubtitle>
                </div>
            </ContentHeader>
            <LessonList>
                {topics.map(topic => (
                    <LessonItem key={topic.title} borderColor={themeColor} onClick={() => handleTopicClick(topic.title)}>
                        <LessonTitleChinese>{topic.title}</LessonTitleChinese>
                        <LessonTitleEnglish>{topic.subtitle}</LessonTitleEnglish>
                    </LessonItem>
                ))}
            </LessonList>
        </>
    );
};
