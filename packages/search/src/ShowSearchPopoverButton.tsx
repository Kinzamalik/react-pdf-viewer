/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import * as React from 'react';
import { MinimalButton, Position, Tooltip } from '@react-pdf-viewer/core';

import { ShowSearchPopoverDecorator } from './ShowSearchPopoverDecorator';
import type { RenderShowSearchPopoverProps } from './types/RenderShowSearchPopoverProps';

const TOOLTIP_OFFSET = { left: 0, top: 8 };

export const ShowSearchPopoverButton: React.FC<RenderShowSearchPopoverProps> = ({ onClick }) => (
    <ShowSearchPopoverDecorator onClick={onClick}>
        {(p) => (
            <Tooltip
                ariaControlsSuffix="search-popover"
                position={Position.BottomCenter}
                target={
                    <MinimalButton ariaLabel={p.label} onClick={onClick}>
                        {p.icon}
                    </MinimalButton>
                }
                content={() => p.label}
                offset={TOOLTIP_OFFSET}
            />
        )}
    </ShowSearchPopoverDecorator>
);
