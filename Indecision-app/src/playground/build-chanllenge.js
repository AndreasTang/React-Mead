
class Hitme extends React.Component {
    constructor() {
        super()
        this.jumpClickHandler = this.jumpClickHandler.bind(this)
        this.state = {
            yourText: '往後面站、往後面站、往後面站、退到黃線的後面去',
            hisText: '好好好我往後站－黃線外不許站是不是!?那我就退到黃線裡面就是了嘛',
            buttonText: '跳出來',
            in: true,
            counter: 0
        }
    }

    jumpClickHandler() {
        this.setState((pre) => {
            
            if (pre.in && pre.counter <= 3) {
                return {
                    counter: pre.counter + 1,
                    yourText: '不准你再超出來!',
                    hisText: '怎麼樣呢？我又跳出來啦！',
                    buttonText: '跳進去',
                    in: !pre.in
                }
            } else if (!pre.in && pre.counter <= 3) {
                return {
                    counter: pre.counter + 1,
                    yourText: '咦！？',
                    hisText: '怎麼樣呢？我又進去啦！',
                    buttonText: '跳出去',
                    in: !pre.in
                }
            } else if (pre.counter = 4) {
                return {
                    counter: pre.counter + 1,
                    yourText: '咦！？',
                    hisText: '怎麼樣怎麼樣怎麼樣?我又跳進去了打我啊笨蛋！',
                    buttonText: '終結他',
                    in: !pre.in
                }
            } else if (pre.counter > 4) {
                return {
                    counter: pre.counter + 1,
                    yourText: '我就打你！大家都聽到啦、是他叫我打我才打的啊！',
                    hisText: '阿阿阿阿阿阿阿阿',
                    buttonText: '結束',
                    in: !pre.in
                }
            }
        })
    }

    render() {
        return (
            <div>
                <p>你: {this.state.yourText}</p>
                <p>方唐鏡: {this.state.hisText}</p>
                {<button onClick={this.jumpClickHandler}>{this.state.buttonText}</button>}
            </div>
        )
    }
}

const appRoot = document.getElementById('app')

ReactDOM.render(<Hitme/>, appRoot)