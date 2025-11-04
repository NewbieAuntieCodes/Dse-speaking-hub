/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled from 'styled-components';

export const AppContainer = styled.div`
    padding: 20px;
`;

export const Header = styled.header`
    text-align: center;
    margin-bottom: 30px;
    h1 {
        color: #2d3748;
        font-size: 3em;
        text-shadow: none;
        margin-bottom: 10px;

        @media (max-width: 768px) {
            font-size: 2.2em;
            margin-bottom: 15px;
        }
    }
    h2 {
        color: #4a5568;
        font-size: 1.8em;
        font-weight: 400;

        @media (max-width: 768px) {
            font-size: 1.5em;
        }
    }
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 20px;
        padding: 10px;
    }
`;

export const Card = styled.div<{ disabled?: boolean }>`
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${props => (props.disabled ? 0.6 : 1)};

    ${props => !props.disabled && `
        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }
    `}

    h3 {
        margin-bottom: 15px;
        color: #4a5568;
        font-size: 1.25em;
    }

    p {
        color: #718096;
        font-size: 0.9em;
        line-height: 1.5;
    }
`;

export const BackButton = styled.button`
    background: transparent;
    border: none;
    color: #4299e1;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 20px;
    padding: 5px;
    display: flex;
    align-items: center;

    &:hover {
        text-decoration: underline;
    }
`;