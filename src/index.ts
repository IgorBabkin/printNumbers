import {printNumbers} from "./lib";

(async () => {
   const failed = await printNumbers(0, 100);
   console.log(failed);
})();