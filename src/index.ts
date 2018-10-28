import {decorateNumber, doJob} from './lib';

function documentPrintMessage(message: string, color: string = 'black'): void {
    const root = document.getElementById('output');
    const div = document.createElement('div');
    div.innerText = message;
    div.style.color = color;
    root.appendChild(div);
    window.scrollTo(0, document.body.scrollHeight);
}

function documentLog(message: string): void {
    documentPrintMessage(message);
}

function documentError(message: string): void {
    documentPrintMessage(message, 'red');
}

export function consoleLog(...args: any[]): Promise<void> {
    // tslint:disable-next-line:no-console
    return console.log(...args) as any;
}

(async () => {
    for (let i = 0; i <= 100; i++) {
        const message = decorateNumber(i);
        try {
            await doJob(() => consoleLog(message), 3);
            documentLog(message);
        } catch (e) {
            documentError(`Failed to log: ${message}`);
        }
    }
})();
