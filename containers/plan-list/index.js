import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { fetchPlans } from "../../shared/actions";
import { Link } from 'react-router'
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

class PlanList extends Component {


    static fetchData(dispatch) {

        return fetchPlans(dispatch);
    }

    componentDidMount() {

        if (this.props.list.length == 0) {
            PlanList.fetchData(this.props.dispatch);
        }
    }
    
    render() {
        const { list, isFetching } = this.props.plans;
        console.log("List", list, isFetching);

        if (isFetching) {
            return <div>
                <Helmet title="Plans" />
                Loading..
            </div>
        }
        
        return <div>
            <Helmet title="Plans - Where do we go?" />
            <h2>Movies</h2>
            <List subheader="Where do we go?">
            {
                list ? list.map((item) => {
                    return (
                        <div key={item.id}>
                            <Link to={'items/' + item.id}>
                                <ListItem primaryText={item.place} />
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
        plans: state.plans
    }
}

export default connect(mapStateToProps)(PlanList)

