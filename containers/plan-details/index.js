import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { fetchPlanDetails, submitResponse, registerListeners } from "../../shared/actions";
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';


class PlanDetails extends Component {

    static fetchData(dispatch, params) {
        console.log("params");
        console.dir(params);
        const { id } = params;
        return fetchPlanDetails(dispatch, id);
    }
    
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
    }
    
    componentDidMount() {
        if (!this.props.plan) {
            PlanDetails.fetchData(this.props.dispatch, this.props.params);
        }
        registerListeners(this.props.dispatch, this.props.params.id)
    }
    
    handleSubmit(e) {
        
        if(!this.state.comment) return;
        
        let payload = {
            type: 1,
            timestamp: new Date(),
            userId: 1,
            data: this.state.comment
        }
        
        this.setState({comment: ""});
        submitResponse(this.props.dispatch, payload, this.props.params.id);
    }

    render() {
        const plan = this.props.plan;

        console.log("PLAN::", plan);

        if (this.props.isFetching) {
            return <div>
                <Helmet title="Plan details"/>
                Loading..
            </div>
        }

        return <Card>
            <Helmet title={ plan.place }/>
            <CardMedia mediaStyle={{height: "30vh"}}
                overlay={<CardTitle title={ plan.place } subtitle={ plan.place } />}>
                <img src={plan.imageUrl} style={{height: "100%"}} />
            </CardMedia>
            <CardText>
                {plan.place}
            </CardText>
            <div>
                <textarea value={this.state.comment} style={Style.commentBox} onChange={(event) => this.setState({comment: event.target.value})}></textarea>
                <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
            
            {
                plan.responses ? Object.keys(plan.responses).map((key) => {
                    return <div>{plan.responses[key].data}</div>
                }) : <div>No response.</div>
            }
        </Card>;
    }
}

function mapStateToProps(state, ownProps) {
    let plan;

    console.dir(state);
    if (!state) return { plan: {}, isFetching: false };

    for (let i = 0; i < state.plans.list.length; i++) {
        if (state.plans.list[i]) {
            if (state.plans.list[i].id == ownProps.params.id) {
                plan = state.plans.list[i];
                break;
            }
        }
    }

    return {
        plan,
        isFetching: state.plans.isFetching
    };
}

const Style = {
    commentBox: {
        width: '100%'
    }
}

export default connect(mapStateToProps)(PlanDetails)

