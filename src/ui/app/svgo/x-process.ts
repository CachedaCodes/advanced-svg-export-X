export function xProcess(svgData: string): string {
    let processedSvgData = removeDimensions(svgData);
    processedSvgData = addFillNoneInRoot(processedSvgData);
    processedSvgData = addXClass(processedSvgData);
    processedSvgData = replaceColorWithCurrentColor(processedSvgData);

    return processedSvgData.replace(/  +/g, ' ');
}

function removeDimensions(svgData: string): string {
    const matchDimensions = /(?<=<svg.*?)((width|height)="[0-9]*?")(?=.*?>)/gm
    return svgData.replace(matchDimensions, '');
}

function addFillNoneInRoot(svgData: string): string {
    const matchRootWithoutFillNone = /svg (?:(?!.*?fill="none"))(?=.*?>)/gm
    return svgData.replace(matchRootWithoutFillNone, '$1 fill="none"');
}

function addXClass(svgData: string): string {
    const matchRoot = /svg /gm
    return svgData.replace(matchRoot, 'svg :class="[\'x-icon\'].concat(data.staticClass, data.class)"');
}

// Out of use
function addExplicitFillNone(svgData: string): string {
    const matchShapesWithoutSpecificFill = /(rect|circle|line|polygon|path) (?:(?!.*?fill="))(?=.*?>)/gm
    return svgData.replace(matchShapesWithoutSpecificFill, '$1 fill="none" ');
}

// Out of use
function removeSecondaryFillAndStroke(svgData: string): string {
    const matchSecondaryColoredFillOrStroke = /(fill|stroke)(="#(f)*?")/gim
    return svgData.replace(matchSecondaryColoredFillOrStroke, '');
}

function replaceColorWithCurrentColor(svgData: string): string {
    const matchColoredFillOrStroke = /(?<=(fill|stroke)=")(?!#fff"|none).*?(?=")/gim
    return svgData.replace(matchColoredFillOrStroke, 'currentColor');
}

