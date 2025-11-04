/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {
    PronunciationContainer,
    BackButton,
    Section,
    SubSection,
    Table,
    Th,
    Td,
    WordBox,
    Exercise,
    Instruction,
    WordGrid
} from './PronunciationDelivery.styles';

interface PronunciationDeliveryProps {
    onBack: () => void;
}

const PronunciationDelivery: React.FC<PronunciationDeliveryProps> = ({ onBack }) => {
    return (
        <PronunciationContainer>
            <BackButton onClick={onBack}>← Back to Unit 1</BackButton>
            <h2>Pronunciation and delivery</h2>

            <Section>
                <h3>Long and short vowels</h3>
                <p>The following are some word pairs that sound similar, except for the vowel sounds. Listen to the recording and try pronouncing the words. Pay attention to your mouth movement. The diagrams below may help you.</p>
                <ul>
                    <li>/æ/ as in sat /sæt/ <strong>vs</strong> /e/ as in set /set/</li>
                    <li>/i:/ as in seat /si:t/ <strong>vs</strong> /ɪ/ as in sit /sɪt/</li>
                </ul>
                <ul>
                    <li>bad /bæd/ vs bed /bed/</li>
                    <li>man /mæn/ vs men /men/</li>
                </ul>
                 <ul>
                    <li>beat /bi:t/ vs bit /bɪt/</li>
                    <li>sheep /ʃi:p/ vs ship /ʃɪp/</li>
                </ul>

                <Exercise>
                    <Instruction><strong>B1</strong> Say the words in the boxes and decide whether they are pronounced with the sounds /æ/, /e/, /i:/, or /ɪ/. Put them in the correct circles. Then listen to the recording. Compare your answers and say the words again.</Instruction>
                    <WordGrid>
                        <WordBox>brand</WordBox>
                        <WordBox>clap</WordBox>
                        <WordBox>head</WordBox>
                        <WordBox>plan</WordBox>
                        <WordBox>step</WordBox>
                        <WordBox>dream</WordBox>
                        <WordBox>mean</WordBox>
                        <WordBox>think</WordBox>
                        <WordBox>hit</WordBox>
                        <WordBox>seem</WordBox>
                        <WordBox>tip</WordBox>
                    </WordGrid>
                </Exercise>
            </Section>

            <Section>
                <h3>Diphthongs</h3>
                <p>A diphthong consists of two vowel sounds. There are eight diphthongs in English. In order to pronounce them accurately, you should know their starting and ending sounds.</p>
                <Table>
                    <thead>
                        <tr>
                            <Th>Diphthong</Th>
                            <Th>Starting sound</Th>
                            <Th>Ending sound</Th>
                            <Th>Examples</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><Td>/eɪ/</Td><Td>/e/</Td><Td>/ɪ/</Td><Td>age, late</Td></tr>
                        <tr><Td>/aɪ/</Td><Td>/a/</Td><Td>/ɪ/</Td><Td>buy, nice</Td></tr>
                        <tr><Td>/ɔɪ/</Td><Td>/ɔ/</Td><Td>/ɪ/</Td><Td>boy, toy</Td></tr>
                        <tr><Td>/ɪə/</Td><Td>/ɪ/</Td><Td>/ə/</Td><Td>clear, year</Td></tr>
                        <tr><Td>/eə/</Td><Td>/e/</Td><Td>/ə/</Td><Td>air, where</Td></tr>
                        <tr><Td>/ʊə/</Td><Td>/ʊ/</Td><Td>/ə/</Td><Td>poor, tour</Td></tr>
                        <tr><Td>/əʊ/</Td><Td>/ə/</Td><Td>/ʊ/</Td><Td>grow, phone</Td></tr>
                        <tr><Td>/aʊ/</Td><Td>/a/</Td><Td>/ʊ/</Td><Td>loud, crowd</Td></tr>
                    </tbody>
                </Table>
                 <Exercise>
                    <Instruction><strong>B2</strong> Your class has brainstormed some words containing diphthongs. Say the words and put them on the correct places in the mind map.</Instruction>
                    <WordGrid>
                        <WordBox>hair</WordBox><WordBox>hear</WordBox><WordBox>light</WordBox>
                        <WordBox>low</WordBox><WordBox>oil</WordBox><WordBox>secure</WordBox>
                        <WordBox>shout</WordBox><WordBox>table</WordBox><WordBox>boor</WordBox>
                        <WordBox>sure</WordBox><WordBox>dare</WordBox><WordBox>care</WordBox>
                        <WordBox>know</WordBox><WordBox>though</WordBox><WordBox>cloud</WordBox>
                        <WordBox>doubt</WordBox><WordBox>joy</WordBox><WordBox>boil</WordBox>
                        <WordBox>dear</WordBox><WordBox>beer</WordBox><WordBox>rate</WordBox>
                        <WordBox>say</WordBox><WordBox>lie</WordBox><WordBox>rice</WordBox>
                    </WordGrid>
                </Exercise>
            </Section>

            <Section>
                <h3>Word stress</h3>
                <p>Word stress is an important part of accurate pronunciation. If you do not stress the correct syllable, you might be misunderstood.</p>
                <p>The following pairs of words share the same spellings. They mean different things when the stress falls on a different syllable:</p>
                <ul>
                    <li>re'cord (v) vs 'record (n)</li>
                    <li>pro'duce (v) vs 'produce (n)</li>
                    <li>in'crease (v) vs 'increase (n)</li>
                </ul>
                <Exercise>
                    <Instruction><strong>C1</strong> In pairs, take turns to read out the following words. Underline the stressed syllable in each word. The first one has been done for you.</Instruction>
                    <WordGrid>
                        <WordBox><u>en</u>thusiasm</WordBox><WordBox>tutorial</WordBox><WordBox>traditional</WordBox>
                        <WordBox>involvement</WordBox><WordBox>advantages</WordBox><WordBox>assignment</WordBox>
                        <WordBox>agreement</WordBox><WordBox>fashionable</WordBox><WordBox>memory</WordBox>
                        <WordBox>balance</WordBox>
                    </WordGrid>
                </Exercise>
                 <SubSection>
                    <p>Different words from the same word family may have stress on different syllables, e.g.:</p>
                    <WordGrid>
                        <WordBox>'photography</WordBox>
                        <WordBox>pho'tographic</WordBox>
                        <WordBox>photogra'phically</WordBox>
                    </WordGrid>
                </SubSection>
            </Section>
        </PronunciationContainer>
    );
};

export default PronunciationDelivery;