/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const FAB = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #9013fe;
    color: white;
    border: none;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    cursor: pointer;
    z-index: 1000;
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:hover {
        transform: scale(1.1);
        background-color: #a024fe;
    }
`;

export const Badge = styled.span`
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #ff4757;
    color: white;
    border-radius: 50%;
    min-width: 24px;
    height: 24px;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
`;

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1001;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${fadeIn} 0.3s ease;
`;

export const ModalContent = styled.div`
    background: white;
    border-radius: 16px;
    padding: 25px;
    width: 90%;
    max-width: 500px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    animation: ${slideUp} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 15px;

    h2 {
        color: #2d3748;
        font-size: 1.5em;
    }

    button {
        background: none;
        border: none;
        font-size: 2em;
        cursor: pointer;
        color: #718096;
        transition: color 0.2s;
        &:hover {
            color: #2d3748;
        }
    }
`;

export const WordList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    overflow-y: auto;
    padding: 5px;
    margin-bottom: 20px;
`;

export const WordTag = styled.span`
    background-color: #f0f2f5;
    color: #4a5568;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 1em;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background-color 0.2s;
`;

export const RemoveWordButton = styled.button`
    background: #ced4da;
    color: white;
    border: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s, transform 0.2s;

    &:hover {
        background: #ff4757;
        transform: scale(1.1);
    }
`;

export const ActionButtonsContainer = styled.div`
    display: flex;
    gap: 15px;
    margin-top: auto;
    padding-top: 15px;
    border-top: 1px solid #e0e0e0;
`;

export const CopyButtonsGroup = styled.div`
    display: flex;
    flex: 2; /* Take twice the space of the clear button */
    gap: 10px;
`;

export const ActionButton = styled.button`
    flex: 1;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;
    background-color: #4a90e2;
    color: white;

    &:hover {
        transform: translateY(-2px);
    }

    &.clear {
        background-color: #e2e8f0;
        color: #4a5568;
        flex: 1; /* Explicitly set flex for the clear button */
        &:hover {
            background-color: #d6dee7;
        }
    }
`;

export const EmptyMessage = styled.div`
    text-align: center;
    padding: 40px 20px;
    color: #718096;
    font-size: 1.1em;
    p {
        margin: 0;
    }
    p:last-child {
        margin-top: 10px;
        font-style: italic;
        font-size: 0.9em;
        background-color: #f8f9fa;
        padding: 8px;
        border-radius: 8px;
    }
`;

const toastAnimation = keyframes`
  0% { transform: translateY(100%); opacity: 0; }
  20% { transform: translateY(0); opacity: 1; }
  80% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
`;

export const Toast = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #2d3748;
    color: white;
    padding: 12px 25px;
    border-radius: 25px;
    font-size: 1em;
    z-index: 1002;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    animation: ${toastAnimation} 3s ease-in-out forwards;
`;