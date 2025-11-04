/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useContext } from 'react';
import { VocabularyContext } from './VocabularyContext';
import {
    FAB,
    Badge,
    ModalBackdrop,
    ModalContent,
    ModalHeader,
    WordList,
    WordTag,
    RemoveWordButton,
    ActionButtonsContainer,
    CopyButtonsGroup,
    ActionButton,
    EmptyMessage,
    Toast,
} from './Vocabulary.styles';

export const VocabularyManager: React.FC = () => {
    const { words, removeWord, clearWords, toast, showToast } = useContext(VocabularyContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCopyComma = () => {
        if (words.length === 0) return;
        navigator.clipboard.writeText(words.join(', '));
        showToast('已复制为逗号分隔格式 (Copied as comma-separated)');
    };

    const handleCopyNewline = () => {
        if (words.length === 0) return;
        navigator.clipboard.writeText(words.join('\n'));
        showToast('已复制为换行分隔格式 (Copied as newline-separated)');
    };

    const handleClear = () => {
        if (words.length === 0) return;
        clearWords();
    };

    return (
        <>
            <FAB onClick={() => setIsModalOpen(true)} aria-label="Open Vocabulary">
                📖
                {words.length > 0 && <Badge>{words.length}</Badge>}
            </FAB>

            {isModalOpen && (
                <ModalBackdrop onClick={() => setIsModalOpen(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <ModalHeader>
                            <h2>我的单词本 (My Vocabulary)</h2>
                            <button onClick={() => setIsModalOpen(false)} aria-label="Close">&times;</button>
                        </ModalHeader>
                        {words.length > 0 ? (
                            <>
                                <WordList>
                                    {words.map(word => (
                                        <WordTag key={word}>
                                            {word}
                                            <RemoveWordButton onClick={() => removeWord(word)}>&times;</RemoveWordButton>
                                        </WordTag>
                                    ))}
                                </WordList>
                                <ActionButtonsContainer>
                                    <CopyButtonsGroup>
                                        <ActionButton onClick={handleCopyComma}>📋 复制 (逗号)</ActionButton>
                                        <ActionButton onClick={handleCopyNewline}>📄 复制 (换行)</ActionButton>
                                    </CopyButtonsGroup>
                                    <ActionButton className="clear" onClick={handleClear}>🗑️ 清空 (Clear)</ActionButton>
                                </ActionButtonsContainer>
                            </>
                        ) : (
                            <EmptyMessage>
                                <p>单词本是空的。</p>
                                <p>在任何文本上双击即可添加单词。</p>
                            </EmptyMessage>
                        )}
                    </ModalContent>
                </ModalBackdrop>
            )}

            {toast && <Toast>{toast}</Toast>}
        </>
    );
};