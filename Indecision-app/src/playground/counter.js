
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.plusHandler = this.plusHandler.bind(this)
        this.minusHandler = this.minusHandler.bind(this)
        this.resetHandler = this.resetHandler.bind(this)

        this.state = {
            count: 0
        }

    }

    componentDidMount() {
        
        try {
            const json = localStorage.getItem('count')
            const count = JSON.parse(json)
            if (count) {    
               this.setState(() => ({ count: count }))
            }
            
        } catch (e) {
            //do nothing
        }

    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.count !== this.state.count) {
            console.log('did update')
            const json = JSON.stringify(this.state.count)
            localStorage.setItem('count', json)
        }

    }

    plusHandler() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    minusHandler() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    resetHandler() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {

        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <CounterButton onClick={this.plusHandler} text={'+1'}/>
                <CounterButton onClick={this.minusHandler} text={'-1'}/>
                <CounterButton onClick={this.resetHandler} text={'Reset'}/>
            </div>
        )
    }
}

class CounterButton extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>{this.props.text}</button>
            </div>
        )
    }
}

const appRoot = document.getElementById('app')
ReactDOM.render(<Counter/>, appRoot)