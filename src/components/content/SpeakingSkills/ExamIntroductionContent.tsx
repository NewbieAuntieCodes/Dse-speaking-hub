/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import styled from 'styled-components';
import { BackButton, LessonTitle } from '../Structures/SVOContent.styles';

// --- Styled Components ---
const SubTitle = styled.h3`
    font-size: 1.5em;
    font-weight: bold;
    color: #34495e;
    margin: 50px 0 25px 0;
    padding-bottom: 10px;
    border-bottom: 3px solid #f0f2f5;

    &:first-of-type {
        margin-top: 25px;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
`;

const InfoCard = styled.div<{ themeColor: string }>`
    background: #f8f9fa;
    border-radius: 15px;
    padding: 25px;
    border: 1px solid #e9ecef;
    border-top: 5px solid ${props => props.themeColor};
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
`;

const CardHeader = styled.h4<{ themeColor: string }>`
    font-size: 1.3em;
    color: ${props => props.themeColor};
    margin-bottom: 20px;
`;

const StyledList = styled.ul`
    list-style: none;
    padding-left: 5px;
`;

const StyledListItem = styled.li`
    color: #4a5568;
    margin-bottom: 15px;
    line-height: 1.6;
    padding-left: 25px;
    position: relative;

    &::before {
        content: '✓';
        color: #27ae60;
        font-weight: bold;
        position: absolute;
        left: 0;
        top: 2px;
    }

    strong {
        font-weight: bold;
        color: #2c3e50;
    }
`;

const MarkingCard = styled(InfoCard)`
    text-align: center;
    background: white;
`;

const MarkingIcon = styled.div`
    font-size: 2.5em;
    margin-bottom: 15px;
`;

const MarkingTitle = styled.h5`
    font-size: 1.2em;
    font-weight: bold;
    color: #2d3748;
    margin-bottom: 8px;
`;

const MarkingDescription = styled.p`
    font-size: 0.95em;
    color: #718096;
    line-height: 1.5;
`;

interface ExamIntroductionContentProps {
    onBack: () => void;
    themeColor: string;
}

export const ExamIntroductionContent: React.FC<ExamIntroductionContentProps> = ({ onBack, themeColor }) => {
    return (
        <div>
            <BackButton onClick={onBack} themeColor={themeColor}>← Back to Skills Menu</BackButton>
            <LessonTitle>📖 DSE 英语口语考试简介</LessonTitle>
            
            <SubTitle>📝 考试形式</SubTitle>
            <p style={{color: '#4a5568', marginBottom: '25px', lineHeight: '1.6'}}>香港中学文凭考试（DSE）英语口语部分分为两部分：</p>
            <GridContainer>
                <InfoCard themeColor={themeColor}>
                    <CardHeader themeColor={themeColor}>Part A：小组讨论 (Group Interaction)</CardHeader>
                    <StyledList>
                        <StyledListItem><strong>形式:</strong> 一般 4 人一组 (3人小组时间会缩短)。</StyledListItem>
                        <StyledListItem><strong>内容:</strong> 给定一个题目（通常与日常生活、社会问题、校园话题相关）。</StyledListItem>
                        <StyledListItem><strong>准备时间:</strong> 10 分钟。</StyledListItem>
                        <StyledListItem><strong>讨论时间:</strong> 4 人小组 <strong>8 分钟</strong>，3 人小组 <strong>6 分钟</strong>。</StyledListItem>
                        <StyledListItem><strong>要求:</strong> 与组员互动，交换意见、回应他人、补充观点。</StyledListItem>
                    </StyledList>
                </InfoCard>
                <InfoCard themeColor={themeColor}>
                    <CardHeader themeColor={themeColor}>Part B：个人回应 (Individual Response)</CardHeader>
                    <StyledList>
                        <StyledListItem><strong>形式:</strong> 讨论结束后，考官会问你 1–2 个相关问题。</StyledListItem>
                        <StyledListItem><strong>内容:</strong> 需要简短清晰地表达个人观点。</StyledListItem>
                        <StyledListItem><strong>回应时间:</strong> 约 <strong>1 分钟</strong>。</StyledListItem>
                    </StyledList>
                </InfoCard>
            </GridContainer>

            <SubTitle>🎯 考核重点</SubTitle>
            <StyledList>
                <StyledListItem><strong>表达能力:</strong> 能否用英语流利、清晰地表达想法。</StyledListItem>
                <StyledListItem><strong>互动能力:</strong> 是否能回应同学意见，推动讨论。</StyledListItem>
                <StyledListItem><strong>组织能力:</strong> 回答是否有逻辑，结构清楚。</StyledListItem>
                <StyledListItem><strong>语言准确性:</strong> 语法、词汇是否恰当。</StyledListItem>
                <StyledListItem><strong>发音与表达:</strong> 语音、语调是否自然，容易理解。</StyledListItem>
            </StyledList>

            <SubTitle>📊 评分标准（主要四方面）</SubTitle>
            <GridContainer style={{gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px'}}>
                <MarkingCard themeColor="#3498db">
                    <MarkingIcon>💡</MarkingIcon>
                    <MarkingTitle>内容 (Ideas & Organisation)</MarkingTitle>
                    <MarkingDescription>观点是否相关、有条理。</MarkingDescription>
                </MarkingCard>
                <MarkingCard themeColor="#2ecc71">
                    <MarkingIcon>💬</MarkingIcon>
                    <MarkingTitle>互动 (Communication & Interaction)</MarkingTitle>
                    <MarkingDescription>能否合作交流，回应他人。</MarkingDescription>
                </MarkingCard>
                 <MarkingCard themeColor="#e67e22">
                    <MarkingIcon>🗣️</MarkingIcon>
                    <MarkingTitle>语言 (Language)</MarkingTitle>
                    <MarkingDescription>词汇、语法、句型是否合适。</MarkingDescription>
                </MarkingCard>
                 <MarkingCard themeColor="#9b59b6">
                    <MarkingIcon>🎤</MarkingIcon>
                    <MarkingTitle>发音 (Pronunciation & Delivery)</MarkingTitle>
                    <MarkingDescription>是否清楚、自然、自信。</MarkingDescription>
                </MarkingCard>
            </GridContainer>
        </div>
    );
};
