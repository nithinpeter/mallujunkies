import React, { Component } from "react";
import Link from "../../components/link";
import { connect } from "react-redux";
import { setFilter } from "../../shared/actions";

let Filter = ({ onFilterLinkClick }) => {

    return <div>
        <h5>filter</h5>
        <Link filter="ALL" onFilterLinkClick={onFilterLinkClick}>All</Link>
        <Link filter="ACTIVE" onFilterLinkClick={onFilterLinkClick}>Active</Link>
    </div>
}

const mapStateToProps = (state, ownProps) => {
    console.log("ownProps- state", ownProps)
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("ownProps::", ownProps);
    return {
        onFilterLinkClick: (filter) => {
            dispatch(setFilter(filter));
        }
    }
}

Filter = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default Filter;
