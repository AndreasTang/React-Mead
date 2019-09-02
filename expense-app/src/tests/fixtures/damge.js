import moment from 'moment'

const damge = [{
    id: '1',
    description: 'kicks',
    note: '',
    amount: 10,
    createdAt: moment(0).subtract(5, 'days').valueOf()
},{
    id: '2',
    description: 'slash',
    note: '',
    amount: 150,
    createdAt: moment(0).add(2, 'days').valueOf()
},{
    id: '3',
    description: 'cut',
    note: '',
    amount: 100,
    createdAt: moment(0)
}]

export default damge