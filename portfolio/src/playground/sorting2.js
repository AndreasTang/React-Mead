const data = [112, 65, 43, 1, 89, 57, 67, 75, 102, 41]

const sorting = (data) => {

    let min = data[0]

    for (k = 0; k < data.length; k++) {
        for (i = k + 1; i < data.length; i++) {
            if (data[i] < min) {
                min = data[i]
            }
        }

        data[k] = min

    }
}

sorting(data)

console.log(data)