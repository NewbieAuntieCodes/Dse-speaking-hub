/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled from 'styled-components';

export const CollectionContainer = styled.div`
    padding: 0;
    max-width: 900px;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 0;
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

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    background: #f7fafc;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
`;

export const UnitTitle = styled.h3`
    color: #2d3748;
    font-size: 1.4em;
    text-align: center;
    margin: 0 15px;
    flex-shrink: 1;

    @media (max-width: 768px) {
        font-size: 1.1em;
    }
`;

export const NavButton = styled.button`
    background: #4299e1;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 8px 16px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;

    &:hover {
        background: #3182ce;
    }

    &:disabled {
        background: #a0aec0;
        cursor: not-allowed;
    }
`;

export const ContentWrapper = styled.div`
    margin-top: 20px;

    /* 
      This targets the container div rendered by UnitXPronunciation components.
      It then finds the first button (the back button) and the h2 title and hides them.
      This allows us to reuse the components without modification.
    */
    & > div > button:first-of-type,
    & > div > h2 {
      display: none;
    }

    /* Adjust padding of the inner container so it doesn't look like a box within a box */
    & > div {
      padding: 0;
      box-shadow: none;
      border-radius: 0;
      background: transparent;
    }
`;