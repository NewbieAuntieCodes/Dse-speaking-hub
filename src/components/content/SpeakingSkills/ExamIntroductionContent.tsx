/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import styled from 'styled-components';
import { BackButton, LessonTitle, NextButtonContainer, NextButton } from '../Structures/SVOContent.styles';

// --- Styled Components for New Design ---

const SectionTitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 50px 0 25px 0;
    padding-bottom: 15px;
    border-bottom: 1px solid #e9ecef;

    &:first-of-type {
        margin-top: 25px;
    }

    .icon {
        font-size: 1.8em;
    }

    h3 {
        font-size: 1.6em;
        font-weight: bold;
        color: #2d3748;
    }
`;

const FormatGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
`;

// --- START: Redesigned Format Card Components ---
const NewFormatCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f2f5;
`;

const CardHeader = styled.div<{ bgColor: string }>`
  background-color: ${props => props.bgColor};
  color: white;
  padding: 25px 30px;

  h4 {
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
    line-height: 1.3;
  }
`;

const CardBody = styled.div`
  padding: 25px 30px;
  flex-grow: 1;
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DetailItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  font-size: 1.05em;
  color: #4a5568;
  line-height: 1.7;

  .icon {
    color: #27ae60;
    font-size: 1.2em;
    margin-top: 5px;
    font-weight: bold;
  }
`;

const DetailText = styled.div`
  flex: 1;
`;

const DetailLabel = styled.span`
  font-weight: bold;
  color: #2c3e50;
  margin-right: 8px;
`;

const HighlightNumber = styled.span<{ color: string, bgColor: string }>`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  padding: 3px 9px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 0.95em;
  display: inline-block;
  margin: 0 2px;
  vertical-align: baseline;
`;
// --- END: Redesigned Format Card Components ---


const FocusGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
`;

const FocusCard = styled.div<{ gradient: string, borderColor: string }>`
    background: ${props => props.gradient};
    border-radius: 16px;
    padding: 25px;
    border-left: 5px solid ${props => props.borderColor};
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
`;

const FocusCardTitle = styled.h5`
    font-size: 1.2em;
    font-weight: bold;
    color: #2d3748;
    margin-bottom: 10px;
`;

const FocusCardDescription = styled.p`
    font-size: 0.95em;
    color: #566573;
    line-height: 1.6;
`;

// Styles for the "Marking Criteria" section (kept from original)
const SubTitle = styled.h3`
    font-size: 1.5em;
    font-weight: bold;
    color: #34495e;
    margin: 50px 0 25px 0;
    padding-bottom: 10px;
    border-bottom: 3px solid #f0f2f5;
`;

const MarkingGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
`;

const MarkingCard = styled.div<{ themeColor: string }>`
    background: white;
    border-radius: 15px;
    padding: 25px;
    border: 1px solid #e9ecef;
    border-top: 5px solid ${props => props.themeColor};
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    text-align: center;
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

// --- Data ---
const focusPointsData = [
    {
        title: '表达能力',
        description: '能否用英语流利、清晰地表达想法。',
        gradient: 'linear-gradient(135deg, #fde7f0 0%, #ffffff 100%)',
        borderColor: '#f48fb1'
    },
    {
        title: '互动能力',
        description: '是否能回应同学意见，推动讨论。',
        gradient: 'linear-gradient(135deg, #e9f5fe 0%, #ffffff 100%)',
        borderColor: '#90caf9'
    },
    {
        title: '组织能力',
        description: '回答是否有逻辑，结构清楚。',
        gradient: 'linear-gradient(135deg, #e9f5fe 0%, #ffffff 100%)',
        borderColor: '#90caf9'
    },
    {
        title: '语言准确性',
        description: '语法、词汇是否恰当。',
        gradient: 'linear-gradient(135deg, #e9f5fe 0%, #ffffff 100%)',
        borderColor: '#90caf9'
    },
    {
        title: '发音与表达',
        description: '语音、语调是否自然，容易理解。',
        gradient: 'linear-gradient(135deg, #fde7f0 0%, #ffffff 100%)',
        borderColor: '#f48fb1'
    }
];

// --- Component ---
interface ExamIntroductionContentProps {
    onBack: () => void;
    onNext: () => void;
    themeColor: string;
}

export const ExamIntroductionContent: React.FC<ExamIntroductionContentProps> = ({ onBack, onNext, themeColor }) => {
    const partAColor = '#5D6DD4';
    const partBColor = '#F86177';

    return (
        <div>
            <BackButton onClick={onBack} themeColor={themeColor}>← Back to Skills Menu</BackButton>
            <LessonTitle>📖 DSE 英语口语考试简介</LessonTitle>
            
            <SectionTitleContainer>
                <span className="icon" role="img" aria-label="clipboard">📝</span>
                <h3>考试形式</h3>
            </SectionTitleContainer>
            <p style={{color: '#4a5568', marginTop: '-15px', marginBottom: '25px', lineHeight: '1.6'}}>香港中学文凭考试（DSE）英语口语部分分为两部分：</p>
            <FormatGrid>
                <NewFormatCard>
                    <CardHeader bgColor={partAColor}>
                        <h4>Part A: 小组讨论 (Group Interaction)</h4>
                    </CardHeader>
                    <CardBody>
                        <DetailList>
                            <DetailItem>
                                <span className="icon">✓</span>
                                <DetailText>
                                    <DetailLabel>形式:</DetailLabel>
                                    一般 <HighlightNumber color={partAColor} bgColor="#EAEFFE">4</HighlightNumber> 人一组
                                    (<HighlightNumber color={partAColor} bgColor="#EAEFFE">3</HighlightNumber> 人小组时间会缩短)。
                                </DetailText>
                            </DetailItem>
                            <DetailItem>
                                <span className="icon">✓</span>
                                <DetailText>
                                    <DetailLabel>内容:</DetailLabel>
                                    给定一个题目（通常与日常生活、社会问题、校园话题相关）。
                                </DetailText>
                            </DetailItem>
                             <DetailItem>
                                <span className="icon">✓</span>
                                <DetailText>
                                    <DetailLabel>准备时间:</DetailLabel>
                                    <HighlightNumber color={partAColor} bgColor="#EAEFFE">10</HighlightNumber> 分钟。
                                </DetailText>
                            </DetailItem>
                             <DetailItem>
                                <span className="icon">✓</span>
                                <DetailText>
                                    <DetailLabel>讨论时间:</DetailLabel>
                                    4 人小组 <HighlightNumber color={partAColor} bgColor="#EAEFFE">8</HighlightNumber> 分钟，3 人小组 <HighlightNumber color={partAColor} bgColor="#EAEFFE">6</HighlightNumber> 分钟。
                                </DetailText>
                            </DetailItem>
                             <DetailItem>
                                <span className="icon">✓</span>
                                <DetailText>
                                    <DetailLabel>要求:</DetailLabel>
                                    与组员互动，交换意见、回应他人、补充观点。
                                </DetailText>
                            </DetailItem>
                        </DetailList>
                    </CardBody>
                </NewFormatCard>
                
                <NewFormatCard>
                    <CardHeader bgColor={partBColor}>
                        <h4>Part B: 个人回应 (Individual Response)</h4>
                    </CardHeader>
                    <CardBody>
                        <DetailList>
                             <DetailItem>
                                <span className="icon">✓</span>
                                <DetailText>
                                    <DetailLabel>形式:</DetailLabel>
                                    讨论结束后，考官会问你 <HighlightNumber color={partBColor} bgColor="#FFF0F2">1-2</HighlightNumber> 个相关问题。
                                </DetailText>
                            </DetailItem>
                             <DetailItem>
                                <span className="icon">✓</span>
                                <DetailText>
                                    <DetailLabel>内容:</DetailLabel>
                                    需要简短清晰地表达个人观点。
                                </DetailText>
                            </DetailItem>
                             <DetailItem>
                                <span className="icon">✓</span>
                                <DetailText>
                                    <DetailLabel>回应时间:</DetailLabel>
                                    约 <HighlightNumber color={partBColor} bgColor="#FFF0F2">1</HighlightNumber> 分钟。
                                </DetailText>
                            </DetailItem>
                        </DetailList>
                    </CardBody>
                </NewFormatCard>
            </FormatGrid>

            <SectionTitleContainer>
                <span className="icon" role="img" aria-label="target">🎯</span>
                <h3>考核重点</h3>
            </SectionTitleContainer>
            <FocusGrid>
                {focusPointsData.map(point => (
                    <FocusCard key={point.title} gradient={point.gradient} borderColor={point.borderColor}>
                        <FocusCardTitle>{point.title}</FocusCardTitle>
                        <FocusCardDescription>{point.description}</FocusCardDescription>
                    </FocusCard>
                ))}
            </FocusGrid>

            <SubTitle>📊 评分标准（主要四方面）</SubTitle>
            <MarkingGrid>
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
            </MarkingGrid>

            <NextButtonContainer>
                <NextButton onClick={onNext} themeColor={themeColor}>
                    <span>Next: Group Interaction Skills</span>
                    <span className="arrow">→</span>
                </NextButton>
            </NextButtonContainer>
        </div>
    );
};