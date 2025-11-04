/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {
    PronunciationContainer,
    BackButton,
    Section,
    Exercise,
    Instruction,
    ExampleBox,
    DialogueContainer
} from './Unit8Pronunciation.styles';

interface Unit8PronunciationProps {
    onBack: () => void;
}

const Unit8Pronunciation: React.FC<Unit8PronunciationProps> = ({ onBack }) => {
    return (
        <PronunciationContainer>
            <BackButton onClick={onBack}>← Back to Unit 8</BackButton>
            <h2>Pronunciation and delivery</h2>

            <Section>
                <h3>Connected speech</h3>
                <p>Speakers of Cantonese often try to pronounce every individual word clearly and separately when speaking English. Practising connected speech can help you sound natural and fluent.</p>
                <p>When a word ending in a consonant sound meets a word starting with a vowel sound, they are usually connected in speech as in the following examples:</p>
                <ExampleBox>
                    <p>It makes a <span className="connected-speech">lot of</span> sense for youth and elders to participate in social activities.</p>
                    <p>The government needs to tackle the <span className="connected-speech">problem of</span> poverty as soon as possible.</p>
                    <p>We want Hong Kong to provide a <span className="connected-speech">safe environment for</span> everyone.</p>
                </ExampleBox>
                
                <Exercise>
                    <Instruction><strong>B</strong> Megan and Sinclair are writing an article for the school magazine on the topic of Gen Z, the generation born between 1995 and 2010. Role-play their conversation in pairs and mark the connected sounds. Then compare your conversation and the recording.</Instruction>
                    <DialogueContainer>
                        <p><strong>Megan:</strong> For the next issue of the school magazine, I think we should write an article about Gen Z. People believe the stereotype that young people in Hong Kong are only interested in fashion and tech gadgets, and not interested in social issues and politics at all. Gen Z has proved this stereotype wrong.</p>
                        <p><strong>Sinclair:</strong> Yes. So much has changed in Hong Kong as the Gen Z youth evolved. Many Gen Z youngsters have received a good education and are not afraid to voice their opinions about social issues like gender equality and environmental conservation. Our readers will find them very inspiring.</p>
                        <p><strong>Megan:</strong> I think so too. Also, don't you think it would be a good idea to give examples of what our readers could do if they wanted to become more involved with social issues?</p>
                        <p><strong>Sinclair:</strong> Perhaps we can also include advice on how students like us can take action. For instance, volunteering for humanitarian organizations.</p>
                    </DialogueContainer>
                </Exercise>
            </Section>

        </PronunciationContainer>
    );
};

export default Unit8Pronunciation;