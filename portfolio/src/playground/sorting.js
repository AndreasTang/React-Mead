const data = [2, 5, 66, 44, 11, 92, 182, 56, 12, 87]

const change = (data, i, j) => {
    const temp = data[i]
    data[i] = data[j]
    data[j] = temp
}

const sorting = (data) => {

    for (let k = 0; k < data.length; k++) {
        for (let i = 0; i < data.length - 1; i++) {
            let j = i + 1
            if (data[i] > data[j]) {
                change(data, i, j)
            }
        }
    }
    
}

sorting(data)
console.log(data)

const data2 = [112, 65, 43, 1, 89, 57, 67, 75, 102, 41]

const change2 = (data, i, j) => {
    const temp = data[i]
    data[i] = data[j]
    data[j] = temp
}

const sorting2 = (data) => {

    let j = 0

    for (k = 0; k < data.length; k++) {
        for (i = k + 1; i < data.length; i++) {
            if (data[i] < data[j]) {
                j = i
            }
        }

        change2(data, k, j)

    }
}

sorting2(data2)

console.log(data2)