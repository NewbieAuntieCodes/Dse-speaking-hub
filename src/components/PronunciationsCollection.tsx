/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { CollectionContainer, BackButton, NavContainer, NavButton, UnitTitle, ContentWrapper } from './PronunciationsCollection.styles';
import PronunciationDelivery from './PronunciationDelivery';
import Unit2Pronunciation from './Unit2Pronunciation';
import Unit3Pronunciation from './Unit3Pronunciation';
import Unit4Pronunciation from './Unit4Pronunciation';
import Unit5Pronunciation from './Unit5Pronunciation';
import Unit6Pronunciation from './Unit6Pronunciation';
import Unit7Pronunciation from './Unit7Pronunciation';
import Unit8Pronunciation from './Unit8Pronunciation';

interface PronunciationsCollectionProps {
    onBack: () => void;
}

const PronunciationsCollection: React.FC<PronunciationsCollectionProps> = ({ onBack }) => {
    const [currentUnit, setCurrentUnit] = useState(1);

    const unitTitles = [
        "Unit 1: Let's get started!",
        "Unit 2: Between friends",
        "Unit 3: Aiming for gold",
        "Unit 4: Reduce, reuse, recycle!",
        "Unit 5: Becoming a star",
        "Unit 6: Fads and trends",
        "Unit 7: Taking a trip",
        "Unit 8: Social change",
    ];

    const handlePrev = () => {
        setCurrentUnit(prev => (prev > 1 ? prev - 1 : 8));
    };

    const handleNext = () => {
        setCurrentUnit(prev => (prev < 8 ? prev + 1 : 1));
    };

    const renderUnitContent = () => {
        // The onBack prop is passed as a no-op because the back button within these components will be hidden by CSS.
        switch (currentUnit) {
            case 1: return <PronunciationDelivery onBack={() => {}} />;
            case 2: return <Unit2Pronunciation onBack={() => {}} />;
            case 3: return <Unit3Pronunciation onBack={() => {}} />;
            case 4: return <Unit4Pronunciation onBack={() => {}} />;
            case 5: return <Unit5Pronunciation onBack={() => {}} />;
            case 6: return <Unit6Pronunciation onBack={() => {}} />;
            case 7: return <Unit7Pronunciation onBack={() => {}} />;
            case 8: return <Unit8Pronunciation onBack={() => {}} />;
            default: return null;
        }
    };

    return (
        <CollectionContainer>
            <BackButton onClick={onBack}>← Back to Main Menu</BackButton>
            <NavContainer>
                <NavButton onClick={handlePrev}>← Previous</NavButton>
                <UnitTitle>{unitTitles[currentUnit - 1]}</UnitTitle>
                <NavButton onClick={handleNext}>Next →</NavButton>
            </NavContainer>
            <ContentWrapper>
                {renderUnitContent()}
            </ContentWrapper>
        </CollectionContainer>
    );
};

export default PronunciationsCollection;