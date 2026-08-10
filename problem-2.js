function filterActiveUsers(users) {
    if (!Array.isArray(users)) {
        return `Invalid`;
    }
    if (users.length === 0) {
        return `Invalid`;
    }
    if (!users.every(user => "isActive" in user)) {
        return `Invalid`;
    }
    else {
        return users.filter(user => user.isActive === true)
    }
}

//using tarnury operator

function filterActiveUsers(users) {
  return (!Array.isArray(users) || users.length === 0 || !users.every(user => "isActive" in user)) ? `Invalid` : users.filter(user => user.isActive === true)
}