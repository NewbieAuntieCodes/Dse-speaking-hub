/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import { AppContainer, Header, CardsContainer, Card, BackButton } from './App.styles';
import CommunicationStrategies from './CommunicationStrategies';
import IdeasAndOrganization from './IdeasAndOrganization';
import Unit2Communication from './Unit2Communication';
import Unit2IdeasAndOrganization from './Unit2IdeasAndOrganization';
import Unit3Communication from './Unit3Communication';
import Unit3IdeasAndOrganization from './Unit3IdeasAndOrganization';
import Unit4Communication from './Unit4Communication';
import Unit4IdeasAndOrganization from './Unit4IdeasAndOrganization';
import Unit5Communication from './Unit5Communication';
import Unit5IdeasAndOrganization from './Unit5IdeasAndOrganization';
import Unit6Communication from './Unit6Communication';
import Unit6IdeasAndOrganization from './Unit6IdeasAndOrganization';
import Unit7Communication from './Unit7Communication';
import Unit7IdeasAndOrganization from './Unit7IdeasAndOrganization';
import Unit8Communication from './Unit8Communication';
import Unit8IdeasAndOrganization from './Unit8IdeasAndOrganization';
import WarmUpsCollection from './WarmUpsCollection';
import PronunciationsCollection from './PronunciationsCollection';
import { useVocabulary } from '../contexts/VocabularyContext';
import VocabularyBook from './VocabularyBook';
import AddPhraseButton from './AddPhraseButton';
import Toast from './Toast';


// Define types for view state
interface ViewState {
    unit: number | null;
    section: string | null;
}

const DseSpeakingHubApp: React.FC = () => {
    const [view, setView] = useState<ViewState>({ unit: null, section: null });
    const { addVocabularyItem } = useVocabulary();
    const [selection, setSelection] = useState({ visible: false, x: 0, y: 0, text: '' });
    const [toast, setToast] = useState({ visible: false, message: '' });

    const showToast = (message: string) => {
        setToast({ visible: true, message });
        setTimeout(() => {
            setToast({ visible: false, message: '' });
        }, 2000);
    };

    useEffect(() => {
        const handleDoubleClick = () => {
            const selectedText = window.getSelection()?.toString().trim() ?? '';
            if (selectedText && !selectedText.includes(' ')) {
                const added = addVocabularyItem(selectedText);
                if (added) {
                    showToast(`'${selectedText}' 已添加`);
                }
            }
        };

        const handleMouseUp = (event: MouseEvent) => {
            if ((event.target as HTMLElement).closest('button')) {
                return;
            }

            setTimeout(() => {
                const domSelection = window.getSelection();
                const selectedText = domSelection?.toString().trim() ?? '';

                if (selectedText && selectedText.includes(' ')) {
                    const range = domSelection?.getRangeAt(0);
                    if (range) {
                        const rect = range.getBoundingClientRect();
                        setSelection({
                            visible: true,
                            x: window.scrollX + rect.right,
                            y: window.scrollY + rect.top,
                            text: selectedText,
                        });
                    }
                } else {
                    // Fix: The local variable `selection` from `window.getSelection()` was shadowing the component's `selection` state.
                    // This caused an error because the DOM Selection object does not have a `visible` property.
                    // Renamed the local variable to `domSelection` to correctly access `selection.visible` from the component state.
                     if (selection.visible) {
                        setSelection(prevState => ({ ...prevState, visible: false }));
                    }
                }
            }, 10);
        };

        const handleMouseDown = () => {
            if (selection.visible) {
                 setSelection(prevState => ({ ...prevState, visible: false }));
            }
        };

        document.addEventListener('dblclick', handleDoubleClick);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousedown', handleMouseDown);

        return () => {
            document.removeEventListener('dblclick', handleDoubleClick);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, [addVocabularyItem, selection.visible]);


    const handleAddPhrase = () => {
        if (selection.text) {
            const added = addVocabularyItem(selection.text);
            if (added) {
                showToast(`'${selection.text}' 已添加`);
            }
        }
        setSelection({ visible: false, x: 0, y: 0, text: '' });
    };

    const getHeaderTitle = () => {
        if (view.section === 'warm-ups-collection') return "All Warm-ups";
        if (view.section === 'pronunciations-collection') return "All Pronunciations";
        if (view.unit === 1) return "Unit 1: Let's get started!";
        if (view.unit === 2) return "Unit 2: Between friends";
        if (view.unit === 3) return "Unit 3: Aiming for gold";
        if (view.unit === 4) return "Unit 4: Reduce, reuse, recycle!";
        if (view.unit === 5) return "Unit 5: Becoming a star";
        if (view.unit === 6) return "Unit 6: Fads and trends";
        if (view.unit === 7) return "Unit 7: Taking a trip";
        if (view.unit === 8) return "Unit 8: Social change";
        return "Select a Unit to Begin";
    };

    const renderContent = () => {
        if (view.section === 'warm-ups-collection') {
            return <WarmUpsCollection onBack={() => setView({ unit: null, section: null })} />;
        }
        if (view.section === 'pronunciations-collection') {
            return <PronunciationsCollection onBack={() => setView({ unit: null, section: null })} />;
        }

        // Render specific section component if both unit and section are selected
        if (view.unit === 1 && view.section) {
            switch (view.section) {
                case 'communication':
                    return <CommunicationStrategies onBack={() => setView({ unit: 1, section: null })} />;
                case 'ideas':
                    return <IdeasAndOrganization onBack={() => setView({ unit: 1, section: null })} />;
                default:
                    return null;
            }
        }

        if (view.unit === 2 && view.section) {
            switch (view.section) {
                case 'communication':
                    return <Unit2Communication onBack={() => setView({ unit: 2, section: null })} />;
                case 'ideas':
                    return <Unit2IdeasAndOrganization onBack={() => setView({ unit: 2, section: null })} />;
                default:
                    return null;
            }
        }

        if (view.unit === 3 && view.section) {
            switch (view.section) {
                case 'communication':
                    return <Unit3Communication onBack={() => setView({ unit: 3, section: null })} />;
                case 'ideas':
                    return <Unit3IdeasAndOrganization onBack={() => setView({ unit: 3, section: null })} />;
                default:
                    return null;
            }
        }

        if (view.unit === 4 && view.section) {
            switch (view.section) {
                case 'communication':
                    return <Unit4Communication onBack={() => setView({ unit: 4, section: null })} />;
                case 'ideas':
                    return <Unit4IdeasAndOrganization onBack={() => setView({ unit: 4, section: null })} />;
                default:
                    return null;
            }
        }

        if (view.unit === 5 && view.section) {
            switch (view.section) {
                case 'communication':
                    return <Unit5Communication onBack={() => setView({ unit: 5, section: null })} />;
                case 'ideas':
                    return <Unit5IdeasAndOrganization onBack={() => setView({ unit: 5, section: null })} />;
                default:
                    return null;
            }
        }

        if (view.unit === 6 && view.section) {
            switch (view.section) {
                case 'communication':
                    return <Unit6Communication onBack={() => setView({ unit: 6, section: null })} />;
                case 'ideas':
                    return <Unit6IdeasAndOrganization onBack={() => setView({ unit: 6, section: null })} />;
                default:
                    return null;
            }
        }

        if (view.unit === 7 && view.section) {
            switch (view.section) {
                case 'communication':
                    return <Unit7Communication onBack={() => setView({ unit: 7, section: null })} />;
                case 'ideas':
                    return <Unit7IdeasAndOrganization onBack={() => setView({ unit: 7, section: null })} />;
                default:
                    return null;
            }
        }

        if (view.unit === 8 && view.section) {
            switch (view.section) {
                case 'communication':
                    return <Unit8Communication onBack={() => setView({ unit: 8, section: null })} />;
                case 'ideas':
                    return <Unit8IdeasAndOrganization onBack={() => setView({ unit: 8, section: null })} />;
                default:
                    return null;
            }
        }
        
        // Render section cards if a unit is selected but not a section
        if (view.unit === 1) {
             return (
                <CardsContainer>
                    <Card onClick={() => setView({ unit: 1, section: 'communication' })}>
                        <h3>🤝 Communication strategies</h3>
                        <p>Starting and ending the discussion. Body language and eye contact.</p>
                    </Card>
                    <Card onClick={() => setView({ unit: 1, section: 'ideas' })}>
                        <h3>📝 Ideas and organization</h3>
                        <p>Understanding the input text. Note-taking skills: organizing your notes.</p>
                    </Card>
                </CardsContainer>
            );
        }

        if (view.unit === 2) {
             return (
                <CardsContainer>
                    <Card onClick={() => setView({ unit: 2, section: 'communication' })}>
                        <h3>🤝 Communication strategies</h3>
                        <p>Making suggestions, giving advice, and inviting opinions.</p>
                    </Card>
                    <Card onClick={() => setView({ unit: 2, section: 'ideas' })}>
                        <h3>📝 Ideas and organization</h3>
                        <p>Key question words, note-taking, and individual response.</p>
                    </Card>
                </CardsContainer>
            );
        }

        if (view.unit === 3) {
             return (
                <CardsContainer>
                    <Card onClick={() => setView({ unit: 3, section: 'communication' })}>
                        <h3>🤝 Communication strategies</h3>
                        <p>Making, comparing, and contrasting choices. Suggesting a compromise.</p>
                    </Card>
                    <Card onClick={() => setView({ unit: 3, section: 'ideas' })}>
                        <h3>📝 Ideas and organization</h3>
                        <p>Visual prompts, note-taking for choices, and individual response.</p>
                    </Card>
                </CardsContainer>
            );
        }

        if (view.unit === 4) {
            return (
               <CardsContainer>
                   <Card onClick={() => setView({ unit: 4, section: 'communication' })}>
                       <h3>🤝 Communication strategies</h3>
                       <p>Agreeing, disagreeing, and acknowledging others' opinions.</p>
                   </Card>
                   <Card onClick={() => setView({ unit: 4, section: 'ideas' })}>
                       <h3>📝 Ideas and organization</h3>
                       <p>Responding to visual prompts and using mind maps for note-taking.</p>
                   </Card>
               </CardsContainer>
           );
       }

        if (view.unit === 5) {
            return (
               <CardsContainer>
                   <Card onClick={() => setView({ unit: 5, section: 'communication' })}>
                       <h3>🤝 Communication strategies</h3>
                       <p>Stating your position, giving reasons, and using persuasive language.</p>
                   </Card>
                   <Card onClick={() => setView({ unit: 5, section: 'ideas' })}>
                       <h3>📝 Ideas and organization</h3>
                       <p>Identifying arguments, organizing notes, and arguing for or against.</p>
                   </Card>
               </CardsContainer>
           );
       }

        if (view.unit === 6) {
            return (
               <CardsContainer>
                   <Card onClick={() => setView({ unit: 6, section: 'communication' })}>
                       <h3>🤝 Communication strategies</h3>
                       <p>Stating and comparing the pros and cons of a proposal.</p>
                   </Card>
                   <Card onClick={() => setView({ unit: 6, section: 'ideas' })}>
                       <h3>📝 Ideas and organization</h3>
                       <p>Interpreting statistics and making predictions.</p>
                   </Card>
               </CardsContainer>
           );
       }

        if (view.unit === 7) {
            return (
               <CardsContainer>
                   <Card onClick={() => setView({ unit: 7, section: 'communication' })}>
                       <h3>🤝 Communication strategies</h3>
                       <p>Expanding on ideas, changing pace, and confirming understanding.</p>
                   </Card>
                   <Card onClick={() => setView({ unit: 7, section: 'ideas' })}>
                       <h3>📝 Ideas and organization</h3>
                       <p>Expanding on your ideas and explaining processes.</p>
                   </Card>
               </CardsContainer>
           );
       }

        if (view.unit === 8) {
            return (
               <CardsContainer>
                   <Card onClick={() => setView({ unit: 8, section: 'communication' })}>
                       <h3>🤝 Communication strategies</h3>
                       <p>Self-correcting, asking for expressions, and managing language slips.</p>
                   </Card>
                   <Card onClick={() => setView({ unit: 8, section: 'ideas' })}>
                       <h3>📝 Ideas and organization</h3>
                       <p>Discussing personal experiences and opinions in the Individual Response.</p>
                   </Card>
               </CardsContainer>
           );
       }
        
        // Default: Render Unit Selection
        return (
            <CardsContainer>
                <Card onClick={() => setView({ unit: 1, section: null })}>
                    <h3>Unit 1: Let's get started!</h3>
                    <p>Foundation skills for the DSE speaking exam.</p>
                </Card>
                <Card onClick={() => setView({ unit: 2, section: null })}>
                    <h3>Unit 2: Between friends</h3>
                    <p>Focusing on friendship, advice, and specific pronunciation points.</p>
                </Card>
                <Card onClick={() => setView({ unit: 3, section: null })}>
                    <h3>Unit 3: Aiming for gold</h3>
                    <p>Discussing sports and competition, focusing on specific consonant sounds.</p>
                </Card>
                 <Card onClick={() => setView({ unit: 4, section: null })}>
                    <h3>Unit 4: Reduce, reuse, recycle!</h3>
                    <p>Tackling environmental topics with a focus on sentence stress and intonation.</p>
                </Card>
                 <Card onClick={() => setView({ unit: 5, section: null })}>
                    <h3>Unit 5: Becoming a star</h3>
                    <p>Exploring topics of fame and media, focusing on weak forms and argumentation.</p>
                </Card>
                <Card onClick={() => setView({ unit: 6, section: null })}>
                    <h3>Unit 6: Fads and trends</h3>
                    <p>Exploring modern crazes, focusing on compound word stress.</p>
                </Card>
                <Card onClick={() => setView({ unit: 7, section: null })}>
                    <h3>Unit 7: Taking a trip</h3>
                    <p>Skills for discussing travel, with a focus on consonant clusters.</p>
                </Card>
                <Card onClick={() => setView({ unit: 8, section: null })}>
                    <h3>Unit 8: Social change</h3>
                    <p>Discussing social issues with a focus on connected speech.</p>
                </Card>
                <Card onClick={() => setView({ unit: null, section: 'warm-ups-collection' })}>
                    <h3>🔥 All Warm-ups</h3>
                    <p>Practice warm-up exercises from all units in one place.</p>
                </Card>
                <Card onClick={() => setView({ unit: null, section: 'pronunciations-collection' })}>
                    <h3>🗣️ All Pronunciations</h3>
                    <p>Practice pronunciation exercises from all units in one place.</p>
                </Card>
            </CardsContainer>
        );
    };
    
    return (
        <>
            <GlobalStyle />
            <Toast message={toast.message} visible={toast.visible} />
            {selection.visible && (
                <AddPhraseButton
                    top={selection.y - 40}
                    left={selection.x - 50}
                    onAdd={handleAddPhrase}
                />
            )}
            <AppContainer>
                 <Header>
                    <h1>DSE Essential Skills Speaking</h1>
                    <h2>{getHeaderTitle()}</h2>
                </Header>
                {view.unit !== null && view.section === null && (
                     <BackButton onClick={() => setView({ unit: null, section: null })}>
                        ← Back to Unit Selection
                    </BackButton>
                )}
                {renderContent()}
            </AppContainer>
            <VocabularyBook />
        </>
    );
};

export default DseSpeakingHubApp;