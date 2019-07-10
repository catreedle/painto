import React from "react"
import Rectangle from "react-rectangle"

class PaintoComponent extends React.Component {
constructor() {
    super()
    this.state={
        x: 0,
        y: 0,
        g: 0,
        colorize: 'whitesmoke'
    }
    this.changeColor = this.changeColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
    this.clickPos = this.clickPos.bind(this)
}
changeColor(event) {
    this.setState({
        x: event.clientX,
        y: event.clientY,
        g: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        colorize: 'rgb('+this.state.x+', '+this.state.g+', '+this.state.y+')'
    })
    console.log(this.state.colorize)
    
}
removeColor(event) {
    this.setState({
        colorize: 'whitesmoke'
    })
}

clickPos(event) {
    this.setState({
        x: event.clientX,
        y: event.clientY,
        position: 'RGB ('+this.state.x+', '+this.state.g+', '+this.state.y+')'
    })
}

render() {
    return (
        <div>
            <h1>Painto</h1>
            <p>Color Clicked: {this.state.position}</p>
            <p>R = x position, G = random, B = y position</p>
            <Rectangle aspectRatio={[5, 3]}>
                <div style={{ backgroundColor: this.state.colorize,
                width: '100%', height: '100%' }}
                onMouseMove={this.changeColor}
                onMouseOut={this.removeColor}
                onClick={this.clickPos}
                />
            </Rectangle>
        </div>
    )
}
}

export default PaintoComponent