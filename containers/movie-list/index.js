import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { fetchMovieList } from "../../shared/actions";
import { Link } from 'react-router'
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

class MovieList extends Component {


    static fetchData(dispatch) {

        return fetchMovieList(dispatch);
    }

    componentDidMount() {

        if (this.props.movies.topMovies.length == 0) {
            MovieList.fetchData(this.props.dispatch);
        }
    }
    
    render() {
        const { topMovies, isFetching } = this.props.movies;
        console.log("List", topMovies, isFetching);

        if (isFetching) {
            return <div>
                <Helmet title="Movies" />
                Loading..
            </div>
        }
        
        return <div>
            <Helmet title="Movies" />
            <h2>Movies</h2>
            <List subheader="Top Movies 2016">
            {
                topMovies ? topMovies.map((movie) => {
                    return (
                        <div key={movie._id}>
                            <Link to={'movies/' + movie._id}>
                                <ListItem primaryText={movie.title} />
                            </Link>
                            <Divider />
                        </div>
                    )
                }) : null
            }
            </List>
        </div>

    }
}

function mapStateToProps(state, ownProps) {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MovieList)

