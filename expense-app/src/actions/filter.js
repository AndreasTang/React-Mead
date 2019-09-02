const editFilterText = (text = '') => ({
    type: 'EDIT_FILTER_TEXT',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})

const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})

const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})

export { editFilterText, sortByAmount, sortByDate, setStartDate, setEndDate }