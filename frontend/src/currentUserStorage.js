export { setUser, getUser, clearUser, setUserId, getUserId };


function setUser(user) {
    if(sessionStorage.getItem('user') === null) {
        sessionStorage.setItem('user', JSON.stringify(user));
    } else 
        // throw new Error('User in sessionStorage in not null!');
        console.log('User in sessionStorage in not null!');
        sessionStorage.setItem('user', JSON.stringify(user));
}

function getUser() {
    if(sessionStorage.getItem('user') !== null) {
        return JSON.parse(sessionStorage.getItem('user'));
    } else
    // throw new Error('User in sessionStorage is null!');
        return null;
}

function clearUser() {
    if(sessionStorage.getItem('user') !== null) {
        sessionStorage.removeItem('user');
    } else
        // throw new Error('User in sessionStorage is null!');
        console.log('User is null!');
}

function setUserId(userId) {
    if(sessionStorage.getItem('userId') === null) {
        sessionStorage.setItem('userId', userId);
    } else {
        // throw new Error('UserId in sessionStorage in not null!');
        console.log('User in sessionStorage in not null!');
        sessionStorage.setItem('userId', userId);
    }
}

function getUserId() {
    if(sessionStorage.getItem('userId') !== null) {
        return sessionStorage.getItem('userId');
    } else
    // throw new Error('UserId in sessionStorage is null!');
        return null;
}