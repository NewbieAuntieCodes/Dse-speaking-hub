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
    Table,
    Th,
    Td,
    Arrow,
    DialogueContainer
} from './Unit4Pronunciation.styles';

interface Unit4PronunciationProps {
    onBack: () => void;
}

const Unit4Pronunciation: React.FC<Unit4PronunciationProps> = ({ onBack }) => {
    return (
        <PronunciationContainer>
            <BackButton onClick={onBack}>← Back to Unit 4</BackButton>
            <h2>Pronunciation and delivery</h2>

            <Section>
                <h3>Sentence stress</h3>
                <p>When we speak, we usually stress the most important words in a sentence (e.g. nouns, verbs, adjectives). We usually place less stress on functional words (e.g. pronouns, articles, determiners, prepositions and conjunctions).</p>
                <p>Listen to the following examples:</p>
                <ExampleBox>
                    <p>Air <strong>pollution</strong> has become a <strong>serious environmental problem</strong> in many big <strong>cities</strong>.</p>
                    <p>The <strong>government</strong> should make it <strong>mandatory</strong> for all <strong>households</strong> in Hong Kong to <strong>recycle</strong>.</p>
                </ExampleBox>
                <p>You can put extra stress on some words if you want to emphasize particular information:</p>
                 <ExampleBox>
                    <p>More should be done to <strong>promote</strong> eco-friendly holidays.</p>
                    <p>People should <strong>not</strong> be allowed to <strong>throw away</strong> things that can be <strong>reused</strong>.</p>
                </ExampleBox>
                <p>Stressing different words in the sentence will give the sentence different meanings.</p>
                <ExampleBox>
                    <p><strong>Jane</strong> was a member of the Environmental School Club. (It was Jane and not somebody else.)</p>
                    <p>Jane <strong>was</strong> a member of the Environmental School Club. (She is no longer a member.)</p>
                    <p>Jane was a member of the <strong>Environmental</strong> School Club. (She was not a member of another school club, e.g. the Geography Club.)</p>
                </ExampleBox>
                <Exercise>
                    <Instruction><strong>B1</strong> Read each sentence and the two possible continuations for each one. Listen to each sentence and underline the word that carries the most stress. Then choose the continuation that best represents the meaning in each case.</Instruction>
                    <ul>
                        <li><strong>1</strong> He said he'd meet us <strong>outside</strong> the station.</li>
                        <li><strong>2</strong> We spent two days discussing environmental <strong>issues</strong>.</li>
                        <li><strong>3</strong> They are going on an eco-friendly holiday in <strong>southern</strong> China.</li>
                        <li><strong>4</strong> I thought <strong>he'd</strong> agree with us.</li>
                    </ul>
                </Exercise>
            </Section>

            <Section>
                <h3>Intonation and grammar</h3>
                <p>Different sentence types can have different intonation patterns.</p>
                <Table>
                    <thead>
                        <tr>
                            <Th>Sentence Types</Th>
                            <Th>Examples</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Td><p><strong>Statements:</strong></p></Td>
                            <Td><p>We should all do our <strong>best</strong> to recycle. <Arrow>↘</Arrow> (falling intonation)</p></Td>
                        </tr>
                         <tr>
                            <Td><p><strong>Wh-questions:</strong></p></Td>
                            <Td><p>Where can we take plastic <strong>bags</strong> for recycling? <Arrow>↘</Arrow> (falling intonation)</p></Td>
                        </tr>
                         <tr>
                            <Td><p><strong>Yes/No questions:</strong></p></Td>
                            <Td><p>Do you re<strong>cycle</strong>? <Arrow>↗</Arrow> (rising intonation)</p></Td>
                        </tr>
                         <tr>
                            <Td><p><strong>Lists:</strong></p></Td>
                            <Td><p>We can recycle <strong>paper</strong>, <Arrow>↗</Arrow> <strong>cans</strong> <Arrow>↗</Arrow> and <strong>plastics</strong>. <Arrow>↘</Arrow> (first rising, others falling)</p></Td>
                        </tr>
                         <tr>
                            <Td><p><strong>Choice questions:</strong></p></Td>
                            <Td><p>Should we write about re<strong>cycling</strong> <Arrow>↗</Arrow> or conserving <strong>energy</strong>? <Arrow>↘</Arrow> (first rising, then falling)</p></Td>
                        </tr>
                         <tr>
                            <Td><p><strong>Question tags:</strong></p></Td>
                            <Td>
                                <p>You'll try to recycle <strong>more</strong>, won't you? <Arrow>↗</Arrow> (real question: rising intonation)</p>
                                <p>Paul doesn't want to join the <strong>club</strong>, does he? <Arrow>↘</Arrow> (confirming information: falling intonation)</p>
                            </Td>
                        </tr>
                    </tbody>
                </Table>
                <Exercise>
                    <Instruction><strong>B3</strong> You are one of the hosts of 'Green Living', a weekly programme about environmental protection on Student TV. You are preparing the script for this week's programme. Mark the intonation pattern of the following sentences with arrows. The first two have been done for you.</Instruction>
                    <DialogueContainer>
                        <p><strong>A:</strong> I agree. We should all be more environmentally <strong>friendly</strong>. <Arrow>↘</Arrow> So how exactly can we 'go <strong>green</strong>'? <Arrow>↘</Arrow></p>
                        <p><strong>B:</strong> We can start with the small things. We should turn off all the <strong>lights</strong> when we leave a room. Can you think of anything <strong>else</strong>?</p>
                        <p><strong>A:</strong> We can also persuade our parents to drive <strong>less</strong>. Instead, we can walk, cycle or take public <strong>transport</strong>.</p>
                        <p><strong>B:</strong> Of course, saving water is also important. Do you prefer taking <strong>showers</strong> or <strong>baths</strong>?</p>
                        <p><strong>A:</strong> Showers. They save more water, energy and <strong>time</strong>.</p>
                    </DialogueContainer>
                </Exercise>
            </Section>

        </PronunciationContainer>
    );
};

export default Unit4Pronunciation;