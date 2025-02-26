/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import * as React from 'react';

import type { LocalizationMap } from '../types/LocalizationMap';
import enUs from './en_US.json';

export interface LocalizationContextProps {
    l10n: LocalizationMap;
    setL10n(l10n: LocalizationMap): void;
}

export const LocalizationContext = React.createContext<LocalizationContextProps>({
    l10n: enUs as unknown as LocalizationMap,
    setL10n: () => {},
});
