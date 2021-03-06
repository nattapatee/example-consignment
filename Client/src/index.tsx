import React, { CSSProperties } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Body } from "./components/Body"
import "semantic-ui-css/semantic.min.css"
import "/css/style.css"

type State = {

}

export class App extends React.Component<{ style: CSSProperties }, State> {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    public render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

let root = document.getElementById("root")
ReactDOM.render(<App />, root)