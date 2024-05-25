function getYoungestPerson(users) {
    if (!Array.isArray(users) || users.length === 0) {
        return null;  
    }

    let youngest = users[0];

    for (let i = 1; i < users.length; i++) {
        if (users[i].age < youngest.age) {
            youngest = users[i];
        }
    }

    return youngest.name;
}


const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
];

console.log(getYoungestPerson(users)); 
