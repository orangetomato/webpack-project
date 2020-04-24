async function start() {
    return await Promise.resolve('Async works');
}

start().then(data => alert(data));

const unused = 5;

class Util {
    static id = Date.now();
}

console.log('Util id:', Util.id);

import('lodash').then(_ => {
    console.log('Lodash', _.random(0, 26, true));
});