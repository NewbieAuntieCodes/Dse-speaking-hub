/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { BackButton, LessonTitle, NextButton, NextButtonContainer } from '../Structures/SVOContent.styles';
import { DragAndDropExercise } from '../../practice/DragAndDropExercise';
import { RoleplayExercise } from '../../practice/RoleplayExercise';
import { NavigatorContainer, NavigatorTab } from '../../practice/RoleplayExercise.styles';
import { LessonList, LessonItem, LessonTitleChinese, LessonTitleEnglish } from '../Structures/StructuresContent.styles';
import { ConcludingTechniquesContent } from './ConcludingTechniquesContent';
import { ExampleGroupInteractionContent } from './ExampleGroupInteractionContent';
import { QuestionTypesContent } from './QuestionTypesContent';

// --- Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components ---
const Container = styled.div`
    animation: ${fadeIn} 0.5s ease-out;
`;

const SectionWrapper = styled.section`
    background: white;
    border-radius: 15px;
    padding: 30px;
    margin-top: 25px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.07);
    border: 1px solid #f0f2f5;
`;

const SectionTitle = styled.h3<{ themeColor: string }>`
    font-size: 1.6em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 3px solid ${props => props.themeColor || '#f0f2f5'};
    display: flex;
    align-items: center;
    gap: 15px;

    .icon {
        font-size: 1.2em;
    }
`;

const StepFlowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin: 30px 0;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

const StepCard = styled.div<{ themeColor: string }>`
    background-color: #f8f9fa;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    flex: 1;
    border-top: 4px solid ${props => props.themeColor};
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.08);
    }
`;

const StepNumber = styled.div<{ themeColor: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.themeColor};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-weight: bold;
    margin: 0 auto 15px;
`;

const StepTitle = styled.h4`
    font-size: 1.1em;
    color: #34495e;
    font-weight: bold;
    margin-bottom: 8px;
`;

const StepDescription = styled.p`
    font-size: 0.9em;
    color: #7f8c8d;
    line-height: 1.5;
`;

const StepArrow = styled.div`
    font-size: 2.5em;
    color: #bdc3c7;
    font-weight: bold;
    @media (max-width: 900px) {
       transform: rotate(90deg);
       margin: -10px 0;
    }
`;

const AudioIntroContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: #f8f9fa;
    padding: 15px 20px;
    border-radius: 12px;
    margin-bottom: 25px;
    color: #566573;
    line-height: 1.7;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
`;

const AudioButton = styled.a<{ themeColor: string }>`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: ${props => props.themeColor || '#4a90e2'};
    color: white;
    padding: 10px 20px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1em;
    transition: all 0.3s ease;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);

    &:hover {
        transform: translateY(-2px);
        filter: brightness(1.1);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    span[role="img"] {
        font-size: 1.1em;
    }
`;

const ExampleAnalysisContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

const ExampleBubble = styled.div`
    background-color: #f8f9fa;
    border-radius: 15px;
    padding: 25px;
    border: 1px solid #e9ecef;
`;

const ExampleHeader = styled.h5`
    font-size: 1.2em;
    font-weight: bold;
    color: #2d3748;
    margin-bottom: 20px;
`;

const ExamplePart = styled.div<{ color: string }>`
    margin-bottom: 15px;
    padding-left: 20px;
    border-left: 3px solid ${props => props.color};
    
    .part-title {
        font-weight: bold;
        color: ${props => props.color};
        display: block;
        margin-bottom: 5px;
        font-size: 0.9em;
    }

    .part-content {
        color: #566573;
        line-height: 1.6;
    }
`;

const TipBox = styled.div`
    background-color: #fffbe6;
    border-left: 5px solid #fcc419;
    padding: 20px;
    margin: 25px 0;
    border-radius: 0 8px 8px 0;
    color: #594b0d;
    line-height: 1.7;
    font-size: 1.05em;

    p {
        margin: 0;
    }

    strong {
        font-weight: bold;
    }
`;

const ExamplePrompt = styled.div<{ themeColor: string }>`
    font-size: 1.1em;
    color: #34495e;
    line-height: 1.7;
    margin-bottom: 25px;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 12px;
    border-left: 5px solid ${props => props.themeColor || '#4a90e2'};
    display: flex;
    align-items: center;
    gap: 15px;

    .icon {
        font-size: 1.6em;
        flex-shrink: 0;
    }
`;

// --- Practice Navigator Component ---
interface PracticeNavigatorProps {
    practice1: (onComplete: () => void) => React.ReactNode;
    practice2: React.ReactNode;
    themeColor: string;
}

const PracticeNavigator: React.FC<PracticeNavigatorProps> = ({ practice1, practice2, themeColor }) => {
    const [activeTab, setActiveTab] = useState<'practice1' | 'practice2'>('practice1');
    
    const handlePractice1Complete = () => {
        setActiveTab('practice2');
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <NavigatorContainer>
                <NavigatorTab 
                    isActive={activeTab === 'practice1'} 
                    onClick={() => setActiveTab('practice1')}
                    themeColor={themeColor}
                    aria-pressed={activeTab === 'practice1'}
                >
                    互动练习 1
                </NavigatorTab>
                <NavigatorTab 
                    isActive={activeTab === 'practice2'}
                    onClick={() => setActiveTab('practice2')}
                    themeColor={themeColor}
                    aria-pressed={activeTab === 'practice2'}
                >
                    互动练习 2
                </NavigatorTab>
            </NavigatorContainer>
            <>
                {activeTab === 'practice1' && practice1(handlePractice1Complete)}
                {activeTab === 'practice2' && practice2}
            </>
        </div>
    );
};

// --- Child Component for Opening Method ---
const OpeningMethodContent: React.FC<{ onBack: () => void; onNext: () => void; themeColor: string }> = ({ onBack, onNext, themeColor }) => {
    return (
        <Container>
            <BackButton onClick={onBack} themeColor={themeColor}>← Back to Group Interaction Skills</BackButton>
            <LessonTitle>黄金三步开场法 (The Golden 3-Step Opening)</LessonTitle>

            <SectionWrapper>
                <SectionTitle themeColor={themeColor}>
                    <span className="icon">🚀</span>
                    黄金三步开场法 (The Golden 3-Step Opening)
                </SectionTitle>
                <p style={{ color: '#566573', lineHeight: 1.7 }}>
                    一个好的开场白可以为你奠定良好基础，展示你的自信和沟通能力。记住这个简单的三步结构，就能轻松开始任何讨论。
                </p>
                <StepFlowContainer>
                    <StepCard themeColor={themeColor}>
                        <StepNumber themeColor={themeColor}>1</StepNumber>
                        <StepTitle>问好</StepTitle>
                        <StepDescription>Greeting</StepDescription>
                    </StepCard>
                    <StepArrow>→</StepArrow>
                     <StepCard themeColor={themeColor}>
                        <StepNumber themeColor={themeColor}>2</StepNumber>
                        <StepTitle>点明主题</StepTitle>
                        <StepDescription>State the Topic</StepDescription>
                    </StepCard>
                    <StepArrow>→</StepArrow>
                     <StepCard themeColor={themeColor}>
                        <StepNumber themeColor={themeColor}>3</StepNumber>
                        <StepTitle>邀请讨论</StepTitle>
                        <StepDescription>Invite Discussion</StepDescription>
                    </StepCard>
                </StepFlowContainer>
                <SectionTitle themeColor={themeColor} style={{ marginTop: '50px' }}>
                    <span className="icon" style={{color: '#9013fe'}}>🗣️</span>
                    范例分析 (Example Analysis)
                </SectionTitle>
                 <AudioIntroContainer>
                    <span>These students are discussing the pros and cons of attending tutorial classes. Look at how they organize their first speaking turns:</span>
                    <AudioButton 
                        href="https://players.brightcove.net/6144772950001/default_default/index.html?videoId=6268728613001" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        themeColor={themeColor}
                    >
                        <span role="img" aria-label="audio">🔈</span> Listen
                    </AudioButton>
                </AudioIntroContainer>
                <ExampleAnalysisContainer>
                    <ExampleBubble>
                        <ExampleHeader>考生 A (Student A)</ExampleHeader>
                        <ExamplePart color="#3498db">
                            <span className="part-title">① 问好 (Greeting)</span>
                            <span className="part-content">Hello, everybody. It's good to be here. Let's get started.</span>
                        </ExamplePart>
                        <ExamplePart color="#2ecc71">
                             <span className="part-title">② 点明主题 (State the Topic)</span>
                            <span className="part-content">Today, we are going to discuss the pros and cons of attending tutorial classes.</span>
                        </ExamplePart>
                        <ExamplePart color="#e67e22">
                             <span className="part-title">③ 邀请讨论 (Invite Discussion)</span>
                            <span className="part-content">What's your opinion on tutorial classes? What advantages do they provide?</span>
                        </ExamplePart>
                    </ExampleBubble>

                     <ExampleBubble>
                        <ExampleHeader>考生 B (Student B)</ExampleHeader>
                        <ExamplePart color="#3498db">
                             <span className="part-title">① 问好 (Greeting)</span>
                            <span className="part-content">Good afternoon, nice to meet you all. Let's begin our discussion.</span>
                        </ExamplePart>
                        <ExamplePart color="#2ecc71">
                             <span className="part-title">② 点明主题 (State the Topic)</span>
                            <span className="part-content">Our discussion topic today is the pros and cons of attending tutorial classes.</span>
                        </ExamplePart>
                        <ExamplePart color="#e67e22">
                             <span className="part-title">③ 邀请讨论 (Invite Discussion)</span>
                            <span className="part-content">Would anyone like to start with the advantages?</span>
                        </ExamplePart>
                    </ExampleBubble>
                </ExampleAnalysisContainer>
            </SectionWrapper>
            
            <SectionWrapper>
                <SectionTitle themeColor={themeColor}>
                    <span className="icon">🎯</span>
                    互动练习 (Interactive Practice)
                </SectionTitle>
                <p style={{ color: '#566573', lineHeight: 1.7, marginBottom: '25px', textAlign: 'center' }}>
                    现在，轮到你了！使用这些互动练习来巩固你学到的开场技巧。
                </p>
                <PracticeNavigator 
                    themeColor={themeColor}
                    practice1={(onComplete) => <DragAndDropExercise onComplete={onComplete} themeColor={themeColor} />}
                    practice2={<RoleplayExercise themeColor={themeColor} />}
                />
            </SectionWrapper>
            <NextButtonContainer>
                <NextButton onClick={onNext} themeColor={themeColor}>
                    <span>Next: The PRE Structure</span>
                    <span className="arrow">→</span>
                </NextButton>
            </NextButtonContainer>
        </Container>
    );
};

// --- Child Component for PRE Structure ---
const PreStructureContent: React.FC<{ onBack: () => void; onNext: () => void; themeColor: string }> = ({ onBack, onNext, themeColor }) => {
    return (
        <Container>
            <BackButton onClick={onBack} themeColor={themeColor}>← Back to Group Interaction Skills</BackButton>
            <LessonTitle>PRE 万能结构 (The PRE Structure)</LessonTitle>

            <SectionWrapper>
                <SectionTitle themeColor={themeColor}>
                    <span className="icon">🧱</span>
                    PRE 万能结构 (The PRE Structure)
                </SectionTitle>
                <TipBox>
                    <p>
                        <strong>提示 (Tip):</strong> 在实际考试中，不建议第一位发言者在介绍主题后立即提问。这可能会导致讨论直接跳到第二轮，从而错失展示个人观点的机会。
                    </p>
                    <p style={{ marginTop: '10px' }}>
                        更好的做法是：在邀请他人讨论之前，<strong>首先使用 PRE 结构清晰地陈述你自己的观点</strong>。这是 DSE 口语考试中的一项核心技巧。
                    </p>
                </TipBox>

                <p style={{ color: '#566573', lineHeight: 1.7, marginTop: '20px' }}>
                    PRE 结构帮助你清晰、有说服力地组织你的观点。它代表：
                </p>

                <StepFlowContainer>
                    <StepCard themeColor="#f39c12">
                        <StepNumber themeColor="#f39c12">P</StepNumber>
                        <StepTitle>Point (观点)</StepTitle>
                        <StepDescription>直接、清晰地陈述你的主要论点。</StepDescription>
                    </StepCard>
                    <StepArrow>→</StepArrow>
                    <StepCard themeColor="#3498db">
                        <StepNumber themeColor="#3498db">R</StepNumber>
                        <StepTitle>Reason (理由)</StepTitle>
                        <StepDescription>解释为什么你持有这个观点，提供支持性理由。</StepDescription>
                    </StepCard>
                    <StepArrow>→</StepArrow>
                    <StepCard themeColor="#2ecc71">
                        <StepNumber themeColor="#2ecc71">E</StepNumber>
                        <StepTitle>Experience (经验/例子)</StepTitle>
                        <StepDescription>用个人经历或具体例子来证实你的观点。</StepDescription>
                    </StepCard>
                </StepFlowContainer>

                <SectionTitle themeColor={themeColor} style={{ marginTop: '50px' }}>
                    <span className="icon" style={{color: '#9013fe'}}>🗣️</span>
                    范例分析 (Example Analysis)
                </SectionTitle>
                <ExamplePrompt themeColor={themeColor}>
                    <span className="icon" role="img" aria-label="question icon">❓</span>
                    <span>
                        These students are discussing how young people can deal with school pressure. Look at how they make use of the PRE structure to justify their suggestions.
                    </span>
                </ExamplePrompt>
                <ExampleAnalysisContainer>
                    <ExampleBubble>
                        <ExampleHeader>考生示范 1 (Student Example 1)</ExampleHeader>
                        <ExamplePart color="#f39c12">
                            <span className="part-title">P = Point (观点)</span>
                            <span className="part-content">It would be a good idea for young people to speak to their teachers about school pressure.</span>
                        </ExamplePart>
                        <ExamplePart color="#3498db">
                            <span className="part-title">R = Reason (理由)</span>
                            <span className="part-content">They would feel better if they received study advice and feedback.</span>
                        </ExamplePart>
                        <ExamplePart color="#2ecc71">
                            <span className="part-title">E = Experience (经验)</span>
                            <span className="part-content">I had some problems coping with studying for a Maths exam last year, and my Maths teacher provided some helpful study tips.</span>
                        </ExamplePart>
                    </ExampleBubble>
                    <ExampleBubble>
                        <ExampleHeader>考生示范 2 (Student Example 2)</ExampleHeader>
                        <ExamplePart color="#f39c12">
                            <span className="part-title">P = Point (观点)</span>
                            <span className="part-content">They can also think about scheduling study breaks.</span>
                        </ExamplePart>
                        <ExamplePart color="#3498db">
                            <span className="part-title">R = Reason (理由)</span>
                            <span className="part-content">Balancing work with relaxation helps relieve stress.</span>
                        </ExamplePart>
                        <ExamplePart color="#2ecc71">
                            <span className="part-title">E = Experience (经验)</span>
                            <span className="part-content">Taking a break from study to walk around Hong Kong Park for half an hour helped me recharge while studying for my Maths exam last year.</span>
                        </ExamplePart>
                    </ExampleBubble>
                </ExampleAnalysisContainer>
            </SectionWrapper>
            <NextButtonContainer>
                <NextButton onClick={onNext} themeColor={themeColor}>
                    <span>Next: Concluding Techniques</span>
                    <span className="arrow">→</span>
                </NextButton>
            </NextButtonContainer>
        </Container>
    );
};

interface GroupInteractionContentProps {
    onBack: () => void;
    onNext: () => void;
    themeColor: string;
}

type View = 'list' | 'opening' | 'pre' | 'concluding' | 'example' | 'questionTypes';

// --- Main Component (now a router) ---
export const GroupInteractionContent: React.FC<GroupInteractionContentProps> = ({ onBack, onNext, themeColor }) => {
    const [view, setView] = useState<View>('list');

    if (view === 'opening') {
        return <OpeningMethodContent onBack={() => setView('list')} onNext={() => setView('pre')} themeColor={themeColor} />;
    }

    if (view === 'pre') {
        return <PreStructureContent onBack={() => setView('list')} onNext={() => setView('concluding')} themeColor={themeColor} />;
    }

    if (view === 'concluding') {
        return <ConcludingTechniquesContent onBack={() => setView('list')} onNext={() => setView('example')} themeColor={themeColor} />;
    }

    if (view === 'example') {
        return <ExampleGroupInteractionContent onBack={() => setView('list')} onNext={() => setView('questionTypes')} themeColor={themeColor} />;
    }

    if (view === 'questionTypes') {
        return <QuestionTypesContent onBack={() => setView('list')} onNext={onNext} themeColor={themeColor} />;
    }
    
    return (
        <Container>
            <BackButton onClick={onBack} themeColor={themeColor}>← Back to Skills Menu</BackButton>
            <LessonTitle>小组讨论技巧 (Group Interaction)</LessonTitle>
            <LessonList>
                <LessonItem borderColor={themeColor} onClick={() => setView('opening')}>
                    <LessonTitleChinese>黄金三步开场法</LessonTitleChinese>
                    <LessonTitleEnglish>The Golden 3-Step Opening</LessonTitleEnglish>
                </LessonItem>
                <LessonItem borderColor={themeColor} onClick={() => setView('pre')}>
                    <LessonTitleChinese>PRE 万能结构</LessonTitleChinese>
                    <LessonTitleEnglish>The PRE Structure</LessonTitleEnglish>
                </LessonItem>
                <LessonItem borderColor={themeColor} onClick={() => setView('concluding')}>
                    <LessonTitleChinese>总结结尾技巧</LessonTitleChinese>
                    <LessonTitleEnglish>Concluding Techniques</LessonTitleEnglish>
                </LessonItem>
                <LessonItem borderColor={themeColor} onClick={() => setView('example')}>
                    <LessonTitleChinese>小组讨论实例</LessonTitleChinese>
                    <LessonTitleEnglish>Example Group Interaction</LessonTitleEnglish>
                </LessonItem>
                <LessonItem borderColor={themeColor} onClick={() => setView('questionTypes')}>
                    <LessonTitleChinese>5大题型</LessonTitleChinese>
                    <LessonTitleEnglish>5 Major Question Types</LessonTitleEnglish>
                </LessonItem>
            </LessonList>
            <NextButtonContainer>
                <NextButton onClick={onNext} themeColor={themeColor}>
                    <span>Next: Individual Response Skills</span>
                    <span className="arrow">→</span>
                </NextButton>
            </NextButtonContainer>
        </Container>
    );
};