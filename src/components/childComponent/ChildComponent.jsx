import React from 'react';
import './childComponent.css'
import { connect } from 'react-redux';

function ChildComponent ({ textColor, backgroundColor, fontFamily }) {
    return (
        <section className="child--component" style={{backgroundColor, color: textColor, borderColor: textColor, fontFamily}}>
            <h3> child component </h3>
            <p>
            Contra quos omnis dicendum breviter existimo. Quamquam philosophiae quidem vituperatoribus satis responsum est eo libro, quo a nobis philosophia defensa et collaudata est, cum esset accusata et vituperata ab Hortensio. 
            </p>
          </section>
    )
}

function mapStateToProps ({ textColor, backgroundColor, fontFamily }) {
    return { textColor, backgroundColor,fontFamily }
}

export default connect(mapStateToProps)(ChildComponent);