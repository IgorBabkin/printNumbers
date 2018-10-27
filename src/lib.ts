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

export type IJob = () => Promise<void>;
export async function doJob(job: IJob, attempt: number): Promise<void> {
    if (attempt <= 0) {
        return Promise.reject();
    }

    try {
        await job();
    } catch (e) {
        await doJob(job, attempt - 1);
    }
}
