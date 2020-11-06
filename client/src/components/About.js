import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div>
                <div style={{textAlign:'center'}}>
                    <h3>About This Website</h3>
                </div>
                <div>
                    <h5>Website Authors</h5>
                    <p>name</p>
                    <p>name</p>
                    <p>name</p>
                </div>
                <div>
                    <h5>Citation Information</h5>
                    <p>content</p>
                    <p>content</p>
                </div>
                <div>
                    <h5>Related Publications</h5>
                    <p>publishcations</p>
                    <p>publishcations</p>
                    <p>publishcations</p>
                </div>
                <div>
                    <h5>Acknowledgements</h5>
                    <p>About Body</p>
                </div>
            </div>
        )
    }
}

export default About
