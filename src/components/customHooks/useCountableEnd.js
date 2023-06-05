export function useCountableEnd(numeral, ends) {
    let end = "";
    const div = Math.abs(numeral) % 100 % 10;
    if (numeral > 10 && numeral < 20) {
        end = ends[0];
    } else if (div > 1 && div < 5) {
        end = ends[1];
    } else if (div === 1) {
        end = ends[2];
    } else {
        end = ends[0];
    }

    return [numeral, end];
}
