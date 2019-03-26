import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Landingpage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={process.env.PUBLIC_URL + '/images/Venice.jpg'} alt="venice" className="venice-img"
                        />
                        <div className="banner-text">
                        <h1>Front-End Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Javascript | React | NodeJS | Express | MongoDB</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}
export default Landingpage