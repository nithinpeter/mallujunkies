import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { fetchMovieList } from "../../shared/actions";
import { Link } from 'react-router'

class MovieList extends Component {


    static fetchData(dispatch) {

        return fetchMovieList(dispatch);
    }

    componentDidMount() {

        if (!this.props.movies) {
            MovieList.fetchData(this.props.dispatch);
        }
    }
    
    handleNavigate(id) {
        window.location.pathname = `/movies/${id}`;
    }
    
    render() {
        const { list, isFetching } = this.props.movies;
        console.log("List", list, isFetching);

        if (isFetching) {
            return <div>
                <Helmet title="Movies" />
                Loading..
            </div>
        }
        
        return <div>
            <Helmet title="Movies" />
            <h2>Movies</h2>
            {
                list ? list.map((movie) => {
                    return <Link to={'/movies/' + movie._id} key={movie._id}>{movie.title}</Link>
                }) : null
            }
        </div>

    }
}

function mapStateToProps(state, ownProps) {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MovieList)

