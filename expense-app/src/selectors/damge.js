import moment from 'moment'

const getVisibleDamge = (damge, { text, sortBy, startDate, endDate }) => {
    return damge.filter((damge) => {
        const startDateMatch = startDate ? startDate.isSameOrBefore(moment(damge.createdAt), 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(moment(damge.createdAt), 'day') : true
        const textMatch = damge.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt > b.createdAt ? -1 : 1
        } else if (sortBy === 'amount') {
            return a.amount > b.amount ? -1 : 1
        }
    })
}

export default getVisibleDamge