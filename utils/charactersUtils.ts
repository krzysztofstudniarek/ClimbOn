export const sortCharacters = (data: any) => {
    return JSON.stringify(data).split('').sort().join('');
}