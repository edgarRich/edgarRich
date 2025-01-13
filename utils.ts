// utils.ts
type TestArray = (
    arr: { input: string; output: string }[],
    method: (str: string) => string,
) => void;

export const testArray: TestArray = (arr, method) => {
    arr.forEach(({ input, output }) => {
        const result = method(input);
        console.assert(result === output, `For input "${input}", expected "${output}", but got "${result}"`);
    });
};