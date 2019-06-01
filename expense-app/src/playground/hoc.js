import React from 'react'
import ReactDom from 'react-dom'


const LoliPic = (props) => (
    <div>
        <h1>Gift for lolicon</h1>
        <img src = 'http://krw-img-thumb.s3.amazonaws.com/Lavril_World.png/300px-Lavril_World.png'></img>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <h3>You should not share this picture or you may get arrest by FBI</h3>
            {props.isLolicon && <WrappedComponent />}
        </div>
    )
}

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props}/> : <p>Please login to view the content</p>}
        </div>
    )
}

const Loli = withAdminWarning(LoliPic)
const Lolicon = requireAuth(Loli)

ReactDom.render(<Lolicon isLolicon = {true} isAuth = {true}/>, document.getElementById('app'))