import React from "react"

export default function Main() {
    return (
        <main>
            <h1 className="main--title">Real estate in Warsaw</h1>
            <div className="main--title-legend">

                <center>
                    Legend: &nbsp;<img src="./check.png" className="nav--icon-legend"/> real estate more attractive&nbsp;&nbsp;
                <img src="./remove.png" className="nav--icon-legend" /> less attractive
                </center>
            </div>
            <ul className="main--facts">
                <div className="fact1">
                    <div className="fact1-prev-yr">
                        <img src="./check.png" className="nav--icon"/>
                        8.87
                    </div>
                    <div className="fact1--text"> How many m<sup>2</sup> one can yearly afford earning average pay</div>
                    <div className="fact1-this-yr">
                        7.02
                        <img src="./remove.png" className="nav--icon" />
                    </div>
                </div>

                <div className="fact2">
                    <div className="fact2-prev-yr">
                        <img src="./check.png" className="nav--icon" />
                        0.51
                    </div>
                    <div className="fact2--text">Number of apartments / number of people living in city</div>
                    <div className="fact2-this-yr">
                        0.57
                        <img src="./remove.png" className="nav--icon" />
                    </div>
                </div>

                <div className="fact3">
                    <div className="fact3-prev-yr">
                        <img src="./check.png" className="nav--icon" />
                        1.25
                    </div>
                    <div className="fact3--text">How much gold one can buy for the average price per m<sup>2</sup> </div>
                    <div className="fact3-this-yr">
                        1.63
                        <img src="./remove.png" className="nav--icon" />
                    </div>
                </div>

                <div className="fact4">
                    <div className="fact4-prev-yr">
                        <img src="./remove.png" className="nav--icon" />
                        2.41
                    </div>    
                    <div className="fact4--text">Cost of mortgage minus inflation (CPI) rate (percentage)</div>
                    <div className="fact4-this-yr">
                        -6.6
                        <img src="./check.png" className="nav--icon" />
                    </div>
                </div>
            </ul>
        </main>
    )
}