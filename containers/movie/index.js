import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../../shared/actions";

class Movie extends Component {
    
    componentDidMount() {
        this.props.dispatch(fetchMovieDetails());
    }
    
    render() {
        const { movie } = this.props;
        
        if(movie && !movie.isFetching) {
            return <div>
                 <Helmet title="Jungle Book" />
                <h2>{ movie.details.Title }</h2>
                <p>{ movie.details.Plot }</p>
            </div>
        } else {
            return <div>
                 <Helmet title="Jungle Book" />
                Loading..
            </div>
        }
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movies["jb"]
    }
}

export default connect(mapStateToProps)(Movie)

