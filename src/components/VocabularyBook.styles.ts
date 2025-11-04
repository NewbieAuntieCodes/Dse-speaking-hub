/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled, { keyframes } from 'styled-components';

export const FloatingButton = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(45deg, #4299e1, #50e3c2);
    color: white;
    border: none;
    font-size: 28px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translate(-50%, -40%); opacity: 0; }
  to { transform: translate(-50%, -50%); opacity: 1; }
`;

export const BookModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1001;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${fadeIn} 0.3s ease-in-out;
`;

export const BookModalContent = styled.div`
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    width: 90%;
    max-width: 500px;
    height: 70%;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    animation: ${slideIn} 0.3s ease-in-out;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #e2e8f0;
    
    h3 {
        color: #2d3748;
        margin: 0;
    }
`;

export const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const HeaderButton = styled.button`
    background: #edf2f7;
    border: 1px solid #e2e8f0;
    color: #4a5568;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: background 0.2s;

    &:hover {
        background: #e2e8f0;
    }

    &.delete-all {
        background: #fee2e2;
        border-color: #fecaca;
        color: #dc2626;
        font-weight: bold;

        &:hover {
            background: #fecaca;
        }
    }
`;

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #718096;
    transition: color 0.2s;
    padding: 0 5px;

    &:hover {
        color: #2d3748;
    }
`;

export const ItemList = styled.ul`
    list-style: none;
    padding: 10px 20px;
    margin: 0;
    overflow-y: auto;
    flex-grow: 1;
`;

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #f0f2f5;
    color: #4a5568;
    font-size: 1.1em;

    &:last-child {
        border-bottom: none;
    }
`;

export const DeleteButton = styled.button`
    background: #fee2e2;
    color: #ef4444;
    border: none;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s, color 0.2s;

    &:hover {
        background: #ef4444;
        color: white;
    }
`;

export const EmptyState = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #718096;
    padding: 20px;
    text-align: center;
    
    p {
        margin: 0;
        font-size: 1.1em;
    }
`;