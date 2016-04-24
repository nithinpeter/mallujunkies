import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../../shared/actions";
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';


class Movie extends Component {

    static fetchData(dispatch, movieId = 1) {
        return fetchMovieDetails(dispatch, movieId);
    }

    componentDidMount() {
        if (!this.props.movie) {
            const { id } = this.props.params;
            Movie.fetchData(this.props.dispatch, id);
        }
    }

    render() {
        const movie = this.props.movie;

        if (this.props.isFetching || !movie) {
            return <div>
                <Helmet title="Movies"/>
                Loading..
            </div>
        }

        return <Card>
            <CardHeader
                title={ movie.title }
                subtitle={ movie.director }
                />
            <CardText>
                {movie.plot}
            </CardText>
        </Card>;
    }
}

function mapStateToProps(state, ownProps) {
    let movie;
    if (state.movies.list[ownProps.params.id])
        movie = state.movies.list[ownProps.params.id].response;

    return {
        movie,
        isFetching: state.movies.list.isFetching
    };
}

export default connect(mapStateToProps)(Movie)

