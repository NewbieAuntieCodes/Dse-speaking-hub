/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {
    PronunciationContainer,
    BackButton,
    Section,
    SoundDiagramContainer,
    SoundDiagram,
    Exercise,
    Instruction,
    TongueTwisterList,
    EdEndingTable,
    Th,
    Td,
    Highlight
} from './Unit3Pronunciation.styles';

interface Unit3PronunciationProps {
    onBack: () => void;
}

const Unit3Pronunciation: React.FC<Unit3PronunciationProps> = ({ onBack }) => {
    return (
        <PronunciationContainer>
            <BackButton onClick={onBack}>← Back to Unit 3</BackButton>
            <h2>Pronunciation and delivery</h2>

            <Section>
                <h3>/s/, /z/ and /ʃ/</h3>
                <p>Many English words contain the /s/ and /z/ sounds, so it is important to pronounce them accurately. Use the diagram below to help you.</p>
                <SoundDiagramContainer>
                    <SoundDiagram>
                        <p><strong>/s/ as in see /si:/:</strong> The tip of the tongue is close to the upper teeth. Air is forced through the narrow gap. This is an unvoiced sound.</p>
                    </SoundDiagram>
                    <SoundDiagram>
                        <p><strong>/z/ as in zebra /ˈzebrə/:</strong> Pronounced the same way as /s/, but it is a voiced sound, so your vocal cords should vibrate.</p>
                    </SoundDiagram>
                    <SoundDiagram>
                        <p><strong>/ʃ/ as in she /ʃi:/:</strong> The tongue is further back than for /s/. The lips are rounded. This is an unvoiced sound.</p>
                    </SoundDiagram>
                </SoundDiagramContainer>
            </Section>

            <Section>
                <h3>/ð/ and /θ/</h3>
                <p>The /ð/ and /θ/ sounds are easily confused. To pronounce them, you should place the tip of your tongue between your top and bottom teeth.</p>
                 <SoundDiagramContainer>
                    <SoundDiagram>
                        <p><strong>/θ/ as in theme /θi:m/:</strong> This is an unvoiced sound. Let air pass between your tongue and upper teeth.</p>
                    </SoundDiagram>
                    <SoundDiagram>
                        <p><strong>/ð/ as in this /ðɪs/:</strong> This is a voiced sound. Vibrate your vocal cords as air passes through.</p>
                    </SoundDiagram>
                </SoundDiagramContainer>
                <Exercise>
                    <Instruction><strong>B1</strong> In pairs, practise saying the following tongue-twisters.</Instruction>
                    <TongueTwisterList>
                        <li>The father and brothers stay together, whatever the weather.</li>
                        <li>She sells for sandals and socks in the shoe shop.</li>
                        <li>The seaman thought his ship was sinking. Such thoughts no seaman should be thinking.</li>
                        <li>One thousand thinkers thought about how thirty-three thieves got the trophies.</li>
                        <li>Zoe's sister, Zara, who is in sixth form, was a very slow swimmer.</li>
                        <li>Three were thirsty through thick and thin.</li>
                    </TongueTwisterList>
                </Exercise>
            </Section>

            <Section>
                <h3>The -ed ending</h3>
                <p>There are three possible pronunciations of the -ed ending. The pronunciation depends on the final sound of the base verb.</p>
                <EdEndingTable>
                    <thead>
                        <tr>
                            <Th>Pronunciation</Th>
                            <Th>Rule</Th>
                            <Th>Examples</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Td>/d/</Td>
                            <Td>When the base verb ends in a <strong>voiced</strong> sound (e.g., /l/, /v/, /n/, /b/, or any vowel sound).</Td>
                            <Td>lived /lɪvd/, joined /dʒɔɪnd/, played /pleɪd/</Td>
                        </tr>
                        <tr>
                            <Td>/t/</Td>
                            <Td>When the base verb ends in an <strong>unvoiced</strong> sound (e.g., /p/, /k/, /s/, /f/, /ʃ/).</Td>
                            <Td>packed /pækt/, shopped /ʃɒpt/, purchased /ˈpɜːtʃəst/</Td>
                        </tr>
                         <tr>
                            <Td>/ɪd/ or /əd/</Td>
                            <Td>When the base verb ends in a <strong>/d/ or /t/</strong> sound.</Td>
                            <Td>crowded /ˈkraʊdɪd/, needed /ˈniːdɪd/, wanted /ˈwɒntɪd/</Td>
                        </tr>
                    </tbody>
                </EdEndingTable>
                 <Exercise>
                    <Instruction><strong>B3</strong> You are the presenter for a sports programme on the student radio station at your school. In pairs, take turns to read out the following report.</Instruction>
                    <p>
                        Last Wednesday, Class 4A <Highlight>played</Highlight> against Class 4C in the final match of the inter-class basketball competition. The gymnasium was <Highlight>packed</Highlight> with supporters for both teams, who <Highlight>greeted</Highlight> the players enthusiastically as they <Highlight>entered</Highlight>. The two teams <Highlight>competed</Highlight> in a very exciting game, and all the players <Highlight>performed</Highlight> extremely well. But Bobby Fong of 4C was clearly the star player of the day. The audience <Highlight>clapped</Highlight> and <Highlight>cheered</Highlight> as he <Highlight>scored</Highlight> an impressive three-point shot in the last two seconds of the match. In the end, 4C <Highlight>defeated</Highlight> 4A with a 78 to 56 win. Bobby was <Highlight>awarded</Highlight> Most Valuable Player for his great performance.
                    </p>
                </Exercise>
            </Section>
        </PronunciationContainer>
    );
};

export default Unit3Pronunciation;