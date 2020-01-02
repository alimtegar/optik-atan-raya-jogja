export const isContainsProtocol = (str) => {
    return str.indexOf("http://") == 0 || str.indexOf("https://") == 0;
};

export const fixUrl = (url, isSecure = true) => {
    const protocol = isSecure ? 'https' : 'http';

    return isContainsProtocol(url) ? url : protocol + '://' + url;
};

export const range = (start, stop, step) => {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

export const escapedNewLineToLineBreakTag = (string) => {
    return string.split('\n').map((item, index) => {
        return (index === 0) ? item : [<br key={index} />, item]
    })
};

export const formatNumber = (number) => {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
};

export const measureFit = (containerWidth, containerHeight, imageWidth, imageHeight) => {
    const containerRatio = containerWidth / containerHeight;
    const imageRatio = imageWidth / imageHeight;

    return containerRatio < imageRatio ? 'fit-height' : 'fit-width';
};