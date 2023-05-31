export { setUser, getUser, clearUser };


function setUser(user) {
    if(sessionStorage.getItem('user') === null) {
        sessionStorage.setItem('user', JSON.stringify(user));
    } else 
        // throw new Error('User in sessionStorage in not null!');
        console.log('User in sessionStorage in not null!');
}

function getUser() {
    if(sessionStorage.getItem('user') !== null) {
        return JSON.parse(sessionStorage.getItem('user'));
    } else
        // throw new Error('User is null!');
        console.log('User is null!');
}

function clearUser() {
    if(sessionStorage.getItem('user') !== null) {
        sessionStorage.removeItem('user');
    } else
        // throw new Error('User is null!');
        console.log('User is null!');
}
