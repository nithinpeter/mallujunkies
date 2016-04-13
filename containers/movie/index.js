import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../../shared/actions";

class Movie extends Component {
    
    componentDidMount() {
        console.log("componentDidMount - called on server??")
        this.props.dispatch(fetchMovieDetails());
    }
    
    render() {
        const { movie } = this.props;
        
        if(movie && !movie.isFetching) {
            return <div>
                <h2>{ movie.details.Title }</h2>
                <p>{ movie.details.Plot }</p>
            </div>
        } else {
            return <div>Loading..</div>
        }
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movies["jb"]
    }
}

export default connect(mapStateToProps)(Movie)

