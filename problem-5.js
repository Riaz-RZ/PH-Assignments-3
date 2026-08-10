function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }

    if (!students.every(student => "name" in student && "score" in student && typeof student.score === "number")) {
        return "Invalid";
    }

    const qualified = students.filter(student => student.score >= 70);

    const names = qualified.map(({ name }) => name.toUpperCase());

    return names.slice(0, 3);
}

