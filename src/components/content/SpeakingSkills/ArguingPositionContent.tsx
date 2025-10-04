/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { BackButton as OriginalBackButton, LessonTitle as OriginalLessonTitle } from '../Structures/SVOContent.styles';

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

export const ArguingPositionContent: React.FC<ArguingPositionContentProps> = ({ onBack, themeColor }) => {
    return (
        <ThemeProvider theme={{ mainColor: themeColor }}>
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
            </Container>
        </ThemeProvider>
    );
};