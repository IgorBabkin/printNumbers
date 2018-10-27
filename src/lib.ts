export function decorateNumber(i: number): string {
    let output: string = `${i} `;

    if (i % 3 === 0) {
        output += 'Fizz';
    }

    if (i % 5 === 0) {
        output += 'Buzz';
    }

    return output.trim();
}

async function doJob(job: () => Promise<void>, attempt: number): Promise<void> {
    if (attempt <= 0) {
        return Promise.reject();
    }

    try {
        await job();
    } catch (e) {
        await doJob(job, attempt - 1);
    }
}

function consoleLog(value: any): Promise<void> {
    return console.log(value) as any;
}

export async function printNumbers(from: number, to: number): Promise<number[]> {
    const failed: number[] = [];
    for (let i = from; i <= to; i++) {
        try {
            await doJob(() => consoleLog(decorateNumber(i)), 3);
        } catch (e) {
            failed.push(i);
        }
    }
    return failed;
}