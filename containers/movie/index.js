import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../../shared/actions";

class Movie extends Component {
    
    componentDidMount() {
        // const { movieId } = this.props.params;
        // this.props.dispatch(fetchMovieDetails(movieId));
    }
    
    componentWillMount() {
        console.log("componentWillMount - called on server?")
        const { movieId } = this.props.params;
        this.props.dispatch(fetchMovieDetails(movieId));
    }
    
    render() {
        const { movie } = this.props;
        
        if(movie && !movie.isFetching) {
            return <div>
                 <Helmet title="Jungle Book" />
                <h2>{ movie.details.title }</h2>
                <p>{ movie.details.plot }</p>
            </div>
        } else {
            return <div>
                 <Helmet title="Jungle Book" />
                Loading..
            </div>
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        movie: state.movies[ownProps.params.movieId]
    }
}

export default connect(mapStateToProps)(Movie)

