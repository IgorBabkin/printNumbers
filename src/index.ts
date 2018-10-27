import {decorateNumber, doJob} from './lib';

function printInDocument(message: string): void {
    const root = document.getElementById('output');
    const div = document.createElement('div');
    div.innerText = message;
    root.appendChild(div);
    window.scrollTo(0, document.body.scrollHeight);
}

export function printInConsole(...args: any[]): Promise<void> {
    // tslint:disable-next-line:no-console
    return console.log(...args) as any;
}

(async () => {
    const failed: number[] = [];

    for (let i = 0; i <= 100; i++) {
        try {
            const message = decorateNumber(i);
            await doJob(() => printInConsole(message), 3);
            printInDocument(message);
        } catch (e) {
            failed.push(i);
        }
    }

    printInDocument(`Failed: ${failed.length > 0 ? failed.join(', ') : 'nothing'}`);
})();
