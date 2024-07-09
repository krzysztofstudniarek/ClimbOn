import { keccakHash, sortCharacters } from "./charactersUtils";

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

test(`Hashing funtion`, () => {
    expect(keccakHash({
        ala: "ma",
        jednego: "kota"
    })).toBe("edef84f9a00002150ab059ab4fd519b7c13b8db38cc104c7d780957d2af3848d");
});