function cloneUser(user) {
    const clonedUser = {};
    for (const key in user) {
        if (Object.prototype.hasOwnProperty.call(user, key)) {
            clonedUser[key] = user[key];
        }
    }
    return clonedUser;
}


const originalUser = { name: 'Temo', age: 25 };
const clonedUser = cloneUser(originalUser);

console.log(clonedUser);
console.log(clonedUser === originalUser); 
