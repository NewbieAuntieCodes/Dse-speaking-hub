/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { cardDataConfig } from '../../../data/definitions';
import { PapersIcon } from '../../../data/icons';
import { ContentHeader, ContentIcon, ContentTitle, ContentSubtitle } from '../../../styles/shared';
import { LessonList, LessonItem, LessonTitleChinese, LessonTitleEnglish } from '../Structures/StructuresContent.styles';

const papers = [
    { year: 'DSE 2023' },
    { year: 'DSE 2022' },
    { year: 'DSE 2021' },
    { year: 'DSE 2020' },
    { year: 'DSE 2019' },
    { year: 'DSE 2018' },
];

export const PastPapersContent: React.FC = () => {
    const themeColor = cardDataConfig.find(card => card.id === 'papers')?.color || '#9013fe';

    const handlePaperClick = (year: string) => {
        alert(`Showing past paper for ${year}. Interactive practice coming soon!`);
    };

    return (
        <>
            <ContentHeader>
                <ContentIcon><PapersIcon /></ContentIcon>
                <div>
                    <ContentTitle>DSE口语真题</ContentTitle>
                    <ContentSubtitle>Past Paper Practice</ContentSubtitle>
                </div>
            </ContentHeader>
            <LessonList>
                {papers.map(paper => (
                    <LessonItem key={paper.year} borderColor={themeColor} onClick={() => handlePaperClick(paper.year)}>
                        <LessonTitleChinese>{paper.year}</LessonTitleChinese>
                        <LessonTitleEnglish>Group Interaction & Individual Response</LessonTitleEnglish>
                    </LessonItem>
                ))}
            </LessonList>
        </>
    );
};
