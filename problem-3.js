function countHashtags(caption) {
    if (typeof caption !== "string") {
        return `Invalid`
    }

    const words = caption.split(" ");
    const hashTag = words.filter(word => word.startsWith("#"));

    let longestTag = "";

    for (const tag of hashTag) {
        if (tag.length > longestTag.length) {
            longestTag = tag;
        }
    }
    return {
        hashtagCount: hashTag.length,
        longestTag: longestTag.slice(1)
    };
}
