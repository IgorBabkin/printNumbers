import {decorateNumber, doJob} from "./lib";
import {assert, expect} from "chai";

describe('decorateNumbers', () => {
    it('should print just number', () => {
        expect(decorateNumber(1)).to.be.equal('1');
    });

    it('In the case when number is divided by 3 - word Fizz must be added to the number', () => {
        expect(decorateNumber(3)).to.be.equal('3 Fizz');
    });

    it('In the case when number is divided by 5 - word Buzz must be added to the number', () => {
        expect(decorateNumber(5)).to.be.equal('5 Buzz');
    });

    it('In the case when number is divided by 3 and 5 simultaneously - you need to add the word FizzBuzz to the number', () => {
        expect(decorateNumber(15)).to.be.equal('15 FizzBuzz');
    });
});

describe('doJob', () => {
    it('returns Promise.resolve if can do the job', async () => {
        const attempts = attemptsGenerator();

        try {
            await doJob(() => attempts.next().value, 5);
        } catch (e) {
            assert.isOk(false, 'Job is not done');
        }
    });

    it('returns Promise.reject if cannot do the job', async () => {
        const attempts = attemptsGenerator();

        try {
            await doJob(() => attempts.next().value, 2);
        } catch (e) {
            assert.isOk(true, 'Job is not done');
        }
    });
});

function* attemptsGenerator() {
    yield Promise.reject();
    yield Promise.reject();
    yield Promise.resolve();
}
