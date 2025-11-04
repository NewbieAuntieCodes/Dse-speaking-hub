/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { cardDataConfig } from '../../../data/definitions';
import { TopicsIcon } from '../../../data/icons';
import { ContentHeader, ContentIcon, ContentTitle, ContentSubtitle } from '../../../styles/shared';
import { LessonList, LessonItem, LessonTitleChinese, LessonTitleEnglish } from '../Structures/StructuresContent.styles';
import { EnvironmentTopicContent } from './EnvironmentTopicContent';

const topics = [
    { id: 'school', title: 'School Life', subtitle: '校园生活' },
    { id: 'tech', title: 'Technology', subtitle: '科技' },
    { id: 'env', title: 'Environment', subtitle: '环境' },
    { id: 'health', title: 'Health & Lifestyle', subtitle: '健康与生活方式' },
    { id: 'social', title: 'Social Issues', subtitle: '社会议题' },
    { id: 'culture', title: 'Arts & Culture', subtitle: '艺术与文化' },
];

export const SpeakingTopicsContent: React.FC = () => {
    const [view, setView] = useState<'list' | 'environment'>('list');
    const themeColor = cardDataConfig.find(card => card.id === 'topics')?.color || '#50e3c2';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view]);

    const handleTopicClick = (topicId: string, title: string) => {
        if (topicId === 'env') {
            setView('environment');
        } else {
            alert(`Showing practice materials for ${title}. Interactive practice coming soon!`);
        }
    };

    if (view === 'environment') {
        return <EnvironmentTopicContent onBack={() => setView('list')} themeColor={themeColor} />;
    }

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
                    <LessonItem key={topic.id} borderColor={themeColor} onClick={() => handleTopicClick(topic.id, topic.title)}>
                        <LessonTitleChinese>{topic.title}</LessonTitleChinese>
                        <LessonTitleEnglish>{topic.subtitle}</LessonTitleEnglish>
                    </LessonItem>
                ))}
            </LessonList>
        </>
    );
};