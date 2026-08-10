function bonusScore(scores) {
    if (!Array.isArray(scores)) {
        return `Invalid`
    }
    if (scores.length === 0){
        return `Invalid`
    }

    if (!scores.every(score => typeof score === "number")){
        return `Invalid`
    }

    const updatedScore = scores.map(score => score + 10)

    return updatedScore.reduce((total, score) => total + score, 0);
}
