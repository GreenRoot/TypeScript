function getFullName(userEntity: {firstname: string, surname: string}): string {
    return `${userEntity.firstname} ${userEntity.surname}`
}

const user = {
    firstname: 'Alex',
    surname: 'Green',
    city: 'SPB',
    age: 25,
    skills: {
        dev: true,
        frontEnd: true
    }
};

console.log(getFullName(user));