import * as React from 'react'

import { TextButton } from '../components/button'
import { Notify } from '../components/notify'
import { ISVGOptimized, ISVGProgress } from '../svgo/types'
import { cls } from '../util'
import * as styles from './settings.css'

interface ISvgPreviewProps {
    SvgOptimized: ISVGOptimized
}

export const SvgPreview: React.FC<ISvgPreviewProps> = ({
                                                           SvgOptimized
                                                       }) => (
    <div style={{ whiteSpace: 'pre-wrap' }}>
        {SvgOptimized && SvgOptimized.svgOptimized ? formatSvg(SvgOptimized.svgOptimized) : 'No SVG to preview found'}
    </div>
)
function formatSvg(svgOptimized: string): string {
    return svgOptimized.replace('>', '>\n').replace(/\/>/gm, '/>\n');
}

