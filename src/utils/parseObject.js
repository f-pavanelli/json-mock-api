const parseObject = (obj) => {
    const result = {}

    for (const [key, value] of Object.entries(obj)) {

        const nestedKeys = key.split(".")
        nestedKeys.reduce((acc, cur, i, arr) => {
            if (!acc[cur]) {
                acc[cur] = {}
            }
            if (i === arr.length - 1) {
                acc[cur] = value
            }
            return acc[cur]
        }, result)

    }

    return result
}

module.exports = parseObject