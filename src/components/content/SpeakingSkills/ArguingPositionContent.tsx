/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { BackButton as OriginalBackButton, LessonTitle as OriginalLessonTitle, NextButton, NextButtonContainer } from '../Structures/SVOContent.styles';

// --- Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components ---
const Container = styled.div`
    animation: ${fadeIn} 0.5s ease-out;
`;

const BackButton = styled(OriginalBackButton)`
    margin-bottom: 15px;
`;

const LessonTitle = styled(OriginalLessonTitle)`
    font-size: 2.5em;
    padding-bottom: 20px;
    margin-bottom: 30px;
    
    @media (max-width: 768px) {
        font-size: 2.0em;
    }
`;

const Section = styled.section`
    background: #ffffff;
    border-radius: 20px;
    padding: 30px 40px;
    margin-bottom: 30px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
    border: 1px solid #e9ecef;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const SectionHeader = styled.h3`
    font-size: 1.7em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f1f3f4;
`;

const BodyText = styled.p`
    color: #4a5568;
    line-height: 1.8;
    font-size: 1.05em;
    margin-bottom: 15px;
`;

const DialogueGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
    margin-top: 25px;
`;

const DialogueCard = styled.div`
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 15px;
    padding: 25px;
    position: relative;
`;

const DialogueHeader = styled.div`
    font-size: 1em;
    font-weight: bold;
    color: #4a5568;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 8px;

    .icon {
        font-size: 1.2em;
    }
`;

const DialogueText = styled.p`
    font-size: 1.05em;
    line-height: 1.7;
    color: #34495e;

    strong {
        font-weight: bold;
        color: ${props => props.theme.mainColor};
    }
`;

const ExpressionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin-top: 25px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

const ExpressionCard = styled.div<{ borderColor: string }>`
    background-color: #fff;
    border-radius: 12px;
    border: 1px solid #e9ecef;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
`;

const CardHeader = styled.h4<{ bgColor: string, color: string }>`
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    padding: 15px 20px;
    font-size: 1.2em;
    font-weight: bold;
`;

const PhraseList = styled.ul`
    list-style: none;
    padding: 20px;
    margin: 0;
`;

const PhraseItem = styled.li`
    color: #4a5568;
    font-size: 1.05em;
    padding: 8px 0;
    border-bottom: 1px solid #f1f3f4;
    
    &:last-child {
        border-bottom: none;
    }
`;

// --- Styled components for "Acknowledging Opinions" section ---
const AcknowledgingPhrase = styled.strong<{ color: string }>`
    background-color: ${props => props.color}20;
    color: ${props => props.color};
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: bold;
`;

const AcknowledgingSectionTitle = styled.h3<{ themeColor: string }>`
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

const SpeechBubble = styled.div`
    background: #e9ecef;
    border-radius: 20px;
    padding: 20px 25px;
    position: relative;
    max-width: 600px;
    width: 100%;
    line-height: 1.7;
    font-size: 1.05em;
    color: #34495e;

    &::before {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 30px;
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 20px solid #e9ecef;
    }
    
    strong {
        font-weight: bold;
        background-color: #fffbe6;
        padding: 2px 5px;
        border-radius: 4px;
        border-bottom: 2px solid #ffe58f;
    }
`;

const VocabBox = styled.div`
    background-color: #fff;
    border: 1px solid #e9ecef;
    padding: 15px;
    margin-top: 10px;
    border-radius: 8px;
    line-height: 1.6;
    color: #4a5568;
    display: flex;
    gap: 10px;
    align-items: flex-start;

    &::before {
        content: '🔎';
        font-size: 1.2em;
        margin-top: 2px;
    }

    strong {
        font-weight: bold;
        color: #2c3e50;
    }
`;

const WordBox = styled.div`
    margin-top: 30px;
    border-top: 2px dashed #ced4da;
    padding-top: 25px;
    text-align: center;

    h4 {
        font-size: 1.2em;
        color: #34495e;
        margin-bottom: 15px;
    }

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
    }

    li {
        background-color: #eaf5ff;
        color: #2f54eb;
        border: 1px solid #adc6ff;
        padding: 8px 18px;
        border-radius: 20px;
        font-weight: 500;
    }
`;

// New styled components for the dialogue
const StudentDialogueContainer = styled.div`
    margin-top: 25px;
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const StudentTurn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const StudentLabel = styled.div`
    font-weight: bold;
    font-size: 1.1em;
    color: #34495e;
`;

const StudentText = styled.p`
    font-size: 1.05em;
    color: #4a5568;
    line-height: 1.7;
    padding-left: 10px;
    border-left: 3px solid #ced4da;
    margin: 0;
`;


// --- Data ---
const strongAgreement = ['I agree with you.', 'This is a great idea.', 'Great point.', "You're right.", "That's true.", 'I like your idea.', 'I think so too.', 'I feel the same way.'];
const weakAgreement = ['I feel similarly.', "I think you're mostly right.", 'Yes, but can I make a suggestion?'];
const strongDisagreement = ['I disagree.', "I don't think so.", "I don't think that's a good idea.", "I'm sorry, but I disagree."];
const weakDisagreement = ["I'm not sure about that.", "I'm not sure whether that's right.", 'Yes, but...', 'I see your point, but...', 'I understand, but...', "I think you're right about ..., but ..."];


// --- Component ---
interface ArguingPositionContentProps {
    onBack: () => void;
    themeColor: string;
}

type View = 'agreeDisagree' | 'acknowledging';

export const ArguingPositionContent: React.FC<ArguingPositionContentProps> = ({ onBack, themeColor }) => {
    const [view, setView] = useState<View>('agreeDisagree');

    const acknowledgingThemeColor = "#1abc9c"; // A distinct color for this section as in the original design

    // Page 1: Agreeing & Disagreeing
    const AgreeDisagreePage = () => (
        <Container>
            <BackButton onClick={onBack} themeColor={themeColor}>← Back to 5 Major Question Types</BackButton>
            <LessonTitle>Agreeing & Disagreeing</LessonTitle>

            <Section>
                <SectionHeader>🤝 Communication Strategies</SectionHeader>
                <BodyText>
                    During the exam, you should show that you have listened to and evaluated what your group members have said. One way of doing so is to <strong>agree</strong> or <strong>disagree</strong> with others' opinions.
                </BodyText>
            </Section>
            
            <Section>
                <SectionHeader>💬 Example Discussion: Air Pollution</SectionHeader>
                <BodyText>These students are discussing the problem of air pollution in Hong Kong. Look at how they support their opinions with a reason.</BodyText>
                <DialogueGrid>
                    <DialogueCard>
                        <DialogueHeader><span className="icon">🤔</span>Student A starts:</DialogueHeader>
                        <DialogueText>"I think the Hong Kong government should do more to address the problem of air pollution."</DialogueText>
                    </DialogueCard>
                    <DialogueCard>
                        <DialogueHeader><span className="icon">👍</span>Student B agrees:</DialogueHeader>
                        <DialogueText><strong>"I agree.</strong> Bad air quality is a serious health risk for everyone living in Hong Kong."</DialogueText>
                    </DialogueCard>
                    <DialogueCard>
                        <DialogueHeader><span className="icon">💡</span>Student C gives reasons:</DialogueHeader>
                        <DialogueText>"In order to improve air quality, the government could encourage people to switch to electric vehicles by offering them subsidies. They could also stop people from buying petrol vehicles by implementing heavy taxes on petrol."</DialogueText>
                    </DialogueCard>
                    <DialogueCard>
                        <DialogueHeader><span className="icon">👎</span>Student D disagrees:</DialogueHeader>
                        <DialogueText><strong>"I don't think that's a good idea.</strong> Even with government subsidies, electric vehicles will still be too expensive for many people. Also, there are not enough charging stations in the city, so this idea may not be practical."</DialogueText>
                    </DialogueCard>
                </DialogueGrid>
            </Section>
            
            <Section>
                <SectionHeader>✨ Useful Expressions</SectionHeader>
                <ExpressionsGrid>
                    <ExpressionCard borderColor="#27ae60">
                        <CardHeader bgColor="#e8f5e9" color="#2e7d32">Strong Agreement</CardHeader>
                        <PhraseList>
                            {strongAgreement.map(phrase => <PhraseItem key={phrase}>{phrase}</PhraseItem>)}
                        </PhraseList>
                    </ExpressionCard>
                    <ExpressionCard borderColor="#c0392b">
                        <CardHeader bgColor="#fdeded" color="#c0392b">Strong Disagreement</CardHeader>
                        <PhraseList>
                            {strongDisagreement.map(phrase => <PhraseItem key={phrase}>{phrase}</PhraseItem>)}
                        </PhraseList>
                    </ExpressionCard>
                     <ExpressionCard borderColor="#27ae60">
                        <CardHeader bgColor="#e8f5e9" color="#2e7d32">Weak Agreement</CardHeader>
                        <PhraseList>
                            {weakAgreement.map(phrase => <PhraseItem key={phrase}>{phrase}</PhraseItem>)}
                        </PhraseList>
                    </ExpressionCard>
                     <ExpressionCard borderColor="#c0392b">
                        <CardHeader bgColor="#fdeded" color="#c0392b">Weak Disagreement</CardHeader>
                        <PhraseList>
                            {weakDisagreement.map(phrase => <PhraseItem key={phrase}>{phrase}</PhraseItem>)}
                        </PhraseList>
                    </ExpressionCard>
                </ExpressionsGrid>
            </Section>

            <NextButtonContainer>
                <NextButton onClick={() => setView('acknowledging')} themeColor={themeColor}>
                    <span>Next: Acknowledging Opinions</span>
                    <span className="arrow">→</span>
                </NextButton>
            </NextButtonContainer>
        </Container>
    );

    // Page 2: Acknowledging Others' Opinions
    const AcknowledgingOpinionsPage = () => (
        <Container>
            <BackButton onClick={() => setView('agreeDisagree')} themeColor={acknowledgingThemeColor}>← Back to Agreeing & Disagreeing</BackButton>
            <LessonTitle>Acknowledging Others' Opinions</LessonTitle>
        
            <Section>
                <AcknowledgingSectionTitle themeColor={acknowledgingThemeColor}>
                    <span className="icon">💬</span> Example Discussion: Beach Clean-up
                </AcknowledgingSectionTitle>
                <BodyText>These students are discussing how to organize a beach clean-up day at Tap Mun.</BodyText>
                
                <StudentDialogueContainer>
                    <StudentTurn>
                        <StudentLabel>Student A:</StudentLabel>
                        <StudentText>
                            Our environmental club is organizing a beach clean-up day at Tap Mun. We'll need to stock up on bin bags and plastic gloves, and the school will help organize transport. The school should make this event mandatory for students. Everyone will learn from it and we'll clean the beach up faster.
                        </StudentText>
                    </StudentTurn>
                    <StudentTurn>
                        <StudentLabel>Student B:</StudentLabel>
                        <StudentText>
                            <AcknowledgingPhrase color="#27ae60">You have a point there.</AcknowledgingPhrase> Students who don't usually care about the environment will see how big the problem is.
                        </StudentText>
                    </StudentTurn>
                    <StudentTurn>
                        <StudentLabel>Student C:</StudentLabel>
                        <StudentText>
                            <AcknowledgingPhrase color="#e67e22">I hear what you're saying,</AcknowledgingPhrase> but I'm not sure if forcing students to participate is a good idea. They might resent it, and students with allergies or disabilities could feel left out.
                        </StudentText>
                    </StudentTurn>
                    <StudentTurn>
                        <StudentLabel>Student D:</StudentLabel>
                        <StudentText>
                            <AcknowledgingPhrase color="#e67e22">I see what you mean.</AcknowledgingPhrase> I think it would be OK if the beach clean-up was optional, though. It's a day off school, so lots of students should be interested in joining us.
                        </StudentText>
                    </StudentTurn>
                </StudentDialogueContainer>
            </Section>
            
            <Section>
                <AcknowledgingSectionTitle themeColor={acknowledgingThemeColor}>
                    <span className="icon">🎯</span> Practice Time
                </AcknowledgingSectionTitle>
                <BodyText>The following suggestion was also made in the discussion above. Take turns to acknowledge what is said and express a further opinion. You may like to use the expressions in the word box.</BodyText>
                <SpeechBubble>
                    Let's do a documentary programme on beach waste and the effect of plastics on the ocean. It will be <strong>informative</strong>, and it might also be a <strong>wake-up call</strong> for students who don't realize how big the problem is.
                </SpeechBubble>
                <VocabBox>
                    <div><strong>wake-up call</strong> = an event that makes people realize that there is a problem that they need to do something about</div>
                </VocabBox>
                <WordBox>
                    <h4>Expressions Word Box</h4>
                    <ul>
                        <li>I see your point.</li>
                        <li>I understand your point.</li>
                        <li>I take your point.</li>
                    </ul>
                </WordBox>
            </Section>
            <NextButtonContainer>
                <NextButton onClick={onBack} themeColor={themeColor}>
                    <span>Return to Question Types</span>
                    <span className="arrow">↩</span>
                </NextButton>
            </NextButtonContainer>
        </Container>
    );

    return (
        <ThemeProvider theme={{ mainColor: themeColor }}>
            {view === 'agreeDisagree' ? <AgreeDisagreePage /> : <AcknowledgingOpinionsPage />}
        </ThemeProvider>
    );
};