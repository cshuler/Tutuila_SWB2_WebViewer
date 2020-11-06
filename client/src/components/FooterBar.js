import React, { Component } from 'react'
import 'react-materialize'
import {Footer} from 'react-materialize'


export class FooterBar extends Component {
    render() {
        return (
            <div>
                <Footer
                    className="example"
                    copyrights="© 2020 Copyright"
                    links={
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>}
                    moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
                >
                    {/* <h5 className="white-text">
                        Footer Content
                    </h5> */}
                    <p className="grey-text text-lighten-4">
                        Disclaimer
                    </p>
                </Footer>
            </div>
        )
    }
}

export default FooterBar
