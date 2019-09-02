import moment from 'moment'

const filter1 = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filter2 = {
    text: 'cut',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(5, "days")
}

const filter3 = {
    text: 'cut',
    sortBy: 'amount',
    startDate: moment(1000),
    endDate: moment(1000).add(25, "days")
}

export { filter1, filter2, filter3 }