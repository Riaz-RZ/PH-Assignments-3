function studentIntroduction(student) {
    if (typeof student != "object" || student === null) {
        return `Invalid`
    }
    if (!("name" in student) || !("age" in student) || !("course" in student)) {
        return `Invalid`
    } else{
        return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
    }
}

//using tarnury operator

function studentIntroduction(student) {
return (typeof student === "object" && student !== null && "name" in student && "age" in student && "course" in student) ? `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.` : `Invalid`
}
