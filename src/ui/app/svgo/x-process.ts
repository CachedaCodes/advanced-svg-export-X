export function xProcess(svgData: string): string {
    let processedSvgData = removeUnnededInRoot(svgData);
    processedSvgData = addExplicitFillNone(processedSvgData);
    processedSvgData = removeSecondaryFillAndStroke(processedSvgData);
    processedSvgData = replaceColorWithCurrentColor(processedSvgData);

    return processedSvgData.replace(/  +/g, ' ');
}

function removeUnnededInRoot(svgData: string): string {
    const matchHeightWidthFillnone = /(?<=<svg.*?)((width|height)="[0-9]*?")|(fill="none")(?=.*?>)/gm
    return svgData.replace(matchHeightWidthFillnone, '');
}

function addExplicitFillNone(svgData: string): string {
    const matchShapesWithoutSpecificFill = /(rect|circle|line|polygon|path) (?:(?!fill="))(?=.*?>)/gm
    return svgData.replace(matchShapesWithoutSpecificFill, '$1 fill="none" ');
}

function removeSecondaryFillAndStroke(svgData: string): string {
    const matchColoredFillOrStroke = /(fill|stroke)(="#(f|0)*?")/gim
    return svgData.replace(matchColoredFillOrStroke, '');
}

function replaceColorWithCurrentColor(svgData: string): string {
    const matchColoredFillOrStroke = /(?<=(fill|stroke)=")(#.*?)(?=")/gm
    return svgData.replace(matchColoredFillOrStroke, 'currentColor');
}

