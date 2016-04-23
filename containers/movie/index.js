import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../../shared/actions";

class Movie extends Component {
    
    
    static fetchData(dispatch, movieId = 1) {
        return fetchMovieDetails(dispatch, movieId);
    }
    
    componentDidMount() {
        if(!this.props.movie) {
            const { id } = this.props.params;
            Movie.fetchData(this.props.dispatch, id);
        }
    }
    
    render() {
        const { details, isFetching } = this.props.movie;
        
        if(!isFetching) {
            return <div>
                 <Helmet title={details.title} />
                <h2>{ details.title }</h2>
                <p>{ details.plot }</p>
            </div>
        } else {
            return <div>
                 <Helmet title="Movies"/>
                Loading..
            </div>
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        movie: state.movies.list[ownProps.params.id]
    }
}

export default connect(mapStateToProps)(Movie)

