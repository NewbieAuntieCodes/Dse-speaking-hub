/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import {
    ExerciseContainer,
    ItemBank,
    DropZoneContainer,
    DropZone,
    DropZoneTitle,
    DraggableItem,
    DroppedItem,
    CompletionMessage,
    Instruction,
} from './DragAndDropExercise.styles';

// --- Data ---
type Category = 'greeting' | 'introducing' | 'inviting';

interface Phrase {
    id: number;
    text: string;
    category: Category;
}

const initialPhrases: Phrase[] = [
    { id: 1, text: "Hello everyone. Shall we start our discussion?", category: 'greeting' },
    { id: 2, text: "We're here to talk about...", category: 'introducing' },
    { id: 3, text: "Hello. Nice to meet you all. Let's start our discussion.", category: 'greeting' },
    { id: 4, text: "Does anyone have any suggestions?", category: 'inviting' },
    { id: 5, text: "Good afternoon. Are we ready to begin our discussion?", category: 'greeting' },
    { id: 6, text: "We've been asked to discuss...", category: 'introducing' },
    { id: 7, text: "What do you think?", category: 'inviting' },
    { id: 8, text: "Does anyone want to start?", category: 'inviting' },
];

const categories: Record<Category, string> = {
    greeting: 'Greeting & Starting',
    introducing: 'Introducing the Topic',
    inviting: 'Inviting Opinions',
};

// --- Component ---
interface DragAndDropExerciseProps {
    themeColor: string;
}

export const DragAndDropExercise: React.FC<DragAndDropExerciseProps> = ({ themeColor }) => {
    const [bankItems, setBankItems] = useState<Phrase[]>(initialPhrases);
    const [droppedItems, setDroppedItems] = useState<Record<Category, Phrase[]>>({
        greeting: [],
        introducing: [],
        inviting: [],
    });
    const [draggedItem, setDraggedItem] = useState<Phrase | null>(null);
    const [dragOverZone, setDragOverZone] = useState<Category | null>(null);
    const [isComplete, setIsComplete] = useState(false);
    const [incorrectDrop, setIncorrectDrop] = useState<Category | null>(null);

    useEffect(() => {
        if (bankItems.length === 0 && !isComplete) {
            setIsComplete(true);
        }
    }, [bankItems, isComplete]);

    const handleDragStart = (item: Phrase) => {
        setDraggedItem(item);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>, category: Category) => {
        e.preventDefault();
        setDragOverZone(category);
    };

    const handleDragLeave = () => {
        setDragOverZone(null);
    };

    const handleDrop = (category: Category) => {
        if (!draggedItem) return;

        if (draggedItem.category === category) {
            setBankItems(prev => prev.filter(item => item.id !== draggedItem.id));
            setDroppedItems(prev => ({
                ...prev,
                [category]: [...prev[category], draggedItem],
            }));
        } else {
            // Incorrect drop feedback
            setIncorrectDrop(category);
            setTimeout(() => setIncorrectDrop(null), 600);
        }
        
        setDraggedItem(null);
        setDragOverZone(null);
    };

    return (
        <ExerciseContainer>
            {isComplete ? (
                <CompletionMessage>
                    <h4>🎉 Excellent Work!</h4>
                    <p>You have correctly categorized all the communication strategies.</p>
                </CompletionMessage>
            ) : (
                <>
                    <Instruction>
                        Drag each phrase to the correct category below.
                        <br />
                        将每个短语拖到下面的正确类别中。
                    </Instruction>
                    <ItemBank>
                        {bankItems.length > 0 ? (
                            bankItems.map(item => (
                                <DraggableItem
                                    key={item.id}
                                    draggable
                                    onDragStart={() => handleDragStart(item)}
                                    onDragEnd={() => setDraggedItem(null)}
                                    isDragging={draggedItem?.id === item.id}
                                >
                                    {item.text}
                                </DraggableItem>
                            ))
                        ) : (
                            <p>All items placed correctly!</p>
                        )}
                    </ItemBank>

                    <DropZoneContainer>
                        {(Object.keys(categories) as Category[]).map(cat => (
                            <DropZone
                                key={cat}
                                onDragOver={(e) => handleDragOver(e, cat)}
                                onDragLeave={handleDragLeave}
                                onDrop={() => handleDrop(cat)}
                                isOver={dragOverZone === cat}
                                isIncorrect={incorrectDrop === cat}
                                themeColor={themeColor}
                            >
                                <DropZoneTitle>{categories[cat]}</DropZoneTitle>
                                {droppedItems[cat].map(item => (
                                    <DroppedItem key={item.id} themeColor={themeColor}>
                                        {item.text}
                                    </DroppedItem>
                                ))}
                            </DropZone>
                        ))}
                    </DropZoneContainer>
                </>
            )}
        </ExerciseContainer>
    );
};