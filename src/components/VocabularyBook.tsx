/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { useVocabulary } from '../contexts/VocabularyContext';
import {
    FloatingButton,
    BookModalOverlay,
    BookModalContent,
    ModalHeader,
    HeaderActions,
    HeaderButton,
    CloseButton,
    ItemList,
    Item,
    DeleteButton,
    EmptyState,
} from './VocabularyBook.styles';

const VocabularyBook: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { vocabulary, removeVocabularyItem, clearVocabulary } = useVocabulary();
    const [copyButtonText, setCopyButtonText] = useState('📋 复制');

    const toggleBook = () => setIsOpen(!isOpen);

    const handleCopyAll = async () => {
        if (vocabulary.length === 0) return;
        const textToCopy = vocabulary.join('\n');
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopyButtonText('✅ 已复制');
            setTimeout(() => setCopyButtonText('📋 复制'), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            setCopyButtonText('❌ 复制失败');
            setTimeout(() => setCopyButtonText('📋 复制'), 2000);
        }
    };

    const handleClearAll = () => {
        if (vocabulary.length > 0) {
            if (window.confirm('你确定要删除所有单词吗？此操作无法撤销。')) {
                clearVocabulary();
            }
        }
    };

    return (
        <>
            <FloatingButton onClick={toggleBook} aria-label="Open vocabulary book">
                📖
            </FloatingButton>
            {isOpen && (
                <BookModalOverlay onClick={toggleBook}>
                    <BookModalContent onClick={(e) => e.stopPropagation()}>
                        <ModalHeader>
                            <h3>单词本 (Vocabulary)</h3>
                            <HeaderActions>
                                {vocabulary.length > 0 && (
                                    <>
                                        <HeaderButton onClick={handleCopyAll}>
                                            {copyButtonText}
                                        </HeaderButton>
                                        <HeaderButton className="delete-all" onClick={handleClearAll}>
                                            🗑️ 删除全部
                                        </HeaderButton>
                                    </>
                                )}
                                <CloseButton onClick={toggleBook} aria-label="Close vocabulary book">&times;</CloseButton>
                            </HeaderActions>
                        </ModalHeader>
                        {vocabulary.length > 0 ? (
                            <ItemList>
                                {vocabulary.map((item, index) => (
                                    <Item key={index}>
                                        <span>{item}</span>
                                        <DeleteButton onClick={() => removeVocabularyItem(item)} aria-label={`Delete ${item}`}>&times;</DeleteButton>
                                    </Item>
                                ))}
                            </ItemList>
                        ) : (
                            <EmptyState>
                                <p>你的单词本是空的。</p>
                                <p>双击一个单词或选择一个词组来添加。</p>
                            </EmptyState>
                        )}
                    </BookModalContent>
                </BookModalOverlay>
            )}
        </>
    );
};

export default VocabularyBook;