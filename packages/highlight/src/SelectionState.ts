/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import type { HighlightArea } from './types/HighlightArea';
import type { SelectionData } from './types/SelectionData';

export class SelectionState {}

class NoSelectionState extends SelectionState {}

class SelectingState extends SelectionState {}

export class SelectedState extends SelectionState {
    public selectedText: string;
    public selectionData: SelectionData;
    public selectionRegion: HighlightArea;
    public highlightAreas: HighlightArea[];

    constructor(
        selectedText: string,
        highlightAreas: HighlightArea[],
        selectionData: SelectionData,
        selectionRegion: HighlightArea
    ) {
        super();
        this.selectedText = selectedText;
        this.selectionData = selectionData;
        this.selectionRegion = selectionRegion;
        this.highlightAreas = highlightAreas;
    }
}

export class HighlightState extends SelectionState {
    public selectedText: string;
    public selectionData: SelectionData;
    public selectionRegion: HighlightArea;
    public highlightAreas: HighlightArea[];

    constructor(
        selectedText: string,
        highlightAreas: HighlightArea[],
        selectionData: SelectionData,
        selectionRegion: HighlightArea
    ) {
        super();
        this.selectedText = selectedText;
        this.selectionData = selectionData;
        this.selectionRegion = selectionRegion;
        this.highlightAreas = highlightAreas;
    }
}

// Create some instances
export const NO_SELECTION_STATE = new NoSelectionState();
export const SELECTING_STATE = new SelectingState();
