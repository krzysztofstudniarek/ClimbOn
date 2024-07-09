import { sortCharacters } from "./charactersUtils";

test(`Test Character Utils`, () => {
    expect(sortCharacters({
        ala: "makota"
    })).toBe("\"\"\"\":aaaaklmot{}");
});

test(`Test Character Utils Exchangability`, () => {
    expect(sortCharacters({
        ala: "ma",
        jednego: "kota"
    })).toBe(sortCharacters({
        jednego: "kota",
        ala: "ma"
    }));
});