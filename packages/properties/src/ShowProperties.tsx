/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import * as React from 'react';
import { Modal } from '@react-pdf-viewer/core';
import type { Store, Toggle } from '@react-pdf-viewer/core';

import { PropertiesModal } from './PropertiesModal';
import { ShowPropertiesButton } from './ShowPropertiesButton';
import { useDocument } from './useDocument';
import type { RenderShowPropertiesProps } from './types/RenderShowPropertiesProps';
import type { StoreProps } from './types/StoreProps';

type RenderShowProperties = (props: RenderShowPropertiesProps) => React.ReactElement;

export interface ShowPropertiesProps {
    children?: RenderShowProperties;
}

export const ShowProperties: React.FC<{
    children?: RenderShowProperties;
    store: Store<StoreProps>;
}> = ({ children, store }) => {
    const { currentDoc } = useDocument(store);
    const fileName = store.get('fileName') || '';

    const defaultChildren = (props: RenderShowPropertiesProps) => <ShowPropertiesButton {...props} />;
    const render = children || defaultChildren;

    return currentDoc ? (
        <Modal
            ariaControlsSuffix="properties"
            target={(toggle: Toggle) =>
                render({
                    onClick: toggle,
                })
            }
            content={(toggle: Toggle) => <PropertiesModal doc={currentDoc} fileName={fileName} onToggle={toggle} />}
            closeOnClickOutside={true}
            closeOnEscape={true}
        />
    ) : (
        <></>
    );
};
