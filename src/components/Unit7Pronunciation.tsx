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
    SentenceList
} from './Unit7Pronunciation.styles';

interface Unit7PronunciationProps {
    onBack: () => void;
}

const Unit7Pronunciation: React.FC<Unit7PronunciationProps> = ({ onBack }) => {
    return (
        <PronunciationContainer>
            <BackButton onClick={onBack}>← Back to Unit 7</BackButton>
            <h2>Pronunciation and delivery</h2>

            <Section>
                <h3>Consonant clusters</h3>
                <p>In English, two or more consonants often appear together in a word. These consonants are called consonant clusters. You should pronounce all the consonants in a cluster.</p>
                <ExampleBox>
                    <p>A consonant cluster can appear:</p>
                    <ul>
                        <li>at the beginning: <strong>tr</strong>avel /'trævl/, <strong>str</strong>ength /streŋθ/</li>
                        <li>at the end: touri<strong>st</strong> /'tʊərɪst/, ca<strong>mp</strong> /kæmp/</li>
                        <li>in the middle of a word: co<strong>mp</strong>ound /'kɒmpaʊnd/, e<strong>xp</strong>erience /ɪk'spɪəriəns/, develo<strong>pm</strong>ent /dɪ'veləpmənt/</li>
                    </ul>
                </ExampleBox>
                <p>Be particularly careful to pronounce all consonants when they carry grammatical information (e.g. the third person -s, the plural -s and the past tense -ed):</p>
                <ExampleBox>
                     <ul>
                        <li>visi<strong>ts</strong> /'vɪzɪts/</li>
                        <li>fol<strong>ks</strong> /fəʊks/</li>
                        <li>wor<strong>ked</strong> /wɜ:kt/</li>
                    </ul>
                </ExampleBox>
                
                <Exercise>
                    <Instruction><strong>B</strong> In pairs, read out the following sentences to each other. Pay extra attention to the consonant clusters in bold. Then listen to the recording and compare your pronunciation and answers.</Instruction>
                    <SentenceList>
                        <li>I went on an <strong>exchange programme</strong> to Australia last year. I had a <strong>blast</strong>!</li>
                        <li>It is <strong>trendy</strong> to volunteer at animal shelters. I am a fan of furry <strong>critters</strong>.</li>
                        <li>He went on a <strong>study trip</strong> to France to learn French. He is now <strong>fluent</strong> in the language.</li>
                        <li>Ecotourism <strong>promotes</strong> the message that we should save the <strong>planet</strong> and <strong>protect</strong> the environment.</li>
                        <li>She is completing an <strong>application</strong> to work with the <strong>elderly</strong>. It's <strong>inspiring</strong>!</li>
                        <li><strong>Self-improvement</strong> is an important goal. Willingness to <strong>dedicate</strong> your time to a cause is one way to <strong>fulfil</strong> this intention.</li>
                    </SentenceList>
                </Exercise>
            </Section>

        </PronunciationContainer>
    );
};

export default Unit7Pronunciation;