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

export class Background extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={{textAlign:'center'}}>
                    <h3>Background</h3>
                </div>
               <p>content</p> 
               <h3>related publications</h3>
               <h3>acknowledgements</h3>
            </div>
        )
    }
}

export default Background
