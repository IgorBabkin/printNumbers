import {log, printNumbers} from './lib';

(async () => {
    const failed = await printNumbers(0, 100);
    await log(failed);
})();
