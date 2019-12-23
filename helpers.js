export const isContainsProtocol = (str) => {
    return str.indexOf("http://") == 0 || str.indexOf("https://") == 0;
};

export const fixUrl = (url, isSecure) => {
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