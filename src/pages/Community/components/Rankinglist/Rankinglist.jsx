import React, { Component } from 'react'
import Rank from '../Rank/Rank'

export default class Rankinglist extends Component {
    render() {
        const { rank } = this.props
        return (
            <ul className='Rankinglist'>
                {
                    rank.map((rank) => {
                        return <Rank key={rank.id} {...rank} />
                    })
                }
            </ul>
        )
    }
}
