/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import {
    ExerciseContainer,
    Instruction,
    PracticeButton,
    ConversionExerciseContainer,
    ExerciseTitle,
    AudioLink,
    QuestionList,
    QuestionItem,
    Answer,
    ButtonContainer,
    CheckButton,
} from './RoleplayExercise.styles';


interface RoleplayExerciseProps {
    themeColor: string;
}

// --- New Data ---
const conversionQuestions = [
    {
        id: 1,
        question: 'How can you improve your memory power while studying for exams?',
        answer: 'Let\'s talk about how you can improve your memory power while studying for exams.',
    },
    {
        id: 2,
        question: 'Can listening to music help you focus while studying?',
        answer: 'Today, we can discuss whether listening to music can help you focus while studying.',
    },
    {
        id: 3,
        question: 'Does memorization help improve English literacy?',
        answer: 'We are here to explore if memorization helps improve English literacy.',
    },
];

// --- Main Component ---
export const RoleplayExercise: React.FC<RoleplayExerciseProps> = ({ themeColor }) => {
    const [showAnswers, setShowAnswers] = useState(false);

    return (
        <ExerciseContainer>
            <Instruction>
                <p>
                    在DSE口语考试中，大部分情况下，阅读材料里的讨论要点会以陈述句 (declarative statements) 的形式出现。
                </p>
                <p>
                    然而，在少数情况下，它们也可能以问句 (questions) 的形式提问。当遇到这种情况时，我们需要将问句转换为由 <code>Let's discuss...</code> 或 <code>Today we are here to talk about...</code> 等短语引导的宾语从句 (noun clause)。
                </p>
                <p>
                    例如: "What are the pros?" 变为 "Today, let's discuss <strong>what the pros are</strong>."
                </p>
                <p>
                    点击下面的按钮，前往专门的页面进行更多关于宾语从句的语法练习。
                </p>
            </Instruction>

            <PracticeButton 
                href="https://newbieauntiecodes.github.io/English-grammar-page/" 
                target="_blank" 
                rel="noopener noreferrer"
                themeColor={themeColor}
            >
                <span>前往语法练习</span>
                <span role="img" aria-label="arrow">→</span>
            </PracticeButton>

            {/* --- New Exercise Section --- */}
            <ConversionExerciseContainer>
                <ExerciseTitle>改成陈述句</ExerciseTitle>
                <AudioLink
                    href="https://players.brightcove.net/6144772950001/default_default/index.html?videoId=6268728665001"
                    target="_blank"
                    rel="noopener noreferrer"
                    themeColor={themeColor}
                >
                    <span role="img" aria-label="audio">🔊</span>
                    <span>这个可以听了参考 (Listen for reference)</span>
                </AudioLink>

                <QuestionList>
                    {conversionQuestions.map((item) => (
                        <QuestionItem key={item.id} themeColor={themeColor}>
                            {item.question}
                            {showAnswers && <Answer>{item.answer}</Answer>}
                        </QuestionItem>
                    ))}
                </QuestionList>
                
                <ButtonContainer>
                    <CheckButton onClick={() => setShowAnswers(!showAnswers)} themeColor={themeColor}>
                        {showAnswers ? '隐藏答案 (Hide Answers)' : '检查答案 (Check Answers)'}
                    </CheckButton>
                </ButtonContainer>
            </ConversionExerciseContainer>
        </ExerciseContainer>
    );
};