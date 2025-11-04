/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { createRoot } from 'react-dom/client';
import DseSpeakingHubApp from './src/components/App';
import { VocabularyProvider } from './src/contexts/VocabularyContext';
import './index.css';

// --- Rendering Logic for standalone preview ---
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <VocabularyProvider>
                <DseSpeakingHubApp />
            </VocabularyProvider>
        </React.StrictMode>
    );
}