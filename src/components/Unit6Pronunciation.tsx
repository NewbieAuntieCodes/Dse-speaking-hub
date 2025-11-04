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
    Table,
    Th,
    Td,
    WordGrid,
    WordBox,
    DialogueContainer
} from './Unit6Pronunciation.styles';

interface Unit6PronunciationProps {
    onBack: () => void;
}

const Unit6Pronunciation: React.FC<Unit6PronunciationProps> = ({ onBack }) => {
    return (
        <PronunciationContainer>
            <BackButton onClick={onBack}>← Back to Unit 6</BackButton>
            <h2>Pronunciation and delivery</h2>

            <Section>
                <h3>Stress in compound words</h3>
                <p>Compound words can be nouns, verbs or adjectives. The first part of a compound noun is usually stressed. In compound verbs and adjectives, the second part usually carries the stress.</p>
                <Table>
                    <thead>
                        <tr>
                            <Th>Compound nouns</Th>
                            <Th>Compound verbs</Th>
                            <Th>Compound adjectives</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Td><strong>bed</strong>room</Td>
                            <Td>down<strong>load</strong></Td>
                            <Td>light-<strong>coloured</strong></Td>
                        </tr>
                        <tr>
                            <Td><strong>base</strong>ball</Td>
                            <Td>up-to-<strong>date</strong></Td>
                            <Td>open-<strong>minded</strong></Td>
                        </tr>
                    </tbody>
                </Table>

                <p>The following pairs of phrases share the same spellings. Listen to each pair of phrases. They mean different things when the stress falls on a different syllable.</p>
                <ul>
                    <li><strong>green</strong>house vs green <strong>house</strong> (A greenhouse is a glassed-in structure where one grows plants. A green house is simply a house that has been painted green.)</li>
                    <li><strong>grass</strong>hopper vs grass <strong>hopper</strong> (A grasshopper is an insect. A grass hopper is one who hops over grass.)</li>
                    <li><strong>black</strong>berries vs black <strong>berries</strong> (Blackberries are a type of fruit. Black berries are berries that have turned black, perhaps because they are mouldy.)</li>
                </ul>
                
                <Exercise>
                    <Instruction><strong>B1</strong> You are practising how to say compound words. Underline the stressed part of each of the following words. The first one has been done for you. Then listen to the recording and compare your pronunciation and the answers.</Instruction>
                    <WordGrid>
                        <WordBox>1 <u>wall</u>paper</WordBox>
                        <WordBox>2 <u>news</u>print</WordBox>
                        <WordBox>3 long-<u>term</u></WordBox>
                        <WordBox>4 <u>skate</u>board</WordBox>
                        <WordBox>5 <u>back</u>pack</WordBox>
                        <WordBox>6 <u>honey</u>bee</WordBox>
                        <WordBox>7 <u>under</u>clothes</WordBox>
                        <WordBox>8 <u>father</u>-in-law</WordBox>
                        <WordBox>9 double-<u>click</u></WordBox>
                        <WordBox>10 <u>shoe</u>lace</WordBox>
                    </WordGrid>
                </Exercise>
                 <Exercise>
                    <Instruction><strong>B2</strong> Underline the stressed part of the compound words in the following dialogue. Then listen and check your answers.</Instruction>
                    <DialogueContainer>
                        <p><strong>Andy:</strong> I bought a sixty-page magazine about skateboarding.</p>
                        <p><strong>Jian:</strong> Oh, cool. I once jumped a two-foot-tall wall on my skateboard.</p>
                        <p><strong>Andy:</strong> I'm a novice-level skater. I'd like to learn some new tricks soon.</p>
                        <p><strong>Jian:</strong> What tricks are you working on?</p>
                        <p><strong>Andy:</strong> I'm trying to learn how to do an alley-oop.</p>
                        <p><strong>Jian:</strong> Awesome! My skills are free-form.</p>
                        <p><strong>Andy:</strong> I'll never be a world-famous skater, but it's fun to learn new things.</p>
                    </DialogueContainer>
                </Exercise>
            </Section>

        </PronunciationContainer>
    );
};

export default Unit6Pronunciation;