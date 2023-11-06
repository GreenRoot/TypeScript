const skills: string[] = ['dev', 'frontEnd', 'Testing'];

for (const skill of skills) {
    console.log(skill.toUpperCase());
}

const res = skills
    .filter((s: string) => s !== "dev")
    .map((s: string) => s + '! ')
    .reduce((a, b) => a + b)

console.log(res)