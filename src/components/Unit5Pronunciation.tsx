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
    DialogueContainer,
    ExampleBox,
    SentenceList
} from './Unit5Pronunciation.styles';

interface Unit5PronunciationProps {
    onBack: () => void;
}

const Unit5Pronunciation: React.FC<Unit5PronunciationProps> = ({ onBack }) => {
    return (
        <PronunciationContainer>
            <BackButton onClick={onBack}>← Back to Unit 5</BackButton>
            <h2>Pronunciation and delivery</h2>

            <Section>
                <h3>Weak forms</h3>
                <p>Weak forms are words or sounds that become unstressed in <strong>connected speech</strong>. English speakers selectively unstress words in order to maintain a steady rhythm when they are speaking.</p>
                <p>Look at the following examples:</p>
                <ExampleBox>
                    <p>Hair <strong>and</strong> make-up ('and' is unstressed)</p>
                    <p>She <strong>can</strong> go to the concert with you. ('can' is unstressed)</p>
                    <p>We <strong>should have</strong> chosen a better song to sing. ('should' and 'have' are both unstressed)</p>
                </ExampleBox>
                <p>Weak forms can sometimes be stressed. For example:</p>
                <ExampleBox>
                    <p>I didn't know <strong>that</strong> vs I didn't know that he was famous. (stressed, strong) --- (unstressed, weak)</p>
                    <p>He <strong>can</strong> sing. vs Can <strong>he</strong>? (unstressed) --- (stressed)</p>
                </ExampleBox>
                
                <Exercise>
                    <Instruction><strong>B1</strong> In pairs, role-play the dialogue below. Pay extra attention to the weak forms.</Instruction>
                    <DialogueContainer>
                        <p><strong>Manager:</strong> Do you want to audition for this role?</p>
                        <p><strong>Actress:</strong> I'd rather not. I'm not sure I like the character.</p>
                        <p><strong>Manager:</strong> It would be good for your career.</p>
                        <p><strong>Actress:</strong> What makes you so sure?</p>
                        <p><strong>Manager:</strong> Well, it's an ongoing gig, with a good director.</p>
                        <p><strong>Actress:</strong> I guess you make a good case, but I'm still not sure.</p>
                        <p><strong>Manager:</strong> Let's take a day to think about it.</p>
                    </DialogueContainer>
                </Exercise>
                 <Exercise>
                    <Instruction><strong>B2</strong> Your friend Jane is considering whether or not to start a YouTube channel, giving make-up and hair tutorials. Give her some arguments for and against the idea. In pairs, take turns to read them out and underline all the weak forms.</Instruction>
                    <SentenceList>
                        <li>Jane often gets compliments on her hairdos <strong>and</strong> make-up.</li>
                        <li>She <strong>should</strong> focus on her studies, because her grades are not very strong.</li>
                        <li>She's been thinking of working part-time, <strong>and could</strong> do this instead.</li>
                        <li>Most people do <strong>not</strong> make much money from YouTubing.</li>
                        <li>She won't know if she <strong>can</strong> make money that way unless she tries.</li>
                        <li>Jane is shy, <strong>and</strong> I am <strong>not</strong> sure the attention <strong>would</strong> appeal to her.</li>
                        <li>I <strong>would</strong> be worried about all the negative comments she <strong>could</strong> receive.</li>
                    </SentenceList>
                </Exercise>
                <Exercise>
                    <Instruction><strong>B3</strong> Now listen to the recording and compare your pronunciation and answers.</Instruction>
                </Exercise>
            </Section>

        </PronunciationContainer>
    );
};

export default Unit5Pronunciation;