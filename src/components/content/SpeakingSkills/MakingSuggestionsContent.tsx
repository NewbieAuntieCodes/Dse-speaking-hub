/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { BackButton as OriginalBackButton, LessonTitle as OriginalLessonTitle } from '../Structures/SVOContent.styles';

// --- Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const answerFadeIn = keyframes`
  from {
    opacity: 0;
    transform: scaleY(0.95) translateY(-10px);
    max-height: 0;
  }
  to {
    opacity: 1;
    transform: scaleY(1) translateY(0);
    max-height: 500px;
  }
`;

// --- Styled Components for Redesign ---
const Container = styled.div`
    animation: ${fadeIn} 0.5s ease-out;
`;

const BackButton = styled(OriginalBackButton)`
    margin-bottom: 15px;
`;

const LessonTitle = styled(OriginalLessonTitle)`
    font-size: 2.8em;
    padding-bottom: 25px;
    margin-bottom: 40px;
    
    @media (max-width: 768px) {
        font-size: 2.2em;
    }
`;

const Section = styled.section`
    background: #ffffff;
    border-radius: 20px;
    padding: 30px 40px;
    margin-bottom: 40px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
    border: 1px solid #e9ecef;

    @media (max-width: 768px) {
        padding: 25px;
    }
`;

const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;

    .icon {
        font-size: 2em;
        line-height: 1;
    }

    h3 {
        font-size: 1.8em;
        font-weight: bold;
        color: #2c3e50;
    }
`;

const Highlight = styled.strong`
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.mainColor}20;
    padding: 2px 6px;
    border-radius: 5px;
    font-weight: 600;
`;

const ScenarioIntro = styled.p`
    font-size: 1.1em;
    color: #4a5568;
    line-height: 1.8;
    margin-bottom: 30px;
    padding: 20px 25px;
    border-radius: 12px;
    background-color: ${props => props.theme.mainColor}15;
    border-left: 5px solid ${props => props.theme.mainColor};
`;

const SuggestionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

const StudentLabel = styled.div<{ speakerColor: string }>`
    font-weight: bold;
    color: ${props => props.speakerColor};
    margin-bottom: 8px;
    font-size: 0.9em;
    text-transform: uppercase;
`;

const HighlightedPhrase = styled.span`
    font-weight: bold;
    color: #2c3e50;
    background-color: #ffec99;
    padding: 2px 4px;
    border-radius: 4px;
`;

const SuggestionCard = styled.div<{ speakerColor: string }>`
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 15px;
    padding: 25px;
    padding-left: 60px;
    position: relative;
    font-size: 1.05em;
    color: #34495e;
    line-height: 1.7;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &::before {
        content: '“';
        font-family: 'Georgia', serif;
        font-size: 5em;
        font-weight: bold;
        position: absolute;
        top: 5px;
        left: 10px;
        color: ${props => props.speakerColor};
        opacity: 0.8;
        line-height: 1;
    }
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    }
`;

const PrinciplesBox = styled.div`
    background-color: #fffbe6;
    border: 1px solid #ffe58f;
    border-left: 5px solid #fadb14;
    padding: 25px;
    margin-bottom: 30px;
    border-radius: 8px;
    line-height: 1.7;
    font-size: 1.1em;
    display: flex;
    align-items: center;
    gap: 20px;

    .icon {
        font-size: 2em;
        color: #fadb14;
    }

    p {
        color: #594b0d;
        margin: 0;
        
        strong {
            font-weight: bold;
            color: #d46b08;
            display: block;
            margin-bottom: 5px;
        }
    }
`;

const ExpressionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`;

const ExpressionPill = styled.div`
    background-color: #f1f3f5;
    color: #495057;
    border: 1px solid #ced4da;
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 1em;
    font-weight: 500;
    transition: all 0.2s ease;
    cursor: default;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    }
`;

const GrammarTip = styled.div`
    background-color: #f0f5ff;
    border: 1px solid #d6e4ff;
    padding: 20px;
    margin-top: 30px;
    border-radius: 12px;
    line-height: 1.7;
    font-size: 1em;
    display: flex;
    align-items: center;
    gap: 15px;

    .icon {
        font-size: 1.8em;
        color: #2f54eb;
    }

    p {
        color: #4a5568;
        margin: 0;

        code {
            background-color: #d6e4ff;
            color: #1d39c4;
            padding: 3px 8px;
            border-radius: 5px;
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
            font-weight: 600;
        }
    }
`;

const PracticeGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
`;

const StyledPracticeCard = styled.div`
    background-color: #fff;
    border-radius: 16px;
    text-align: center;
    border: 1px solid #e9ecef;
    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 30px rgba(0,0,0,0.1);
    }
`;

const CardHeader = styled.div<{ bgColor: string }>`
    background-color: ${props => props.bgColor};
    padding: 25px;
    border-radius: 16px 16px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4em;
`;

const CardBody = styled.div`
    padding: 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

const PracticeTitle = styled.h4`
    font-size: 1.4em;
    font-weight: bold;
    color: #2d3748;
    margin-bottom: 12px;
`;

const PracticeDescription = styled.p`
    font-size: 1em;
    color: #718096;
    line-height: 1.6;
    flex-grow: 1;
    margin-bottom: 20px;
`;

const CheckAnswerButton = styled.button<{ themeColor: string }>`
    padding: 10px 25px;
    background-color: ${props => props.themeColor};
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 0.95em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    align-self: center;

    &:hover {
        transform: translateY(-2px);
        filter: brightness(1.1);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
`;

const AnswerContainer = styled.div`
    margin-top: 20px;
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    padding: 15px;
    border-radius: 8px;
    text-align: left;
    font-size: 0.95em;
    line-height: 1.6;
    overflow: hidden;
    animation: ${answerFadeIn} 0.4s ease-out forwards;
`;

const AnswerPart = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const AnswerLabel = styled.span<{ color: string }>`
    font-weight: bold;
    color: ${props => props.color};
    flex-shrink: 0;
`;

// --- Data ---
const suggestions = [
    {
        id: 1,
        speaker: 'Student A',
        color: '#3498db',
        fullText: 'It would be a good idea for him to join a club at school that matches his interests.',
        highlight: 'It would be a good idea for him to'
    },
    {
        id: 2,
        speaker: 'Student B',
        color: '#2ecc71',
        fullText: 'I think he should invite classmates to the cinema in order to make more friends.',
        highlight: 'I think he should'
    },
    {
        id: 3,
        speaker: 'Student C',
        color: '#e67e22',
        fullText: "Why doesn't he ask his sister for study tips?",
        highlight: "Why doesn't he"
    },
    {
        id: 4,
        speaker: 'Student D',
        color: '#9b59b6',
        fullText: 'If I were him, I would try to accept that I was different from my sister.',
        highlight: 'If I were him, I would'
    }
];

const expressions = [
    'How about ...?', 'What about if ...?', 'Shall we ...?', 'Let\'s ...',
    'Perhaps he/she should ...', 'He/she could think about ...',
    'I suggest ...', 'Maybe we can consider ...',
];

const practiceItems = [
    { 
        icon: '☕', 
        title: 'Coffee Shops', 
        description: 'Serve hot and cold drinks and snacks. You can spend as much time there as you like.',
        color: '#f9f3ef',
        preAnswer: {
            point: "How about we go to a coffee shop after school?",
            reason: "It's a great place to relax. We can grab some drinks and snacks, and there's no pressure to leave quickly.",
            experience: "For example, last week I went to the Starbucks nearby. I was able to finish my homework and chat with friends for a couple of hours. It was really chill."
        }
    },
    { 
        icon: '📚', 
        title: 'Libraries', 
        description: 'Offer free space to relax and read books. Computers are available to check email or surf the Internet.',
        color: '#eef5f9',
        preAnswer: {
            point: "I suggest we could hang out at the public library.",
            reason: "The main reason is that it's completely free. It's quiet, so we can read or study, and they have computers if we need to use the internet for a project.",
            experience: "I remember when we had to do research for our history project, the library was a lifesaver. We found so many books and used their computers to put everything together."
        }
    },
    { 
        icon: '🌳', 
        title: 'Hong Kong Park', 
        description: 'A spacious and beautiful park, and a free place to go with friends. Bring snacks for a picnic on a sunny day.',
        color: '#f0f9f4',
        preAnswer: {
            point: "Why don't we go to Hong Kong Park for a picnic this weekend?",
            reason: "It's a beautiful and spacious park, which is perfect for a group of friends. Plus, it won't cost us anything except for the snacks we bring.",
            experience: "My family had a picnic there last month. It was a sunny day, and we just laid on the grass, ate sandwiches, and played some games. It was a really refreshing break."
        }
    },
    {
        icon: '💡',
        title: 'Your Own Idea!',
        description: 'Think of another place and explain why it\'s a good suggestion.',
        color: '#f0f2f5',
        preAnswer: {
            point: "I think we should try going to a board game cafe.",
            reason: "It's something different and really interactive. We can play a lot of new games we've never tried before, which is more engaging than just sitting around.",
            experience: "My cousin took me to one in Mong Kok called 'FunBox'. They had hundreds of games, and the staff even taught us how to play. We had so much fun for a few hours."
        }
    }
];

const renderSuggestionText = (fullText: string, highlight: string) => {
    if (!highlight || !fullText.includes(highlight)) {
        return fullText;
    }
    const parts = fullText.split(highlight);
    return (
        <span>
            {parts[0]}
            <HighlightedPhrase>{highlight}</HighlightedPhrase>
            {parts[1]}
        </span>
    );
};

// --- Component ---
interface MakingSuggestionsContentProps {
    onBack: () => void;
    themeColor: string;
}

export const MakingSuggestionsContent: React.FC<MakingSuggestionsContentProps> = ({ onBack, themeColor }) => {
    const [showAnswers, setShowAnswers] = useState<Record<string, boolean>>({});

    const toggleAnswer = (title: string) => {
        setShowAnswers(prev => ({
            ...prev,
            [title]: !prev[title]
        }));
    };

    return (
        <ThemeProvider theme={{ mainColor: themeColor }}>
            <Container>
                <BackButton onClick={onBack} themeColor={themeColor}>← Back to 5 Major Question Types</BackButton>
                <LessonTitle>Making Suggestions & Giving Advice</LessonTitle>

                <Section>
                    <SectionHeader>
                        <span className="icon" role="img" aria-label="scenario icon">🎭</span>
                        <h3>Scenario</h3>
                    </SectionHeader>
                    <ScenarioIntro>
                        In the speaking exam, you may be asked to <Highlight>make suggestions</Highlight> or <Highlight>give advice</Highlight> on an issue.
                        These students are discussing what their classmate Jack can do to stop being jealous of his sister who is very popular at school and always gets good grades. Look at how they make suggestions on the topic:
                    </ScenarioIntro>
                    <SuggestionsGrid>
                        {suggestions.map((s) => (
                            <SuggestionCard key={s.id} speakerColor={s.color}>
                                <StudentLabel speakerColor={s.color}>{s.speaker}</StudentLabel>
                                {renderSuggestionText(s.fullText, s.highlight)}
                            </SuggestionCard>
                        ))}
                    </SuggestionsGrid>
                </Section>
                
                <Section>
                    <SectionHeader>
                        <span className="icon" role="img" aria-label="expressions icon">✨</span>
                        <h3>Useful Expressions</h3>
                    </SectionHeader>
                    <PrinciplesBox>
                        <span className="icon" role="img" aria-label="key icon">🔑</span>
                        <p><strong>Golden Rule: Explain Your Reasons!</strong>When giving suggestions, you should always state your reasons, explaining why you think your ideas are good ones.</p>
                    </PrinciplesBox>
                    <ExpressionsContainer>
                        {expressions.map(text => {
                            return (
                                <ExpressionPill key={text}>
                                    {text.replace(' (formal)', '')}
                                </ExpressionPill>
                            );
                        })}
                    </ExpressionsContainer>
                    <GrammarTip>
                        <span className="icon" role="img" aria-label="tools icon">🔧</span>
                        <p>
                            <strong>Pro Tip: Use Modal Verbs!</strong> Verbs like <code>can</code>, <code>could</code>, <code>should</code>, and <code>must</code> are very powerful for making polite and effective suggestions.
                        </p>
                    </GrammarTip>
                </Section>

                <Section>
                    <SectionHeader>
                        <span className="icon" role="img" aria-label="practice icon">🎯</span>
                        <h3>Practice Time</h3>
                    </SectionHeader>
                    <ScenarioIntro>
                        You want to suggest places to go after school to hang out with friends. Practise making suggestions using the places below and the expressions you've learned. Then, make a suggestion of your own!
                    </ScenarioIntro>
                    <PracticeGrid>
                        {practiceItems.map(item => (
                             <StyledPracticeCard key={item.title}>
                                 <CardHeader bgColor={item.color}>
                                    {item.icon}
                                 </CardHeader>
                                 <CardBody>
                                    <PracticeTitle>{item.title}</PracticeTitle>
                                    <PracticeDescription>{item.description}</PracticeDescription>
                                    <CheckAnswerButton onClick={() => toggleAnswer(item.title)} themeColor={themeColor}>
                                        {showAnswers[item.title] ? 'Hide Answer' : 'Check Answer'}
                                    </CheckAnswerButton>
                                    {showAnswers[item.title] && (
                                        <AnswerContainer>
                                            <AnswerPart>
                                                <AnswerLabel color="#f39c12">P:</AnswerLabel>
                                                <span>{item.preAnswer.point}</span>
                                            </AnswerPart>
                                             <AnswerPart>
                                                <AnswerLabel color="#3498db">R:</AnswerLabel>
                                                <span>{item.preAnswer.reason}</span>
                                            </AnswerPart>
                                             <AnswerPart>
                                                <AnswerLabel color="#2ecc71">E:</AnswerLabel>
                                                <span>{item.preAnswer.experience}</span>
                                            </AnswerPart>
                                        </AnswerContainer>
                                    )}
                                 </CardBody>
                            </StyledPracticeCard>
                        ))}
                    </PracticeGrid>
                </Section>

            </Container>
        </ThemeProvider>
    );
};