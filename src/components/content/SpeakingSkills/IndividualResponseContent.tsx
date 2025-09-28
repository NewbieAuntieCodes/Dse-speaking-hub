/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import styled from 'styled-components';
import { BackButton, LessonTitle } from '../Structures/SVOContent.styles';

const PlaceholderCard = styled.div`
    background: white;
    border-radius: 15px;
    padding: 50px 30px;
    margin-top: 20px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.08);
    text-align: center;
`;

const PlaceholderText = styled.p`
    font-size: 1.2em;
    color: #7f8c8d;
    font-style: italic;
`;

interface IndividualResponseContentProps {
    onBack: () => void;
    themeColor: string;
}

export const IndividualResponseContent: React.FC<IndividualResponseContentProps> = ({ onBack, themeColor }) => {
    return (
        <div>
            <BackButton onClick={onBack} themeColor={themeColor}>← Back to Answering Skills</BackButton>
            <LessonTitle>个人回应技巧 (Individual Response)</LessonTitle>
            <PlaceholderCard>
                <PlaceholderText>Content for individual response skills coming soon!</PlaceholderText>
            </PlaceholderCard>
        </div>
    );
};
