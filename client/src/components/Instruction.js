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

export class Instruction extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <h3>Instruction</h3>
                </div>
                instruction
            </div>
        )
    }
}

export default Instruction
