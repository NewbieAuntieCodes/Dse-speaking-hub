/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { createContext, useState, useEffect, ReactNode } from 'react';

const VOCAB_STORAGE_KEY = 'dse_speaking_hub_vocab';

interface VocabularyContextType {
    words: string[];
    addWord: (word: string) => void;
    removeWord: (word: string) => void;
    clearWords: () => void;
    toast: string;
    showToast: (message: string) => void;
}

export const VocabularyContext = createContext<VocabularyContextType>({
    words: [],
    addWord: () => {},
    removeWord: () => {},
    clearWords: () => {},
    toast: '',
    showToast: () => {},
});

interface VocabularyProviderProps {
    children: ReactNode;
}

export const VocabularyProvider: React.FC<VocabularyProviderProps> = ({ children }) => {
    const [words, setWords] = useState<string[]>([]);
    const [toast, setToast] = useState('');

    useEffect(() => {
        try {
            const storedWords = localStorage.getItem(VOCAB_STORAGE_KEY);
            if (storedWords) {
                setWords(JSON.parse(storedWords));
            }
        } catch (error) {
            console.error("Failed to load words from localStorage", error);
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem(VOCAB_STORAGE_KEY, JSON.stringify(words));
        } catch (error) {
            console.error("Failed to save words to localStorage", error);
        }
    }, [words]);

    const showToast = (message: string) => {
        setToast(message);
        setTimeout(() => setToast(''), 2500);
    };

    const addWord = (word: string) => {
        if (!words.includes(word)) {
            setWords(prevWords => [...prevWords, word].sort());
            showToast(`已添加: "${word}"`);
        } else {
            showToast(`"${word}" 已在单词本中`);
        }
    };

    const removeWord = (wordToRemove: string) => {
        setWords(prevWords => prevWords.filter(word => word !== wordToRemove));
    };

    const clearWords = () => {
        setWords([]);
        showToast('单词本已清空 (Vocabulary cleared)');
    };

    const value = { words, addWord, removeWord, clearWords, toast, showToast };

    return (
        <VocabularyContext.Provider value={value}>
            {children}
        </VocabularyContext.Provider>
    );
};