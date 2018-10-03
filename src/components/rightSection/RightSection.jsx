import React from 'react';
import './rightSection.css';
import ChildComponent from '../childComponent/ChildComponent';
import { connect } from 'react-redux';

function RightSection ({ backgroundColor, textColor, fontFamily }) {
    return (
        <section className="right--section" style={{ backgroundColor, color: textColor, borderColor: textColor, fontFamily }}>
          <h3> right section </h3>
          <p> Non eram nescius, Brute, cum, quae summis ingeniis exquisitaque doctrina philosophi Graeco sermone tractavissent, ea Latinis litteris mandaremus, fore ut hic noster labor in varias reprehensiones incurreret. </p>

          <ChildComponent />
        </section>
    )
}

function mapStateToProps ({ backgroundColor, textColor, fontFamily }) {
    return { backgroundColor, textColor, fontFamily }
}
export default connect(mapStateToProps)(RightSection)