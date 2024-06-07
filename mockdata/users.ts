const allUserFullNames = [
    'John Hancock',
    'Ruth Ginsburg',
    'Susan Anthony',
    'Edgar Poe',
    'Jane Austen'
];

const allusers = allUserFullNames.map((fullname, index) => {
    const [first, last, ..._] = fullname.split(' ');
    return {
        id: `${index}`.padStart(3, '0'),
        firstName: first,
        lastName: last,
    };
});

export { allusers };
