/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { AddButton } from './AddPhraseButton.styles';

interface AddPhraseButtonProps {
    top: number;
    left: number;
    onAdd: () => void;
}

const AddPhraseButton: React.FC<AddPhraseButtonProps> = ({ top, left, onAdd }) => {
    return (
        <AddButton style={{ top: `${top}px`, left: `${left}px` }} onClick={onAdd}>
            <span>+</span> 添加
        </AddButton>
    );
};

export default AddPhraseButton;
