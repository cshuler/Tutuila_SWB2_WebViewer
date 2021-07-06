import React, { Component } from 'react'

const styles = {
    header: {
        textAlign: "center",
    },
    container: {
        marginLeft: '5%', 
        marginRight: '5%'
    },
}

export class AboutThisApp extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <h3>About This APP</h3>
                    <h4>instructions</h4>
                </div>
                <div>
                    <h5>Website Authors</h5>
                    <p>chris</p>
                    <p>kainoa   </p>
                    <p>name</p>

                </div>
                <div>
                    <h5>Citation Information</h5>
                    <p>chicago style citation</p>
                    <p>content</p>
                </div>
                <div>
                    <h4>instructions how to use this app</h4>
                    <h3>how this app was built</h3>
                </div>
            </div>
        )
    }
}

export default AboutThisApp
