function getFullName(firstname: string, surname: string): string {
    return `${firstname} ${surname}`
}

const getFullNameArrow = (firstname: string, surname: string): string => `${firstname} ${surname}`

console.log('Биба', 'Боба');