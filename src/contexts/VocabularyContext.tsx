/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface VocabularyContextType {
    vocabulary: string[];
    addVocabularyItem: (item: string) => boolean;
    removeVocabularyItem: (item: string) => void;
    clearVocabulary: () => void;
}

const VocabularyContext = createContext<VocabularyContextType | undefined>(undefined);

const VOCABULARY_STORAGE_KEY = 'dse_speaking_hub_vocabulary';

export const VocabularyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [vocabulary, setVocabulary] = useState<string[]>([]);

    useEffect(() => {
        try {
            const storedVocabulary = localStorage.getItem(VOCABULARY_STORAGE_KEY);
            if (storedVocabulary) {
                setVocabulary(JSON.parse(storedVocabulary));
            }
        } catch (error) {
            console.error("Failed to load vocabulary from localStorage", error);
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem(VOCABULARY_STORAGE_KEY, JSON.stringify(vocabulary));
        } catch (error) {
            console.error("Failed to save vocabulary to localStorage", error);
        }
    }, [vocabulary]);

    const addVocabularyItem = (item: string): boolean => {
        const cleanedItem = item.trim();
        if (cleanedItem && !vocabulary.includes(cleanedItem)) {
            setVocabulary(prev => [...prev, cleanedItem].sort());
            return true;
        }
        return false;
    };

    const removeVocabularyItem = (item: string) => {
        setVocabulary(prev => prev.filter(v => v !== item));
    };

    const clearVocabulary = () => {
        setVocabulary([]);
    };

    return (
        <VocabularyContext.Provider value={{ vocabulary, addVocabularyItem, removeVocabularyItem, clearVocabulary }}>
            {children}
        </VocabularyContext.Provider>
    );
};

export const useVocabulary = () => {
    const context = useContext(VocabularyContext);
    if (context === undefined) {
        throw new Error('useVocabulary must be used within a VocabularyProvider');
    }
    return context;
};