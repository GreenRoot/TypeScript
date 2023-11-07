const skills: readonly [string, string, string, number] = ['dev', 'front', 'back', 1];
// skills[0] = 'design' no valid

const [dev, front, back, id] = skills;

const arr: [number, string, ...boolean[]] = [1, 'str', true, false]