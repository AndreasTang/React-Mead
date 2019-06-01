const getVisibleDamge = (damge, { text, sortBy, startDate, endDate }) => {
    return damge.filter((damge) => {
        const startDateMatch = typeof startDate !== 'number' || damge.createAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || damge.createAt <= endDate
        const textMatch = damge.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createAt > b.createAt ? -1 : 1
        } else if (sortBy === 'amount') {
            return a.amount > b.amount ? -1 : 1
        }
    })
}

export default getVisibleDamge